import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import MainLayout from "@/components/layout/MainLayout";

export const metadata: Metadata = {
  title: "À propos de MikhmoAI",
  description: "Découvrez MikhmoAI, J+Services et Moailte Studio, la suite de gestion MikroTik pour Hotspot, VPN, vouchers et Mobile Money.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <MainLayout>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "AboutPage", name: "À propos de MikhmoAI", url: "https://mikhmoai.com/about", about: { "@type": "Organization", name: "Moailte Studio", alternateName: "J+Services", url: "https://mikhmoai.com", telephone: "+22941438405", address: { "@type": "PostalAddress", addressCountry: "BJ" }, sameAs: ["https://github.com/JserviceStudio", "https://app.mikhmo.tech", "https://store.mikhmoai.com", "https://wa.me/22941438405"] } }} />
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:py-24">
        <p className="font-black uppercase tracking-[0.24em] text-primary">MikhmoAI · J+Services</p>
        <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-7xl">Une suite MikroTik pensée pour le terrain.</h1>
        <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">MikhmoAI rassemble la gestion Hotspot, les vouchers, le VPN, le monitoring, Mikhmon Online et les ventes TiketMOMO dans un même écosystème accessible sur mobile, ordinateur et navigateur.</p>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {[["MikhmoAI", "Gestion Hotspot, RADIUS, VPN et monitoring."], ["MikhmonV8", "Accès web à Mikhmon Online et aux fonctions avancées."], ["TiketMOMO", "Vente de vouchers WiFi par Mobile Money."]].map(([title, text]) => <section key={title} className="rounded-3xl border border-border/60 bg-card p-6"><h2 className="text-2xl font-black">{title}</h2><p className="mt-3 text-muted-foreground">{text}</p></section>)}
        </div>
        <div className="mt-12 flex flex-wrap gap-4 font-black"><Link href="/support" className="rounded-full bg-primary px-6 py-3 text-primary-foreground">Nous contacter</Link><Link href="/mikhmonv8" className="rounded-full border border-border px-6 py-3">Voir MikhmonV8</Link></div>
      </main>
    </MainLayout>
  );
}
