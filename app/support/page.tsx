import { LegalLayout, Section, SubSection, InfoBox } from "@/components/layout/LegalLayout";
import { HeadphonesIcon } from "lucide-react";

export const metadata = {
    title: "Support — MikhmonPro",
    description: "Centre d'aide et support technique pour MikhmonPro, application Android de gestion Hotspot MikroTik.",
};

const faqItems = [
    {
        q: "Comment connecter mon routeur MikroTik à l'application ?",
        a: "Ouvrez l'application → appuyez sur « + Nouvelle passerelle » → entrez l'adresse IP de votre routeur, le port (par défaut 80), votre nom d'utilisateur et mot de passe MikroTik. Vous pouvez aussi scanner un QR code de configuration si vous en avez un. L'app supporte les protocoles REST et Natif, ainsi que les connexions SSL/VPN.",
    },
    {
        q: "L'application est-elle compatible avec MikroTik V6 et V7 ?",
        a: "Oui. MikhmonPro est entièrement compatible avec RouterOS V6 et V7. Lors de l'ajout d'une passerelle, l'application détecte automatiquement la version et adapte le protocole de communication.",
    },
    {
        q: "Comment activer le mode SaaS pour la boutique web ?",
        a: "Le mode SaaS nécessite une licence active. Accédez à Paramètres → Licence → Activer le mode SaaS. Vous devrez saisir votre clé de licence. Pour obtenir une licence, contactez-nous via WhatsApp ou e-mail.",
    },
    {
        q: "Comment fonctionne la génération automatique de vouchers par l'IA ?",
        a: "L'assistant Moailte AI surveille vos stocks de tickets en temps réel. Lorsqu'un profil atteint un seuil bas, il génère automatiquement de nouveaux tickets et nettoie les vouchers expirés. Vous pouvez configurer les seuils dans Paramètres → IA Moailte.",
    },
    {
        q: "Pourquoi ma connexion au routeur échoue-t-elle ?",
        a: "Vérifiez : (1) que l'adresse IP et le port sont corrects, (2) que l'API MikroTik est activée (IP → Services → www ou api), (3) que votre appareil est sur le même réseau ou que le VPN/SSH est configuré, (4) que les identifiants sont corrects et que l'utilisateur a les droits API.",
    },
    {
        q: "Comment synchroniser mes vouchers avec ma boutique web ?",
        a: "Dans le mode SaaS, accédez à Boutique Web → Synchroniser. L'application communique avec votre serveur web via l'API REST configurée. Assurez-vous que l'URL de votre serveur est correctement configurée dans les paramètres SaaS.",
    },
    {
        q: "L'application fonctionne-t-elle sans connexion Internet ?",
        a: "Oui, pour la gestion locale. Si votre appareil est connecté au même réseau que votre routeur MikroTik, l'application fonctionne entièrement en local sans connexion Internet. Les fonctionnalités cloud (SaaS, boutique web, IA avancée) nécessitent une connexion.",
    },
    {
        q: "Comment télécharger et installer l'APK ?",
        a: "L'APK est disponible en téléchargement direct sur notre site officiel. Sur Android, autorisez l'installation depuis des sources inconnues (Paramètres → Sécurité → Sources inconnues), puis installez le fichier APK téléchargé. L'application sera bientôt disponible sur Google Play Store.",
    },
];

export default function SupportPage() {
    return (
        <LegalLayout
            icon={<HeadphonesIcon className="w-4 h-4" />}
            badge="Centre d'aide"
            title="Support"
            subtitle="Trouvez des réponses aux questions fréquentes ou contactez notre équipe directement pour un support personnalisé."
            lastUpdated="27 février 2026"
        >

            {/* Contact rapide */}
            <Section title="Contactez-nous directement">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <a
                        href="mailto:justemoailtepro@gmail.com"
                        className="block p-8 rounded-3xl bg-muted/20 border border-border/60 hover:bg-muted/40 transition-all group"
                    >
                        <div className="text-3xl mb-3">📧</div>
                        <h3 className="text-xl font-black text-foreground mb-2">E-mail</h3>
                        <p className="text-muted-foreground font-medium text-sm mb-3">Pour les demandes techniques et commerciales</p>
                        <p className="text-primary font-bold text-sm group-hover:underline">justemoailtepro@gmail.com</p>
                        <p className="text-xs text-muted-foreground mt-2">Réponse sous 72h ouvrées</p>
                    </a>
                    <a
                        href="https://wa.me/22941438405?text=Bonjour%2C%20j%27ai%20besoin%20d%27aide%20avec%20MikhmonPro."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-8 rounded-3xl bg-green-500/5 border border-green-500/20 hover:bg-green-500/10 transition-all group"
                    >
                        <div className="text-3xl mb-3">💬</div>
                        <h3 className="text-xl font-black text-foreground mb-2">WhatsApp Pro</h3>
                        <p className="text-muted-foreground font-medium text-sm mb-3">Support rapide en temps réel</p>
                        <p className="text-green-500 font-bold text-sm group-hover:underline">+229 41 43 84 05</p>
                        <p className="text-xs text-muted-foreground mt-2">Lun–Sam, 8h–20h (GMT+1)</p>
                    </a>
                </div>
            </Section>

            {/* FAQ */}
            <Section title="Questions fréquentes (FAQ)">
                <div className="space-y-6">
                    {faqItems.map((item, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-muted/10 border border-border/60 hover:bg-muted/20 transition-all">
                            <h3 className="text-lg font-black text-foreground mb-3 leading-tight">
                                Q{i + 1}. {item.q}
                            </h3>
                            <p className="text-muted-foreground font-medium leading-relaxed">{item.a}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Informations applicaiton */}
            <Section title="Informations sur l'application">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {[
                        { label: "Version actuelle", value: "3.4.0" },
                        { label: "Compatibilité", value: "Android 8.0+" },
                        { label: "MikroTik", value: "V6 & V7" },
                        { label: "Taille APK", value: "~45 MB" },
                    ].map((info, i) => (
                        <div key={i} className="p-6 rounded-2xl bg-muted/20 border border-border/60 text-center">
                            <p className="text-2xl font-black text-foreground">{info.value}</p>
                            <p className="text-xs text-muted-foreground font-medium mt-1">{info.label}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title="Signaler un bug ou suggérer une fonctionnalité">
                <SubSection title="Comment signaler un bug">
                    <p>Pour nous aider à corriger rapidement un problème, incluez dans votre message :</p>
                    <ol className="space-y-2 list-none">
                        {[
                            "La version de MikhmonPro (visible dans Paramètres → À propos)",
                            "La version Android de votre appareil",
                            "La version RouterOS de votre MikroTik",
                            "Description précise de l'erreur et étapes pour la reproduire",
                            "Si possible, une capture d'écran de l'erreur",
                        ].map((step, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-black flex items-center justify-center mt-0.5">
                                    {i + 1}
                                </span>
                                <span className="text-muted-foreground font-medium">{step}</span>
                            </li>
                        ))}
                    </ol>
                </SubSection>
            </Section>

        </LegalLayout>
    );
}
