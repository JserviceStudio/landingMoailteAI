import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Boxes,
  Building2,
  Check,
  GraduationCap,
  Handshake,
  Headphones,
  Network,
  PlugZap,
  Rocket,
  ShieldCheck,
  Store,
  Users,
  WalletCards,
} from "lucide-react";
import { Breadcrumbs, SeoLayout } from "@/components/layout/SeoLayout";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Programme partenaires MikroTik, RADIUS, VPN et WISP",
  description:
    "Devenez partenaire officiel MikhmoAI : intégrez vos services RADIUS, VPN, paiement ou infrastructure MikroTik et développez de nouveaux revenus avec une plateforme de déploiement tout-en-un.",
  keywords: [
    "partenaire MikroTik",
    "intégrateur MikroTik",
    "RADIUS as a service",
    "VPN MikroTik",
    "partenaire WISP",
    "API MikroTik",
    "revendeur hotspot",
  ],
  alternates: { canonical: "/providers" },
  openGraph: {
    title: "Devenez partenaire officiel MikhmoAI",
    description:
      "Distribuez et déployez vos services MikroTik, RADIUS, VPN et paiement grâce à l’écosystème MikhmoAI.",
    url: "https://mikhmoai.com/providers",
    images: [{ url: "/audience-dirigeants-provider.png", width: 1536, height: 1024 }],
  },
};

const partnerTypes = [
  {
    icon: PlugZap,
    title: "Partenaire Technologie & API",
    text: "RADIUS cloud, VPN, hébergement, paiement, cybersécurité ou observabilité : rendez votre service activable directement depuis MikhmoAI.",
    value: "Plus d’usage de votre API et un accès direct aux exploitants MikroTik.",
  },
  {
    icon: Network,
    title: "Provider & opérateur WISP",
    text: "Industrialisez l’ouverture de sites, le multi-NAS, le PPPoE, les vouchers, le monitoring et les accès distants.",
    value: "Moins d’opérations manuelles et une offre de services plus large.",
  },
  {
    icon: Store,
    title: "Intégrateur & distributeur",
    text: "Livrez une solution complète avec le matériel, la configuration, l’application mobile et le poste d’exploitation desktop.",
    value: "Des missions à plus forte valeur et des revenus récurrents après l’installation.",
  },
  {
    icon: GraduationCap,
    title: "Formation & communauté",
    text: "Ajoutez des ateliers pratiques MikhmoAI à vos formations réseau, événements, académies ou contenus techniques.",
    value: "Un laboratoire concret, de nouveaux contenus et des opportunités qualifiées.",
  },
];

const benefits = [
  { icon: WalletCards, title: "Revenus récurrents", text: "Revendez licences, services managés, intégrations et accompagnement selon votre propre modèle commercial." },
  { icon: Rocket, title: "Déploiement accéléré", text: "Transformez vos procédures RouterOS, RADIUS et VPN en parcours reproductibles sur plusieurs routeurs et sites." },
  { icon: Users, title: "Nouveaux clients", text: "Accédez à des exploitants Hotspot, techniciens, PME, intégrateurs et fournisseurs d’accès déjà concernés par MikroTik." },
  { icon: BarChart3, title: "Adoption mesurable", text: "Suivez les activations, usages et opportunités générées par l’intégration pour améliorer l’offre ensemble." },
  { icon: Headphones, title: "Support partenaire", text: "Bénéficiez d’un interlocuteur technique, d’un environnement de test et d’un accompagnement au lancement." },
  { icon: BadgeCheck, title: "Visibilité commune", text: "Obtenez le badge Partenaire MikhmoAI, une fiche solution et des actions de contenu ou démonstration conjointes." },
];

const faq = [
  { q: "Qui peut devenir partenaire MikhmoAI ?", a: "Les fournisseurs RADIUS, VPN, cloud, paiement et sécurité, les WISP et FAI, les intégrateurs réseau, distributeurs, consultants et organismes de formation peuvent candidater." },
  { q: "Faut-il disposer d’une API ?", a: "Non. Une API accélère l’intégration, mais un partenariat peut commencer par la distribution, le déploiement, la formation, le support ou une preuve de concept." },
  { q: "Que signifie partenaire officiel ?", a: "Il s’agit d’un partenaire vérifié par le programme MikhmoAI. Cette désignation ne constitue pas une certification ni une affiliation avec MikroTik." },
  { q: "Comment débute une intégration ?", a: "Nous validons d’abord le cas d’usage et le bénéfice client, puis nous réalisons un test technique limité avant la documentation, la validation et le lancement commun." },
];

