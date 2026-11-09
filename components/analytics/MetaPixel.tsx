"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export const META_PIXEL_ID = "1853403099123232";
const CONSENT_COOKIE = "mikhmoai_meta_consent";
const ATTRIBUTION_COOKIE = "mikhmoai_attribution";

type MetaParameters = Record<string, string | number>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
  }
}

function readCookie(name: string) {
  if (typeof document === "undefined") return "";
  return document.cookie.split("; ").find((value) => value.startsWith(`${name}=`))?.split("=")[1] ?? "";
}

function readAttribution(): MetaParameters {
  try {
    return JSON.parse(decodeURIComponent(readCookie(ATTRIBUTION_COOKIE) || "{}")) as MetaParameters;
  } catch {
    return {};
  }
}

function getConsent() {
  const value = readCookie(CONSENT_COOKIE);
  return value === "accepted" || value === "rejected" ? value : null;
}

export function trackMetaEvent(eventName: string, parameters: MetaParameters = {}) {
  if (typeof window === "undefined" || !window.fbq || getConsent() !== "accepted") return;

  const payload = { ...readAttribution(), ...parameters };
  if (eventName === "DownloadClick") window.fbq("trackCustom", eventName, payload);
  else window.fbq("track", eventName, payload);
}

function saveConsent(value: "accepted" | "rejected") {
  document.cookie = `${CONSENT_COOKIE}=${value}; Path=/; Max-Age=31536000; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent("mikhmoai-consent-change", { detail: value }));
}

function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Consent is read from the browser only after hydration to avoid leaking storage into SSR.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setVisible(getConsent() === null);
  }, []);

  if (!visible) return null;

  return (
    <aside className="fixed inset-x-3 bottom-3 z-[120] mx-auto max-w-3xl rounded-2xl border border-border bg-background/95 p-4 shadow-2xl backdrop-blur sm:inset-x-6 sm:flex sm:items-center sm:gap-5 sm:p-5" aria-label="Préférences de confidentialité">
      <p className="text-sm leading-relaxed text-muted-foreground">Nous utilisons les statistiques Meta pour mesurer les visites, téléchargements et achats. Vous pouvez accepter ou refuser ce suivi.</p>
      <div className="mt-3 flex shrink-0 gap-2 sm:mt-0">
        <button type="button" onClick={() => { saveConsent("rejected"); setVisible(false); }} className="rounded-full border border-border px-4 py-2 text-sm font-bold">Refuser</button>
        <button type="button" onClick={() => { saveConsent("accepted"); setVisible(false); }} className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">Accepter</button>
      </div>
    </aside>
  );
}

export default function MetaPixel() {
  const pathname = usePathname();
  const initialPath = useRef(pathname);
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const attribution = Object.fromEntries(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "fbclid"].flatMap((key) => {
      const value = query.get(key);
      return value ? [[key, value]] : [];
    }));
    if (Object.keys(attribution).length > 0 && !readCookie(ATTRIBUTION_COOKIE)) {
      document.cookie = `${ATTRIBUTION_COOKIE}=${encodeURIComponent(JSON.stringify(attribution))}; Path=/; Max-Age=7776000; SameSite=Lax`;
    }

    // Consent is browser state and must be synchronized after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setConsent(getConsent());
    const handleConsent = (event: Event) => setConsent((event as CustomEvent<string>).detail);
    window.addEventListener("mikhmoai-consent-change", handleConsent);
    return () => window.removeEventListener("mikhmoai-consent-change", handleConsent);
  }, []);

  useEffect(() => {
    if (consent !== "accepted" || pathname === initialPath.current) return;
    trackMetaEvent("PageView", { content_name: pathname });
  }, [consent, pathname]);

  useEffect(() => {
    if (consent !== "accepted" || (pathname !== "/mikhmonv8" && pathname !== "/starlink")) return;
    const timer = window.setTimeout(() => trackMetaEvent("ViewContent", {
      content_name: pathname === "/starlink" ? "Suivi Starlink MikroTik" : "MikhmonV8 licences",
    }), 250);
    return () => window.clearTimeout(timer);
  }, [consent, pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof HTMLElement
        ? event.target.closest<HTMLElement>("[data-meta-event]")
        : null;
      const eventName = target?.dataset.metaEvent;

      if (!target || !eventName || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const parameters: MetaParameters = {
        content_name: target.dataset.metaContentName || "MikhmoAI",
        content_type: "product",
      };
      if (target.dataset.metaPlatform) parameters.platform = target.dataset.metaPlatform;
      if (target.dataset.metaPlacement) parameters.placement = target.dataset.metaPlacement;
      if (target.dataset.metaValue) parameters.value = Number(target.dataset.metaValue);
      if (target.dataset.metaCurrency) parameters.currency = target.dataset.metaCurrency;

      trackMetaEvent(eventName, parameters);
      if (eventName !== "DownloadClick" && eventName !== "InitiateCheckout") return;

      if (!(target instanceof HTMLAnchorElement)) return;

      event.preventDefault();
      const destination = target.href;
      window.setTimeout(() => {
        if (target.target === "_blank") window.open(destination, "_blank", "noopener,noreferrer");
        else window.location.assign(destination);
      }, 180);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      {consent === "accepted" && <Script id="meta-pixel" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
      </Script>}
      {consent === "accepted" && <noscript><img height="1" width="1" style={{ display: "none" }} src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`} alt="" /></noscript>}
      <CookieConsentBanner />
    </>
  );
}
