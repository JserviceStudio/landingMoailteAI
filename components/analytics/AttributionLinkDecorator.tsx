"use client";

import { useEffect } from "react";

const TRACKED_HOSTS = new Set(["store.jmoai.net", "shop.jmoai.net", "live.jmoai.net", "store.mikhmoai.com"]);
const ATTRIBUTION_KEYS = [
  "fbclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;
const META_ATTRIBUTION_KEYS = ["fbp", "fbc", "fbclid"] as const;

function readCookie(name: string) {
  return document.cookie
    .split("; ")
    .find((value) => value.startsWith(`${name}=`))
    ?.slice(name.length + 1) || "";
}

function decorateLinks() {
  const query = new URLSearchParams(window.location.search);
  const consent = readCookie("mikhmoai_meta_consent");
  const metaConsent = consent === "accepted" || consent === "rejected" ? consent : "";

  document.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((anchor) => {
    let url: URL;
    try {
      url = new URL(anchor.href);
    } catch {
      return;
    }

    if (!TRACKED_HOSTS.has(url.hostname)) return;

    if (metaConsent) url.searchParams.set("meta_consent", metaConsent);
    else url.searchParams.delete("meta_consent");

    ATTRIBUTION_KEYS.forEach((key) => {
      const value = query.get(key);
      if (value) url.searchParams.set(key, value);
    });

    // Le refus doit aussi effacer les identifiants déjà ajoutés avant le changement de consentement.
    if (metaConsent === "rejected") {
      META_ATTRIBUTION_KEYS.forEach((key) => url.searchParams.delete(key));
    } else if (metaConsent === "accepted") {
      // Ajouter fbp/fbc seulement après accord pour respecter le choix du visiteur.
      const fbp = readCookie("_fbp");
      const fbc = readCookie("_fbc");
      if (fbp) url.searchParams.set("fbp", decodeURIComponent(fbp));
      if (fbc) url.searchParams.set("fbc", decodeURIComponent(fbc));
    }

    anchor.href = url.toString();
  });
}

export default function AttributionLinkDecorator() {
  useEffect(() => {
    decorateLinks();

    const observer = new MutationObserver(decorateLinks);
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("load", decorateLinks);
    window.addEventListener("mikhmoai-consent-change", decorateLinks);

    const timer = window.setTimeout(decorateLinks, 1500);
    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener("load", decorateLinks);
      window.removeEventListener("mikhmoai-consent-change", decorateLinks);
    };
  }, []);

  return null;
}
