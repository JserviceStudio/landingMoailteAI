import type { Metadata } from "next";
import { Breadcrumbs, RelatedCard, SeoLayout } from "@/components/layout/SeoLayout";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts } from "@/lib/seo-content";

export const metadata: Metadata = {
  title: "Guides et tutoriels MikroTik Hotspot",
  description: "Guides pratiques MikroTik : RouterOS, Hotspot, vouchers, API, VPN, sécurité et dépannage pour administrateurs réseau.",
  alternates: { canonical: "/blog" },
  openGraph: { url: "/blog", title: "Guides et tutoriels MikroTik", description: "Apprenez à gérer et sécuriser vos hotspots MikroTik.", images: ["/og-image.png"] },
};

export default function BlogPage() {
  return (
    <SeoLayout>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Blog", name: "Guides MikroTik MikhmoAI", url: "https://mikhmoai.com/blog", inLanguage: "fr-FR", blogPost: blogPosts.map((post) => ({ "@type": "BlogPosting", headline: post.title, url: `https://mikhmoai.com/blog/${post.slug}`, datePublished: post.publishedAt })) }} />
      <main className="mx-auto max-w-7xl px-5 pb-24 pt-10 lg:px-10 lg:pt-16">
        <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Guides MikroTik" }]} />
        <div className="mt-12 max-w-4xl">
          <p className="font-black uppercase tracking-[0.22em] text-primary">Centre de ressources</p>
          <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-7xl">Guides MikroTik, Hotspot et RouterOS.</h1>
          <p className="mt-7 text-xl text-muted-foreground sm:text-2xl">Des réponses concrètes pour configurer, sécuriser et développer votre réseau Wi-Fi.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">{blogPosts.map((post) => <RelatedCard key={post.slug} href={`/blog/${post.slug}`} title={post.title} description={`${post.readingTime} — ${post.description}`} />)}</div>
      </main>
    </SeoLayout>
  );
}
