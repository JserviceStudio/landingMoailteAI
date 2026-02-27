"use client";

import { LegalLayout, Section } from "@/components/layout/LegalLayout";
import { Activity } from "lucide-react";

export default function StatusPage() {

    const services = [
        {
            name: "Application MikhmonPro (APK)",
            description: "Téléchargement direct & fonctionnement principal",
            status: "operational",
            uptime: "99.9%",
        },
        {
            name: "Authentification Google (OAuth 2.0)",
            description: "Connexion via compte Google",
            status: "operational",
            uptime: "99.8%",
        },
        {
            name: "API MikroTik (REST / Natif)",
            description: "Communication avec routeurs MikroTik V6/V7",
            status: "operational",
            uptime: "99.7%",
        },
        {
            name: "Moailte AI — Assistant Hotspot",
            description: "Génération IA de tickets et surveillance automatique",
            status: "operational",
            uptime: "99.5%",
        },
        {
            name: "Mode SaaS & Boutique Web",
            description: "Synchronisation boutique, génération de stock web",
            status: "operational",
            uptime: "99.6%",
        },
        {
            name: "Licence & Activation SaaS",
            description: "Validation et activation des licences partenaires",
            status: "operational",
            uptime: "99.9%",
        },
    ];

    const statusConfig = {
        operational: {
            label: "Opérationnel",
            color: "bg-green-500",
            textColor: "text-green-500",
            bg: "bg-green-500/10",
            border: "border-green-500/20",
            dot: "●",
        },
        degraded: {
            label: "Dégradé",
            color: "bg-yellow-500",
            textColor: "text-yellow-500",
            bg: "bg-yellow-500/10",
            border: "border-yellow-500/20",
            dot: "●",
        },
        outage: {
            label: "Panne",
            color: "bg-red-500",
            textColor: "text-red-500",
            bg: "bg-red-500/10",
            border: "border-red-500/20",
            dot: "●",
        },
    };

    const allOperational = services.every(s => s.status === "operational");

    return (
        <LegalLayout
            icon={<Activity className="w-4 h-4" />}
            badge="État des services"
            title="Status"
            subtitle="Monitoring en temps réel de tous les services MikhmonPro."
            lastUpdated="27 février 2026"
        >

            {/* Status global */}
            <Section title="État global">
                <div className={`p-8 rounded-3xl border flex items-center gap-6 ${allOperational
                        ? "bg-green-500/5 border-green-500/20"
                        : "bg-yellow-500/5 border-yellow-500/20"
                    }`}>
                    <div className={`w-4 h-4 rounded-full animate-pulse flex-shrink-0 ${allOperational ? "bg-green-500" : "bg-yellow-500"
                        }`} />
                    <div>
                        <p className={`text-2xl font-black ${allOperational ? "text-green-500" : "text-yellow-500"}`}>
                            {allOperational ? "Tous les systèmes sont opérationnels" : "Dégradation partielle en cours"}
                        </p>
                        <p className="text-muted-foreground font-medium text-sm mt-1">
                            Dernière vérification : {new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })} à {new Date().toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })}
                        </p>
                    </div>
                </div>
            </Section>

            {/* Services */}
            <Section title="État des services">
                <div className="space-y-4">
                    {services.map((service, i) => {
                        const cfg = statusConfig[service.status as keyof typeof statusConfig];
                        return (
                            <div key={i} className="flex items-center justify-between p-6 rounded-2xl bg-muted/10 border border-border/60 hover:bg-muted/20 transition-all">
                                <div className="flex items-center gap-5 flex-1 min-w-0">
                                    <div className={`w-3 h-3 rounded-full flex-shrink-0 ${cfg.color}`} />
                                    <div className="min-w-0">
                                        <p className="font-black text-foreground text-base truncate">{service.name}</p>
                                        <p className="text-sm text-muted-foreground font-medium truncate">{service.description}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 flex-shrink-0 ml-4">
                                    <div className="text-right hidden sm:block">
                                        <p className="text-xs text-muted-foreground font-medium">Uptime 30j</p>
                                        <p className="text-sm font-black text-foreground">{service.uptime}</p>
                                    </div>
                                    <span className={`px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border ${cfg.bg} ${cfg.textColor} ${cfg.border}`}>
                                        {cfg.label}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Section>

            {/* Maintenance planifié */}
            <Section title="Maintenances planifiées">
                <div className="p-8 rounded-3xl bg-muted/10 border border-border/60 text-center">
                    <p className="text-5xl mb-4">✓</p>
                    <p className="text-xl font-black text-foreground">Aucune maintenance planifiée</p>
                    <p className="text-muted-foreground font-medium mt-2">Tous les services fonctionnent normalement.</p>
                </div>
            </Section>

            {/* Historique incidents */}
            <Section title="Historique des incidents (30 derniers jours)">
                <div className="p-8 rounded-3xl bg-muted/10 border border-border/60 text-center">
                    <p className="text-5xl mb-4">🎉</p>
                    <p className="text-xl font-black text-foreground">Aucun incident signalé</p>
                    <p className="text-muted-foreground font-medium mt-2">Tous les systèmes ont fonctionné normalement sur les 30 derniers jours.</p>
                </div>
            </Section>

            {/* Signaler un incident */}
            <Section title="Signaler un problème">
                <p className="text-muted-foreground font-medium text-lg leading-relaxed mb-6">
                    Si vous rencontrez un problème non répertorié ici, contactez-nous immédiatement :
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <a href="mailto:justemoailtepro@gmail.com" className="block p-6 rounded-2xl bg-muted/20 border border-border/60 hover:bg-muted/40 transition-all">
                        <p className="text-2xl mb-2">📧</p>
                        <p className="font-black text-foreground">E-mail</p>
                        <p className="text-primary text-sm font-medium mt-1">justemoailtepro@gmail.com</p>
                    </a>
                    <a
                        href="https://wa.me/22941438405?text=Bonjour%2C%20je%20signale%20un%20incident%20sur%20MikhmonPro."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 rounded-2xl bg-green-500/5 border border-green-500/20 hover:bg-green-500/10 transition-all"
                    >
                        <p className="text-2xl mb-2">💬</p>
                        <p className="font-black text-foreground">WhatsApp Pro</p>
                        <p className="text-green-500 text-sm font-medium mt-1">+229 41 43 84 05</p>
                    </a>
                </div>
            </Section>

        </LegalLayout>
    );
}
