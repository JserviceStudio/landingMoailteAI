import type { Metadata } from "next";
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
  title: "MikhmonV8 — Mikhmon Online, TiketMOMO et VPN",
  description:
    "Découvrez MikhmonV8, l’application web Mikhmon Online accessible partout : iPhone, Android, ordinateur, TiketMOMO, VPN et fonctions avancées.",
  keywords: [
    "MikhmonV8",
    "Mikhmon Online",
    "Mikhmon iPhone",
    "application web MikroTik",
    "TiketMOMO",
    "VPN MikroTik",
    "MikhmonPro",
  ],
  alternates: { canonical: "/mikhmonv8" },
  openGraph: {
    type: "website",
    url: "/mikhmonv8",
    title: "MikhmonV8 — Mikhmon Online accessible partout",
    description:
      "Une application web simple pour retrouver Mikhmon Online, TiketMOMO et les fonctions avancées depuis app.mikhmo.tech.",
    images: ["/og-image.png"],
    locale: "fr_FR",
  },
};

const plans = [
  {
    name: "VPN",
    price: "6 600 F",
    period: "1 an",
    badge: "Accès distant",
    description: "Pour gérer votre routeur à distance et garder un lien stable avec votre WiFi zone.",
    features: ["VPN MikhmoAI", "Gestion routeur à distance", "Idéal pour les interventions", "Accès depuis app.mikhmo.tech"],
  },
  {
    name: "MikhmonPro",
    price: "13 000 F",
    period: "1 an",
    badge: "Offre recommandée",
    description: "Pour accéder à Mikhmon Online, TiketMOMO et aux fonctions avancées dans une seule expérience web.",
    features: ["Mikhmon Online", "TiketMOMO", "Fonctions avancées", "Compatible iPhone, Android, PC et tablette"],
    highlighted: true,
  },
];

const captureSlots = [
  {
    title: "Capture bureau",
    file: "/mikhmonv8-desktop-dashboard.png",
    hint: "Dashboard MikhmonV8 sur ordinateur",
    icon: Monitor,
    className: "lg:col-span-2",
  },
  {
    title: "Capture mobile accueil",
    file: "/mikhmonv8-mobile-home.png",
    hint: "Accueil web sur iPhone",
    icon: Smartphone,
    className: "",
  },
  {
    title: "Capture mobile TiketMOMO",
    file: "/mikhmonv8-mobile-tiketmomo.png",
    hint: "Vente tickets et Mobile Money",
    icon: Ticket,
    className: "",
  },
];

