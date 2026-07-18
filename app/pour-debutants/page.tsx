import type { Metadata } from "next";
import { AudiencePage } from "@/components/audiences/AudiencePage";

export const metadata: Metadata = {
  title: "Gérer un Hotspot MikroTik simplement, sans expertise réseau",
  description: "Créez tickets Wi-Fi, utilisateurs et portails captifs MikroTik sans commandes complexes. MikhmoAI guide l'installation et les opérations quotidiennes.",
  alternates: { canonical: "/pour-debutants" },
};

export default function BeginnerPage() {
  return <AudiencePage eyebrow="Gestion simple" title="Votre activité Wi-Fi, sans la complexité réseau." intro="MikhmoAI transforme les tâches MikroTik en actions claires. Créez des tickets, suivez les connexions, personnalisez votre portail et pilotez votre activité depuis votre téléphone ou votre ordinateur." canonical="/pour-debutants" audience="Exploitants de hotspots, hôtels, cafés, écoles et entrepreneurs" image={{ src: "/audience-jeunes-entrepreneurs-wifi.png", alt: "Jeunes entrepreneurs souriants gérant leur activité Wi-Fi depuis un smartphone avec MikhmoAI" }} benefits={[
    { title: "Aucune ligne de commande", description: "Des écrans guidés remplacent les manipulations RouterOS répétitives pour les opérations essentielles." },
    { title: "Tickets prêts à vendre", description: "Générez vouchers, QR codes et profils tarifaires, puis suivez les stocks et les ventes." },
    { title: "Assistance intelligente", description: "L'assistant aide à configurer, diagnostiquer et maintenir le service sans jargon inutile." },
  ]} steps={["Connectez votre routeur MikroTik", "Choisissez vos offres Wi-Fi", "Générez et distribuez vos accès"]} cta="Commencer simplement" />;
}
