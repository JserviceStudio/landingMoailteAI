import type { Metadata } from "next";
import Link from "next/link";
import { SeoLayout, Breadcrumbs, DownloadCta, RelatedCard } from "@/components/layout/SeoLayout";
import { JsonLd } from "@/components/seo/JsonLd";
import { solutionPages } from "@/lib/seo-content";

export const metadata: Metadata = {
  title: "Solutions de gestion Hotspot MikroTik",
  description: "Découvrez la suite MikhmoAI pour exploiter et déployer les réseaux MikroTik : Hotspot, RADIUS, multi-site, VPN, topologie, monitoring et API.",
  alternates: { canonical: "/solutions" },
  openGraph: { url: "/solutions", title: "Solutions de gestion Hotspot MikroTik", description: "Hotspot, vouchers, monitoring et gestion MikroTik sur Android.", images: ["/og-image.png"] },
};

export default function SolutionsPage() {
  return (
    <SeoLayout>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Solutions MikroTik MikhmoAI", url: "https://mikhmoai.com/solutions", hasPart: solutionPages.map((page) => ({ "@type": "WebPage", name: page.title, url: `https://mikhmoai.com/solutions/${page.slug}` })) }} />
      <main>
        <section className="mx-auto max-w-7xl px-5 pb-14 pt-10 lg:px-10 lg:pb-24 lg:pt-16">
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Solutions" }]} />
          <div className="mt-12 max-w-4xl">
            <p className="font-black uppercase tracking-[0.22em] text-primary">Solutions MikroTik</p>
            <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-7xl">La plateforme d’exploitation MikroTik et WISP.</h1>
            <p className="mt-7 text-xl text-muted-foreground sm:text-2xl">MikhmoAI réunit Hotspot, RADIUS, multi-site, VPN, supervision, topologie, administration RouterOS, automatisation et activité commerciale.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/pour-debutants" className="rounded-full border border-border px-5 py-3 font-bold">Gestion simple</Link>
              <Link href="/pour-techniciens" className="rounded-full border border-border px-5 py-3 font-bold">Techniciens</Link>
              <Link href="/providers" className="rounded-full border border-border px-5 py-3 font-bold">Providers & API</Link>
            </div>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutionPages.map((page) => <RelatedCard key={page.slug} href={`/solutions/${page.slug}`} title={page.title} description={page.description} />)}
          </div>
        </section>
        <DownloadCta />
      </main>
    </SeoLayout>
  );
}
