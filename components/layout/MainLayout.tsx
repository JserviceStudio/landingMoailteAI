"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Globe, Check } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useTranslation, Language } from "@/components/i18n/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "fil", label: "Filipino", flag: "🇵🇭" },
  { code: "id", label: "Indonesia", flag: "🇮🇩" },
];

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const { language, setLanguage, t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    const getWhatsAppLink = () => {
        const textMap = {
            fr: "Bonjour, je souhaite avoir des informations sur MikhmoAI.",
            en: "Hello, I would like to get information about MikhmoAI.",
            fil: "Kamusta, nais ko pong magtanong tungkol sa MikhmoAI.",
            id: "Halo, saya ingin menanyakan informasi tentang MikhmoAI."
        };
        const msg = encodeURIComponent(textMap[language] || textMap.en);
        return `https://wa.me/22996937864?text=${msg}`;
    };

    const currentLanguage = languages.find((lang) => lang.code === language) || languages[0];

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
            <nav className="sticky top-0 z-50 px-4 py-4 xl:px-12 xl:py-8" role="navigation" aria-label={t("nav.logo_label")}>
                <div className="max-w-6xl mx-auto glass elevation-2 rounded-[2rem] xl:rounded-full p-2.5 xl:p-3 flex items-center justify-between border border-border/50 backdrop-saturate-150 shadow-lg transition-all">
                    <Link href="/" className="flex items-center gap-3 xl:gap-4 pl-3 pr-5 py-2 group outline-none rounded-full hover:bg-foreground/5 transition-colors" aria-label={t("nav.logo_label")}>
                        <div className="flex items-center justify-center min-w-[36px] min-h-[36px] lg:min-w-[42px] lg:min-h-[42px] bg-red-600 rounded-full glow-primary group-hover:scale-110 group-active:scale-95 transition-all duration-500 shadow-inner">
                            <span className="font-black text-white text-lg lg:text-xl leading-none">J+</span>
                        </div>
                        <span className="font-black text-xl lg:text-2xl tracking-tighter text-foreground">
                            Moailte<span className="text-primary italic">Studio</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation - Bento Dynamic Style */}
                    <div className="hidden xl:flex items-center gap-3">
                        <div className="flex items-center gap-1 p-1.5 bg-foreground/5 dark:bg-foreground/10 rounded-full border border-border/40 backdrop-blur-md">
                            {[
                                { name: t("nav.features"), href: "#features", ariaLabel: t("nav.features") },
                                { name: t("nav.ai"), href: "#ai", ariaLabel: t("nav.ai") },
                                { name: t("nav.business"), href: "#business", ariaLabel: t("nav.business") },
                                { name: "Desktop", href: "#desktop", ariaLabel: "Application MikhmoAI Desktop" },
                                { name: "Solutions", href: "/solutions", ariaLabel: "Solutions de gestion MikroTik" },
                                { name: "Guides", href: "/blog", ariaLabel: "Guides et tutoriels MikroTik" },
                                { name: t("nav.support"), href: "/support", ariaLabel: t("nav.support") }
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="px-5 py-2.5 text-xs font-black text-muted-foreground hover:text-foreground hover:bg-background/90 transition-all tracking-wider uppercase rounded-full focus-visible:ring-2 focus-visible:ring-primary outline-none"
                                    aria-label={link.ariaLabel}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 p-1.5 bg-foreground/5 dark:bg-foreground/10 rounded-full border border-border/40 backdrop-blur-md">
                            <div className="rounded-full overflow-hidden">
                                <ThemeToggle />
                            </div>
                            <Link
                                href="#download"
                                className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-black text-xs uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-lg focus-visible:ring-2 focus-visible:ring-primary outline-none"
                                aria-label={t("nav.download")}
                            >
                                {t("nav.download")}
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Right Actions - Bento Style */}
                    <div className="flex xl:hidden items-center gap-2 pr-1">
                        <div className="flex items-center gap-1.5 p-1.5 bg-foreground/5 dark:bg-foreground/10 rounded-full border border-border/40">
                            <div className="rounded-full overflow-hidden">
                                <ThemeToggle />
                            </div>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2.5 rounded-full bg-background text-foreground hover:bg-muted active:scale-90 transition-all shadow-sm"
                                aria-label={isMenuOpen ? t("nav.menu_close") : t("nav.menu_open")}
                                aria-expanded={isMenuOpen}
                                aria-controls="mobile-menu"
                            >
                                <AnimatePresence mode="wait">
                                    {isMenuOpen ? (
                                        <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                            <X size={20} />
                                        </motion.div>
                                    ) : (
                                        <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                            <Menu size={20} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
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
                            className="absolute left-4 right-4 top-24 z-40 glass rounded-[2.5rem] p-8 border-border shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] xl:hidden"
                            id="mobile-menu"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Menu mobile de navigation"
                        >
                            <div className="flex flex-col gap-8">
                                {[
                                    { name: t("nav.features"), id: "features", isPage: false, ariaLabel: t("nav.features") },
                                    { name: t("nav.ai"), id: "ai", isPage: false, ariaLabel: t("nav.ai") },
                                    { name: t("nav.business"), id: "business", isPage: false, ariaLabel: t("nav.business") },
                                    { name: "Desktop", id: "desktop", isPage: false, ariaLabel: "Application MikhmoAI Desktop" },
                                    { name: "Solutions", id: "solutions", isPage: true, ariaLabel: "Solutions de gestion MikroTik" },
                                    { name: "Guides", id: "blog", isPage: true, ariaLabel: "Guides et tutoriels MikroTik" },
                                    { name: t("nav.support"), id: "support", isPage: true, ariaLabel: t("nav.support") }
                                ].map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.isPage ? `/${item.id}` : `#${item.id}`}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="text-4xl font-black text-foreground border-b border-border/40 pb-6 tracking-tighter"
                                        aria-label={item.ariaLabel}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <Link
                                    href="#download"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="w-full py-6 bg-primary text-primary-foreground rounded-3xl font-black text-2xl text-center elevation-3 glow-primary m3-state transition-all"
                                    aria-label={t("nav.download")}
                                >
                                    {t("nav.get_app")}
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Content Wrapper */}
            <main className="max-w-7xl mx-auto px-4 lg:px-12 relative pb-32" role="main" aria-label="Contenu principal">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    {children}
                </motion.div>
            </main>

            {/* Professional Footer */}
            <footer className="py-20 border-t border-border/40 bg-background/50 backdrop-blur-md" role="contentinfo" aria-label="Pied de page">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-center gap-12">
                    <div className="text-center lg:text-left space-y-4">
                        <p className="font-black text-3xl tracking-tighter text-foreground">
                            Moailte<span className="text-primary italic"> Studio</span>
                        </p>
                        <p className="text-muted-foreground text-sm font-medium max-w-sm">
                            {t("footer.desc_prefix")}<strong>{t("footer.desc_bold")}</strong>{t("footer.desc_suffix")}
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[11px] font-black uppercase tracking-[0.2em] text-muted-foreground/80 dark:text-muted-foreground">
                        {([
                            { label: t("footer.privacy"), href: "/privacy", aria: t("footer.privacy_aria") },
                            { label: t("footer.terms"), href: "/terms", aria: t("footer.terms_aria") },
                            { label: t("footer.support"), href: "/support", aria: t("footer.support_aria") },
                            { label: t("footer.status"), href: "/status", aria: t("footer.status_aria") },
                            { label: "Solutions", href: "/solutions", aria: "Découvrir les solutions MikroTik" },
                            { label: "Guides", href: "/blog", aria: "Lire les guides MikroTik" },
                        ] as const).map(item => (
                            <Link key={item.label} href={item.href} className="hover:text-primary transition-colors hover:translate-y-[-1px] dark:hover:text-primary focus-visible:text-primary focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 outline-none rounded-md" aria-label={item.aria}>
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    <div className="flex flex-col items-center lg:items-end gap-4">
                        <div className="relative h-10 w-48">
                            <Image
                                src="/moailte-studio-plus.svg"
                                alt="Moailte Studio"
                                fill
                                className="object-contain opacity-80 dark:opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </div>
                        <div className="text-muted-foreground/60 text-[10px] font-bold uppercase tracking-widest">
                            {t("footer.copyright")}
                        </div>
                    </div>
                </div>
            </footer>

            {/* Arrière-plan pour fermer au clic extérieur */}
            {isLangOpen && (
                <div 
                    className="fixed inset-0 z-40 cursor-default" 
                    onClick={() => setIsLangOpen(false)} 
                />
            )}

            {/* Bouton de Sélection de Langue Flottant et son Panneau */}
            <div className="fixed bottom-6 left-6 lg:bottom-10 lg:left-10 z-50">
                <AnimatePresence>
                    {isLangOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute bottom-[calc(100%+16px)] left-0 glass border border-border/60 rounded-[2rem] p-5 elevation-5 flex flex-col gap-4 w-72 sm:w-80 backdrop-blur-2xl overflow-hidden origin-bottom-left"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Sélectionner la langue"
                        >
                            {/* Dégradé lumineux décoratif interne */}
                            <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                            
                            <div className="flex items-center gap-2.5 pb-2 border-b border-border/40">
                                <div className="p-1.5 bg-primary/10 rounded-xl text-primary">
                                    <Globe className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                                        Language / Langue
                                    </h4>
                                    <p className="text-xs font-bold text-foreground">
                                        MikhmoAI International
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2" role="listbox" aria-label="Langues disponibles">
                                {languages.map((lang, idx) => {
                                    const isActive = lang.code === language;
                                    
                                    // Libellés natifs et complémentaires
                                    const subLabels: Record<Language, string> = {
                                        fr: "Français (French)",
                                        en: "English (US)",
                                        fil: "Filipino (Tagalog)",
                                        id: "Bahasa Indonesia"
                                    };

                                    return (
                                        <motion.button
                                            key={lang.code}
                                            type="button"
                                            role="option"
                                            aria-selected={isActive}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: idx * 0.05 }}
                                            onClick={() => {
                                                setLanguage(lang.code);
                                                setIsLangOpen(false);
                                            }}
                                            className={`group/item flex items-center justify-between w-full p-3 rounded-2xl border transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 outline-none text-left cursor-pointer ${
                                                isActive
                                                    ? "bg-primary/10 border-primary/40 text-primary shadow-sm"
                                                    : "bg-muted/10 border-border/30 hover:border-border/60 hover:bg-muted/25 text-muted-foreground hover:text-foreground hover:translate-x-1"
                                            }`}
                                        >
                                            <span className="flex items-center gap-3">
                                                {/* Conteneur de drapeau avec effet de surbrillance */}
                                                <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-lg shadow-sm border transition-colors ${
                                                    isActive 
                                                        ? "bg-background/80 border-primary/30" 
                                                        : "bg-background/40 border-border/40 group-hover/item:bg-background/80"
                                                }`}>
                                                    {lang.flag}
                                                </span>
                                                <span className="flex flex-col">
                                                    <span className="text-xs font-black uppercase tracking-wider">
                                                        {lang.label}
                                                    </span>
                                                    <span className="text-[10px] opacity-60 font-medium">
                                                        {subLabels[lang.code]}
                                                    </span>
                                                </span>
                                            </span>
                                            {isActive && (
                                                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                                                    <Check className="w-3.5 h-3.5 text-primary stroke-[3]" />
                                                </span>
                                            )}
                                        </motion.button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <button
                    type="button"
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    className="mobile-touch relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-muted/20 hover:bg-muted/30 text-foreground border border-border/50 rounded-full elevation-3 backdrop-blur-md m3-state transition-[background-color,transform,box-shadow] duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 outline-none group z-50 cursor-pointer"
                    aria-haspopup="dialog"
                    aria-expanded={isLangOpen}
                    aria-label="Changer de langue / Change language"
                >
                    <div className="flex items-center justify-center gap-1.5 transition-transform duration-500 group-hover:scale-105">
                        <span className="text-xl sm:text-2xl select-none leading-none drop-shadow-sm">
                            {currentLanguage.flag}
                        </span>
                        <span className="text-xs sm:text-sm font-black tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
                            {currentLanguage.code === 'fil' ? 'PH' : currentLanguage.code.toUpperCase()}
                        </span>
                    </div>
                </button>
            </div>

            {/* Bouton WhatsApp Business Flottant */}
            <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] text-white rounded-full shadow-[0_16px_32px_rgba(37,211,102,0.4)] hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-[background-color,transform,box-shadow] duration-300 group focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-4 outline-none"
                aria-label="Discuter avec l'assistant sur WhatsApp"
            >
                {/* Effet pulsant d'appel à l'action */}
                <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping group-hover:animate-none pointer-events-none" aria-hidden="true" />
                
                {/* Badge en ligne vert clair */}
                <span className="absolute -top-1 -right-1 w-5.5 h-5.5 bg-emerald-400 border-4 border-background rounded-full" aria-hidden="true" />
                
                {/* Icône WhatsApp SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>
        </div>
    );
}