export default function MikhmonV8Page() {
  const url = "https://mikhmoai.com/mikhmonv8";

  return (
    <SeoLayout>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "MikhmonV8",
            alternateName: "Mikhmon Online",
            applicationCategory: "NetworkApplication",
            operatingSystem: "Web, iOS, Android, Windows, macOS, Linux",
            url,
            description:
              "Application web Mikhmon Online avec TiketMOMO, VPN et fonctions avancées pour gérer les WiFi zones MikroTik depuis un navigateur.",
            offers: plans.map((plan) => ({
              "@type": "Offer",
              name: plan.name,
              price: plan.name === "VPN" ? "6600" : "13000",
              priceCurrency: "XOF",
              availability: "https://schema.org/InStock",
              url: "https://app.mikhmo.tech",
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

          <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-10 lg:px-10 lg:pb-24 lg:pt-16">
            <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "MikhmonV8" }]} />

            <div className="grid gap-12 pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-3 rounded-full border border-yellow-300/35 bg-yellow-300/12 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-yellow-200">
                  <Cloud className="h-4 w-4" aria-hidden="true" />
                  Nouvelle application web
                </div>
                <h1 className="mt-7 text-5xl font-black leading-none tracking-tight sm:text-7xl lg:text-8xl">
                  Mikhmon<span className="text-yellow-300">V8</span>
                </h1>
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
                    Voir les licences
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/12 bg-white/[0.06] p-4 shadow-[0_45px_110px_-55px_rgba(250,204,21,0.85)] backdrop-blur">
                <div className="rounded-[1.5rem] bg-white p-4 text-black">
                  <div className="flex items-center justify-between border-b border-black/10 pb-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-black/45">Emplacement capture bureau</p>
                      <p className="mt-1 text-2xl font-black">MikhmonV8 Web</p>
                    </div>
                    <Monitor className="h-10 w-10 text-yellow-500" aria-hidden="true" />
                  </div>
                  <div className="mt-4 aspect-[16/10] rounded-2xl border-2 border-dashed border-black/18 bg-[linear-gradient(135deg,#f8fafc,#fef3c7)] p-5">
                    <div className="flex h-full flex-col justify-between rounded-xl bg-black p-5 text-white">
                      <div className="flex items-center justify-between">
                        <span className="rounded-full bg-yellow-300 px-3 py-1 text-xs font-black text-black">app.mikhmo.tech</span>
                        <span className="text-xs font-bold text-white/45">capture à importer</span>
                      </div>
                      <div>
                        <p className="text-3xl font-black">Dashboard bureau</p>
                        <p className="mt-2 text-sm text-white/55">Remplacer par la capture desktop MikhmonV8.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24" aria-labelledby="captures-title">
          <div className="max-w-4xl">
            <p className="font-black uppercase tracking-[0.22em] text-primary">Captures à accueillir</p>
            <h2 id="captures-title" className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">Les emplacements sont prêts pour tes images mobile et bureau.</h2>
            <p className="mt-6 text-xl text-muted-foreground">
              Pour l’instant, la page n’utilise aucune ancienne capture MikhmoAI. Les zones ci-dessous sont réservées aux nouvelles captures MikhmonV8.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {captureSlots.map((slot) => {
              const Icon = slot.icon;
              return (
                <div key={slot.file} className={`rounded-[2rem] border border-border/60 bg-card p-6 ${slot.className}`}>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-black">{slot.title}</h3>
                      <p className="mt-2 text-sm font-bold text-muted-foreground">{slot.file}</p>
                    </div>
                    <Icon className="h-8 w-8 text-yellow-500" aria-hidden="true" />
                  </div>
                  <div className={`mt-6 rounded-[1.5rem] border-2 border-dashed border-yellow-500/35 bg-yellow-500/8 p-4 ${slot.title.includes("bureau") ? "aspect-[16/9]" : "mx-auto aspect-[9/19] max-w-[280px]"}`}>
                    <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-background/70 p-5 text-center">
                      <Icon className="h-10 w-10 text-yellow-500" aria-hidden="true" />
                      <p className="mt-4 text-xl font-black">{slot.hint}</p>
                      <p className="mt-2 text-sm text-muted-foreground">Dépose la capture dans public avec ce nom, puis on remplacera le placeholder.</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-muted/20 px-5 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="font-black uppercase tracking-[0.22em] text-primary">Pourquoi MikhmonV8</p>
              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">Une application web simple pour continuer à utiliser Mikhmon en ligne.</h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "iPhone prêt", text: "Accès depuis Safari ou tout navigateur moderne, sans APK Android.", icon: Smartphone },
                { title: "Mikhmon Online", text: "Gestion Hotspot en ligne avec une expérience familière et plus moderne.", icon: Router },
                { title: "TiketMOMO", text: "Vente de tickets WiFi par Mobile Money depuis le même écosystème.", icon: Ticket },
                { title: "Optimisé 2026", text: "Interface web rapide, lisible, pensée pour les gérants et techniciens.", icon: Gauge },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-[1.5rem] border border-border/60 bg-card p-6">
                    <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                    <h3 className="mt-5 text-2xl font-black">{item.title}</h3>
                    <p className="mt-3 text-base text-muted-foreground">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="licences" className="mx-auto max-w-7xl px-5 py-16 lg:px-10 lg:py-24">
          <div className="max-w-4xl">
            <p className="font-black uppercase tracking-[0.22em] text-primary">Licences</p>
            <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">Deux offres simples pour lancer MikhmonV8.</h2>
            <p className="mt-6 text-xl text-muted-foreground">Les prix ci-dessous sont ceux que tu as fournis pour cette landing page.</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {plans.map((plan) => (
              <div key={plan.name} className={`rounded-[2rem] border p-7 sm:p-9 ${plan.highlighted ? "border-yellow-400 bg-[#080808] text-white shadow-[0_45px_100px_-60px_rgba(250,204,21,0.8)]" : "border-border/60 bg-card"}`}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className={`inline-flex rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.16em] ${plan.highlighted ? "bg-yellow-300 text-black" : "bg-primary/10 text-primary"}`}>{plan.badge}</p>
                    <h3 className="mt-6 text-4xl font-black">{plan.name}</h3>
                    <p className={`mt-3 text-base ${plan.highlighted ? "text-white/65" : "text-muted-foreground"}`}>{plan.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-5xl font-black">{plan.price}</p>
                    <p className={`mt-1 text-sm font-bold uppercase tracking-widest ${plan.highlighted ? "text-white/45" : "text-muted-foreground"}`}>{plan.period}</p>
                  </div>
                </div>
                <ul className="mt-8 grid gap-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className={`flex items-center gap-3 rounded-2xl p-4 font-bold ${plan.highlighted ? "bg-white/8 text-white/85" : "bg-muted/20"}`}>
                      <CheckCircle2 className={`h-5 w-5 shrink-0 ${plan.highlighted ? "text-yellow-300" : "text-primary"}`} aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://app.mikhmo.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full px-7 py-4 font-black transition hover:-translate-y-1 ${plan.highlighted ? "bg-yellow-300 text-black hover:bg-yellow-200" : "bg-foreground text-background hover:opacity-90"}`}
                >
                  Choisir {plan.name}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-10">
          <div className="rounded-[2rem] bg-foreground p-8 text-background sm:p-12 lg:flex lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-3">
                {[ShieldCheck, BadgeCheck, Wifi, CreditCard, WalletCards].map((Icon, index) => (
                  <span key={index} className="flex h-11 w-11 items-center justify-center rounded-full bg-background/12">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                ))}
              </div>
              <h2 className="mt-8 text-4xl font-black tracking-tight sm:text-5xl">MikhmonV8 est prêt. Il manque seulement tes captures.</h2>
              <p className="mt-4 text-lg opacity-70">Dès que tu fournis les captures mobile et bureau, je les intègre dans les emplacements prévus et j’ajuste le cadrage.</p>
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
