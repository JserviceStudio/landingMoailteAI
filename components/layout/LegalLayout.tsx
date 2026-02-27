"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { ReactNode } from "react";

interface LegalLayoutProps {
    icon: ReactNode;
    badge: string;
    title: string;
    subtitle: string;
    lastUpdated: string;
    children: ReactNode;
}

export function LegalLayout({ icon, badge, title, subtitle, lastUpdated, children }: LegalLayoutProps) {
    return (
        <div className="min-h-screen bg-background text-foreground">

            {/* Top nav */}
            <nav className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/80">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Retour
                    </Link>
                    <div className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
                        <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
                        <Link href="/support" className="hover:text-foreground transition-colors">Support</Link>
                        <Link href="/status" className="hover:text-foreground transition-colors">Status</Link>
                    </div>
                </div>
            </nav>

            {/* Header héro */}
            <header className="border-b border-border/40 py-20 px-6">
                <div className="max-w-5xl mx-auto space-y-6">
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-muted/30 border border-border/60 text-xs font-black uppercase tracking-widest text-muted-foreground">
                        {icon}
                        {badge}
                    </div>
                    <h1 className="text-5xl lg:text-8xl font-black tracking-tighter leading-none">
                        {title}
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl font-medium leading-relaxed">
                        {subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">
                        Dernière mise à jour : <span className="text-foreground font-bold">{lastUpdated}</span>
                    </p>
                </div>
            </header>

            {/* Content */}
            <main className="max-w-5xl mx-auto px-6 py-20">
                <div className="prose-legal">
                    {children}
                </div>
            </main>

            {/* Footer minimal */}
            <footer className="border-t border-border/40 py-10 px-6">
                <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© 2026 J+Services — MikhmonPro. Tous droits réservés.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link>
                        <Link href="/support" className="hover:text-foreground transition-colors">Support</Link>
                        <a href="mailto:justemoailtepro@gmail.com" className="hover:text-foreground transition-colors inline-flex items-center gap-1">
                            Contact <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>
                </div>
            </footer>

        </div>
    );
}

/* Styles injectés globalement via globals.css ou tailwind prose */
export function Section({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section className="mb-16 pb-16 border-b border-border/40 last:border-0 last:mb-0">
            <h2 className="text-3xl font-black tracking-tight mb-8 text-foreground">{title}</h2>
            <div className="space-y-4 text-muted-foreground font-medium leading-relaxed text-lg">
                {children}
            </div>
        </section>
    );
}

export function SubSection({ title, children }: { title: string; children: ReactNode }) {
    return (
        <div className="mb-8">
            <h3 className="text-xl font-black text-foreground mb-3">{title}</h3>
            <div className="space-y-3 text-muted-foreground font-medium leading-relaxed">
                {children}
            </div>
        </div>
    );
}

export function InfoBox({ children }: { children: ReactNode }) {
    return (
        <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 text-foreground font-medium text-base leading-relaxed">
            {children}
        </div>
    );
}

export function BulletList({ items }: { items: string[] }) {
    return (
        <ul className="space-y-2 pl-0">
            {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}
