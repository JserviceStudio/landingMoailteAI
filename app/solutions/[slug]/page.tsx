import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, Coins, ReceiptText, Ticket, Wallet } from "lucide-react";
import { Breadcrumbs, DownloadCta, FeatureList, RelatedCard, SeoLayout } from "@/components/layout/SeoLayout";
import { JsonLd } from "@/components/seo/JsonLd";
import { blogPosts, getSolution, solutionPages } from "@/lib/seo-content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return solutionPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getSolution(slug);
  if (!page) return {};
  const canonical = `/solutions/${page.slug}`;
  return {
    title: page.metaTitle,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical },
    openGraph: { type: "website", url: canonical, title: page.metaTitle, description: page.description, images: ["/og-image.png"], locale: "fr_FR" },
    twitter: { card: "summary_large_image", title: page.metaTitle, description: page.description, images: ["/og-image.png"] },
  };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const page = getSolution(slug);
  if (!page) notFound();
  const url = `https://mikhmoai.com/solutions/${page.slug}`;
  const related = solutionPages.filter((item) => item.slug !== page.slug).slice(0, 3);
  const isTiketMomo = page.slug === "vente-vouchers-mobile-money-mikrotik";
  return (
    <SeoLayout>
      <JsonLd data={[
        { "@context": "https://schema.org", "@type": "WebPage", name: page.title, description: page.description, url, inLanguage: "fr-FR", isPartOf: { "@type": "WebSite", name: "MikhmoAI", url: "https://mikhmoai.com" } },
        { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Accueil", item: "https://mikhmoai.com" }, { "@type": "ListItem", position: 2, name: "Solutions", item: "https://mikhmoai.com/solutions" }, { "@type": "ListItem", position: 3, name: page.title, item: url }] },
        { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
      ]} />
      <main>
        <article>
          <header className={`mx-auto max-w-7xl px-5 pb-16 pt-10 lg:px-10 lg:pb-24 lg:pt-16 ${isTiketMomo ? "max-w-none bg-[#080808] text-white" : ""}`}>
            <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Solutions", href: "/solutions" }, { label: page.title }]} />
            {isTiketMomo ? (
              <div className="mx-auto mt-12 grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div>
                  <div className="inline-flex items-center gap-3 rounded-full border border-yellow-300/40 bg-yellow-400/15 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-yellow-100">
                    <Ticket className="h-4 w-4 text-yellow-300" aria-hidden="true" />
                    Tiket<span className="text-yellow-300">MOMO</span>
                  </div>
                  <h1 className="mt-6 text-5xl font-black leading-none tracking-tight sm:text-7xl lg:text-8xl">
                    Vendre vos tickets WiFi par <span className="text-yellow-300">Mobile Money</span>
                  </h1>
                  <p className="mt-8 max-w-4xl text-xl leading-relaxed text-white/72 sm:text-2xl">{page.intro}</p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a href="https://store.mikhmoai.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-yellow-300 px-7 py-4 font-black text-black shadow-xl shadow-yellow-400/25 transition hover:-translate-y-1 hover:bg-yellow-200">
                      <Wallet className="h-5 w-5" aria-hidden="true" />
                      Acheter MikhmoAI Pro
                    </a>
                    <a href="#tiketmomo-details" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-7 py-4 font-black text-white transition hover:-translate-y-1 hover:bg-white/15">
                      Voir comment ça marche
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </a>
                  </div>
                </div>
                <div className="relative overflow-hidden rounded-[2rem] border border-yellow-300/30 bg-white p-4 text-black shadow-[0_45px_100px_-45px_rgba(250,204,21,0.9)]">
                  <div className="absolute right-5 top-5 rounded-full bg-black px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-yellow-300">Boutique WiFi</div>
                  <div className="rounded-[1.5rem] bg-[#0b0b0b] p-5 text-white">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-yellow-300">TiketMOMO</p>
                        <p className="mt-1 text-2xl font-black">Ticket 100 F</p>
                      </div>
                      <Coins className="h-10 w-10 text-yellow-300" aria-hidden="true" />
                    </div>
                    <div className="mt-5 grid gap-3">
                      {["Choisir le forfait", "Payer par Mobile Money", "Recevoir le code WiFi"].map((label, index) => (
                        <div key={label} className="flex items-center gap-3 rounded-2xl bg-white/8 p-4">
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-300 text-sm font-black text-black">{index + 1}</span>
                          <span className="font-bold text-white/85">{label}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 rounded-2xl bg-yellow-300 p-4 text-black">
                      <div className="flex items-center gap-3">
                        <ReceiptText className="h-6 w-6" aria-hidden="true" />
                        <p className="font-black">Code remis automatiquement après paiement.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-12 max-w-5xl">
                <p className="font-black uppercase tracking-[0.22em] text-primary">{page.eyebrow}</p>
                <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl">{page.title}</h1>
                <p className="mt-8 max-w-4xl text-xl text-muted-foreground sm:text-2xl">{page.intro}</p>
              </div>
            )}
            {page.image && (
              <figure className={`relative mt-12 ${page.mobileImage ? "pb-16 sm:pb-24" : ""} ${isTiketMomo ? "mx-auto max-w-7xl" : ""}`}>
                <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-card p-2 shadow-[0_35px_90px_-35px_rgba(0,0,0,0.55)] sm:p-3">
                  <div className="flex h-8 items-center gap-1.5 rounded-t-2xl bg-foreground/5 px-4" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                    <span className="ml-3 text-[10px] font-black uppercase tracking-[0.18em] text-muted-foreground">MikhmoAI Desktop</span>
                  </div>
                  <div className="relative aspect-[1.86] overflow-hidden rounded-b-2xl bg-muted/20">
                    <Image src={page.image.src} alt={page.image.alt} fill sizes="(max-width: 1280px) 100vw, 1200px" className="object-contain" priority />
                  </div>
                </div>
                {page.mobileImage && (
                  <div className="absolute -bottom-1 right-3 w-[31%] max-w-[285px] sm:right-8 sm:w-[25%]" aria-label="Aperçu de l'application mobile MikhmoAI">
                    <div className="relative aspect-[9/19] overflow-hidden rounded-[1.6rem] border-[5px] border-[#111318] bg-black shadow-[0_35px_75px_-20px_rgba(0,0,0,0.8)] transition duration-500 motion-safe:hover:-translate-y-2 motion-safe:hover:rotate-1 sm:rounded-[2.2rem] sm:border-[8px]">
                      <Image src={page.mobileImage.src} alt={page.mobileImage.alt} fill sizes="(max-width: 640px) 31vw, 285px" className="object-cover" priority />
                    </div>
                    <figcaption className="mt-2 text-center text-[9px] font-black uppercase tracking-[0.16em] text-muted-foreground sm:text-xs">Mobile + Desktop</figcaption>
                  </div>
                )}
              </figure>
            )}
          </header>
          <div id={isTiketMomo ? "tiketmomo-details" : undefined} className="mx-auto max-w-5xl px-5 lg:px-10">
            {page.sections.map((section) => (
              <section key={section.title} className={`border-t py-12 sm:py-16 ${isTiketMomo ? "border-yellow-400/25" : "border-border/50"}`}>
                <h2 className="text-3xl font-black tracking-tight sm:text-5xl">{section.title}</h2>
                <div className="mt-6 space-y-5 text-lg text-muted-foreground">{section.paragraphs.map((p) => <p key={p}>{p}</p>)}</div>
                {section.bullets && <div className="mt-8"><FeatureList items={section.bullets} /></div>}
              </section>
            ))}
            <section className="border-t border-border/50 py-14">
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl">Questions fréquentes</h2>
              <div className="mt-8 divide-y divide-border/50">
                {page.faq.map((item) => <details key={item.question} className="group py-6"><summary className="cursor-pointer list-none text-xl font-black">{item.question}</summary><p className="mt-4 text-lg text-muted-foreground">{item.answer}</p></details>)}
              </div>
            </section>
          </div>
        </article>
        <section className="mx-auto max-w-7xl px-5 py-14 lg:px-10">
          <h2 className="text-3xl font-black tracking-tight">Autres solutions utiles</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">{related.map((item) => <RelatedCard key={item.slug} href={`/solutions/${item.slug}`} title={item.title} description={item.description} />)}</div>
          <h2 className="mt-16 text-3xl font-black tracking-tight">Guides associés</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">{blogPosts.slice(0, 3).map((item) => <RelatedCard key={item.slug} href={`/blog/${item.slug}`} title={item.title} description={item.description} />)}</div>
        </section>
        <DownloadCta />
      </main>
    </SeoLayout>
  );
}
