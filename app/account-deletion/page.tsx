import { LegalLayout, Section, InfoBox, BulletList } from "@/components/layout/LegalLayout";
import { Trash2 } from "lucide-react";

export const metadata = {
    title: "Suppression de compte & données — MikhmonPro",
    description:
        "Demandez la suppression de votre compte MikhmonPro et des données associées. Procédure dans l'application ou par demande web, conformément aux règles Google Play et au RGPD.",
};

export default function AccountDeletionPage() {
    return (
        <LegalLayout
            icon={<Trash2 className="w-4 h-4" />}
            badge="Suppression de compte & données"
            title="Suppression de votre compte et de vos données"
            subtitle="Cette page explique comment demander la suppression de votre compte MikhmonPro (MikhmoAI) et des données personnelles associées, ainsi que les données éventuellement conservées et pour quelle durée."
            lastUpdated="19 juin 2026"
        >
            <Section title="1. Application et éditeur concernés">
                <p>
                    Cette procédure concerne l'application{" "}
                    <strong className="text-foreground">MikhmonPro</strong> (MikhmoAI), éditée par :
                </p>
                <div
                    className="p-6 rounded-2xl bg-muted/20 border border-border/60 font-medium text-foreground space-y-1"
                    role="region"
                    aria-label="Informations éditeur"
                >
                    <p><strong>J+Services</strong></p>
                    <p>
                        E-mail :{" "}
                        <a href="mailto:justemoailtepro@gmail.com" className="text-primary underline">
                            justemoailtepro@gmail.com
                        </a>
                    </p>
                    <p>
                        WhatsApp professionnel :{" "}
                        <a href="https://wa.me/22941438405" className="text-primary underline">
                            +229 41 43 84 05
                        </a>
                    </p>
                </div>
            </Section>

            <Section title="2. Supprimer votre compte depuis l'application (recommandé)">
                <p>Vous pouvez supprimer vous-même votre compte directement dans l'application :</p>
                <BulletList
                    items={[
                        "Ouvrez l'application MikhmonPro et connectez-vous à votre compte.",
                        "Allez dans Profil / Paramètres du compte.",
                        "Appuyez sur « Supprimer mon compte ».",
                        "Confirmez la demande : votre compte est immédiatement désactivé et vos données personnelles sont anonymisées.",
                    ]}
                />
                <InfoBox>
                    La suppression est <strong>définitive</strong>. Une fois confirmée, vous perdez l'accès à votre
                    compte et à vos configurations ; cette action est irréversible.
                </InfoBox>
            </Section>

            <Section title="3. Demander la suppression sans passer par l'application">
                <p>
                    Si vous n'avez plus accès à l'application, vous pouvez nous demander la suppression de votre
                    compte et de vos données par e-mail ou WhatsApp :
                </p>
                <BulletList
                    items={[
                        "E-mail : justemoailtepro@gmail.com (objet : « Suppression de compte »)",
                        "WhatsApp : +229 41 43 84 05",
                        "Indiquez l'adresse e-mail ou le numéro de téléphone associé à votre compte afin que nous puissions l'identifier.",
                    ]}
                />
                <p>
                    Nous traitons toute demande sous <strong className="text-foreground">30 jours</strong> maximum et
                    vous confirmons la suppression par retour de message.
                </p>
            </Section>

            <Section title="4. Données supprimées">
                <p>Lors de la suppression du compte, les données personnelles suivantes sont supprimées ou anonymisées :</p>
                <BulletList
                    items={[
                        "Profil du compte (nom d'affichage, e-mail, numéro de téléphone, identifiants de connexion)",
                        "Jetons de notification push de l'appareil",
                        "Sessions actives et préférences du compte",
                        "Boutiques, branding et configurations rattachés à votre compte",
                        "Données de contact associées",
                    ]}
                />
            </Section>

            <Section title="5. Données conservées et durées">
                <p>
                    Certaines données peuvent être conservées sous forme{" "}
                    <strong className="text-foreground">anonymisée</strong> (sans lien avec votre identité) lorsque la
                    loi l'exige :
                </p>
                <BulletList
                    items={[
                        "Enregistrements de transactions et de facturation : conservés de façon anonymisée pour répondre à nos obligations comptables et légales (jusqu'à 10 ans selon la réglementation applicable).",
                        "Journaux techniques et de sécurité strictement nécessaires : conservés pour une durée limitée puis purgés.",
                    ]}
                />
                <InfoBox>
                    Ces données conservées ne permettent plus de vous réidentifier et ne sont pas utilisées à des fins
                    commerciales ou marketing.
                </InfoBox>
            </Section>

            <Section title="6. Vos droits">
                <p>
                    Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et
                    d'opposition. Pour toute question relative à vos données, contactez-nous à{" "}
                    <a href="mailto:justemoailtepro@gmail.com" className="text-primary underline">
                        justemoailtepro@gmail.com
                    </a>
                    . Voir aussi notre{" "}
                    <a href="/privacy" className="text-primary underline">
                        Politique de confidentialité
                    </a>
                    .
                </p>
            </Section>
        </LegalLayout>
    );
}
