import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, DownloadCta, FeatureList, RelatedCard, SeoLayout } from "@/components/layout/SeoLayout";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts, getPost, solutionPages } from "@/lib/seo-content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const canonical = `/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical },
    authors: [{ name: "Équipe MikhmoAI" }],
    openGraph: { type: "article", url: canonical, title: post.metaTitle, description: post.description, publishedTime: post.publishedAt, images: ["/og-image.png"], locale: "fr_FR" },
    twitter: { card: "summary_large_image", title: post.metaTitle, description: post.description, images: ["/og-image.png"] },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const url = `https://mikhmoai.com/blog/${post.slug}`;
  const relatedPosts = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  return (
    <SeoLayout>
      <JsonLd data={[
        { "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, description: post.description, datePublished: post.publishedAt, dateModified: post.publishedAt, inLanguage: "fr-FR", mainEntityOfPage: url, image: "https://mikhmoai.com/og-image.png", author: { "@type": "Organization", name: "MikhmoAI" }, publisher: { "@type": "Organization", name: "Moailte Studio", logo: { "@type": "ImageObject", url: "https://mikhmoai.com/icon.png" } } },
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://mikhmoai.com" }, { "@type": "ListItem", position: 2, name: "Guides MikroTik", item: "https://mikhmoai.com/blog" }, { "@type": "ListItem", position: 3, name: post.title, item: url }] },
        { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: post.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
      ]} />
      <main>
        <article>
          <header className="mx-auto max-w-5xl px-5 pb-14 pt-10 lg:px-10 lg:pt-16">
            <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Guides MikroTik", href: "/blog" }, { label: post.title }]} />
            <p className="mt-12 font-black uppercase tracking-[0.22em] text-primary">{post.eyebrow}</p>
            <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-7xl">{post.title}</h1>
            <p className="mt-7 text-xl text-muted-foreground sm:text-2xl">{post.intro}</p>
            <div className="mt-7 flex flex-wrap gap-4 text-sm font-bold text-muted-foreground"><span>Publié le 17 juillet 2026</span><span>•</span><span>{post.readingTime} de lecture</span></div>
          </header>
          <div className="mx-auto max-w-4xl px-5 pb-16 lg:px-10">
            {post.sections.map((section) => (
              <section key={section.title} className="border-t border-border/50 py-11">
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">{section.title}</h2>
                <div className="mt-6 space-y-5 text-lg text-muted-foreground">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
                {section.bullets && <div className="mt-8"><FeatureList items={section.bullets} /></div>}
              </section>
            ))}
            <section className="border-t border-border/50 py-11">
              <h2 className="text-3xl font-black tracking-tight">Questions fréquentes</h2>
              <div className="mt-7 space-y-7">{post.faq.map((item) => <div key={item.question}><h3 className="text-xl font-black">{item.question}</h3><p className="mt-3 text-lg text-muted-foreground">{item.answer}</p></div>)}</div>
            </section>
            <aside className="rounded-3xl border border-primary/20 bg-primary/5 p-7">
              <p className="font-black">Besoin d’aide sur votre configuration ?</p>
              <p className="mt-2 text-muted-foreground">Consultez le <Link href="/support" className="font-bold text-primary underline">centre de support MikhmoAI</Link>. N’envoyez jamais vos mots de passe RouterOS dans un message public.</p>
            </aside>
          </div>
        </article>
        <section className="mx-auto max-w-7xl px-5 py-12 lg:px-10">
          <h2 className="text-3xl font-black tracking-tight">Continuer votre apprentissage</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">{relatedPosts.map((item) => <RelatedCard key={item.slug} href={`/blog/${item.slug}`} title={item.title} description={item.description} />)}</div>
          <h2 className="mt-16 text-3xl font-black tracking-tight">Solutions MikhmoAI</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">{solutionPages.slice(0, 3).map((item) => <RelatedCard key={item.slug} href={`/solutions/${item.slug}`} title={item.title} description={item.description} />)}</div>
        </section>
        <DownloadCta />
      </main>
    </SeoLayout>
  );
}