export default function ProvidersPage() {
  const partnerMessage = encodeURIComponent(
    "Bonjour, je souhaite étudier un partenariat officiel avec MikhmoAI. Notre entreprise propose : "
  );

  return (
    <SeoLayout>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebPage",
              name: "Programme partenaires MikhmoAI",
              url: "https://mikhmoai.com/providers",
              audience: { "@type": "BusinessAudience", audienceType: "WISP, FAI, intégrateurs et fournisseurs de services réseau" },
              about: { "@type": "SoftwareApplication", name: "MikhmoAI", alternateName: "MikhmonPro" },
            },
            {
              "@type": "FAQPage",
              mainEntity: faq.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            },
          ],
        }}
      />

      <main>
        <section className="mx-auto max-w-7xl px-5 pb-16 pt-10 lg:px-10 lg:pb-24 lg:pt-16">
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Programme partenaires" }]} />
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-black text-primary">
                <Handshake className="h-4 w-4" /> Écosystème B2B MikhmoAI
              </span>
              <h1 className="mt-6 text-5xl font-black tracking-tight sm:text-7xl">
                Votre service. Notre plateforme. <span className="text-primary">Plus de valeur, ensemble.</span>
              </h1>
              <p className="mt-7 max-w-3xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">
                Devenez partenaire officiel MikhmoAI et placez votre solution RADIUS, VPN, paiement, cloud ou réseau au cœur des déploiements MikroTik de nos utilisateurs.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a href={`https://wa.me/22996937864?text=${partnerMessage}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 font-black text-primary-foreground shadow-lg transition hover:-translate-y-0.5">
                  Proposer un partenariat <ArrowRight className="h-5 w-5" />
                </a>
                <a href="mailto:justemoailtepro@gmail.com?subject=Candidature%20partenaire%20MikhmoAI" className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-4 font-black transition hover:border-primary/50">
                  Écrire à l’équipe B2B
                </a>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">Étude initiale sans engagement · Partenariat technique, commercial ou de distribution</p>
            </div>
            <figure className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-border/60 bg-muted shadow-2xl">
              <Image src="/audience-dirigeants-provider.png" alt="Dirigeants réunis pour construire un partenariat technologique MikhmoAI" fill priority sizes="(max-width: 1024px) 100vw, 48vw" className="object-cover" />
              <div className="absolute inset-x-5 bottom-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-black/70 p-4 text-white backdrop-blur-md"><p className="text-xs font-bold uppercase tracking-wider text-white/60">Votre expertise</p><p className="mt-1 font-black">Service, réseau ou marché</p></div>
                <div className="rounded-2xl bg-primary/90 p-4 text-white backdrop-blur-md"><p className="text-xs font-bold uppercase tracking-wider text-white/70">Notre moteur</p><p className="mt-1 font-black">Déploiement & distribution</p></div>
              </div>
            </figure>
          </div>
        </section>

        <section className="border-y border-border/50 bg-muted/15 py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-10">
            <p className="font-black uppercase tracking-[0.2em] text-primary">Profils recherchés</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">Plusieurs façons de construire l’écosystème.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {partnerTypes.map(({ icon: Icon, title, text, value }) => (
                <article key={title} className="rounded-[2rem] border border-border/60 bg-background p-7 sm:p-9">
                  <Icon className="h-9 w-9 text-primary" />
                  <h3 className="mt-5 text-2xl font-black">{title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
                  <p className="mt-5 flex items-start gap-2 border-t border-border/60 pt-5 font-bold"><Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{value}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="font-black uppercase tracking-[0.2em] text-primary">Impact direct</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-6xl">Un partenariat qui doit produire des résultats.</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">Chaque collaboration commence par une promesse simple : supprimer une friction pour l’utilisateur et créer une valeur économique mesurable pour les deux partenaires.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map(({ icon: Icon, title, text }) => (
                <article key={title} className="rounded-3xl bg-muted/20 p-6">
                  <Icon className="h-7 w-7 text-primary" />
                  <h3 className="mt-4 text-xl font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-10">
          <div className="overflow-hidden rounded-[2.5rem] bg-foreground text-background">
            <div className="grid lg:grid-cols-[1fr_1.1fr]">
              <div className="p-8 sm:p-12 lg:p-16">
                <Boxes className="h-10 w-10 text-primary" />
                <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">De l’idée au lancement en quatre étapes.</h2>
                <p className="mt-5 text-lg opacity-70">Nous commençons petit, validons la valeur et industrialisons seulement ce qui fonctionne.</p>
              </div>
              <ol className="grid gap-px bg-background/20 sm:grid-cols-2">
                {[
                  ["01", "Qualification", "Marché ciblé, cas d’usage, complémentarité et résultat attendu."],
                  ["02", "Preuve de concept", "Connexion API ou workflow pilote sur un périmètre limité."],
                  ["03", "Validation", "Sécurité, expérience, documentation, support et modèle commercial."],
                  ["04", "Lancement", "Référencement, démonstration, contenus conjoints et suivi d’adoption."],
                ].map(([number, title, text]) => (
                  <li key={number} className="bg-foreground p-7 sm:p-9"><span className="font-black text-primary">{number}</span><h3 className="mt-3 text-xl font-black">{title}</h3><p className="mt-2 text-sm leading-relaxed opacity-65">{text}</p></li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="border-y border-border/50 bg-muted/15 py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
            <div><ShieldCheck className="h-9 w-9 text-primary" /><h2 className="mt-5 text-4xl font-black">Un programme crédible et transparent.</h2><p className="mt-5 leading-relaxed text-muted-foreground">Le badge est accordé après vérification du partenaire, de son offre et du parcours client. MikroTik et RouterOS sont des marques de leurs propriétaires respectifs ; MikhmoAI est une solution indépendante.</p></div>
            <div className="grid gap-4">
              {faq.map((item) => <details key={item.q} className="group rounded-2xl border border-border/60 bg-background p-6"><summary className="cursor-pointer list-none pr-8 text-lg font-black">{item.q}</summary><p className="mt-4 leading-relaxed text-muted-foreground">{item.a}</p></details>)}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-5 py-24 text-center">
          <Building2 className="mx-auto h-11 w-11 text-primary" />
          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">Construisons le prochain service indispensable aux exploitants MikroTik.</h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-muted-foreground">Présentez votre solution, le marché que vous servez et ce que vous souhaitez intégrer. Nous reviendrons vers vous avec un scénario de collaboration concret.</p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={`https://wa.me/22996937864?text=${partnerMessage}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-black text-primary-foreground">Devenir partenaire <ArrowRight className="h-5 w-5" /></a>
            <Link href="/solutions" className="inline-flex items-center justify-center rounded-full border border-border px-8 py-4 font-black">Explorer les solutions MikhmoAI</Link>
          </div>
        </section>
      </main>
    </SeoLayout>
  );
}
