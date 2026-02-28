"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Cpu, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen relative selection:bg-primary/30 font-sans tracking-tight">
            {/* Dynamic Background System */}
            <div className="fixed inset-0 -z-10 bg-background transition-colors duration-700 overflow-hidden">
                {/* Animated Glows */}
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[140px] animate-glow opacity-30 dark:opacity-40" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[140px] animate-float opacity-20 dark:opacity-30" />

                {/* Modern Dot Grid (Theme-Aware) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-border)_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] opacity-[0.25] dark:opacity-[0.15] pointer-events-none" />
            </div>

            {/* Professional Navbar */}
            <nav className="sticky top-0 z-50 px-4 py-4 lg:px-12 lg:py-8">
                <div className="max-w-7xl mx-auto glass rounded-2xl lg:rounded-[2.5rem] px-5 lg:px-10 py-3.5 lg:py-5 flex items-center justify-between border-border/40 shadow-xl backdrop-saturate-150">
                    <Link href="/" className="flex items-center gap-3 lg:gap-4 group outline-none">
                        <div className="p-2.5 lg:p-3.5 bg-primary rounded-xl lg:rounded-2xl glow-primary group-hover:scale-110 group-active:scale-95 transition-all duration-500">
                            <Cpu className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
                        </div>
                        <span className="font-black text-xl lg:text-3xl tracking-tighter text-foreground">
                            Mikhmon<span className="text-primary italic">Pro</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-12">
                        {[
                            { name: "Fonctionnalités", href: "#features" },
                            { name: "IA Moailte", href: "#ai" },
                            { name: "Business", href: "#business" },
                            { name: "Support", href: "/support" }
                        ].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-bold text-muted-foreground hover:text-foreground transition-all tracking-wide uppercase hover:translate-y-[-1px] active:translate-y-0"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="h-8 w-[1px] bg-border mx-2" />
                        <ThemeToggle />
                        <Link
                            href="#download"
                            className="px-8 py-4 bg-foreground text-background rounded-2xl font-black text-sm hover:opacity-90 active:scale-95 transition-all shadow-2xl tracking-tighter"
                        >
                            TÉLÉCHARGER
                        </Link>
                    </div>

                    {/* Mobile Right Actions */}
                    <div className="flex lg:hidden items-center gap-4">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2.5 rounded-xl glass border-border/60 text-foreground active:scale-90 transition-transform shadow-lg"
                            aria-label="Toggle Menu"
                        >
                            <AnimatePresence mode="wait">
                                {isMenuOpen ? (
                                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                        <X size={24} />
                                    </motion.div>
                                ) : (
                                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                        <Menu size={24} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ type: "spring", damping: 20, stiffness: 100 }}
                            className="absolute left-4 right-4 top-24 z-40 glass rounded-[2.5rem] p-8 border-border shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] lg:hidden"
                        >
                            <div className="flex flex-col gap-8">
                                {[
                                    { name: "Fonctionnalités", id: "features", isPage: false },
                                    { name: "AI Moailte", id: "ai", isPage: false },
                                    { name: "Business", id: "business", isPage: false },
                                    { name: "Support", id: "support", isPage: true }
                                ].map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.isPage ? `/${item.id}` : `#${item.id}`}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-4xl font-black text-foreground border-b border-border/40 pb-6 tracking-tighter"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <Link
                                    href="#download"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-full py-6 bg-primary text-white rounded-3xl font-black text-2xl text-center shadow-2xl glow-primary active:scale-95 transition-all"
                                >
                                    OBTENIR L'APP
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Content Wrapper */}
            <main className="max-w-7xl mx-auto px-4 lg:px-12 relative pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    {children}
                </motion.div>
            </main>

            {/* Professional Footer */}
            <footer className="py-20 border-t border-border/40 bg-background/50 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-center gap-12">
                    <div className="text-center lg:text-left space-y-4">
                        <p className="font-black text-3xl tracking-tighter text-foreground">
                            Mikhmon<span className="text-primary italic">Pro</span>
                        </p>
                        <p className="text-muted-foreground text-sm font-medium max-w-sm">
                            L&apos;excellence de la gestion Hotspot MikroTik sur Android. Optimisé pour les versions <strong>V6 & V7</strong>.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80 dark:text-muted-foreground">
                        {([
                            { label: "Privacy", href: "/privacy" },
                            { label: "Terms", href: "/terms" },
                            { label: "Support", href: "/support" },
                            { label: "Status", href: "/status" },
                        ] as const).map(item => (
                            <Link key={item.label} href={item.href} className="hover:text-primary transition-colors hover:translate-y-[-1px] dark:hover:text-primary">
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col items-center lg:items-end gap-4">
                        <div className="relative h-10 w-40">
                            <Image
                                src="/jservice_logo.png"
                                alt="J+Services"
                                fill
                                className="object-contain grayscale contrast-200 dark:brightness-[10] dark:contrast-100 opacity-60 dark:opacity-80"
                            />
                        </div>
                        <div className="text-muted-foreground/60 text-[10px] font-bold uppercase tracking-widest">
                            © 2026 J+Services. Tous droits réservés.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
