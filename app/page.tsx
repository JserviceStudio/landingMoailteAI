"use client";

import MainLayout from "@/components/layout/MainLayout";
import { MotionSection } from "@/components/ui/MotionSection";
import {
  Shield,
  Activity,
  Zap,
  Smartphone,
  ArrowRight,
  Database,
  Cpu,
  Terminal,
  BrainCircuit,
  Layers,
  QrCode,
  Download,
  Clock,
  Globe
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <MainLayout>
      {/* --- ELITE HERO SECTION --- */}
      <MotionSection className="flex flex-col lg:flex-row items-center gap-20 py-16 lg:py-40 min-h-[95vh] relative px-2">
        <div className="flex-1 space-y-12 text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary dark:text-primary text-[12px] font-black uppercase tracking-[0.3em] shadow-sm backdrop-blur-md"
          >
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            MikhmonPro — AI V6 & V7.x • 2026
          </motion.div>

          <div className="space-y-8">
            <h1 className="text-7xl lg:text-[11.5rem] font-black tracking-tighter leading-[0.75] lg:leading-[0.75] text-foreground font-heading uppercase italic">
              Hotspot <br />
              <span className="text-gradient">Sans Limites.</span>
            </h1>
            <p className="text-xl lg:text-4xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-tight font-medium tracking-tight">
              Gérez votre Hotspot MikroTik comme un expert — <span className="text-foreground font-black">même sans compétences réseau.</span> <br className="hidden lg:block" />
              Conçu pour les débutants. Puissant pour les professionnels.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 pt-10">
            {/* Bouton APK direct download */}
            <a
              href="/Mikhmoai3.4.0.apk"
              download="MikhmonPro-3.4.0.apk"
              className="mobile-touch group relative flex items-center gap-4 px-14 py-7 bg-foreground text-background rounded-[2.5rem] font-black text-2xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4)] transition-all w-full sm:w-auto text-center justify-center hover:opacity-90 hover:shadow-primary/20"
              aria-label="Télécharger directement l'application MikhmonPro au format APK"
            >
              <Download className="w-7 h-7 group-hover:translate-y-1 transition-transform" />
              Télécharger l'APK
            </a>
            <Link
              href="#features"
              className="mobile-touch flex items-center gap-4 px-14 py-7 glass text-foreground rounded-[2.5rem] font-black text-2xl hover:bg-foreground/5 transition-all w-full sm:w-auto text-center justify-center border-border/60"
              aria-label="En savoir plus sur les fonctionnalités de gestion Hotspot"
            >
              Voir les fonctionnalités
              <ArrowRight className="w-7 h-7 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        <motion.div
          className="flex-1 relative w-full flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, type: "spring", damping: 15 }}
        >
          <div className="relative group max-w-[600px] w-full">
            {/* Contextual Glow */}
            <div className="absolute inset-x-0 -top-20 -bottom-20 bg-primary/20 blur-[180px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-glow" />

            <div className="relative glass p-4 lg:p-6 rounded-[4.5rem] border-border shadow-[0_60px_120px_-20px_rgba(0,0,0,0.5)] transition-all duration-1000 group-hover:rotate-2 group-hover:scale-[1.03]">
              <Image
                src="/hotspot_management.png"
                alt="MikhmonPro Logiciel MikroTik"
                width={600}
                height={1200}
                className="rounded-[3.5rem] object-cover shadow-2xl"
                priority
              />

              {/* Telemetry Overlays */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-12 bottom-1/3 glass p-7 rounded-[2.5rem] shadow-2xl border-border hidden md:flex items-center gap-5 backdrop-saturate-150"
              >
                <div className="p-4 bg-green-500/20 rounded-2xl">
                  <Activity className="w-7 h-7 text-green-500" />
                </div>
                <div>
                  <p className="text-[11px] font-black text-muted-foreground uppercase tracking-widest leading-none mb-1">Système épuré</p>
                  <p className="text-xl font-black text-foreground tracking-tighter">Latency: 0.4ms</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute -right-8 top-1/4 glass p-7 rounded-[2.5rem] shadow-2xl border-border hidden md:flex items-center gap-5 backdrop-saturate-150"
              >
                <div className="p-4 bg-blue-500/20 rounded-2xl">
                  <Database className="w-7 h-7 text-blue-500" />
                </div>
                <div>
                  <p className="text-[11px] font-black text-muted-foreground uppercase tracking-widest leading-none mb-1">Stockage Flash</p>
                  <p className="text-xl font-black text-foreground tracking-tighter">Rapide & Fluide</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </MotionSection>

      {/* --- AI MOAILTE EXPERIENCE --- */}
      <MotionSection id="ai" className="py-24">
        <div className="relative glass p-10 lg:p-28 rounded-[5.5rem] border-border bg-gradient-to-br from-primary/5 via-transparent to-accent/5 overflow-hidden">
          <BrainCircuit className="absolute -right-20 -bottom-20 w-[30rem] h-[30rem] opacity-[0.03] text-primary rotate-12" />

          <div className="flex flex-col lg:flex-row items-center gap-24 relative z-10">
            <div className="relative group shrink-0">
              <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full group-hover:bg-accent/40 transition-all duration-1000" />
              <motion.div className="animate-float">
                <Image
                  src="/moailt.png"
                  alt="Assistant IA Moailte"
                  width={380}
                  height={380}
                  className="relative drop-shadow-[0_0_60px_rgba(34,211,238,0.3)] filter brightness-110"
                />
              </motion.div>
            </div>

            <div className="space-y-12 text-center lg:text-left flex-1">
              <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-accent/10 text-accent text-[13px] font-black uppercase tracking-[0.4em] border border-accent/20 backdrop-blur-md">
                <BrainCircuit className="w-5 h-5" />
                Intelligence Artificielle Embarquée
              </div>
              <h2 className="text-6xl lg:text-9xl font-black text-foreground leading-[0.85] tracking-tighter uppercase italic font-heading">
                Votre assistant, <br /> <span className="text-accent underline decoration-8 underline-offset-[12px] decoration-accent/20">toujours</span> actif.
              </h2>
              <p className="text-muted-foreground text-2xl lg:text-4xl max-w-5xl leading-tight font-medium tracking-tight">
                Moailte génère vos tickets d&apos;une simple phrase, surveille vos stocks et <span className="text-foreground font-black">renouvelle automatiquement les profils épuisés.</span> Elle nettoie les tickets expirés périodiquement pour maintenir votre serveur toujours propre et réactif — sans votre intervention.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { title: "Génération de tickets par IA", desc: "Décrivez votre besoin en une phrase. Moailte crée, configure et imprime vos tickets automatiquement." },
                  { title: "Maintenance automatique", desc: "Nettoyage des sessions expirées, alertes de stock bas et renouvellement de profils sans intervention manuelle." }
                ].map((box, i) => (
                  <div key={i} className="p-10 bg-muted/20 border border-border rounded-[3rem] group hover:bg-muted/40 transition-all duration-500">
                    <h4 className="font-black text-2xl mb-3 tracking-tight">{box.title}</h4>
                    <p className="text-muted-foreground text-lg font-medium leading-snug">{box.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* --- PERFORMANCE STATS HORIZONTAL SLIDE --- */}
      <MotionSection className="py-32">
        <div className="flex flex-nowrap overflow-x-auto lg:grid lg:grid-cols-4 gap-8 pb-16 lg:pb-0 no-scrollbar snap-x snap-mandatory lg:px-2">
          {[
            { label: "Polling Hotspot", value: "Temps réel", icon: Activity, color: "text-blue-500", bg: "bg-blue-500/10" },
            { label: "Génération tickets IA", value: "Instantané", icon: Zap, color: "text-orange-500", bg: "bg-orange-500/10" },
            { label: "Interface fluide", value: "60 FPS", icon: Smartphone, color: "text-red-500", bg: "bg-red-500/10" },
            { label: "Connexion sécurisée", value: "SSH + VPN", icon: Shield, color: "text-green-500", bg: "bg-green-500/10" },
          ].map((stat, i) => (
            <div key={i} className="min-w-[340px] lg:min-w-0 snap-center p-14 glass rounded-[4rem] border-border/80 hover:translate-y-[-10px] transition-all duration-700 group cursor-default">
              <div className={`p-6 ${stat.bg} rounded-[2rem] w-fit ${stat.color} mb-8 group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-9 h-9" />
              </div>
              <p className="text-6xl font-black tracking-tighter mb-4 text-foreground leading-none">{stat.value}</p>
              <p className="text-[12px] text-muted-foreground uppercase tracking-[0.5em] font-black">{stat.label}</p>
            </div>
          ))}
        </div>
      </MotionSection>

      {/* --- ELITE SPECIFICATIONS BENTO GRID --- */}
      <MotionSection id="features" className="py-24 space-y-24">
        <div className="text-center space-y-8">
          <h2 className="text-7xl lg:text-[14rem] font-black tracking-tighter leading-[0.7] lg:leading-[0.7] uppercase font-heading italic">
            Conçu pour <br /> <span className="text-gradient underline decoration-8 underline-offset-[20px] decoration-primary/20">tous.</span>
          </h2>
          <p className="text-2xl lg:text-4xl text-muted-foreground max-w-4xl mx-auto font-medium tracking-tight leading-tight">
            Débutant ou professionnel réseau — MikhmonPro s'adapte à votre niveau.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 min-h-[1000px]">
          {/* Bento Item 1: Large Content */}
          <div className="md:col-span-12 lg:col-span-8 glass rounded-[5rem] p-14 lg:p-24 border-border/60 relative overflow-hidden group min-h-[600px] flex flex-col justify-end">
            <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity">
              <Image
                src="/performance_securite.png"
                alt="Interface Performance et Sécurité"
                fill
                className="object-contain object-right"
              />
            </div>
            <div className="relative z-10 space-y-10">
              <div className="p-7 bg-primary/10 rounded-3xl w-fit">
                <Terminal className="w-14 h-14 text-primary" />
              </div>
              <h3 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.85] text-foreground">Accès total : <br /> SSH, VPN & réseau local.</h3>
              <p className="text-2xl lg:text-4xl text-muted-foreground max-w-3xl font-medium tracking-tight leading-tight">
                Connectez-vous à votre routeur via SSH, tunnel VPN ou réseau local direct. Gérez vos fichiers, scripts et configurations MikroTik <span className="text-foreground font-black">V6 & V7</span> sans ordinateur.
              </p>
            </div>
          </div>

          {/* Bento Item 2 & 3: Compact stack */}
          <div className="md:col-span-12 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10">
            <div className="glass rounded-[5rem] p-16 border-border group hover:bg-accent/5 transition-all overflow-hidden relative">
              <div className="absolute -right-4 -bottom-4 w-40 h-40 opacity-0 group-hover:opacity-20 transition-opacity">
                <Image src="/gestion_vouchers_simplifiee.png" alt="Voucher UI" fill className="object-contain" />
              </div>
              <QrCode className="w-16 h-16 text-accent mb-10 group-hover:rotate-12 transition-transform relative z-10" />
              <h3 className="text-5xl font-black mb-6 tracking-tighter leading-none relative z-10">Générateur <br /> de vouchers.</h3>
              <p className="text-xl text-muted-foreground font-medium leading-tight relative z-10">Créez des centaines de tickets en quelques secondes. Export PDF, impression directe, QR codes prêts à l'emploi.</p>
            </div>
            <div className="glass rounded-[5rem] p-16 border-border group hover:bg-primary/5 transition-all">
              <Layers className="w-16 h-16 text-primary mb-10 group-hover:scale-110 transition-transform" />
              <h3 className="text-5xl font-black mb-6 tracking-tighter leading-none">Simple. <br /> Intuitif.</h3>
              <p className="text-xl text-muted-foreground font-medium leading-tight">Aucune formation requise. L'interface guide naturellement le débutant, sans sacrifier la puissance attendue par le pro.</p>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* --- SECTION BUSINESS / PARTENAIRES --- */}
      <MotionSection id="business" className="py-32 space-y-20">

        {/* Header */}
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[12px] font-black uppercase tracking-[0.3em] backdrop-blur-md">
            <Globe className="w-4 h-4" />
            Écosystème Partenaires
          </div>
          <h2 className="text-7xl lg:text-[11rem] font-black tracking-tighter leading-[0.75] uppercase font-heading italic">
            Votre business,<br />
            <span className="text-gradient">propulsé.</span>
          </h2>
          <p className="text-2xl lg:text-4xl text-muted-foreground max-w-4xl mx-auto font-medium tracking-tight leading-tight">
            MikhmonPro n'est pas qu'une app de gestion locale. C'est une <span className="text-foreground font-black">plateforme conçue pour fonctionner 24h/24</span> — suivez et gérez vos ventes en temps réel. En tant que fournisseur de services liés à l'écosystème MikroTik, offrez à vos clients un accès direct à vos services via notre app mobile et <span className="text-foreground font-black">pénétrez un marché plus large</span> avec des services plus pratiques et plus accessibles.
          </p>
        </div>

        {/* Bento Business Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Card 1 — Boutique Web SaaS */}
          <div className="glass rounded-[5rem] p-14 lg:p-20 border-border relative overflow-hidden group hover:bg-primary/5 transition-all duration-700 min-h-[500px] flex flex-col justify-between">
            <div className="absolute -right-24 -top-24 w-150 h-150 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-1000 rotate-[-10deg]">
              <Image src="/web_store_cloud_revenue.png" alt="Revenue Stats" width={600} height={600} className="object-contain" />
            </div>
            <div className="absolute -right-16 -top-16 w-80 h-80 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-all duration-1000" />
            <div className="relative z-10 space-y-8">
              <div className="p-6 bg-primary/10 rounded-3xl w-fit">
                <Globe className="w-12 h-12 text-primary" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/10 text-green-500 text-[11px] font-black uppercase tracking-widest mb-6 border border-green-500/20">
                  ● Mode SaaS Disponible
                </div>
                <h3 className="text-5xl lg:text-6xl font-black tracking-tighter leading-none mb-6">
                  Boutique Web<br /><span className="text-primary">intégrée.</span>
                </h3>
                <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                  Connectez MikhmonPro à votre boutique web ou app. Générez des tickets, définissez les prix et synchronisez votre stock MikroTik en temps réel — directement depuis l'app.
                </p>
              </div>
            </div>
            <div className="relative z-10 grid grid-cols-2 gap-4 pt-10">
              {[
                { label: "Sync temps réel", desc: "MikroTik ↔ Web" },
                { label: "Multi-serveurs", desc: "Gestion multi-Hotspot" },
                { label: "Mode SaaS", desc: "Licence certifiée" },
                { label: "Génération web auto", desc: "Stock via API" },
              ].map((f, i) => (
                <div key={i} className="p-5 bg-muted/20 rounded-3xl border border-border/60">
                  <p className="text-sm font-black text-foreground tracking-tight">{f.label}</p>
                  <p className="text-xs text-muted-foreground font-medium mt-1">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2 — VPN + Multi-Passerelles + API */}
          <div className="flex flex-col gap-10">

            {/* VPN Gateway */}
            <div className="glass rounded-[5rem] p-14 border-border relative overflow-hidden group hover:bg-accent/5 transition-all duration-700 flex-1">
              <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-accent/5 rounded-full blur-[60px] group-hover:bg-accent/10 transition-all duration-1000" />
              <div className="relative z-10 space-y-6">
                <div className="p-5 bg-accent/10 rounded-3xl w-fit">
                  <Shield className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-black tracking-tighter leading-none">
                  VPN & Multi-<br />passerelles.
                </h3>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                  Gérez plusieurs routeurs MikroTik depuis un même compte. Connexion via <span className="text-foreground font-black">SSH, VPN, SSL</span>, réseau local ou scan QR. Compatible V6 et V7 — protocoles REST et Natif.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  {["VPN Tunnel", "SSL/TLS", "QR Config", "Multi-routeurs", "REST + Natif"].map(tag => (
                    <span key={tag} className="px-4 py-2 bg-accent/10 text-accent text-[11px] font-black uppercase tracking-widest rounded-full border border-accent/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* API & Développeurs */}
            <div className="glass rounded-[5rem] p-14 border-border relative overflow-hidden group hover:bg-muted/10 transition-all duration-700">
              <div className="relative z-10 space-y-6">
                <div className="p-5 bg-muted/30 rounded-3xl w-fit">
                  <Terminal className="w-10 h-10 text-foreground" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-black tracking-tighter leading-none">
                  API ouverte<br />aux développeurs.
                </h3>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                  Intégrez MikhmonPro dans votre stack. Notre API REST permet à votre SaaS ou app web de <span className="text-foreground font-black">recevoir des commandes, stocker et déclencher des générations de vouchers</span>, et de gérer les profils de ventes à distance via mobile. Vos services VPN et tickets web deviennent plus <span className="text-foreground font-black">indispensables que jamais</span>.
                </p>
                <div className="p-7 bg-black/60 dark:bg-black/40 rounded-[2rem] border border-white/10 font-mono text-sm shadow-2xl overflow-hidden relative group/code">
                  <div className="absolute top-0 right-0 p-3 opacity-20 group-hover/code:opacity-40 transition-opacity">
                    <Terminal className="w-4 h-4 text-white" />
                  </div>
                  <div className="space-y-1">
                    <p><span className="text-emerald-400 font-bold tracking-widest">POST</span> <span className="text-white/80">/api/vouchers/generate</span></p>
                    <p><span className="text-emerald-400 font-bold tracking-widest">GET</span>&nbsp; <span className="text-white/80">/api/stock/&#123;profile&#125;</span></p>
                    <p><span className="text-blue-400 font-bold tracking-widest">WS</span>&nbsp;&nbsp; <span className="text-white/80">/sync/realtime</span></p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* CTA Partenariat */}
        <div className="text-center p-14 lg:p-20 glass rounded-[5rem] border-border space-y-8">
          <h3 className="text-5xl lg:text-7xl font-black tracking-tighter text-foreground">
            Vous développez un service <span className="text-gradient">VPN ou Hotspot</span> ?
          </h3>
          <p className="text-xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto font-medium tracking-tight leading-tight">
            Exploitez la puissance de l'app mobile pour distribuer vos services à grande échelle. Intégration simple, revenus immédiats.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
            <a
              href="mailto:justemoailtepro@gmail.com"
              className="mobile-touch inline-flex items-center gap-3 px-12 py-6 bg-foreground text-background rounded-[2.5rem] font-black text-xl hover:opacity-90 transition-all shadow-2xl justify-center"
            >
              <Globe className="w-6 h-6" />
              Envoyer un e-mail
            </a>
            <a
              href="https://wa.me/22941438405?text=Bonjour%2C%20je%20souhaite%20devenir%20partenaire%20MikhmonPro."
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-touch inline-flex items-center gap-3 px-12 py-6 bg-green-500 text-white rounded-[2.5rem] font-black text-xl hover:bg-green-600 transition-all shadow-2xl justify-center"
            >
              {/* WhatsApp icon SVG inline */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Pro
            </a>
          </div>
          <div className="pt-6">
            <Link
              href="/support"
              className="text-muted-foreground hover:text-foreground font-bold text-sm underline underline-offset-4 transition-colors"
              aria-label="Voir la documentation technique et FAQ"
            >
              Consulter la documentation technique & FAQ
            </Link>
          </div>
        </div>

      </MotionSection>

      {/* --- ELITE PRESTIGE CTA --- */}
      <MotionSection id="download" className="py-32">
        <div className="relative p-16 lg:p-40 rounded-[6rem] overflow-hidden text-center space-y-20 shadow-[0_80px_160px_-40px_rgba(0,0,0,0.6)]" style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 50%, #000000 100%)' }}>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay" />

          <div className="space-y-8 relative z-10">
            <h2 className="text-7xl lg:text-[14rem] font-black text-white tracking-tighter italic leading-[0.75] lg:leading-[0.75] font-heading">
              GÉREZ. <br /> SIMPLEMENT.
            </h2>
            <p className="text-white/60 text-2xl lg:text-4xl font-medium tracking-tight max-w-5xl mx-auto uppercase">
              Rejoignez les administrateurs Hotspot qui font confiance à MikhmonPro.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-10 relative z-10 items-center">
            {/* Téléchargement direct APK */}
            <motion.a
              href="/Mikhmoai3.4.0.apk"
              download="MikhmonPro-3.4.0.apk"
              whileHover={{ scale: 1.05, y: -10 }}
              whileTap={{ scale: 0.98 }}
              className="mobile-touch px-20 py-10 bg-white text-black rounded-[3.5rem] font-black flex flex-col items-center gap-3 cursor-pointer shadow-[0_45px_100px_-20px_rgba(255,255,255,0.4)] transition-all w-full sm:w-auto"
            >
              <span className="text-[14px] uppercase opacity-40 font-black tracking-[0.4em] leading-none">Android — APK Direct</span>
              <span className="flex items-center gap-3 text-4xl tracking-tighter">
                <Download className="w-9 h-9" />
                Télécharger
              </span>
              <span className="text-[11px] font-bold opacity-30 tracking-widest uppercase">v3.4.0 — MikhmonAI</span>
            </motion.a>

            {/* App Store — coming soon */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mobile-touch px-20 py-10 bg-black/20 text-white/40 border border-white/10 rounded-[3.5rem] font-black flex flex-col items-center gap-3 cursor-not-allowed backdrop-blur-3xl shadow-2xl transition-all w-full sm:w-auto opacity-50 select-none"
            >
              <span className="text-[14px] uppercase font-black tracking-[0.4em] leading-none flex items-center gap-2">
                <Clock className="w-4 h-4" /> Bientôt disponible
              </span>
              <span className="text-4xl tracking-tighter">App Store</span>
              <span className="text-[11px] font-bold tracking-widest uppercase">iOS — En cours</span>
            </motion.div>
          </div>

          <div className="relative z-10 pt-16 flex flex-col items-center gap-10">
            <div className="h-[1px] w-32 bg-white/20" />
            <Image
              src="/jservice_logo.png"
              alt="J+Services Excellence"
              width={240}
              height={60}
              className="grayscale brightness-0 dark:brightness-[10] opacity-70 dark:opacity-80"
            />
            <p className="text-white/40 text-[12px] uppercase font-black tracking-[0.5em] mt-2 select-none">PRECISION ENGINEERING BY MOAILTE</p>
          </div>
        </div>
      </MotionSection>
    </MainLayout>
  );
}
