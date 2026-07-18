import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs, DownloadCta, SeoLayout } from "@/components/layout/SeoLayout";
import { JsonLd } from "@/components/seo/JsonLd";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  canonical: string;
  audience: string;
  image: { src: string; alt: string };
  benefits: { title: string; description: string }[];
  steps: string[];
  cta: string;
  children?: ReactNode;
};

export function AudiencePage({ eyebrow, title, intro, canonical, audience, image, benefits, steps, cta, children }: Props) {
  return (
    <SeoLayout>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebPage", name: title, url: `https://mikhmoai.com${canonical}`, audience: { "@type": "Audience", audienceType: audience }, about: { "@type": "SoftwareApplication", name: "MikhmoAI", alternateName: "MikhmonPro" } }} />
      <main>
        <section className="mx-auto max-w-7xl px-5 pb-16 pt-10 lg:px-10 lg:pb-24 lg:pt-16">
          <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: eyebrow }]} />
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-black uppercase tracking-[0.22em] text-primary">{eyebrow}</p>
              <h1 className="mt-5 text-5xl font-black tracking-tight sm:text-7xl">{title}</h1>
              <p className="mt-7 max-w-4xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">{intro}</p>
            </div>
            <figure className="group relative aspect-[3/2] overflow-hidden rounded-[2.5rem] border border-border/60 bg-muted shadow-2xl">
              <Image src={image.src} alt={image.alt} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" aria-hidden="true" />
              <figcaption className="absolute bottom-5 left-5 rounded-full bg-black/55 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white backdrop-blur-md">Propulsé par MikhmoAI</figcaption>
            </figure>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-[2rem] border border-border/60 bg-card p-7">
                <CheckCircle2 className="h-7 w-7 text-primary" />
                <h2 className="mt-5 text-2xl font-black">{benefit.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{benefit.description}</p>
              </article>
            ))}
          </div>
          <section className="mt-16 rounded-[2.5rem] bg-muted/20 p-7 sm:p-12">
            <h2 className="text-3xl font-black sm:text-5xl">Un déploiement guidé, étape par étape.</h2>
            <ol className="mt-8 grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => <li key={step} className="rounded-2xl bg-background p-6 font-bold"><span className="mr-3 text-primary">0{index + 1}</span>{step}</li>)}
            </ol>
            <Link href="/#download" className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-black text-white">{cta}<ArrowRight className="h-5 w-5" /></Link>
          </section>
          {children}
        </section>
        <DownloadCta />
      </main>
    </SeoLayout>
  );
}
