import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Cloud,
  CreditCard,
  Gauge,
  Globe2,
  Monitor,
  Router,
  ShieldCheck,
  Smartphone,
  Ticket,
  WalletCards,
  Wifi,
} from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, SeoLayout } from "@/components/layout/SeoLayout";

export const metadata: Metadata = {
  title: "MikhmonV8 — Mikhmon Online Pro, TiketMOMO et VPN",
  description:
    "Découvrez MikhmonV8, l’application web Mikhmon Online et Mikhmon Pro accessible partout : iPhone, Android, ordinateur, TiketMOMO, VPN et fonctions avancées.",
  keywords: [
    "MikhmonV8",
    "Mikhmon Online",
    "Mikhmon Online Pro",
    "Mikhmon Pro",
    "MikhmonPro",
    "Mikhmon en ligne",
    "Mikhmon web",
    "Mikhmon iPhone",
    "application web MikroTik",
    "logiciel hotspot MikroTik",
    "TiketMOMO",
    "VPN MikroTik",
  ],
  alternates: { canonical: "https://web.mikhmoai.com" },
  openGraph: {
    type: "website",
    url: "https://web.mikhmoai.com",
    title: "MikhmonV8 — Mikhmon Online Pro accessible partout",
    description:
      "Une application web simple pour retrouver Mikhmon Online, Mikhmon Pro, TiketMOMO et les fonctions avancées depuis app.mikhmo.tech.",
    images: ["/og-image.png"],
    locale: "fr_FR",
  },
};

const plans = [
  {
    name: "MikhmonPro",
    price: "13 920 F",
    priceValue: "13920",
    usdHint: "≈ 24 $",
    period: "1 an",
    badge: "Offre recommandée",
    description: "Pour accéder à Mikhmon Online, Mikhmon Pro, TiketMOMO et aux fonctions avancées dans une seule expérience web.",
    features: ["Mikhmon Online Pro", "TiketMOMO", "Fonctions avancées", "Compatible iPhone, Android, PC et tablette"],
    quickCheckoutUrl: "https://bbvovqmu.mychariow.shop/prd_uwldz5/checkout?locale=fr",
    multiCountryUrl: "https://live.mikhmoai.com/api/v1/payments/hub?productCode=mikhmoai&planCode=mikhmoai-pro",
    highlighted: true,
  },
  {
    name: "VPN",
    price: "6 600 F",
    priceValue: "6600",
    usdHint: "≈ 11 $",
    period: "1 an",
    badge: "Accès distant",
    description: "Pour gérer votre routeur à distance et garder un lien stable avec votre WiFi zone.",
    features: ["VPN MikhmoAI", "Gestion routeur à distance", "Idéal pour les interventions", "Accès depuis app.mikhmo.tech"],
    quickCheckoutUrl: "https://bbvovqmu.mychariow.shop/prd_lknr8i/checkout?locale=fr",
    multiCountryUrl: "https://live.mikhmoai.com/api/v1/payments/hub?productCode=mikhmoai&planCode=vpn",
  },
];

const captureSlots = [
  {
    title: "Dashboard bureau",
    file: "/mikhmonv8-desktop-dashboard.jpg",
    hint: "Dashboard MikhmonV8 sur ordinateur",
    icon: Monitor,
    className: "lg:col-span-2",
  },
  {
    title: "Vouchers bureau",
    file: "/mikhmonv8-desktop-vouchers.jpg",
    hint: "Génération de vouchers et stock TiketMOMO",
    icon: Ticket,
    className: "lg:col-span-2",
  },
  {
    title: "Réglages bureau",
    file: "/mikhmonv8-desktop-settings.jpg",
    hint: "Administration, routeurs et session Mikhmon active",
    icon: Router,
    className: "lg:col-span-2",
  },
  {
    title: "Dashboard mobile",
    file: "/mikhmoai-webapp-mobile-dashboard.jpg",
    hint: "Dashboard web sur iPhone",
    icon: Smartphone,
    className: "",
  },
  {
    title: "Génération vouchers",
    file: "/mikhmoai-webapp-mobile-generate.jpg",
    hint: "Création vouchers et stock TiketMOMO",
    icon: Ticket,
    className: "",
  },
  {
    title: "Menu mobile",
    file: "/mikhmoai-webapp-mobile-menu.jpg",
    hint: "Navigation Mikhmon Online complète",
    icon: Wifi,
    className: "",
  },
];

