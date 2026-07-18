import { LegalLayout, Section, SubSection, InfoBox, BulletList } from "@/components/layout/LegalLayout";
import { Shield } from "lucide-react";

export const metadata = {
    title: "Politique de confidentialité",
    description: "Politique de confidentialité de MikhmoAI, application Android de gestion Hotspot MikroTik.",
    alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
    return (
        <LegalLayout
            icon={<Shield className="w-4 h-4" />}
            badge="Vie Privée & Données"
            title="Politique de Confidentialité"
            subtitle="MikhmoAI s'engage à protéger vos données personnelles. Cette politique explique quelles données nous collectons, comment nous les utilisons et vos droits."
            lastUpdated="27 février 2026"
        >

            <Section title="1. Identité du responsable de traitement">
                <p>
                    L'application <strong className="text-foreground">MikhmoAI</strong> (MikhmoAI V6 & V7) est éditée par :
                </p>
                <div className="p-6 rounded-2xl bg-muted/20 border border-border/60 font-medium text-foreground space-y-1" role="region" aria-label="Informations éditeur">
                    <p><strong>J+Services</strong></p>
                    <p>E-mail : <a href="mailto:justemoailtepro@gmail.com" className="text-primary underline" aria-label="Contacter par e-mail">justemoailtepro@gmail.com</a></p>
                    <p>WhatsApp professionnel : <a href="https://wa.me/22941438405" className="text-primary underline" aria-label="Contacter par WhatsApp">+229 41 43 84 05</a></p>
                </div>
            </Section>

            <Section title="2. Données collectées">
                <InfoBox>
                    <strong>Principe fondamental :</strong> MikhmoAI fonctionne principalement en mode local. Les identifiants de vos routeurs et vos configurations sont stockés <strong>uniquement sur votre appareil</strong> et ne sont jamais transmis à nos serveurs.
                </InfoBox>

                <SubSection title="2.1 Données stockées localement sur votre appareil">
                    <BulletList items={[
                        "Informations de connexion aux routeurs MikroTik (adresse IP, port, nom d'utilisateur, mot de passe) — chiffrées sur l'appareil",
                        "Configurations de sessions et passerelles VPN/SSH",
                        "Paramètres de l'application (préférences, thème, langue)",
                        "Historique des actions et journaux d'activité locaux",
                        "Données de vouchers et tickets générés",
                    ]} />
                </SubSection>

                <SubSection title="2.2 Données collectées via Google Sign-In (OAuth 2.0)">
                    <p>Lorsque vous vous connectez avec votre compte Google, nous recevons :</p>
                    <BulletList items={[
                        "Votre adresse e-mail Google",
                        "Votre nom d'affichage",
                        "Votre photo de profil Google (publique)",
                        "Un identifiant unique Google (non lié à d'autres services tiers)",
                    ]} />
                    <p className="mt-3">Ces données servent uniquement à <strong className="text-foreground">identifier votre compte</strong> et activer les fonctionnalités SaaS/licence. Elles ne sont pas revendues ni partagées.</p>
                </SubSection>

                <SubSection title="2.3 Mode SaaS / Boutique Web (optionnel)">
                    <p>Si vous activez le mode SaaS ou la boutique web, des données de synchronisation peuvent être échangées entre l'application et <strong className="text-foreground">votre propre serveur web</strong> (que vous configurez). MikhmoAI ne collecte pas ces données sur ses propres serveurs.</p>
                </SubSection>

                <SubSection title="2.4 Statistiques agrégées du site web">
                    <p>Le site mikhmoai.com comptabilise les téléchargements lancés et les visites uniques quotidiennes par pays. Le pays est approximativement déduit du fuseau horaire fourni par le navigateur. L’adresse IP n’est jamais enregistrée : elle est immédiatement transformée en empreinte irréversible, renouvelée chaque jour et supprimée des données de déduplication après sept jours. Seuls les totaux agrégés par pays sont affichés publiquement.</p>
                </SubSection>

                <SubSection title="2.5 Données non collectées">
                    <BulletList items={[
                        "Identifiants des utilisateurs finaux de votre Hotspot",
                        "Données de navigation ou cookies tiers",
                        "Données de localisation GPS",
                        "Contacts téléphoniques ou SMS",
                        "Données bancaires ou financières",
                    ]} />
                </SubSection>
            </Section>

            <Section title="3. Utilisation des données">
                <p>Les données collectées sont utilisées exclusivement pour :</p>
                <BulletList items={[
                    "Authentifier votre compte utilisateur via Google OAuth 2.0",
                    "Activer et vérifier votre licence MikhmoAI (mode SaaS)",
                    "Améliorer les fonctionnalités de l'application",
                    "Vous envoyer des communications relatives à votre compte (mises à jour, licences)",
                    "Répondre à vos demandes de support",
                    "Produire des statistiques agrégées de visites et de téléchargements",
                ]} />
            </Section>

            <Section title="4. Fonctionnalités d'Intelligence Artificielle">
                <p>
                    MikhmoAI intègre <strong className="text-foreground">Moailte AI</strong>, un assistant intelligent pour la gestion Hotspot. Les requêtes adressées à l'IA peuvent inclure des métadonnées de configuration réseau (profils, stock de tickets) afin de générer des réponses personnalisées.
                </p>
                <InfoBox>
                    Les interactions avec l'assistant IA sont <strong>traitées localement sur l'appareil</strong> ou via des services d'inférence sécurisés. Aucune conversation n'est stockée sur nos serveurs sans votre consentement explicite.
                </InfoBox>
            </Section>

            <Section title="5. Partage des données avec des tiers">
                <SubSection title="5.1 Google LLC">
                    <p>L'authentification Google est gérée par <strong className="text-foreground">Google Identity Services</strong>. Consultez la politique de confidentialité de Google : <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline" aria-label="Politique de confidentialité Google">policies.google.com/privacy</a></p>
                </SubSection>
                <SubSection title="5.2 Aucun autre partage">
                    <p>Nous ne vendons, ne louons et ne partageons pas vos données personnelles avec des tiers à des fins commerciales ou publicitaires.</p>
                </SubSection>
            </Section>

            <Section title="6. Sécurité des données">
                <BulletList items={[
                    "Les identifiants routeur sont stockés de manière chiffrée sur l'appareil (Android Keystore)",
                    "Les communications avec les routeurs MikroTik peuvent être sécurisées via SSL/TLS ou VPN selon votre configuration",
                    "L'accès aux fonctionnalités SaaS est protégé par authentification Google OAuth 2.0",
                    "Aucune donnée sensible n'est transmise en clair sur nos serveurs",
                ]} />
            </Section>

            <Section title="7. Permissions de l'application (Android)">
                <SubSection title="Permissions requises">
                    <BulletList items={[
                        "INTERNET — Connexion aux routeurs MikroTik et services en ligne",
                        "ACCESS_NETWORK_STATE — Vérification de la connectivité réseau",
                        "CAMERA (optionnel) — Scan de QR codes pour import de configuration routeur",
                    ]} />
                </SubSection>
                <SubSection title="Permissions non utilisées">
                    <p>MikhmoAI <strong className="text-foreground">ne demande pas</strong> l'accès à vos contacts, SMS, microphone, localisation GPS ou galerie photos.</p>
                </SubSection>
            </Section>

            <Section title="8. Conservation des données">
                <BulletList items={[
                    "Données locales : conservées sur votre appareil jusqu'à désinstallation ou effacement manuel",
                    "Données de compte Google : conservées tant que votre compte est actif",
                    "Données de licence SaaS : conservées pendant la durée de votre abonnement + 12 mois",
                    "Vous pouvez demander la suppression de vos données à tout moment via l'e-mail de contact",
                ]} />
            </Section>

            <Section title="9. Vos droits (RGPD & lois applicables)">
                <p>Vous disposez des droits suivants concernant vos données personnelles :</p>
                <BulletList items={[
                    "Droit d'accès : obtenir une copie de vos données",
                    "Droit de rectification : corriger des données inexactes",
                    "Droit à l'effacement : demander la suppression de vos données",
                    "Droit à la portabilité : recevoir vos données dans un format lisible",
                    "Droit d'opposition : s'opposer au traitement de vos données",
                    "Droit de retrait du consentement : à tout moment, sans préjudice",
                ]} />
                <p className="mt-4">
                    Pour exercer ces droits, contactez-nous à : <a href="mailto:justemoailtepro@gmail.com" className="text-primary underline" aria-label="Exercer vos droits RGPD">justemoailtepro@gmail.com</a>
                </p>
            </Section>

            <Section title="10. Politique relative aux mineurs">
                <p>
                    MikhmoAI est destinée à un usage professionnel et est conçue pour des utilisateurs de <strong className="text-foreground">18 ans et plus</strong>. Nous ne collectons pas sciemment de données personnelles de mineurs.
                </p>
            </Section>

            <Section title="11. Modifications de cette politique">
                <p>
                    Nous nous réservons le droit de modifier cette politique de confidentialité. En cas de modification substantielle, vous serez informé via une notification dans l'application. La date de dernière mise à jour est indiquée en haut de cette page. La poursuite de l'utilisation de l'application après modification vaut acceptation de la nouvelle politique.
                </p>
            </Section>

            <Section title="12. Contact">
                <div className="p-6 rounded-2xl bg-muted/20 border border-border/60 space-y-3 text-foreground" role="region" aria-label="Contact confidentialité">
                    <p>Pour toute question relative à cette politique de confidentialité :</p>
                    <p>📧 <a href="mailto:justemoailtepro@gmail.com" className="text-primary underline" aria-label="Contact politique confidentialité par e-mail">justemoailtepro@gmail.com</a></p>
                    <p>💬 WhatsApp : <a href="https://wa.me/22941438405" className="text-primary underline" aria-label="Contact politique confidentialité par WhatsApp">+229 41 43 84 05</a></p>
                    <p>⏱ Délai de réponse : sous <strong>72 heures ouvrées</strong></p>
                </div>
            </Section>

        </LegalLayout>
    );
}
