import type { Metadata } from "next";
import { ArrowRight, Gauge, Satellite, ShieldCheck, Wifi } from "lucide-react";
import { Breadcrumbs, SeoLayout } from "@/components/layout/SeoLayout";

export const metadata: Metadata = {
  title: "Suivi de consommation Starlink et régulation MikroTik",
  description: "Surveillez votre consommation Starlink et régulez votre réseau MikroTik avec MikhmoAI.",
  alternates: { canonical: "/starlink" },
};

export default function StarlinkPage() {
  return (
    <SeoLayout>
      <main className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-10 lg:pt-14">
        <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Starlink" }]} />
        <section className="relative mt-8 overflow-hidden rounded-[2rem] border border-border/60 bg-[#070707] px-5 py-8 text-white shadow-2xl sm:mt-12 sm:rounded-[3rem] sm:px-10 sm:py-14 lg:px-16 lg:py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(250,204,21,0.2),transparent_34%),radial-gradient(circle_at_15%_85%,rgba(37,99,235,0.2),transparent_38%)]" aria-hidden="true" />
          <div className="relative max-w-3xl">
            <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.22em] text-yellow-300"><Satellite className="h-4 w-4" aria-hidden="true" /> Starlink + MikroTik</p>
            <h1 className="mt-5 text-4xl font-black leading-[1.03] tracking-tight sm:text-6xl lg:text-7xl">Suivez votre consommation Starlink. Régulez votre réseau.</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-xl">MikhmoAI vous aide à surveiller l’usage de votre connexion Starlink et à garder une distribution WiFi MikroTik stable pour vos utilisateurs.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/api/download/latest?platform=android&arch=arm64" data-meta-event="DownloadClick" data-meta-platform="android" data-meta-placement="starlink" data-meta-content-name="MikhmoAI Android Starlink" className="inline-flex items-center justify-center gap-3 rounded-full bg-yellow-300 px-7 py-4 font-black text-black transition hover:-translate-y-1 hover:bg-yellow-200">
                Télécharger MikhmoAI
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="/downloads" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/10 px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-white/15">Voir toutes les versions</a>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-3" aria-label="Fonctionnalités Starlink">
          {[
            { title: "Consommation lisible", text: "Gardez une vue claire sur l’usage et les tendances de votre connexion.", icon: Gauge },
            { title: "Régulation MikroTik", text: "Ajustez les profils et priorités pour préserver une expérience stable.", icon: Wifi },
            { title: "Accès sécurisé", text: "Gérez votre infrastructure avec les outils MikhmoAI et vos accès réseau.", icon: ShieldCheck },
          ].map(({ title, text, icon: Icon }) => <article key={title} className="rounded-3xl border border-border/60 bg-card p-6"><Icon className="h-7 w-7 text-primary" aria-hidden="true" /><h2 className="mt-5 text-xl font-black">{title}</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}
        </section>
      </main>
    </SeoLayout>
  );
}
