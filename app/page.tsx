"use client";

import MainLayout from "@/components/layout/MainLayout";
import { MotionSection } from "@/components/ui/MotionSection";
import {
  Shield,
  Activity,
  Zap,
  Smartphone,
  ArrowRight,
  Terminal,
  BrainCircuit,
  Layers,
  QrCode,
  Clock,
  Globe,
  ShoppingBag,
  MonitorDown,
  Laptop,
  PackageOpen
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "@/components/i18n/LanguageContext";
import { useState } from "react";
import ApkInstallModal from "@/components/ui/ApkInstallModal";
import { JsonLd } from "@/components/seo/JsonLd";
import DesktopDownloadModal from "@/components/ui/DesktopDownloadModal";
import MobileDownloadModal from "@/components/ui/MobileDownloadModal";

export default function Home() {
  const { t } = useTranslation();
  const [isApkModalOpen, setIsApkModalOpen] = useState(false);
  const [isDesktopModalOpen, setIsDesktopModalOpen] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

  const startMobileDownload = (arch: "arm64" | "arm32") => {
    setIsMobileModalOpen(false);
    setIsApkModalOpen(true);
    window.location.href = `/api/download/latest?arch=${arch}`;
  };

  return (
    <MainLayout>
      <JsonLd data={[
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "MikhmoAI",
          alternateName: "MikhmonPro",
          applicationCategory: "NetworkApplication",
          operatingSystem: "Android, Windows 10, Windows 11, Linux",
          description: "MikroTik Hotspot and Monitoring with AI : suite multiplateforme pour Hotspot, RADIUS, multi-site, VPN, topologie, monitoring et déploiement automatisé.",
          url: "https://mikhmoai.com",
          image: "https://mikhmoai.com/og-image.png",
          author: { "@type": "Organization", name: "Moailte Studio" },
          offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", availability: "https://schema.org/InStock" },
          featureList: ["Gestion Hotspot MikroTik", "Application Desktop Windows et Linux", "Topologie réseau interactive", "Génération de vouchers", "Monitoring en temps réel", "Accès VPN et SSH", "Compatible RouterOS v6 et v7"],
        },
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Moailte Studio",
          alternateName: "J+Services",
          url: "https://mikhmoai.com",
          logo: "https://mikhmoai.com/icon.png",
          email: "justemoailtepro@gmail.com",
          contactPoint: { "@type": "ContactPoint", contactType: "customer support", telephone: "+22941438405", availableLanguage: ["French", "English"] },
        },
      ]} />
      {/* --- ELITE HERO SECTION --- */}
      <MotionSection className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-12 pb-12 lg:pt-24 lg:pb-32 min-h-[90vh] relative px-4 sm:px-6 lg:px-8" aria-labelledby="hero-title">
        <div className="flex-1 space-y-8 text-center lg:text-left z-10" role="region" aria-label="Hero section">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-[0.25em] shadow-sm backdrop-blur-md"
            role="status"
            aria-live="polite"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" aria-hidden="true" />
            <span id="hero-title">{t("hero.badge")}</span>
          </motion.div>

          <div className="space-y-6" role="group" aria-label="Primary information">
            <h1 className="text-[clamp(2.5rem,8vw,7.5rem)] font-black tracking-tighter leading-[0.8] lg:leading-[0.8] text-foreground font-heading uppercase italic text-balance" id="hero-title-main">
              {t("hero.title_prefix")} <br />
              <span className="text-gradient">{t("hero.title_suffix")}</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-3xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-tight font-medium tracking-tight" aria-describedby="hero-title-main">
              {t("hero.desc_prefix")}<span className="text-foreground font-black">{t("hero.desc_bold")}</span>
              {t("hero.desc_suffix")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4 pt-6" role="group" aria-label="Primary actions">
            {/* Un seul point d’entrée Mobile, puis choix ARM64 / ARM32 */}
            <button
              type="button"
              onClick={() => setIsMobileModalOpen(true)}
              className="mobile-touch group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-foreground px-8 py-4 text-center text-lg font-black text-background shadow-[0_24px_48px_-12px_rgba(0,0,0,0.4)] transition-[transform,opacity,box-shadow] hover:-translate-y-1 hover:opacity-90 hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 sm:w-auto sm:px-10 sm:py-5 lg:px-12 lg:py-6 lg:text-2xl"
              aria-label="Télécharger MikhmoAI Mobile pour Android"
            >
              <Smartphone className="h-6 w-6 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
              Télécharger Mobile
            </button>

            {/* Un seul point d’entrée Desktop, puis choix Windows / Linux */}
            <button
              type="button"
              onClick={() => setIsDesktopModalOpen(true)}
              className="mobile-touch group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-blue-600 px-8 py-4 text-center text-lg font-black text-white shadow-[0_24px_48px_-12px_rgba(37,99,235,0.55)] transition-[transform,background-color,box-shadow] hover:-translate-y-1 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 sm:w-auto sm:px-10 sm:py-5 lg:px-12 lg:py-6 lg:text-2xl"
              aria-label="Télécharger MikhmoAI Desktop pour Windows ou Linux"
            >
              <MonitorDown className="h-6 w-6 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
              Télécharger Bureau
            </button>

            {/* Bouton Boutique */}
            <a
              href="https://store.mikhmoai.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-touch group relative flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6 bg-yellow-400 text-black rounded-full font-black text-lg sm:text-xl lg:text-2xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(250,204,21,0.4)] transition-[transform,opacity,box-shadow] w-full sm:w-auto text-center justify-center hover:opacity-90 hover:shadow-yellow-400/30 focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 outline-none"
              aria-label={t("hero.btn_store_label")}
              role="button"
            >
              {/* Effet Pulse/Ping pour attirer l'attention */}
              <span className="absolute inset-0 rounded-full border-2 border-yellow-400 animate-ping opacity-30 pointer-events-none" />
              
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
              <ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform" aria-hidden="true" />
              {t("hero.btn_store")}
            </a>

            {/* Bouton Features */}
            <Link
              href="#features"
              className="mobile-touch flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6 text-muted-foreground hover:text-foreground rounded-full font-black text-lg sm:text-xl lg:text-2xl transition-[color,transform] w-full sm:w-auto text-center justify-center underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 outline-none"
              aria-label={t("hero.btn_features_label")}
              role="button"
            >
              {t("hero.btn_features")}
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <motion.div
          className="flex-1 relative w-full flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, type: "spring", damping: 15 }}
          role="img"
          aria-label={t("hero.img_alt")}
        >
          {/* Mobile-first: conserver le mockup mobile actuel sur petits écrans. */}
          <div className="group relative w-full max-w-[500px] lg:hidden">
            <div className="absolute inset-x-0 -bottom-20 -top-20 rounded-full bg-primary/20 blur-[180px] opacity-50" />
            <div className="glass relative rounded-[2.5rem] border-border p-4 shadow-[0_45px_90px_-15px_rgba(0,0,0,0.5)] sm:rounded-[3.5rem]">
              <Image src="/hotspot_management.png" alt={t("hero.img_alt")} width={600} height={1200} className="rounded-[2rem] object-cover shadow-2xl sm:rounded-[3rem]" priority loading="eager" />
            </div>
          </div>

          {/* Desktop: la suite complète en arrière-plan, l’app mobile au premier plan. */}
          <div className="relative hidden min-h-[610px] w-full max-w-[780px] lg:block xl:min-h-[690px] xl:max-w-[900px]">
            <div className="absolute inset-[8%] rounded-full bg-blue-500/20 blur-[140px]" aria-hidden="true" />

            <motion.div initial={{ opacity: 0, x: 50, rotate: 2 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: 1, delay: 0.15 }} className="absolute left-0 top-[12%] w-[94%]">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#141821] p-2.5 shadow-[0_55px_120px_-35px_rgba(0,0,0,0.75)]">
                <div className="flex h-9 items-center gap-1.5 rounded-t-xl bg-[#272b35] px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  <span className="ml-3 text-[9px] font-black uppercase tracking-[0.2em] text-white/40">MikhmoAI Desktop</span>
                </div>
                <div className="relative aspect-[1.86] overflow-hidden rounded-b-xl bg-white">
                  <Image src="/mikhmonpro-desktop-dashboard.png" alt="MikhmoAI Desktop — console de supervision MikroTik et WISP" fill sizes="(max-width: 1280px) 55vw, 720px" className="object-cover" priority />
                </div>
              </div>
              <div className="mx-auto h-16 w-24 bg-gradient-to-b from-[#292d37] to-[#12151b]" aria-hidden="true" />
              <div className="mx-auto h-3 w-64 rounded-full bg-[#171a20] shadow-xl" aria-hidden="true" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 60, rotate: 6 }} animate={{ opacity: 1, y: 0, rotate: 3 }} transition={{ duration: 1.1, delay: 0.35, type: "spring" }} className="absolute bottom-0 right-0 z-20 w-[31%] min-w-[220px] xl:w-[29%]">
              <div className="rounded-[2.4rem] border-[7px] border-[#161922] bg-[#161922] p-1 shadow-[0_45px_90px_-20px_rgba(0,0,0,0.8)] xl:rounded-[3rem] xl:border-[9px]">
                <Image src="/hotspot_management.png" alt="Application mobile MikhmoAI devant la version Desktop" width={600} height={1200} className="rounded-[1.9rem] object-cover xl:rounded-[2.4rem]" priority />
              </div>
              <div className="absolute -left-5 top-20 rounded-2xl border border-white/10 bg-[#111827]/90 px-4 py-3 text-white shadow-xl backdrop-blur-xl">
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-300">Mobile + Desktop</p>
                <p className="mt-1 text-sm font-black">Une seule suite</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </MotionSection>

      <MotionSection className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24" aria-labelledby="audiences-title">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="font-black uppercase tracking-[0.22em] text-primary">Une plateforme, trois parcours</p>
            <h2 id="audiences-title" className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">Bien plus qu’une application de gestion Hotspot.</h2>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">MikhmoAI — MikroTik Hotspot and Monitoring with AI — accompagne aussi bien le débutant que le technicien réseau et le provider qui déploie ses services à grande échelle.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              { href: "/pour-debutants", label: "Gestion simple", title: "Je veux exploiter mon Wi-Fi simplement", text: "Tickets, utilisateurs, portail captif et ventes, sans apprendre toutes les commandes RouterOS.", icon: Smartphone, image: "/audience-jeunes-entrepreneurs-wifi.png", alt: "Jeunes entrepreneurs souriants utilisant MikhmoAI" },
              { href: "/pour-techniciens", label: "Outils techniques", title: "Je gère des réseaux MikroTik", text: "Topologie, carte terrain, terminal, diagnostics, VPN, SSH et exploitation multi-site.", icon: Layers, image: "/audience-techniciens-reseau-terrain.png", alt: "Techniciens réseau équipés sur un chantier télécom" },
              { href: "/providers", label: "Entreprise & API", title: "Je déploie des services à l’échelle", text: "RADIUS multi-NAS, automatisation, API et distribution de services pour clients et partenaires.", icon: Globe, image: "/audience-dirigeants-provider.png", alt: "Dirigeants réunis pour un partenariat technologique" },
            ].map((item) => {
              const Icon = item.icon;
              return <Link key={item.href} href={item.href} className="group overflow-hidden rounded-[2.25rem] border border-border/60 bg-card transition duration-500 motion-safe:hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image src={item.image} alt={item.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" aria-hidden="true" />
                  <Icon className="absolute bottom-5 left-5 h-11 w-11 rounded-2xl bg-white/90 p-2.5 text-primary shadow-xl backdrop-blur" aria-hidden="true" />
                </div>
                <div className="p-8">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">{item.label}</p>
                  <h3 className="mt-3 text-3xl font-black tracking-tight">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{item.text}</p>
                  <span className="mt-7 inline-flex items-center gap-2 font-black text-primary">Découvrir <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></span>
                </div>
              </Link>;
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24" aria-labelledby="mobile-showcase-title">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-black uppercase tracking-[0.22em] text-orange-500">MikhmoAI Mobile</p>
            <h2 id="mobile-showcase-title" className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">Votre infrastructure MikroTik dans votre poche.</h2>
            <p className="mt-6 text-xl leading-relaxed text-muted-foreground">Supervisez les connexions, créez des vouchers, pilotez vos routeurs, analysez vos ventes et déployez un accès VPN sécurisé directement depuis Android.</p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6 lg:gap-5">
            {[
              { src: "/mikhmoai-mobile-dashboard-hotspot-radius.jpeg", alt: "Dashboard mobile MikhmoAI avec sessions Hotspot, PPP, ventes et RADIUS", label: "Dashboard" },
              { src: "/mikhmoai-mobile-sessions-hotspot-actives.jpeg", alt: "Utilisateurs et sessions Hotspot MikroTik actifs dans MikhmoAI Mobile", label: "Sessions" },
              { src: "/mikhmoai-mobile-generateur-vouchers.jpeg", alt: "Générateur mobile de vouchers MikroTik par lots", label: "Vouchers" },
              { src: "/mikhmoai-mobile-console-routeros.jpeg", alt: "Console RouterOS V7 sur l'application mobile MikhmoAI", label: "RouterOS" },
              { src: "/mikhmoai-mobile-assistant-ia.jpeg", alt: "Assistant Moailte AI analysant le réseau et les ventes", label: "Assistant IA" },
              { src: "/mikhmoai-mobile-wizard-vpn.jpeg", alt: "Assistant VPN Premium pour accès distant sécurisé à MikroTik", label: "VPN sécurisé" },
            ].map((screen, index) => (
              <figure key={screen.src} className={`group relative ${index > 3 ? "hidden sm:block" : ""}`}>
                <div className="relative aspect-[9/19] overflow-hidden rounded-[1.75rem] bg-black shadow-[0_30px_70px_-30px_rgba(0,0,0,0.8)] transition duration-500 motion-safe:group-hover:-translate-y-3 motion-safe:group-hover:rotate-1">
                  <Image src={screen.src} alt={screen.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw" className="object-cover" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10" aria-hidden="true" />
                </div>
                <figcaption className="mt-4 text-center text-xs font-black uppercase tracking-[0.16em] text-muted-foreground">{screen.label}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/solutions/application-mikrotik-android" className="inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-4 font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-orange-400">Explorer l’application mobile <ArrowRight className="h-5 w-5" /></Link>
          </div>
        </div>
      </MotionSection>

      {/* --- AI MOAILTE EXPERIENCE --- */}
      <MotionSection id="ai" className="py-16 lg:py-24" aria-labelledby="ai-title">
        <div className="relative glass p-6 sm:p-12 lg:p-20 xl:p-28 rounded-[3rem] sm:rounded-[4.5rem] lg:rounded-[5.5rem] border-border bg-gradient-to-br from-primary/5 via-transparent to-accent/5 overflow-hidden" role="region" aria-label="AI Section">
          <BrainCircuit className="absolute -right-20 -bottom-20 w-[30rem] h-[30rem] opacity-[0.03] text-primary rotate-12" aria-hidden="true" />

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10" role="group" aria-label="AI Content">
            <div className="relative group max-w-full" role="figure" aria-label={t("ai.img_alt")}>
              <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full group-hover:bg-accent/40 transition-colors duration-1000" aria-hidden="true" />
              <motion.div className="animate-float flex justify-center">
                <Image
                  src="/moailt.png"
                  alt={t("ai.img_alt")}
                  width={380}
                  height={380}
                  className="relative drop-shadow-[0_0_60px_rgba(34,211,238,0.3)] filter brightness-110 max-w-[260px] sm:max-w-[340px] lg:max-w-full h-auto object-contain"
                  priority={true}
                />
              </motion.div>
            </div>

            <div className="space-y-10 text-center lg:text-left flex-1" role="group" aria-label="AI Description">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/10 text-accent text-xs font-black uppercase tracking-[0.3em] border border-accent/20 backdrop-blur-md" role="status" aria-live="polite">
                <BrainCircuit className="w-4 h-4" aria-hidden="true" />
                <span id="ai-title">{t("ai.badge")}</span>
              </div>
              <h2 className="text-[clamp(2rem,6vw,5.5rem)] font-black text-foreground leading-[0.9] tracking-tighter uppercase italic font-heading text-balance" id="ai-subtitle">
                {t("ai.title_prefix")} <br /> <span className="text-accent underline decoration-8 underline-offset-[8px] lg:underline-offset-[12px] decoration-accent/20">{t("ai.title_underline")}</span>{t("ai.title_suffix")}
              </h2>
              <p className="text-lg sm:text-xl lg:text-3xl text-muted-foreground max-w-5xl leading-tight font-medium tracking-tight" aria-describedby="ai-subtitle">
                {t("ai.desc_prefix")}<span className="text-foreground font-black">{t("ai.desc_bold")}</span>{t("ai.desc_suffix")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8" role="list" aria-label="AI features">
                <div className="p-6 sm:p-8 lg:p-10 bg-muted/20 border border-border rounded-[2rem] sm:rounded-[3rem] group hover:bg-muted/40 transition-colors duration-500" role="listitem">
                  <h4 className="font-black text-xl sm:text-2xl mb-3 tracking-tight">{t("ai.feature_tickets_title")}</h4>
                  <p className="text-muted-foreground text-base sm:text-lg font-medium leading-snug">{t("ai.feature_tickets_desc")}</p>
                </div>
                <div className="p-6 sm:p-8 lg:p-10 bg-muted/20 border border-border rounded-[2rem] sm:rounded-[3rem] group hover:bg-muted/40 transition-colors duration-500" role="listitem">
                  <h4 className="font-black text-xl sm:text-2xl mb-3 tracking-tight">{t("ai.feature_maint_title")}</h4>
                  <p className="text-muted-foreground text-base sm:text-lg font-medium leading-snug">{t("ai.feature_maint_desc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* --- PERFORMANCE STATS HORIZONTAL SLIDE --- */}
      <MotionSection className="py-20 lg:py-32" aria-label="Performance Stats">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:px-2" role="list" aria-label="Performance metrics">
          {[
            { value: t("stats.polling_val"), label: t("stats.polling_lbl"), icon: Activity, color: "text-blue-500", bg: "bg-blue-500/10" },
            { value: t("stats.gen_val"), label: t("stats.gen_lbl"), icon: Zap, color: "text-orange-500", bg: "bg-orange-500/10" },
            { value: t("stats.fps_val"), label: t("stats.fps_lbl"), icon: Smartphone, color: "text-red-500", bg: "bg-red-500/10" },
            { value: t("stats.sec_val"), label: t("stats.sec_lbl"), icon: Shield, color: "text-green-500", bg: "bg-green-500/10" },
          ].map((stat, i) => (
            <div key={i} className="p-8 sm:p-10 lg:p-12 xl:p-14 glass rounded-[2.5rem] sm:rounded-[3.5rem] lg:rounded-[4rem] border-border/80 hover:translate-y-[-10px] transition-transform duration-700 group cursor-default" role="listitem" aria-label={`${stat.label}: ${stat.value}`}>
              <div className={`p-4 sm:p-5 lg:p-6 ${stat.bg} rounded-2xl sm:rounded-[2rem] w-fit ${stat.color} mb-6 lg:mb-8 group-hover:scale-110 transition-transform`} aria-hidden="true">
                <stat.icon className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9" aria-hidden="true" />
              </div>
              <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter mb-3 sm:mb-4 text-foreground leading-none">{stat.value}</p>
              <p className="text-[10px] sm:text-[11px] lg:text-[12px] text-muted-foreground uppercase tracking-[0.4em] font-black leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      {/* --- ELITE SPECIFICATIONS BENTO GRID --- */}
      <MotionSection id="features" className="py-16 lg:py-24 space-y-16 lg:space-y-24" aria-labelledby="features-title">
        <div className="text-center space-y-6" role="region" aria-label="Bento Header">
          <h2 className="text-[clamp(2rem,6vw,5.5rem)] font-black tracking-tighter leading-[0.8] lg:leading-[0.8] uppercase font-heading italic text-balance" id="features-title">
            {t("features.title_prefix")} <br /> <span className="text-gradient underline decoration-8 underline-offset-[12px] lg:underline-offset-[16px] decoration-primary/20">{t("features.title_underline")}</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto font-medium tracking-tight leading-tight" aria-describedby="features-title">
            {t("features.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 min-h-[900px]" role="region" aria-label="Specifications Bento Grid">
          {/* Bento Item 1: Large Content */}
          <div className="lg:col-span-8 m3-card m3-state p-0 relative overflow-hidden group min-h-[480px] lg:min-h-[600px] flex flex-col lg:flex-row" role="article" aria-label={t("features.bento_ssh_title")}>
            <div className="flex-1 p-6 sm:p-12 lg:p-20 flex flex-col justify-center relative z-10 space-y-6 sm:space-y-8" role="group" aria-label="SSH description">
              <div className="p-5 sm:p-6 bg-primary/10 rounded-2xl sm:rounded-3xl w-fit" aria-hidden="true">
                <Terminal className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 text-primary" aria-hidden="true" />
              </div>
              <h3 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-[0.9] text-foreground text-balance">
                {t("features.bento_ssh_title")}
              </h3>
              <p className="text-base sm:text-xl lg:text-2xl text-muted-foreground font-medium tracking-tight leading-tight">
                {t("features.bento_ssh_desc_prefix")}<span className="text-foreground font-black">{t("features.bento_ssh_desc_bold")}</span>{t("features.bento_ssh_desc_suffix")}
              </p>
            </div>
            <div className="relative flex-1 lg:h-full min-h-[250px] lg:min-h-0 bg-primary/5">
              <Image
                src="/performance_securite.png"
                alt={t("features.bento_ssh_img_alt")}
                fill
                className="object-cover object-left-top lg:object-left"
                loading="lazy"
              />
            </div>
          </div>

          {/* Bento Item 2 & 3: Compact stack */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-10" role="region" aria-label="Compact Features">
            <div className="m3-card m3-state p-0 group overflow-hidden relative flex flex-col min-h-[350px]" role="article" aria-label={t("features.bento_vouchers_title")}>
              <div className="p-8 sm:p-10 lg:p-12 xl:p-16 flex-1 flex flex-col relative z-10">
                <QrCode className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-accent mb-6 sm:mb-10 group-hover:rotate-12 transition-transform" aria-hidden="true" />
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 sm:mb-6 tracking-tighter leading-none">{t("features.bento_vouchers_title")}</h3>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground font-medium leading-tight">{t("features.bento_vouchers_desc")}</p>
              </div>
              <div className="relative w-full h-32 sm:h-40 bg-accent/5 mt-auto">
                <Image src="/gestion_vouchers_simplifiee.png" alt={t("features.bento_vouchers_img_alt")} fill className="object-cover object-top opacity-60 group-hover:opacity-100 transition-opacity" loading="lazy" />
              </div>
            </div>
            
            <div className="m3-card m3-state p-8 sm:p-10 lg:p-12 xl:p-16 group relative overflow-hidden" role="article" aria-label={t("features.bento_simple_title")}>
              <Layers className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-primary mb-6 sm:mb-10 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black mb-4 sm:mb-6 tracking-tighter leading-none">{t("features.bento_simple_title")}</h3>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground font-medium leading-tight">{t("features.bento_simple_desc")}</p>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* --- SECTION BUSINESS / PARTENAIRES --- */}
      <MotionSection id="business" className="py-20 lg:py-32 space-y-16 lg:space-y-24" aria-labelledby="business-title">
        {/* Header */}
        <div className="text-center space-y-6" role="region" aria-label="Business Header">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-black uppercase tracking-[0.25em] backdrop-blur-md" role="status" aria-live="polite">
            <Globe className="w-4 h-4" aria-hidden="true" />
            <span id="business-title">{t("business.badge")}</span>
          </div>
          <h2 className="text-[clamp(2rem,6vw,5.5rem)] font-black tracking-tighter leading-[0.8] lg:leading-[0.8] uppercase font-heading italic text-balance" id="business-subtitle">
            {t("business.title_prefix")}<br />
            <span className="text-gradient">{t("business.title_gradient")}</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto font-medium tracking-tight leading-tight" aria-describedby="business-subtitle">
            {t("business.desc_prefix")}<span className="text-foreground font-black">{t("business.desc_bold_1")}</span>{t("business.desc_middle")}<span className="text-foreground font-black">{t("business.desc_bold_2")}</span>{t("business.desc_suffix")}
          </p>
        </div>

        {/* Bento Business Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10" role="group" aria-label="Business Solutions">
          {/* Card 1 — Boutique Web SaaS */}
          <div className="m3-card m3-state p-0 relative overflow-hidden group min-h-[450px] lg:min-h-[500px] flex flex-col" role="article" aria-label="Web Store">
            {/* Top section with edge-to-edge image */}
            <div className="relative w-full h-48 sm:h-64 lg:h-80 bg-primary/5">
              <Image src="/web_store_cloud_revenue.png" alt="Revenue stats" fill className="object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
            </div>
            
            <div className="p-6 sm:p-12 lg:p-16 xl:p-20 flex-1 flex flex-col relative z-10 -mt-16 sm:-mt-24">
              <div className="space-y-6 sm:space-y-8" role="group" aria-label="Web Store Info">
                <div className="p-4 sm:p-5 bg-background rounded-2xl sm:rounded-3xl w-fit shadow-lg border border-border" aria-hidden="true">
                  <Globe className="w-10 h-10 sm:w-12 sm:h-12 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-black uppercase tracking-wider mb-4 border border-green-500/20 animate-pulse" role="status" aria-live="polite">
                    {t("business.card_store_badge")}
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter leading-none mb-4 sm:mb-6">
                    {t("business.card_store_title_prefix")}<br /><span className="text-primary">{t("business.card_store_title_gradient")}</span>
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl text-muted-foreground font-medium leading-relaxed">
                    {t("business.card_store_desc")}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-8 mt-auto" role="list" aria-label="Web Store Features">
              {[
                { label: t("business.card_store_f1_lbl"), desc: t("business.card_store_f1_desc") },
                { label: t("business.card_store_f2_lbl"), desc: t("business.card_store_f2_desc") },
                { label: t("business.card_store_f3_lbl"), desc: t("business.card_store_f3_desc") },
                { label: t("business.card_store_f4_lbl"), desc: t("business.card_store_f4_desc") },
              ].map((f, i) => (
                <div key={i} className="p-4 sm:p-5 bg-muted/20 rounded-2xl sm:rounded-3xl border border-border/60" role="listitem">
                  <p className="text-xs sm:text-sm font-black text-foreground tracking-tight">{f.label}</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground font-medium mt-1 leading-none">{f.desc}</p>
                </div>
              ))}
            </div>
            </div>
          </div>
 
          {/* Card 2 — VPN + Multi-Passerelles + API */}
          <div className="flex flex-col gap-8 lg:gap-10" role="region" aria-label="VPN & API Solutions">
            {/* VPN Gateway */}
            <div className="m3-card m3-state p-6 sm:p-12 lg:p-14 relative overflow-hidden group flex-1" role="article" aria-label="VPN Gateway">
              <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-accent/5 rounded-full blur-[60px] group-hover:bg-accent/10 transition-all duration-1000" aria-hidden="true" />
              <div className="relative z-10 space-y-4 sm:space-y-6" role="group" aria-label="VPN info">
                <div className="p-4 sm:p-5 bg-accent/10 rounded-2xl sm:rounded-3xl w-fit" aria-hidden="true">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-accent" aria-hidden="true" />
                </div>
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tighter leading-none">
                  {t("business.card_vpn_title")}
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed">
                  {t("business.card_vpn_desc_prefix")}<span className="text-foreground font-black">{t("business.card_vpn_desc_bold")}</span>{t("business.card_vpn_desc_suffix")}
                </p>
                <div className="flex flex-wrap gap-2 pt-2" role="list" aria-label="Connection types">
                  {["VPN Tunnel", "SSL/TLS", "QR Config", "Multi-router", "REST + Native"].map(tag => (
                    <span key={tag} className="px-3.5 py-1.5 bg-accent/10 text-accent text-[9px] sm:text-[10px] font-black uppercase tracking-wider rounded-full border border-accent/20" role="listitem">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
  
            {/* API & Développeurs */}
            <div className="m3-card m3-state p-6 sm:p-12 lg:p-14 relative overflow-hidden group" role="article" aria-label="Developer API">
              <div className="relative z-10 space-y-4 sm:space-y-6" role="group" aria-label="API info">
                <div className="p-4 sm:p-5 bg-muted/30 rounded-2xl sm:rounded-3xl w-fit" aria-hidden="true">
                  <Terminal className="w-8 h-8 sm:w-10 sm:h-10 text-foreground" aria-hidden="true" />
                </div>
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tighter leading-none">
                  {t("business.card_api_title")}
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed">
                  {t("business.card_api_desc_prefix")}<span className="text-foreground font-black">{t("business.card_api_desc_bold_1")}</span>{t("business.card_api_desc_middle")}<span className="text-foreground font-black">{t("business.card_api_desc_bold_2")}</span>{t("business.card_api_desc_suffix")}
                </p>
                
                {/* Scrollable Code block on mobile */}
                <div className="p-5 sm:p-6 bg-black/60 dark:bg-black/40 rounded-xl sm:rounded-2xl border border-white/10 font-mono text-xs sm:text-sm shadow-2xl overflow-x-auto relative group/code" role="region" aria-label="Code example">
                  <div className="absolute top-0 right-0 p-3 opacity-20 group-hover/code:opacity-40 transition-opacity" aria-hidden="true">
                    <Terminal className="w-4 h-4 text-white" aria-hidden="true" />
                  </div>
                  <div className="space-y-1 min-w-[280px]" role="list" aria-label="API endpoints">
                    <p role="listitem"><span className="text-emerald-400 font-bold tracking-widest">POST</span> <span className="text-white/80">/api/vouchers/generate</span></p>
                    <p role="listitem"><span className="text-emerald-400 font-bold tracking-widest">GET</span>&nbsp; <span className="text-white/80">/api/stock/&#123;profile&#125;</span></p>
                    <p role="listitem"><span className="text-blue-400 font-bold tracking-widest">WS</span>&nbsp;&nbsp; <span className="text-white/80">/sync/realtime</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        {/* CTA Partenariat */}
        <div className="text-center p-6 sm:p-12 lg:p-16 xl:p-20 m3-card space-y-6 sm:space-y-8" role="region" aria-label="Partnership call to action">
          <h3 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter text-foreground text-balance">
            {t("business.cta_title_prefix")} <span className="text-gradient">{t("business.cta_title_gradient")}</span>
          </h3>
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-muted-foreground max-w-4xl mx-auto font-medium tracking-tight leading-tight">
            {t("business.cta_desc")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 pt-4" role="group" aria-label="Partnership actions">
            <a
              href="mailto:justemoailtepro@gmail.com"
              className="mobile-touch inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6 bg-foreground text-background rounded-full font-black text-base sm:text-lg lg:text-xl hover:opacity-90 transition-[opacity,transform,box-shadow] shadow-2xl justify-center focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 outline-none"
              role="button"
              aria-label={t("business.cta_btn_email_label")}
            >
              <Globe className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
              {t("business.cta_btn_email")}
            </a>
            <a
              href="https://wa.me/22941438405?text=Bonjour%2C%20je%20souhaite%20devenir%20partenaire%20MikhmoAI."
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-touch inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6 bg-green-500 text-white rounded-full font-black text-base sm:text-lg lg:text-xl hover:bg-green-600 transition-[background-color,transform,box-shadow] shadow-2xl justify-center focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 outline-none"
              role="button"
              aria-label={t("business.cta_btn_whatsapp_label")}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("business.cta_btn_whatsapp")}
            </a>
          </div>
          <div className="pt-4" role="group" aria-label="Support links">
            <Link
              href="/support"
              className="text-muted-foreground hover:text-foreground font-bold text-sm underline underline-offset-4 transition-colors focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-4 outline-none rounded-md"
              aria-label={t("business.cta_doc_link_label")}
            >
              {t("business.cta_doc_link")}
            </Link>
          </div>
        </div>
      </MotionSection>

      {/* --- DESKTOP SUITE SHOWCASE --- */}
      <MotionSection id="desktop" className="py-20 lg:py-32" aria-labelledby="desktop-title">
        <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.25em] text-orange-500">
              <MonitorDown className="h-4 w-4" aria-hidden="true" />
              MikhmoAI Desktop V7
            </div>
            <div className="space-y-6">
              <h2 id="desktop-title" className="text-[clamp(2.5rem,6vw,5.5rem)] font-black uppercase italic leading-[0.88] tracking-tighter text-foreground">
                Votre réseau. <span className="text-gradient">Sur grand écran.</span>
              </h2>
              <p className="text-xl font-medium leading-tight text-muted-foreground lg:text-2xl">
                La suite MikhmoAI est maintenant disponible sur ordinateur. Supervisez vos topologies, cartes terrain, terminaux RouterOS et ventes Hotspot depuis un espace de travail complet.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start" aria-label="Fonctionnalités Desktop">
              {["Topologie interactive", "Terminal SSH", "Cartographie WISP", "Portail captif"].map((feature) => (
                <span key={feature} className="rounded-full border border-border/60 bg-muted/20 px-4 py-2 text-sm font-bold text-foreground">{feature}</span>
              ))}
            </div>
            <div className="flex flex-col justify-center gap-4 pt-2 sm:flex-row lg:justify-start">
              <a href="/api/download/latest?platform=windows&arch=x64" className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0b62d6] px-7 py-4 font-black text-white shadow-xl shadow-blue-600/20 transition hover:-translate-y-1 hover:bg-blue-600">
                <MonitorDown className="h-5 w-5" /> Télécharger pour Windows
              </a>
              <a href="/api/download/latest?platform=linux&arch=x64" className="group inline-flex items-center justify-center gap-3 rounded-full border border-border bg-foreground px-7 py-4 font-black text-background transition hover:-translate-y-1">
                <PackageOpen className="h-5 w-5" /> Télécharger pour Linux
              </a>
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Windows 10/11 · Linux x86_64 · Mise à jour automatique</p>
          </div>

          <div className="relative mx-auto w-full max-w-[900px] pb-20 sm:pb-28" role="img" aria-label="MikhmoAI Desktop affiché sur un ordinateur de bureau et un ordinateur portable">
            <div className="absolute inset-x-[8%] top-[8%] h-[70%] rounded-full bg-orange-500/20 blur-[110px]" aria-hidden="true" />

            {/* Desktop monitor */}
            <div className="relative rounded-[1.4rem] border border-white/10 bg-[#151820] p-2 shadow-[0_45px_100px_-30px_rgba(0,0,0,0.65)] sm:rounded-[2rem] sm:p-3">
              <div className="flex h-7 items-center gap-1.5 rounded-t-xl bg-[#252934] px-4 sm:h-9">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-yellow-400" />
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span className="ml-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">MikhmoAI Desktop</span>
              </div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-b-xl bg-white">
                <Image src="/mikhmonpro-desktop-dashboard.png" alt="Tableau de bord MikhmoAI Desktop avec monitoring MikroTik, trafic, Hotspot et finances" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" priority />
              </div>
            </div>
            <div className="relative mx-auto h-16 w-20 bg-gradient-to-b from-[#252934] to-[#11131a] sm:h-20 sm:w-28" aria-hidden="true" />
            <div className="relative mx-auto h-3 w-52 rounded-full bg-[#171a22] shadow-xl sm:w-72" aria-hidden="true" />

            {/* Laptop mockup */}
            <motion.div initial={{ opacity: 0, x: 30, y: 20 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} className="absolute -bottom-2 right-0 w-[46%] sm:-right-5 sm:w-[48%]">
              <div className="rounded-t-xl border-[5px] border-[#20232c] bg-[#20232c] p-1 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.7)] sm:rounded-t-2xl sm:border-[8px]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-white">
                  <Image src="/mikhmonpro-desktop-dashboard.png" alt="Application MikhmoAI sur ordinateur portable" fill sizes="(max-width: 1024px) 45vw, 28vw" className="object-cover object-left" />
                </div>
              </div>
              <div className="relative -left-[5%] h-3 w-[110%] rounded-b-xl bg-gradient-to-b from-[#4b4f59] to-[#1b1e25] shadow-lg sm:h-4">
                <div className="mx-auto h-1 w-1/4 rounded-b bg-black/30" />
              </div>
            </motion.div>
            <div className="absolute bottom-3 left-2 hidden items-center gap-2 rounded-2xl border border-border/50 bg-background/90 px-4 py-3 text-sm font-black shadow-xl backdrop-blur-xl sm:flex">
              <Laptop className="h-5 w-5 text-orange-500" /> Une seule suite, tous vos écrans
            </div>
          </div>
        </div>
      </MotionSection>

      {/* --- ELITE PRESTIGE CTA --- */}
      <MotionSection id="download" className="py-20 lg:py-32" aria-labelledby="download-title">
        <div className="relative p-6 sm:p-16 lg:p-28 xl:p-32 rounded-[2.5rem] sm:rounded-[4rem] lg:rounded-[6rem] overflow-hidden text-center space-y-12 sm:space-y-16 lg:space-y-20 shadow-[0_80px_160px_-40px_rgba(0,0,0,0.6)]" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #000000 100%)' }} role="region" aria-label="Download final section">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay pointer-events-none" aria-hidden="true" />

          <div className="flex justify-center mb-6 lg:mb-12 relative z-10">
            <Image
              src="/moailte-studio-logo.png"
              alt="Logo MOAILTE STUDIO"
              width={160}
              height={160}
              className="object-contain hover:scale-110 transition-transform duration-700 max-w-[120px] sm:max-w-full"
            />
          </div>

          <div className="space-y-6 lg:space-y-8 relative z-10" role="group" aria-label="Download details">
            <h2 className="text-[clamp(2rem,6vw,5.5rem)] font-black text-white tracking-tighter italic leading-[0.8] lg:leading-[0.8] font-heading text-balance" id="download-title">
              {t("download.title")}
            </h2>
            <p className="text-white/60 text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-medium tracking-tight max-w-4xl mx-auto uppercase" aria-describedby="download-title">
              {t("download.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 justify-center gap-6 xl:gap-8 relative z-10 items-stretch w-full" role="group" aria-label="Téléchargements MikhmoAI pour Windows, Linux et Android">
            {/* Windows Desktop */}
            <motion.a
              href="/api/download/latest?platform=windows&arch=x64"
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="mobile-touch px-8 py-6 sm:px-10 sm:py-8 bg-[#0b62d6] text-white rounded-[2.5rem] font-black flex flex-col items-center justify-center gap-2 cursor-pointer shadow-[0_30px_60px_-15px_rgba(37,99,235,0.55)] transition-[transform,box-shadow] w-full focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 outline-none"
              aria-label="Télécharger la dernière version de MikhmoAI Desktop pour Windows"
            >
              <span className="text-xs uppercase opacity-70 font-black tracking-[0.3em] leading-none">Desktop x64</span>
              <span className="flex items-center gap-2.5 text-2xl sm:text-3xl tracking-tighter"><MonitorDown className="w-7 h-7" /> Windows</span>
              <span className="text-[10px] font-bold opacity-70 tracking-wider uppercase leading-none">Windows 10 / 11 · dernière version</span>
            </motion.a>

            {/* Linux Desktop */}
            <motion.a
              href="/api/download/latest?platform=linux&arch=x64"
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="mobile-touch px-8 py-6 sm:px-10 sm:py-8 bg-orange-500 text-black rounded-[2.5rem] font-black flex flex-col items-center justify-center gap-2 cursor-pointer shadow-[0_30px_60px_-15px_rgba(249,115,22,0.5)] transition-[transform,box-shadow] w-full focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 outline-none"
              aria-label="Télécharger la dernière version de MikhmoAI Desktop pour Linux"
            >
              <span className="text-xs uppercase opacity-60 font-black tracking-[0.3em] leading-none">Desktop x86_64</span>
              <span className="flex items-center gap-2.5 text-2xl sm:text-3xl tracking-tighter"><PackageOpen className="w-7 h-7" /> Linux</span>
              <span className="text-[10px] font-bold opacity-60 tracking-wider uppercase leading-none">AppImage / DEB / RPM</span>
            </motion.a>

            {/* Android Mobile : le choix d’architecture se fait dans le popup. */}
            <motion.button
              type="button"
              onClick={() => setIsMobileModalOpen(true)}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="mobile-touch w-full cursor-pointer rounded-[2.5rem] bg-white px-8 py-6 font-black text-black shadow-[0_30px_60px_-15px_rgba(255,255,255,0.4)] transition-[transform,box-shadow] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 sm:px-10 sm:py-8"
              aria-label="Télécharger MikhmoAI Mobile pour Android"
            >
              <span className="block text-xs font-black uppercase leading-none tracking-[0.3em] opacity-40">Android Mobile</span>
              <span className="mt-2 flex items-center justify-center gap-2.5 text-2xl tracking-tighter sm:text-3xl lg:text-4xl">
                <Smartphone className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden="true" />
                Télécharger
              </span>
              <span className="mt-2 block text-[10px] font-bold uppercase leading-none tracking-wider opacity-30">Choix ARM64 ou ARM32</span>
            </motion.button>

            {/* Boutique / Activation de licence */}
            <motion.a
              href="https://store.mikhmoai.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="mobile-touch relative group px-8 py-6 sm:px-10 sm:py-8 bg-yellow-400 text-black rounded-[2.5rem] font-black flex flex-col items-center justify-center gap-2 cursor-pointer shadow-[0_30px_60px_-15px_rgba(250,204,21,0.4)] transition-[transform,box-shadow] w-full focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 outline-none"
              role="button"
              aria-label={t("download.store_aria")}
            >
              {/* Effet Pulse/Ping pour attirer l'attention */}
              <span className="absolute inset-0 rounded-[2.5rem] border-4 border-yellow-400 animate-ping opacity-30 pointer-events-none" />
              
              <span className="text-xs uppercase opacity-60 font-black tracking-[0.3em] leading-none text-black/80">{t("download.store_badge")}</span>
              <span className="flex items-center gap-2.5 text-2xl sm:text-3xl lg:text-4xl tracking-tighter">
                <ShoppingBag className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" />
                {t("download.store_title")}
              </span>
              <span className="text-[10px] font-bold opacity-60 tracking-wider uppercase leading-none">{t("download.store_desc")}</span>
            </motion.a>

            {/* App Store — coming soon */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="mobile-touch px-8 py-6 sm:px-10 sm:py-8 bg-black/20 text-white/40 border border-white/10 rounded-[2.5rem] font-black flex flex-col items-center justify-center gap-2 cursor-not-allowed backdrop-blur-3xl shadow-2xl transition-transform w-full opacity-50 select-none"
              role="status"
              aria-live="polite"
              aria-label={t("download.ios_aria")}
            >
              <span className="text-xs uppercase font-black tracking-[0.3em] leading-none flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" /> {t("download.ios_badge")}
              </span>
              <span className="text-2xl sm:text-3xl lg:text-4xl tracking-tighter">{t("download.ios_title")}</span>
              <span className="text-[10px] font-bold tracking-wider uppercase leading-none">{t("download.ios_desc")}</span>
            </motion.div>
          </div>

          <div className="relative z-10 pt-10 sm:pt-16 flex flex-col items-center gap-6" role="group" aria-label="Footer branding">
            <div className="h-[1px] w-32 bg-white/20" aria-hidden="true" />
            <Image
              src="/moailte-studio-plus.svg"
              alt="Moailte Studio"
              width={240}
              height={60}
              className="opacity-70 dark:opacity-80 hover:opacity-100 transition-opacity duration-300 max-w-[180px] sm:max-w-full"
              loading="lazy"
            />
            <p className="text-white/40 text-[10px] sm:text-[11px] uppercase font-black tracking-[0.4em] select-none text-center leading-normal">
              PRECISION ENGINEERING BY MOAILTE
            </p>
          </div>
        </div>
      </MotionSection>
      <ApkInstallModal isOpen={isApkModalOpen} onClose={() => setIsApkModalOpen(false)} />
      <DesktopDownloadModal isOpen={isDesktopModalOpen} onClose={() => setIsDesktopModalOpen(false)} />
      <MobileDownloadModal isOpen={isMobileModalOpen} onClose={() => setIsMobileModalOpen(false)} onSelect={startMobileDownload} />
    </MainLayout>
  );
}