const featureTour = [
  {
    title: "Dashboard Hotspot",
    text: "Suivez les utilisateurs actifs, les comptes Hotspot, le trafic, l’uptime, les logs et les ventes TiketMOMO depuis une vue bureau claire.",
    icon: Gauge,
  },
  {
    title: "Génération de vouchers",
    text: "Créez les utilisateurs, choisissez le profil, la durée, le volume, imprimez les tickets et synchronisez le stock Cloud pour TiketMOMO.",
    icon: Ticket,
  },
  {
    title: "Menu Mikhmon complet",
    text: "Dashboard, Hotspot, PPPoE, Quick Print, Vouchers, TiketMOMO TPay, logs, rapports et réglages restent accessibles en ligne.",
    icon: Wifi,
  },
  {
    title: "Routeurs et sessions",
    text: "Ajoutez un routeur, ouvrez une session Mikhmon active, vérifiez la version et revenez à MikhmoAI quand vous avez terminé.",
    icon: Router,
  },
];

const tutorials = [
  {
    href: "/blog/mikhmonv8-dashboard-hotspot",
    title: "Lire le dashboard MikhmonV8",
    text: "Comprendre les cartes Hotspot, PPPoE, trafic, logs et ventes.",
  },
  {
    href: "/blog/generer-vouchers-tiketmomo-mikhmonv8",
    title: "Générer des vouchers et vendre avec TiketMOMO",
    text: "Créer un lot, choisir le profil et synchroniser le stock Cloud.",
  },
  {
    href: "/blog/ajouter-routeur-mikhmonv8",
    title: "Ajouter un routeur dans MikhmonV8",
    text: "Préparer la session, ouvrir le routeur et vérifier l’accès web.",
  },
];

