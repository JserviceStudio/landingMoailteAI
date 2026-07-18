import type { Metadata } from "next";
import { AudiencePage } from "@/components/audiences/AudiencePage";

export const metadata: Metadata = {
  title: "Plateforme RADIUS, multi-NAS et API pour providers MikroTik",
  description: "Déployez vos services MikroTik, VPN et RADIUS sur plusieurs sites et NAS avec les API, l'automatisation et les outils partenaires MikhmoAI.",
  alternates: { canonical: "/providers" },
};

export default function ProvidersPage() {
  return <AudiencePage eyebrow="Entreprises, providers & partenaires" title="Industrialisez le déploiement de vos services MikroTik." intro="MikhmoAI devient la couche d'exploitation entre votre infrastructure et vos clients : RADIUS multi-NAS, gestion de sites, accès VPN, distribution d'abonnements et automatisation via API." canonical="/providers" audience="Fournisseurs de services, WISP, intégrateurs, entreprises multi-sites et partenaires technologiques" image={{ src: "/audience-dirigeants-provider.png", alt: "Dirigeants africains en costume réunis autour d'un partenariat technologique et réseau" }} benefits={[
    { title: "RADIUS et multi-NAS", description: "Pilotez plusieurs routeurs, sites et politiques d'accès depuis une architecture centralisée conçue pour évoluer." },
    { title: "Déploiement automatisé", description: "Réduisez les configurations manuelles grâce aux modèles, workflows et API d'intégration de vos services." },
    { title: "Canal partenaire", description: "Distribuez VPN, RADIUS, vouchers ou abonnements dans une expérience cohérente pour vos équipes et clients." },
  ]} steps={["Connectez votre infrastructure ou API", "Définissez services et règles de déploiement", "Activez de nouveaux clients et sites à l'échelle"]} cta="Parler du programme partenaire" />;
}
