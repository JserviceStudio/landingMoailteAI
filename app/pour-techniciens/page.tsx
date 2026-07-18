import type { Metadata } from "next";
import { AudiencePage } from "@/components/audiences/AudiencePage";

export const metadata: Metadata = {
  title: "Plateforme MikroTik pour techniciens réseau et WISP",
  description: "Topologie, terminal RouterOS, carte terrain, monitoring, VPN, SSH et gestion multi-routeurs : les outils MikhmoAI pour techniciens MikroTik et WISP.",
  alternates: { canonical: "/pour-techniciens" },
};

export default function TechniciansPage() {
  return <AudiencePage eyebrow="Techniciens & communauté MikroTik" title="Tous vos outils RouterOS dans un même espace de travail." intro="Intervenez vite sur mobile et analysez l'infrastructure en profondeur sur Desktop. MikhmoAI réunit topologie, cartographie terrain, terminal, diagnostics, Hotspot, PPPoE et accès distants sécurisés." canonical="/pour-techniciens" audience="Techniciens réseau, intégrateurs MikroTik, administrateurs et opérateurs WISP" image={{ src: "/audience-techniciens-reseau-terrain.png", alt: "Techniciens télécom en combinaison, casque et harnais installant un équipement réseau sur le terrain" }} benefits={[
    { title: "Visibilité réseau", description: "Topologie interactive, AP, CPE, interfaces, clients et carte terrain donnent le contexte complet d'un incident." },
    { title: "Outils RouterOS", description: "Sessions SSH et API, terminal assisté, scripts, diagnostics et raccourcis opérationnels pour RouterOS v6 et v7." },
    { title: "Exploitation multi-site", description: "Centralisez routeurs, NAS, tunnels VPN, Hotspots et sites distants au lieu de multiplier les outils isolés." },
  ]} steps={["Enregistrez vos équipements et sites", "Sécurisez les accès par VPN ou SSH", "Supervisez et intervenez depuis une console"]} cta="Découvrir la suite technique" />;
}
