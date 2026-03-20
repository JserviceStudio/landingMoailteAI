import { LegalLayout, Section, SubSection, InfoBox, BulletList } from "@/components/layout/LegalLayout";
import { FileText } from "lucide-react";

export const metadata = {
    title: "Conditions d'utilisation — MikhmonPro",
    description: "Conditions générales d'utilisation de MikhmonPro, application Android de gestion Hotspot MikroTik.",
};

export default function TermsPage() {
    return (
        <LegalLayout
            icon={<FileText className="w-4 h-4" />}
            badge="Conditions d'utilisation"
            title="Conditions Générales"
            subtitle="En téléchargeant ou utilisant MikhmonPro, vous acceptez les présentes conditions d'utilisation. Veuillez les lire attentivement."
            lastUpdated="27 février 2026"
        >

            <Section title="1. Acceptation des conditions">
                <p>
                    En téléchargeant, installant ou utilisant l'application <strong className="text-foreground">MikhmonPro</strong> (ci-après «&nbsp;l'Application&nbsp;»), vous acceptez d'être lié par les présentes Conditions Générales d'Utilisation (CGU). Si vous n'acceptez pas ces conditions, vous ne devez pas utiliser l'Application.
                </p>
                <InfoBox>
                    Ces CGU constituent un accord juridique entre vous (l'utilisateur) et <strong>J+Services</strong>, éditeur de MikhmonPro.
                </InfoBox>
            </Section>

            <Section title="2. Description du service">
                <p>
                    MikhmonPro est une application Android de <strong className="text-foreground">gestion de zones Hotspot</strong> basée sur Mikhmon, conçue pour les environnements MikroTik V6 et V7. Elle permet notamment :
                </p>
                <BulletList items={[
                    "La gestion et la surveillance des utilisateurs Hotspot MikroTik",
                    "La génération automatisée de vouchers et tickets d'accès",
                    "La connexion sécurisée aux routeurs via SSH, VPN ou réseau local",
                    "La gestion d'une boutique web de revente de vouchers (mode SaaS)",
                    "L'assistance par intelligence artificielle Moailte AI pour la gestion Hotspot",
                    "La surveillance du réseau et des statistiques en temps réel",
                ]} />
            </Section>

            <Section title="3. Licence d'utilisation">
                <SubSection title="3.1 Licence de base (gratuite)">
                    <p>
                        J+Services vous accorde une licence <strong className="text-foreground">personnelle, non exclusive, non transférable et révocable</strong> d'utilisation de l'Application pour vos besoins de gestion Hotspot personnel ou professionnel.
                    </p>
                </SubSection>

                <SubSection title="3.2 Licence SaaS (fonctionnalités avancées)">
                    <p>
                        Certaines fonctionnalités avancées (boutique web, mode SaaS, génération automatisée en masse) nécessitent une <strong className="text-foreground">licence SaaS active</strong>. Cette licence est nominative et liée à votre compte Google. Toute utilisation non autorisée entraîne la résiliation immédiate.
                    </p>
                </SubSection>

                <SubSection title="3.3 Restrictions">
                    <p>Il vous est expressément interdit de :</p>
                    <BulletList items={[
                        "Copier, modifier, distribuer ou décompiler l'Application",
                        "Contourner les mécanismes de licence ou d'authentification",
                        "Utiliser l'Application à des fins illicites, notamment la fraude réseau",
                        "Revendre ou sous-licencier l'Application sans accord écrit",
                        "Utiliser l'Application pour accéder à des routeurs sans autorisation légitime",
                    ]} />
                </SubSection>
            </Section>

            <Section title="4. Conditions d'utilisation du mode SaaS / Partenaire">
                <SubSection title="4.1 Éligibilité">
                    <p>Le mode SaaS est réservé aux entreprises, développeurs et entrepreneurs disposant d'une <strong className="text-foreground">infrastructure MikroTik légitime</strong> et souhaitant proposer des services à leurs clients.</p>
                </SubSection>

                <SubSection title="4.2 Responsabilité du partenaire">
                    <p>En tant que partenaire SaaS, vous êtes seul responsable de :</p>
                    <BulletList items={[
                        "La conformité légale de vos services (licences ISP, réglementations locales)",
                        "La configuration et la sécurité de vos routeurs MikroTik",
                        "La gestion et la protection des données de vos clients finaux",
                        "Le respect des conditions d'utilisation de MikroTik RouterOS",
                        "La tarification et les conditions de vente de vos propres services",
                    ]} />
                </SubSection>

                <SubSection title="4.3 Paiements et abonnements">
                    <p>Les tarifs de la licence SaaS sont communiqués via l'Application ou sur demande. J+Services se réserve le droit de modifier les tarifs avec un préavis de 30 jours. Aucun remboursement n'est accordé pour les périodes écoulées.</p>
                </SubSection>
            </Section>

            <Section title="5. Propriété intellectuelle">
                <p>
                    L'Application, son code source, ses designs, logos, textes, et l'assistant IA <strong className="text-foreground">Moailte</strong> sont la propriété exclusive de <strong className="text-foreground">J+Services</strong> et sont protégés par les lois sur la propriété intellectuelle.
                </p>
                <p>
                    MikhmonPro est basé sur le projet open-source <strong className="text-foreground">Mikhmon</strong>. Les parties open-source restent soumises à leurs licences respectives.
                </p>
            </Section>

            <Section title="6. Responsabilité et garanties">
                <InfoBox>
                    <strong>⚠️ Important :</strong> MikhmonPro est fournie «&nbsp;en l'état&nbsp;». J+Services ne saurait être tenu responsable des pertes de données, interruptions de service réseau ou dommages résultant de l'utilisation de l'Application.
                </InfoBox>

                <SubSection title="6.1 Limitation de responsabilité">
                    <BulletList items={[
                        "J+Services ne garantit pas la disponibilité continue de l'Application",
                        "J+Services n'est pas responsable des dommages causés par une mauvaise configuration des routeurs",
                        "La responsabilité de J+Services est limitée au montant payé pour la licence",
                        "J+Services n'est pas responsable des pertes commerciales liées à des interruptions de service",
                    ]} />
                </SubSection>

                <SubSection title="6.2 Votre responsabilité">
                    <p>Vous êtes responsable de la sécurité de vos identifiants de connexion et de l'utilisation que vous faites de l'Application sur votre infrastructure réseau.</p>
                </SubSection>
            </Section>

            <Section title="7. Disponibilité et mises à jour">
                <p>
                    J+Services s'efforce d'assurer la disponibilité de l'Application mais ne garantit pas une disponibilité sans interruption. Des maintenances peuvent être effectuées. Les mises à jour sont fournies périodiquement et peuvent modifier les fonctionnalités disponibles.
                </p>
            </Section>

            <Section title="8. Résiliation">
                <p>
                    J+Services peut suspendre ou résilier votre accès à l'Application en cas de violation des présentes CGU, sans préavis. Vous pouvez cesser d'utiliser l'Application à tout moment en la désinstallant.
                </p>
            </Section>

            <Section title="9. Droit applicable">
                <p>
                    Les présentes CGU sont régies par les lois en vigueur. Tout litige sera soumis à la juridiction compétente du lieu de résidence de J+Services, sauf accord contraire des parties.
                </p>
            </Section>

            <Section title="10. Modifications des CGU">
                <p>
                    J+Services se réserve le droit de modifier ces CGU à tout moment. Les modifications entrent en vigueur dès leur publication. L'utilisation continue de l'Application après modification vaut acceptation des nouvelles CGU.
                </p>
            </Section>

            <Section title="11. Contact">
                <div className="p-6 rounded-2xl bg-muted/20 border border-border/60 space-y-3 text-foreground" role="region" aria-label="Informations de contact">
                    <p>Pour toute question sur ces conditions :</p>
                    <p>📧 <a href="mailto:justemoailtepro@gmail.com" className="text-primary underline" aria-label="Contacter par e-mail">justemoailtepro@gmail.com</a></p>
                    <p>💬 WhatsApp : <a href="https://wa.me/22941438405" className="text-primary underline" aria-label="Contacter par WhatsApp">+229 41 43 84 05</a></p>
                </div>
            </Section>

        </LegalLayout>
    );
}
