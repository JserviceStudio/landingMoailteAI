import type { Metadata } from "next";
import { Apple, Download, FileArchive, MonitorDown, PackageOpen, Smartphone } from "lucide-react";
import { Breadcrumbs, SeoLayout } from "@/components/layout/SeoLayout";
import { GlobalImpact } from "@/components/analytics/GlobalImpact";

export const metadata: Metadata = {
  title: "Télécharger MikhmoAI pour Windows, macOS, Linux et Android",
  description: "Téléchargez MikhmoAI : Windows, macOS, Linux, versions portables, AppImage, DEB, RPM et application Android.",
  alternates: { canonical: "/downloads" },
};

const groups = [
  { title: "Windows", icon: MonitorDown, recommended: "Installateur recommandé", description: "Installation guidée, raccourcis et intégration à Windows. Le meilleur choix pour la majorité des utilisateurs.", primary: "/api/download/latest?platform=windows&arch=x64&variant=installer", options: [
    { label: "Installateur MSI", href: "/api/download/latest?platform=windows&arch=x64&variant=installer&format=msi", note: "Pour un déploiement administré en entreprise." },
    { label: "Version portable ZIP", href: "/api/download/latest?platform=windows&arch=x64&variant=portable&format=zip", note: "Sans installation, pour une clé USB ou un poste temporaire." },
  ]},
  { title: "Linux", icon: PackageOpen, recommended: "Version recommandée", description: "Téléchargement automatique du paquet installable Linux le plus récent.", primary: "/api/download/latest?platform=linux&arch=x64&variant=installer", options: [
    { label: "Paquet RPM", href: "/api/download/latest?platform=linux&arch=x64&variant=installer&format=rpm", note: "Pour Fedora, RHEL et distributions compatibles." },
    { label: "AppImage", href: "/api/download/latest?platform=linux&arch=x64&variant=installer&format=appimage", note: "Exécutable autonome compatible avec de nombreuses distributions." },
    { label: "Archive portable TAR.GZ", href: "/api/download/latest?platform=linux&arch=x64&variant=portable&format=tar.gz", note: "Pour installation manuelle ou environnement isolé." },
  ]},
  { title: "macOS", icon: Apple, recommended: "Installateur recommandé", description: "Version native pour Mac Apple Silicon. Les formats avancés restent disponibles ci-dessous.", primary: "/api/download/latest?platform=macos&arch=arm64&variant=installer", options: [
    { label: "Mac Intel x64", href: "/api/download/latest?platform=macos&arch=x64&variant=installer", note: "Pour les Mac équipés d'un processeur Intel." },
    { label: "Image disque DMG", href: "/api/download/latest?platform=macos&arch=arm64&variant=installer&format=dmg", note: "Installation classique par glisser-déposer dans Applications." },
    { label: "Paquet PKG", href: "/api/download/latest?platform=macos&arch=arm64&variant=installer&format=pkg", note: "Installation guidée et déploiement administré." },
    { label: "Version portable ZIP", href: "/api/download/latest?platform=macos&arch=arm64&variant=portable&format=zip", note: "Application autonome à extraire manuellement." },
  ]},
];

export default function DownloadsPage() {
  return <SeoLayout><main className="mx-auto max-w-7xl px-5 pb-24 pt-10 lg:px-10 lg:pt-16">
    <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Téléchargements" }]} />
    <div className="mt-12 max-w-4xl"><p className="font-black uppercase tracking-[0.22em] text-primary">Centre de téléchargement</p><h1 className="mt-5 text-5xl font-black tracking-tight sm:text-7xl">Choisissez la version adaptée à votre appareil.</h1><p className="mt-7 text-xl text-muted-foreground">Les boutons principaux utilisent automatiquement les installateurs recommandés. Les formats ci-dessous répondent aux besoins avancés.</p></div>
    <div className="mt-14 grid gap-7 lg:grid-cols-2">{groups.map(group => { const Icon=group.icon; return <section key={group.title} className="rounded-[2.5rem] border border-border/60 bg-card p-7 sm:p-10"><Icon className="h-10 w-10 text-primary" /><h2 className="mt-6 text-4xl font-black">{group.title}</h2><p className="mt-3 text-muted-foreground">{group.description}</p><a href={group.primary} className="mt-7 flex items-center justify-between rounded-2xl bg-primary px-6 py-5 font-black text-white"><span>{group.recommended}</span><Download className="h-5 w-5" /></a><div className="mt-6 space-y-3">{group.options.map(option => <a key={option.label} href={option.href} className="flex items-start gap-4 rounded-2xl border border-border/60 p-5 transition hover:border-primary/50 hover:bg-muted/20"><FileArchive className="mt-1 h-5 w-5 shrink-0 text-primary" /><span><strong className="block">{option.label}</strong><span className="mt-1 block text-sm text-muted-foreground">{option.note}</span></span></a>)}</div></section> })}</div>
    <section className="mt-8 rounded-[2.5rem] border border-border/60 bg-card p-7 sm:p-10"><Smartphone className="h-9 w-9 text-primary" /><h2 className="mt-5 text-3xl font-black">Android</h2><p className="mt-3 text-muted-foreground">ARM64 convient aux téléphones récents. ARM32 reste disponible pour les anciens appareils.</p><div className="mt-6 flex flex-wrap gap-3"><a href="/api/download/latest?platform=android&arch=arm64" className="rounded-full bg-foreground px-6 py-3 font-black text-background">Android ARM64</a><a href="/api/download/latest?platform=android&arch=arm32" className="rounded-full border border-border px-6 py-3 font-black">Android ARM32</a></div></section>
  </main><GlobalImpact /></SeoLayout>;
}