function LicenseSection() {
  return (
    <section id="licences" className="mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 lg:px-10 lg:py-24">
      <div className="max-w-4xl">
        <p className="font-black uppercase tracking-[0.22em] text-primary">Activez votre licence</p>
        <h2 className="mt-4 text-3xl font-black tracking-tight sm:mt-5 sm:text-6xl">Choisissez votre accès MikhmonV8.</h2>
        <p className="mt-5 text-lg text-muted-foreground sm:mt-6 sm:text-xl">
          Achat rapide via Chariow pour activer vite. Pour un paiement multi-pays ou une demande de réduction, utilisez le hub MikhmoAI.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-2">
        {plans.map((plan) => (
          <div key={plan.name} className={`rounded-[1.5rem] border p-5 sm:rounded-[2rem] sm:p-9 ${plan.highlighted ? "border-yellow-400 bg-[#080808] text-white shadow-[0_45px_100px_-60px_rgba(250,204,21,0.8)]" : "border-border/60 bg-card"}`}>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
              <div>
                <p className={`inline-flex rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.16em] ${plan.highlighted ? "bg-yellow-300 text-black" : "bg-primary/10 text-primary"}`}>{plan.badge}</p>
                <h3 className="mt-5 text-3xl font-black sm:mt-6 sm:text-4xl">{plan.name}</h3>
                <p className={`mt-3 text-base ${plan.highlighted ? "text-white/65" : "text-muted-foreground"}`}>{plan.description}</p>
              </div>
              <div className="text-left sm:text-right">
                <p className="whitespace-nowrap text-4xl font-black sm:text-5xl">{plan.price}</p>
                <p className={`mt-2 whitespace-nowrap text-sm font-black uppercase tracking-wide sm:text-base ${plan.highlighted ? "text-yellow-300" : "text-primary"}`}>
                  {plan.usdHint} / {plan.period}
                </p>
              </div>
            </div>
            <ul className="mt-6 grid gap-3 sm:mt-8">
              {plan.features.map((feature) => (
                <li key={feature} className={`flex items-start gap-3 rounded-2xl p-3.5 font-bold sm:p-4 ${plan.highlighted ? "bg-white/8 text-white/85" : "bg-muted/20"}`}>
                  <CheckCircle2 className={`h-5 w-5 shrink-0 ${plan.highlighted ? "text-yellow-300" : "text-primary"}`} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-3 sm:mt-8">
              <a
                href={plan.quickCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex w-full items-center justify-center gap-3 rounded-full px-7 py-4 font-black transition hover:-translate-y-1 ${plan.highlighted ? "bg-yellow-300 text-black hover:bg-yellow-200" : "bg-foreground text-background hover:opacity-90"}`}
              >
                Achat rapide {plan.name}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={plan.multiCountryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex w-full items-center justify-center gap-3 rounded-full border px-7 py-4 font-black transition hover:-translate-y-1 ${plan.highlighted ? "border-white/15 bg-white/10 text-white hover:bg-white/15" : "border-border bg-background text-foreground hover:bg-muted/40"}`}
              >
                Multi-pays / réduction
                <Globe2 className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
            <p className={`mt-4 text-xs leading-relaxed ${plan.highlighted ? "text-white/45" : "text-muted-foreground"}`}>
              L’achat rapide passe par Chariow. Le hub MikhmoAI est conseillé pour les paiements multi-pays ou les options de réduction.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function MikhmonV8Page() {
  const url = "https://web.mikhmoai.com";

  return (
    <SeoLayout>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "MikhmonV8",
            alternateName: ["Mikhmon Online", "Mikhmon Pro", "MikhmonPro"],
            applicationCategory: "NetworkApplication",
            operatingSystem: "Web, iOS, Android, Windows, macOS, Linux",
            url,
            description:
              "Application web Mikhmon Online et Mikhmon Pro avec TiketMOMO, VPN et fonctions avancées pour gérer les WiFi zones MikroTik depuis un navigateur.",
            offers: plans.map((plan) => ({
              "@type": "Offer",
              name: plan.name,
              price: plan.priceValue,
              priceCurrency: "XOF",
              availability: "https://schema.org/InStock",
              url: plan.multiCountryUrl,
            })),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "MikhmonV8 fonctionne-t-il sur iPhone ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui. MikhmonV8 est une application web accessible depuis un navigateur, idéale pour les utilisateurs iPhone.",
                },
              },
              {
                "@type": "Question",
                name: "Quel est le lien direct de MikhmonV8 ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le lien direct est https://app.mikhmo.tech.",
                },
              },
            ],
          },
        ]}
      />

      <main>
        <section className="relative overflow-hidden bg-[#050505] text-white">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(250,204,21,0.16),transparent_38%,rgba(59,130,246,0.14))]" aria-hidden="true" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(250,204,21,0.18),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.08),transparent_28%)]" aria-hidden="true" />

          <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-5 sm:pb-16 sm:pt-10 lg:px-10 lg:pb-24 lg:pt-16">
            <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "MikhmonV8" }]} />

            <div className="grid gap-8 pt-10 sm:gap-12 sm:pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-3 rounded-full border border-yellow-300/35 bg-yellow-300/12 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-yellow-200">
                  <Cloud className="h-4 w-4" aria-hidden="true" />
                  Nouvelle application web
                </div>
                <h1 className="mt-7 text-5xl font-black leading-none tracking-tight sm:text-7xl lg:text-8xl">
                  Mikhmon<span className="text-yellow-300">V8</span>
                </h1>
                <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap">
                  <a
                    href={plans[1].quickCheckoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-yellow-300 px-6 py-3 text-center font-black text-black shadow-lg shadow-yellow-400/20 transition hover:-translate-y-1 hover:bg-yellow-200"
                  >
                    Achetez V8
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </a>
                  <a
                    href={plans[0].quickCheckoutUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-yellow-300/40 bg-white/10 px-6 py-3 text-center font-black text-white transition hover:-translate-y-1 hover:bg-white/15"
                  >
                    Achetez V8 Pro
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
                <p className="mt-6 max-w-3xl text-2xl font-black leading-tight text-white sm:text-4xl">
                  Mikhmon Online, TiketMOMO et vos fonctions avancées accessibles partout.
                </p>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/68 sm:text-xl">
                  Retrouvez la stabilité et la confiance de Mikhmon, dans une application web plus puissante et optimisée pour 2026. Ouvrez votre espace depuis iPhone, Android, ordinateur ou tablette.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://app.mikhmo.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 rounded-full bg-yellow-300 px-8 py-4 font-black text-black shadow-xl shadow-yellow-400/25 transition hover:-translate-y-1 hover:bg-yellow-200"
                  >
                    <Globe2 className="h-5 w-5" aria-hidden="true" />
                    Ouvrir app.mikhmo.tech
                  </a>
                  <a
                    href="#licences"
                    className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-8 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-white/15"
                  >
                    Activez ma licence
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/12 bg-white/[0.06] p-2.5 shadow-[0_45px_110px_-55px_rgba(250,204,21,0.85)] backdrop-blur sm:rounded-[2rem] sm:p-4">
                <div className="mx-auto w-full max-w-[270px] rounded-[2rem] border-[7px] border-[#0d1117] bg-black p-1 shadow-2xl sm:hidden">
                  <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.5rem] bg-[#1b2a21]">
                    <Image src="/mikhmoai-webapp-mobile-dashboard.jpg" alt="Interface mobile MikhmonV8 sur iPhone" fill sizes="270px" className="object-cover" priority />
                    <div className="absolute left-1/2 top-2 h-4 w-[34%] -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10" aria-hidden="true" />
                  </div>
                </div>
                <div className="hidden overflow-hidden rounded-[1.25rem] border border-black/10 bg-black shadow-2xl sm:block sm:rounded-[1.5rem]">
                    <div className="flex h-8 items-center gap-1.5 bg-[#333c46] px-4" aria-hidden="true">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                      <span className="ml-3 text-[10px] font-black uppercase tracking-[0.18em] text-white/45">MikhmonV8 Desktop</span>
                    </div>
                    <div className="relative aspect-[1.86]">
                      <Image src="/mikhmonv8-desktop-dashboard.jpg" alt="Dashboard bureau MikhmonV8 avec Hotspot, PPPoE, TiketMOMO et logs" fill sizes="(max-width: 1024px) 90vw, 650px" className="object-cover" priority />
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <LicenseSection />

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 lg:px-10 lg:py-24" aria-labelledby="captures-title">
          <div className="max-w-4xl">
            <p className="font-black uppercase tracking-[0.22em] text-primary">Une interface claire</p>
              <h2 id="captures-title" className="mt-4 text-3xl font-black tracking-tight sm:mt-5 sm:text-6xl">Votre réseau, lisible sur mobile et ordinateur.</h2>
            <p className="mt-5 text-lg text-muted-foreground sm:mt-6 sm:text-xl">
              Retrouvez les écrans essentiels de MikhmonV8 : dashboard, génération de vouchers, réglages, menu mobile et suivi de votre activité.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-2">
            {captureSlots.map((slot) => {
              const Icon = slot.icon;
              return (
                <div key={slot.file} className={`rounded-[1.5rem] border border-border/60 bg-card p-4 sm:rounded-[2rem] sm:p-6 ${slot.className}`}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-black sm:text-2xl">{slot.title}</h3>
                      <p className="mt-2 text-sm font-bold text-muted-foreground">{slot.file}</p>
                    </div>
                    <Icon className="h-8 w-8 text-yellow-500" aria-hidden="true" />
                  </div>
                  {slot.title.includes("bureau") ? (
                    <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-border/60 bg-black shadow-[0_30px_80px_-45px_rgba(0,0,0,0.8)]">
                      <div className="flex h-8 items-center gap-1.5 bg-[#333c46] px-4" aria-hidden="true">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                        <span className="ml-3 text-[10px] font-black uppercase tracking-[0.18em] text-white/45">Desktop</span>
                      </div>
                      <div className="relative aspect-[1.86]">
                        <Image src={slot.file} alt={slot.hint} fill sizes="(max-width: 1024px) 100vw, 1000px" className="object-cover" />
                      </div>
                    </div>
                  ) : (
                    <div className="mx-auto mt-5 w-full max-w-[300px] rounded-[1.75rem] border-[7px] border-[#0d1117] bg-black p-1 shadow-[0_35px_90px_-40px_rgba(0,0,0,0.9)] sm:mt-6 sm:rounded-[2rem] sm:border-[8px]">
                      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.45rem] bg-[#1b2a21]">
                        <Image src={slot.file} alt={slot.hint} fill sizes="300px" className="object-cover" />
                        <div className="absolute left-1/2 top-2 h-4 w-[34%] -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
                        <div className="absolute inset-0 ring-1 ring-inset ring-white/10" aria-hidden="true" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-muted/20 px-4 py-12 sm:px-5 sm:py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="font-black uppercase tracking-[0.22em] text-primary">Pourquoi MikhmonV8</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:mt-5 sm:text-6xl">Une application web simple pour continuer à utiliser Mikhmon en ligne.</h2>
            </div>
            <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "iPhone prêt", text: "Accès depuis Safari ou tout navigateur moderne, sans APK Android.", icon: Smartphone },
                { title: "Mikhmon Online", text: "Gestion Hotspot en ligne avec une expérience familière et plus moderne.", icon: Router },
                { title: "TiketMOMO", text: "Vente de tickets WiFi par Mobile Money depuis le même écosystème.", icon: Ticket },
                { title: "Optimisé 2026", text: "Interface web rapide, lisible, pensée pour les gérants et techniciens.", icon: Gauge },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[1.5rem] border border-border/60 bg-card p-5 sm:p-6">
                    <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                    <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                    <p className="mt-3 text-base text-muted-foreground">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-5 sm:py-16 lg:px-10 lg:py-24" aria-labelledby="features-tour-title">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="font-black uppercase tracking-[0.22em] text-primary">Fonctions visibles</p>
              <h2 id="features-tour-title" className="mt-4 text-3xl font-black tracking-tight sm:mt-5 sm:text-6xl">Les fonctions essentielles, en un coup d’œil.</h2>
              <p className="mt-5 text-lg text-muted-foreground sm:mt-6 sm:text-xl">
                Consultez votre réseau, générez vos tickets, vendez avec TiketMOMO et gérez vos routeurs depuis un seul espace.
              </p>
              <div className="mt-8 flex flex-col gap-3">
                {tutorials.map((tutorial) => (
                  <Link key={tutorial.href} href={tutorial.href} className="group rounded-2xl border border-border/60 bg-card p-5 transition hover:-translate-y-1 hover:border-primary/40">
                    <span className="text-lg font-black group-hover:text-primary">{tutorial.title}</span>
                    <span className="mt-2 block text-sm text-muted-foreground">{tutorial.text}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
              {featureTour.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[1.5rem] border border-border/60 bg-card p-5 sm:rounded-[1.75rem] sm:p-6">
                    <Icon className="h-9 w-9 text-yellow-500" aria-hidden="true" />
                    <h3 className="mt-6 text-3xl font-black tracking-tight">{item.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-5 sm:pb-24 lg:px-10">
          <div className="rounded-[1.5rem] bg-foreground p-6 text-background sm:rounded-[2rem] sm:p-12 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-3">
                {[ShieldCheck, BadgeCheck, Wifi, CreditCard, WalletCards].map((Icon, index) => (
                  <span key={index} className="flex h-11 w-11 items-center justify-center rounded-full bg-background/12">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                ))}
              </div>
              <h2 className="mt-8 text-4xl font-black tracking-tight sm:text-5xl">Gérez votre réseau depuis n’importe où.</h2>
              <p className="mt-4 text-lg opacity-70">MikhmonV8 réunit dashboard, routeurs, vouchers, TiketMOMO, rapports et accès web dans une seule application.</p>
            </div>
            <Link href="/solutions/mikhmon-online-application-web" className="mt-8 inline-flex items-center gap-3 rounded-full bg-yellow-300 px-7 py-4 font-black text-black lg:mt-0">
              Voir aussi la page solution
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </SeoLayout>
  );
}
