import Link from "next/link";
import { ArrowRight, Check, Download, Menu } from "lucide-react";
import type { ReactNode } from "react";

export function SeoLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
          <Link href="/" className="flex items-center gap-3" aria-label="MikhmoAI — Accueil">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 font-black text-white">J+</span>
            <span className="text-xl font-black tracking-tight">Mikhmo<span className="text-primary">AI</span></span>
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-bold text-muted-foreground lg:flex" aria-label="Navigation principale">
            <Link href="/solutions" className="hover:text-foreground">Solutions</Link>
            <Link href="/pour-debutants" className="hover:text-foreground">Débutants</Link>
            <Link href="/pour-techniciens" className="hover:text-foreground">Techniciens</Link>
            <Link href="/providers" className="hover:text-foreground">Entreprises</Link>
            <Link href="/blog" className="hover:text-foreground">Guides MikroTik</Link>
            <Link href="/downloads" className="hover:text-foreground">Téléchargements</Link>
            <Link href="/support" className="hover:text-foreground">Support</Link>
            <Link href="/#download" className="rounded-full bg-primary px-5 py-3 text-primary-foreground hover:opacity-90">Télécharger</Link>
          </nav>
          <Link href="/solutions" className="rounded-full border border-border p-3 lg:hidden" aria-label="Voir les solutions">
            <Menu className="h-5 w-5" />
          </Link>
        </div>
      </header>
      {children}
      <footer className="border-t border-border/50 bg-muted/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3 lg:px-10">
          <div>
            <p className="text-2xl font-black">MikhmoAI</p>
            <p className="mt-3 text-sm text-muted-foreground">MikroTik Hotspot and Monitoring with AI : exploitation, supervision et déploiement automatisé sur Android, Windows et Linux.</p>
          </div>
          <div className="flex flex-col gap-3 text-sm font-semibold">
            <Link href="/solutions">Toutes les solutions</Link>
            <Link href="/pour-debutants">Gestion simple</Link>
            <Link href="/pour-techniciens">Outils techniciens</Link>
            <Link href="/providers">Providers & API</Link>
            <Link href="/downloads">Tous les téléchargements</Link>
            <Link href="/blog">Guides MikroTik</Link>
            <Link href="/support">Support et FAQ</Link>
          </div>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <Link href="/privacy">Confidentialité</Link>
            <Link href="/terms">Conditions d’utilisation</Link>
            <Link href="/account-deletion">Suppression de compte</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Fil d’Ariane" className="flex flex-wrap gap-2 text-sm text-muted-foreground">
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-2">
          {index > 0 && <span aria-hidden="true">/</span>}
          {item.href ? <Link href={item.href} className="hover:text-foreground">{item.label}</Link> : <span aria-current="page">{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function DownloadCta() {
  return (
    <section className="mx-auto my-20 max-w-6xl px-5">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-foreground px-7 py-12 text-background sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] opacity-60">Passez à l’action</p>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">Gérez votre Hotspot sur mobile et ordinateur.</h2>
          <p className="mt-5 text-lg opacity-70">Téléchargez MikhmoAI pour Android, Windows ou Linux et connectez votre premier routeur.</p>
        </div>
        <Link href="/#download" className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-black text-white lg:mt-0">
          <Download className="h-5 w-5" /> Télécharger l’application
        </Link>
      </div>
    </section>
  );
}

export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 rounded-2xl bg-muted/20 p-4 font-semibold text-foreground">
          <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" /> {item}
        </li>
      ))}
    </ul>
  );
}

export function RelatedCard({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link href={href} className="group rounded-[2rem] border border-border/60 bg-card p-7 transition hover:-translate-y-1 hover:border-primary/40">
      <h3 className="text-2xl font-black tracking-tight group-hover:text-primary">{title}</h3>
      <p className="mt-3 text-base text-muted-foreground">{description}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-primary">Découvrir <ArrowRight className="h-4 w-4" /></span>
    </Link>
  );
}
