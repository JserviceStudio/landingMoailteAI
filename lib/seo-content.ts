export type ContentSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type SeoPage = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  image?: { src: string; alt: string };
  mobileImage?: { src: string; alt: string };
  keywords: string[];
  sections: ContentSection[];
  faq: { question: string; answer: string }[];
};

export const solutionPages: SeoPage[] = [
  {
    slug: "application-mikrotik-desktop",
    title: "Application MikroTik Desktop pour Windows et Linux",
    metaTitle: "Application MikroTik Desktop Windows et Linux",
    description: "Téléchargez MikhmoAI Desktop pour Windows et Linux : topologie réseau, monitoring Hotspot, terminal RouterOS, cartes WISP et vouchers.",
    eyebrow: "MikhmoAI Desktop V7",
    intro: "Retrouvez toute la puissance de MikhmoAI sur grand écran. La version Desktop centralise la supervision, la topologie réseau, les outils RouterOS et l’activité commerciale de vos hotspots.",
    image: { src: "/mikhmonpro-desktop-dashboard.png", alt: "Console MikhmoAI Desktop avec monitoring MikroTik, trafic, sessions Hotspot et finances" },
    keywords: ["application MikroTik Windows", "logiciel MikroTik Linux", "Mikhmon Desktop", "gestion Hotspot PC"],
    sections: [
      { title: "Un véritable poste de pilotage MikroTik", paragraphs: ["La version Desktop exploite l’espace disponible sur ordinateur pour afficher davantage d’informations sans perdre en lisibilité. Elle convient aux exploitants WISP, providers, techniciens et équipes qui supervisent plusieurs équipements."], bullets: ["Tableau de bord réseau et commercial", "Topologie interactive des interfaces et clients", "Carte terrain pour AP, CPE et liaisons", "Terminal RouterOS avec assistant Moailte"] },
      { title: "Disponible sur Windows et Linux", paragraphs: ["MikhmoAI Desktop est distribué pour Windows 10/11 et Linux x86_64. Le site sélectionne automatiquement la version publiée la plus récente afin que les utilisateurs obtiennent toujours le bon installateur."] },
      { title: "Mobile et Desktop dans le même écosystème", paragraphs: ["Intervenez rapidement depuis Android lorsque vous êtes sur le terrain, puis retrouvez une vue de travail complète sur votre ordinateur. Les deux expériences couvrent le même objectif : simplifier l’exploitation quotidienne de RouterOS et des hotspots."] },
    ],
    faq: [
      { question: "Quels systèmes sont pris en charge ?", answer: "La version Desktop est prévue pour Windows 10, Windows 11 et les principales distributions Linux x86_64." },
      { question: "Comment obtenir la dernière version ?", answer: "Les boutons de téléchargement détectent automatiquement le fichier publié avec le numéro de version le plus élevé pour Windows ou Linux." },
      { question: "La version Android reste-t-elle disponible ?", answer: "Oui. MikhmoAI constitue désormais une suite comprenant les versions Android, Windows et Linux." },
    ],
  },
  {
    slug: "topologie-reseau-mikrotik-wisp",
    title: "Topologie réseau MikroTik et WISP interactive",
    metaTitle: "Topologie réseau MikroTik et cartographie WISP",
    description: "Visualisez automatiquement routeurs, interfaces, AP, CPE, clients Hotspot et PPPoE dans une topologie MikroTik interactive avec MikhmoAI Desktop.",
    eyebrow: "Network Operations Center",
    intro: "Passez d’une liste d’interfaces à une représentation vivante de votre infrastructure. MikhmoAI organise les équipements et leurs liens pour accélérer la supervision et le diagnostic.",
    image: { src: "/mikhmonpro-topologie-reseau.png", alt: "Topologie réseau WISP interactive avec routeur MikroTik, interfaces, points d’accès, clients et liens" },
    keywords: ["topologie réseau MikroTik", "cartographie réseau WISP", "visualisation réseau RouterOS", "monitoring CPE MikroTik"],
    sections: [
      { title: "Comprendre le réseau en un coup d’œil", paragraphs: ["La vue topologique regroupe interfaces, bridges, tunnels PPP, points d’accès, CPE et clients. Les couleurs et les liens facilitent l’identification des équipements actifs, isolés ou en erreur."], bullets: ["Vue schématique et carte dynamique", "Zoom, déplacement et mini-carte", "Filtres par service ou type d’équipement", "Réorganisation automatique des nœuds"] },
      { title: "Pensée pour les réseaux WISP", paragraphs: ["Un opérateur WISP doit comprendre rapidement comment un routeur, un AP et ses clients sont reliés. La topologie réduit le temps passé à parcourir les menus RouterOS et donne un contexte immédiat aux incidents."] },
      { title: "Du monitoring au diagnostic", paragraphs: ["La visualisation ne remplace pas les métriques : elle les met en contexte. Depuis la structure du réseau, l’exploitant peut retrouver un équipement, analyser sa place dans la chaîne et poursuivre le diagnostic avec les outils MikhmoAI."] },
    ],
    faq: [
      { question: "Quels équipements apparaissent dans la topologie ?", answer: "La vue peut représenter les interfaces MikroTik, bridges, tunnels PPP, AP, CPE, clients Hotspot et autres éléments détectés." },
      { question: "La carte est-elle interactive ?", answer: "Oui, elle prend en charge le zoom, le déplacement, les filtres, plusieurs modes de vue et la réorganisation des nœuds." },
      { question: "Cette fonction convient-elle à un WISP ?", answer: "Oui, elle est conçue pour donner une vue opérationnelle des équipements radio, des liens et des clients d’un réseau WISP." },
    ],
  },
  {
    slug: "cartographie-terrain-wisp",
    title: "Cartographie terrain pour réseaux WISP MikroTik",
    metaTitle: "Carte terrain WISP pour équipements MikroTik",
    description: "Positionnez routeurs MikroTik, AP, CPE, caméras et liaisons sur une carte terrain pour documenter et exploiter votre réseau WISP.",
    eyebrow: "Infrastructure géographique",
    intro: "Reliez la configuration logique du réseau à sa réalité sur le terrain. La carte WISP place les sites, équipements et liaisons sur une carte exploitable par les équipes techniques.",
    image: { src: "/mikhmonpro-carte-terrain-wisp.png", alt: "Carte terrain WISP avec équipements MikroTik, points d’accès et liaisons positionnés géographiquement" },
    keywords: ["carte réseau WISP", "cartographie équipements MikroTik", "gestion AP CPE", "planification réseau WiFi"],
    sections: [
      { title: "Documentez précisément chaque installation", paragraphs: ["Placez un routeur, un point d’accès, un CPE, une caméra ou un site client à son emplacement réel. Les équipes disposent ainsi d’une référence commune pour les interventions."], bullets: ["Recherche d’équipement", "Positionnement par coordonnées", "Liaisons entre sites", "Export GeoJSON"] },
      { title: "Préparez les interventions terrain", paragraphs: ["Avant un déplacement, le technicien peut localiser l’équipement concerné, comprendre ses liaisons et identifier les autres éléments présents à proximité. Cette préparation réduit les erreurs et les visites inutiles."] },
      { title: "Une vision complémentaire à la topologie", paragraphs: ["La topologie explique les relations logiques ; la carte terrain explique la géographie. Ensemble, elles fournissent une documentation opérationnelle bien plus riche qu’une simple liste RouterOS."] },
    ],
    faq: [
      { question: "Peut-on placer des équipements non-MikroTik ?", answer: "La carte est pensée pour représenter l’infrastructure terrain, notamment AP, CPE, caméras, sites et liaisons utiles à l’exploitation." },
      { question: "Les données peuvent-elles être exportées ?", answer: "L’interface prévoit un export GeoJSON pour réutiliser les emplacements et liaisons dans des outils compatibles." },
      { question: "Quelle est la différence avec la topologie ?", answer: "La topologie montre les relations réseau tandis que la carte terrain montre l’emplacement géographique des équipements." },
    ],
  },
  {
    slug: "terminal-routeros-assiste-ia",
    title: "Terminal RouterOS avec assistant IA",
    metaTitle: "Terminal RouterOS assisté par IA pour MikroTik",
    description: "Exécutez des commandes RouterOS en SSH ou API avec un terminal MikroTik assisté par Moailte AI, des actions rapides et une aide contextuelle.",
    eyebrow: "Administration RouterOS avancée",
    intro: "Gardez la puissance de la ligne de commande sans rester seul face au terminal. MikhmoAI combine sessions SSH/API, raccourcis opérationnels et assistance Moailte.",
    image: { src: "/mikhmonpro-terminal-routeros.png", alt: "Terminal CLI RouterOS avec session SSH, commandes MikroTik et assistant Moailte AI" },
    keywords: ["terminal RouterOS", "SSH MikroTik", "assistant IA MikroTik", "commandes RouterOS"],
    sections: [
      { title: "Plusieurs sessions dans un même espace", paragraphs: ["Ouvrez des onglets API ou SSH et passez d’une session à l’autre sans perdre votre contexte. Le terminal convient aux diagnostics, vérifications et opérations que l’interface graphique ne couvre pas."], bullets: ["Sessions SSH et API", "Onglets multiples", "Historique et contexte de session", "Compatibilité RouterOS v6 et v7"] },
      { title: "Moailte comme copilote technique", paragraphs: ["L’assistant aide à traduire une intention en commande, explique les mots-clés RouterOS et propose des actions rapides. L’administrateur reste responsable de la validation avant exécution."] },
      { title: "Accélérez les diagnostics courants", paragraphs: ["Consultez les utilisateurs actifs, le trafic, les journaux, le DNS ou lancez un test réseau depuis des raccourcis contextualisés. Les tâches fréquentes restent accessibles même lorsque la CLI est nécessaire."] },
    ],
    faq: [
      { question: "Le terminal utilise-t-il SSH ?", answer: "Oui, MikhmoAI Desktop prend en charge les sessions SSH ainsi que des interactions via l’API RouterOS." },
      { question: "L’IA exécute-t-elle automatiquement les commandes ?", answer: "L’assistant aide à formuler et comprendre les commandes ; l’administrateur doit toujours contrôler les actions sensibles." },
      { question: "RouterOS v7 est-il pris en charge ?", answer: "Oui, le terminal et les outils sont conçus pour les environnements RouterOS v6 et v7." },
    ],
  },
  {
    slug: "editeur-portail-captif-mikrotik",
    title: "Éditeur de portail captif MikroTik sans code",
    metaTitle: "Créer un portail captif MikroTik personnalisé",
    description: "Créez et prévisualisez un portail captif MikroTik personnalisé : marque, forfaits, paiements, langues et déploiement Hotspot sans coder.",
    eyebrow: "Hotspot Experience Builder",
    intro: "Transformez la page de connexion Wi-Fi en véritable vitrine commerciale. L’éditeur MikhmoAI permet de configurer l’identité, les offres et l’expérience client avec une prévisualisation immédiate.",
    image: { src: "/mikhmonpro-editeur-portail-captif.png", alt: "Éditeur visuel de portail captif MikroTik avec personnalisation de marque, forfaits et aperçu mobile" },
    keywords: ["portail captif MikroTik", "page login Hotspot MikroTik", "éditeur portail WiFi", "template Hotspot RouterOS"],
    sections: [
      { title: "Personnalisez sans modifier le HTML", paragraphs: ["Définissez le nom du hotspot, la marque, les couleurs, le logo, les contacts et l’adresse depuis des champs guidés. La prévisualisation mobile ou desktop reflète immédiatement les choix."], bullets: ["Identité visuelle et logo", "Thèmes clair et sombre", "Aperçu mobile et desktop", "Textes multilingues"] },
      { title: "Présentez clairement vos forfaits", paragraphs: ["Organisez les profils Internet, durées, débits et prix pour que le client comprenne l’offre avant de se connecter. Le portail devient un point de vente cohérent avec l’activité Hotspot."] },
      { title: "Exportez ou déployez", paragraphs: ["Une fois le portail vérifié, téléchargez le package ZIP ou déployez-le vers l’environnement prévu. Cette continuité réduit les erreurs entre la conception et la mise en production."] },
    ],
    faq: [
      { question: "Faut-il savoir coder ?", answer: "Non. Les principaux éléments du portail sont configurés depuis une interface visuelle avec prévisualisation." },
      { question: "Peut-on afficher plusieurs langues ?", answer: "Oui, l’éditeur prévoit la personnalisation des textes et une organisation multilingue de l’expérience Hotspot." },
      { question: "Le portail peut-il être exporté ?", answer: "Oui, l’interface permet de télécharger un package ZIP ou de lancer un déploiement depuis MikhmoAI." },
    ],
  },
  {
    slug: "gestion-hotspot-mikrotik",
    title: "Gestion Hotspot MikroTik simple et centralisée",
    metaTitle: "Gestion Hotspot MikroTik : application complète",
    description: "Gérez utilisateurs, profils, sessions et vouchers de votre Hotspot MikroTik depuis Android avec MikhmoAI, compatible RouterOS v6 et v7.",
    eyebrow: "Solution Hotspot MikroTik",
    intro: "MikhmoAI réunit les opérations quotidiennes d’un hotspot dans une application Android claire : création des accès, suivi des utilisateurs, contrôle des sessions et maintenance du routeur.",
    keywords: ["gestion hotspot MikroTik", "logiciel hotspot MikroTik", "Mikhmon Android", "RouterOS hotspot"],
    sections: [
      { title: "Pilotez votre hotspot sans ordinateur", paragraphs: ["Connectez un ou plusieurs routeurs MikroTik puis accédez aux informations essentielles depuis votre téléphone. L’interface simplifie les commandes RouterOS sans retirer les fonctions dont les techniciens ont besoin."], bullets: ["Utilisateurs actifs et sessions en temps réel", "Création et désactivation des comptes Hotspot", "Gestion des profils, durées et limitations", "Connexion locale, VPN ou SSH"] },
      { title: "Une solution adaptée aux exploitants Wi-Fi", paragraphs: ["La plateforme convient aux cybercafés, hôtels, écoles, espaces publics, revendeurs Wi-Fi et petits fournisseurs d’accès. Les tâches répétitives sont automatisées afin de consacrer plus de temps aux clients et au développement du réseau."] },
      { title: "Compatible RouterOS v6 et v7", paragraphs: ["MikhmoAI reconnaît l’environnement du routeur et prend en charge les méthodes de connexion adaptées à RouterOS. Vous pouvez continuer à exploiter un parc mixte pendant une migration vers RouterOS v7."] },
    ],
    faq: [
      { question: "MikhmoAI fonctionne-t-il avec RouterOS v7 ?", answer: "Oui, l’application est conçue pour gérer les hotspots MikroTik sous RouterOS v6 et v7." },
      { question: "Puis-je gérer plusieurs routeurs ?", answer: "Oui. Vous pouvez enregistrer plusieurs passerelles et passer rapidement d’un hotspot à l’autre." },
      { question: "Un ordinateur est-il nécessaire ?", answer: "Non. Les principales opérations de gestion et de génération de vouchers sont disponibles depuis Android." },
    ],
  },
  {
    slug: "application-mikrotik-android",
    title: "Application MikroTik Android pour gérer votre réseau",
    metaTitle: "Application MikroTik Android pour Hotspot et RouterOS",
    description: "Téléchargez une application MikroTik Android pour gérer hotspots, utilisateurs, vouchers et routeurs RouterOS v6/v7 depuis votre téléphone.",
    eyebrow: "MikroTik sur mobile",
    intro: "Emportez votre tableau de bord MikroTik partout. MikhmoAI transforme les opérations RouterOS courantes en actions rapides, pensées pour un écran mobile.",
    image: { src: "/mikhmonpro-desktop-dashboard.png", alt: "Console MikhmoAI Desktop avec monitoring Hotspot MikroTik, PPP, RADIUS et ventes" },
    mobileImage: { src: "/mikhmoai-mobile-dashboard-hotspot-radius.jpeg", alt: "Application MikhmoAI Mobile avec dashboard Hotspot MikroTik, PPP, RADIUS, ventes et accès VPN" },
    keywords: ["application MikroTik Android", "MikroTik mobile", "gérer MikroTik téléphone", "RouterOS Android"],
    sections: [
      { title: "Votre routeur dans votre poche", paragraphs: ["Consultez l’état du hotspot, gérez les accès et intervenez sans attendre de retourner devant un PC. L’application vise autant les nouveaux exploitants que les administrateurs réseau expérimentés."], bullets: ["Interface mobile fluide", "Accès distant sécurisé", "Multi-routeurs", "Actions guidées pour les débutants"] },
      { title: "Deux versions Android disponibles", paragraphs: ["La version ARM64 est recommandée pour les appareils récents disposant de 4 Go de mémoire ou plus. Une version ARM32 reste disponible pour les téléphones plus anciens ou plus modestes."] },
      { title: "Travaillez sur site ou à distance", paragraphs: ["Sur le réseau local, MikhmoAI communique directement avec le routeur. Pour l’administration distante, utilisez une liaison VPN ou SSH correctement sécurisée plutôt que d’exposer les services RouterOS sur Internet."] },
    ],
    faq: [
      { question: "Quelle version Android télécharger ?", answer: "Choisissez ARM64 pour un téléphone récent avec 4 Go de RAM ou plus, et ARM32 pour les appareils plus anciens." },
      { question: "L’application remplace-t-elle Winbox ?", answer: "Elle couvre les besoins de gestion Hotspot mobile. Winbox reste utile pour certaines configurations RouterOS très avancées." },
      { question: "Peut-on utiliser l’application à distance ?", answer: "Oui, idéalement à travers un VPN ou un tunnel sécurisé configuré vers le routeur." },
    ],
  },
  {
    slug: "generateur-vouchers-mikrotik",
    title: "Générateur de vouchers MikroTik avec QR codes",
    metaTitle: "Générateur de vouchers MikroTik et tickets Wi-Fi",
    description: "Créez en lot des vouchers MikroTik, tickets Wi-Fi et QR codes depuis Android. Export PDF, impression et gestion des stocks avec MikhmoAI.",
    eyebrow: "Vouchers et tickets Wi-Fi",
    intro: "Créez des codes d’accès Wi-Fi prêts à vendre en quelques secondes. Définissez le profil, la durée et la quantité, puis exportez ou imprimez vos tickets.",
    image: { src: "/mikhmoai-generateur-vouchers-desktop.png", alt: "Générateur MikhmoAI Desktop de vouchers MikroTik par lots avec formats et historique" },
    mobileImage: { src: "/mikhmoai-mobile-generateur-vouchers.jpeg", alt: "Génération de 50 vouchers MikroTik sur mobile avec profil, format et limites configurables" },
    keywords: ["générateur voucher MikroTik", "tickets WiFi MikroTik", "imprimer voucher MikroTik", "QR code hotspot"],
    sections: [
      { title: "Générez des tickets en lot", paragraphs: ["Sélectionnez un profil Hotspot et produisez le nombre de vouchers nécessaire. Les identifiants sont ajoutés au routeur et organisés pour faciliter la distribution."], bullets: ["Création individuelle ou en masse", "Codes et mots de passe configurables", "QR codes prêts à scanner", "Export PDF et impression"] },
      { title: "Gardez le contrôle sur votre stock", paragraphs: ["Les alertes de stock bas permettent d’anticiper les ruptures. L’assistant Moailte peut renouveler les profils épuisés et nettoyer les tickets expirés selon les règles choisies."] },
      { title: "Vendez vos accès plus facilement", paragraphs: ["Associez les vouchers à vos offres de durée, de débit ou de volume. La boutique web connectée permet d’étendre la vente au-delà du point de distribution physique."] },
    ],
    faq: [
      { question: "Peut-on imprimer les vouchers ?", answer: "Oui, les tickets peuvent être exportés en PDF et préparés pour une impression directe." },
      { question: "Les QR codes sont-ils pris en charge ?", answer: "Oui. Les vouchers peuvent inclure un QR code afin de simplifier la connexion ou la distribution." },
      { question: "Peut-on générer plusieurs centaines de codes ?", answer: "Oui, la génération en lot est prévue pour produire rapidement de grandes séries de tickets." },
    ],
  },
  {
    slug: "gestion-mikrotik-distance",
    title: "Gérer un routeur MikroTik à distance en sécurité",
    metaTitle: "Gestion MikroTik à distance par VPN et SSH",
    description: "Administrez votre routeur MikroTik à distance depuis Android avec VPN, SSH et connexions sécurisées, sans exposer inutilement RouterOS.",
    eyebrow: "Administration distante",
    intro: "Surveillez et exploitez vos hotspots même lorsque vous n’êtes pas sur place. MikhmoAI prend en charge plusieurs méthodes de connexion adaptées à votre infrastructure.",
    image: { src: "/mikhmonpro-terminal-routeros.png", alt: "Terminal MikhmoAI Desktop pour administrer RouterOS par SSH et API" },
    mobileImage: { src: "/mikhmoai-mobile-wizard-vpn.jpeg", alt: "Assistant MikhmoAI de déploiement VPN Cloud sécurisé pour administrer un routeur MikroTik à distance" },
    keywords: ["gestion MikroTik à distance", "MikroTik VPN Android", "accès distant RouterOS", "MikroTik derrière CGNAT"],
    sections: [
      { title: "Privilégiez un tunnel sécurisé", paragraphs: ["Un VPN crée un chemin privé entre votre téléphone et le réseau du routeur. Cette approche évite d’ouvrir directement les interfaces d’administration RouterOS au public."], bullets: ["Accès via VPN", "Tunnel SSH", "Connexion sur réseau local", "Configuration par QR code"] },
      { title: "Intervenez sans déplacement", paragraphs: ["Vérifiez les sessions, créez un accès client ou effectuez une opération de maintenance depuis votre téléphone. Pour les exploitants de plusieurs sites, le gain de temps est immédiat."] },
      { title: "Bonnes pratiques indispensables", paragraphs: ["Utilisez un compte RouterOS dédié avec les permissions minimales, un mot de passe unique, des services chiffrés et des règles de pare-feu restrictives. Sauvegardez la configuration avant toute modification importante."] },
    ],
    faq: [
      { question: "Faut-il une adresse IP publique ?", answer: "Pas toujours. Un VPN correctement déployé peut permettre l’accès à un site derrière NAT ou CGNAT selon l’architecture utilisée." },
      { question: "Dois-je ouvrir le port API sur Internet ?", answer: "Ce n’est pas recommandé. Préférez un VPN et limitez les services RouterOS aux réseaux ou adresses de confiance." },
      { question: "MikhmoAI prend-il en charge SSH ?", answer: "Oui, l’application prévoit des connexions sécurisées par SSH et VPN ainsi qu’un accès local." },
    ],
  },
  {
    slug: "monitoring-hotspot-mikrotik",
    title: "Monitoring Hotspot MikroTik en temps réel",
    metaTitle: "Monitoring MikroTik : surveiller un Hotspot en temps réel",
    description: "Surveillez utilisateurs, sessions, stocks de vouchers et état de vos hotspots MikroTik en temps réel depuis l’application MikhmoAI.",
    eyebrow: "Supervision réseau",
    intro: "Visualisez rapidement ce qui se passe sur vos hotspots et intervenez avant qu’un incident ou une rupture de tickets ne gêne vos clients.",
    image: { src: "/mikhmoai-dashboard-monitoring-radius.png", alt: "Dashboard MikhmoAI Desktop de monitoring MikroTik, Hotspot, PPP, RADIUS et trafic" },
    mobileImage: { src: "/mikhmoai-mobile-monitoring-trafic.jpeg", alt: "Monitoring mobile du trafic MikroTik en temps réel avec débit descendant, montant et actions rapides" },
    keywords: ["monitoring MikroTik", "surveillance hotspot MikroTik", "utilisateurs actifs RouterOS", "supervision WiFi"],
    sections: [
      { title: "Les informations utiles au même endroit", paragraphs: ["Le tableau de bord met en avant les utilisateurs connectés, les sessions et les indicateurs nécessaires à l’exploitation quotidienne."], bullets: ["Utilisateurs actifs", "État des passerelles", "Stocks de vouchers", "Alertes et maintenance"] },
      { title: "Réagissez plus vite", paragraphs: ["Une vue mobile permet de vérifier immédiatement un hotspot lorsqu’un client signale un problème. Vous pouvez distinguer une panne de connexion d’un simple compte expiré et agir en conséquence."] },
      { title: "Automatisez les contrôles répétitifs", paragraphs: ["Moailte AI surveille les seuils définis, signale les stocks faibles et peut déclencher certaines tâches de maintenance. L’automatisation complète la supervision humaine sans la remplacer."] },
    ],
    faq: [
      { question: "Les utilisateurs actifs sont-ils visibles ?", answer: "Oui, le tableau de bord permet de suivre les sessions et utilisateurs Hotspot actifs." },
      { question: "Puis-je surveiller plusieurs sites ?", answer: "Oui, plusieurs routeurs peuvent être enregistrés afin de centraliser le suivi des hotspots." },
      { question: "Existe-t-il des alertes de stock ?", answer: "Oui, MikhmoAI peut signaler les profils ou stocks de vouchers qui atteignent un seuil bas." },
    ],
  },
  {
    slug: "boutique-vouchers-wifi",
    title: "Boutique de vouchers Wi-Fi connectée à MikroTik",
    metaTitle: "Boutique de vouchers Wi-Fi MikroTik en ligne",
    description: "Vendez vos vouchers Wi-Fi en ligne avec une boutique connectée à MikroTik : stocks, profils, ventes et distribution automatisée.",
    eyebrow: "Vente de Wi-Fi",
    intro: "Transformez votre hotspot en activité accessible en ligne. La boutique MikhmoAI relie vos offres, vos stocks de vouchers et la distribution aux clients.",
    keywords: ["vendre vouchers WiFi", "boutique MikroTik", "vente tickets internet", "business hotspot WiFi"],
    sections: [
      { title: "Commercialisez vos forfaits Wi-Fi", paragraphs: ["Présentez des offres compréhensibles basées sur la durée, le débit ou le volume. Les clients sélectionnent l’accès adapté tandis que l’exploitant conserve une vue sur le stock et les ventes."], bullets: ["Catalogue de profils", "Synchronisation des stocks", "Distribution des vouchers", "Suivi des ventes"] },
      { title: "Un canal supplémentaire pour votre hotspot", paragraphs: ["La vente en ligne complète la distribution physique. Elle permet de servir un client en dehors des horaires du point de vente et de réduire les manipulations manuelles."] },
      { title: "Pensée pour les providers", paragraphs: ["Les fournisseurs de VPN, Radius ou services MikroTik peuvent rejoindre le programme Provider et intégrer leurs offres à l’écosystème MikhmoAI."] },
    ],
    faq: [
      { question: "La boutique est-elle liée au stock de vouchers ?", answer: "Oui, le mode SaaS est conçu pour synchroniser les offres, les stocks et la distribution des accès." },
      { question: "Puis-je vendre différents forfaits ?", answer: "Oui, vous pouvez organiser des offres selon les profils disponibles sur vos hotspots." },
      { question: "Comment activer la boutique ?", answer: "L’activation des fonctions SaaS et Provider s’effectue avec une licence MikhmoAI compatible." },
    ],
  },
  {
    slug: "radius-cloud-multi-nas-mikrotik",
    title: "Serveur RADIUS Cloud et gestion multi-NAS MikroTik",
    metaTitle: "RADIUS Cloud multi-NAS pour MikroTik",
    description: "Centralisez routeurs NAS, profils, sessions, vouchers et revendeurs avec le serveur RADIUS Cloud multi-site de MikhmoAI.",
    eyebrow: "RADIUS centralisé",
    intro: "Passez d'une gestion routeur par routeur à une infrastructure centralisée. MikhmoAI relie plusieurs NAS MikroTik à un même service RADIUS pour administrer les accès, forfaits et sessions à l'échelle.",
    image: { src: "/mikhmoai-radius-cloud-multi-nas.png", alt: "Dashboard RADIUS Cloud MikhmoAI avec flotte de routeurs NAS, sessions, profils et vouchers" },
    mobileImage: { src: "/mikhmoai-mobile-statistiques-radius.jpeg", alt: "Statistiques RADIUS multi-NAS sur l'application mobile MikhmoAI" },
    keywords: ["serveur RADIUS MikroTik", "RADIUS Cloud MikroTik", "multi NAS MikroTik", "gestion multi routeurs MikroTik", "RADIUS hotspot"],
    sections: [
      { title: "Une identité centralisée pour tous vos sites", paragraphs: ["Les utilisateurs, profils et politiques ne sont plus isolés dans chaque routeur. Le serveur RADIUS applique une gestion cohérente sur la flotte NAS et simplifie l'ouverture de nouveaux sites."], bullets: ["Flotte de routeurs NAS", "Sessions en ligne PoD", "Profils centralisés", "Vouchers SaaS et lots"] },
      { title: "Conçu pour les WISP et réseaux multi-sites", paragraphs: ["Supervisez plusieurs routeurs MikroTik, suivez les sessions actives et déployez les mêmes offres sur différents points de présence depuis une console unique."] },
      { title: "Cloud ou serveur local", paragraphs: ["MikhmoAI prévoit une exploitation Cloud J+Radius ainsi que la configuration de serveurs RADIUS locaux selon les contraintes de l'entreprise."] },
    ],
    faq: [
      { question: "Qu'est-ce qu'un NAS RADIUS MikroTik ?", answer: "Un NAS est un routeur qui transmet les demandes d'authentification et de comptabilité au serveur RADIUS central." },
      { question: "Peut-on gérer plusieurs routeurs ?", answer: "Oui, la flotte multi-NAS est précisément conçue pour rattacher plusieurs routeurs MikroTik à la même infrastructure." },
    ],
  },
  {
    slug: "gestion-revendeurs-vouchers-mikrotik",
    title: "Gestion des revendeurs de vouchers MikroTik",
    metaTitle: "Revendeurs vouchers MikroTik et commissions",
    description: "Créez un réseau de revendeurs de tickets Wi-Fi, attribuez des soldes, suivez ventes et commissions depuis MikhmoAI.",
    eyebrow: "Distribution commerciale",
    intro: "Structurez la distribution de vos accès Wi-Fi sans perdre le contrôle. Le Reseller Manager centralise crédits, ventes, commissions, comptes revendeurs et QR codes.",
    image: { src: "/mikhmoai-gestion-revendeurs.png", alt: "Gestionnaire de revendeurs MikhmoAI avec soldes, ventes, commissions et comptes vouchers" },
    mobileImage: { src: "/mikhmoai-mobile-gestion-revendeurs.jpeg", alt: "Gestion mobile des revendeurs, crédits, ventes et commissions MikhmoAI" },
    keywords: ["revendeur voucher MikroTik", "gestion tickets WiFi revendeurs", "commission vente hotspot", "Mikhmon reseller"],
    sections: [
      { title: "Développez votre réseau de distribution", paragraphs: ["Créez des comptes revendeurs, créditez leur solde et mesurez les ventes générées depuis chaque point de distribution."], bullets: ["Solde et crédits", "Niveaux revendeur", "Commissions estimées", "Partage et QR code"] },
      { title: "Gardez une vision financière globale", paragraphs: ["Le tableau de bord agrège les crédits en circulation, les ventes globales et le nombre de revendeurs actifs pour faciliter le pilotage."] },
      { title: "Compatible avec les opérations RADIUS", paragraphs: ["Les revendeurs s'intègrent au parcours RADIUS et vouchers afin de distribuer des accès sur plusieurs sites ou routeurs."] },
    ],
    faq: [
      { question: "Peut-on définir une commission par revendeur ?", answer: "Le gestionnaire suit le profit ou la commission estimée selon les règles commerciales configurées." },
      { question: "Chaque revendeur dispose-t-il d'un solde ?", answer: "Oui, les crédits peuvent être attribués et suivis individuellement." },
    ],
  },
  {
    slug: "vente-vouchers-mobile-money-mikrotik",
    title: "Vente de vouchers MikroTik avec Mobile Money",
    metaTitle: "Vendre des vouchers MikroTik par Mobile Money",
    description: "Vendez automatiquement vos forfaits Hotspot MikroTik et encaissez par Mobile Money avec stocks synchronisés et historique des ventes.",
    eyebrow: "Paiement et vente en ligne",
    intro: "MikhmoAI transforme les profils Hotspot en offres commercialisables. Les lots sont synchronisés avec le routeur et les clients peuvent acheter leurs tickets via une passerelle Mobile Money intégrée.",
    image: { src: "/mikhmoai-vente-vouchers-mobile-money.png", alt: "Interface TicketMOMO de vente en ligne de vouchers MikroTik avec paiement Mobile Money" },
    mobileImage: { src: "/mikhmoai-mobile-rapports-ventes.jpeg", alt: "Rapports de ventes Cloud RADIUS et rentabilité sur MikhmoAI Mobile" },
    keywords: ["vendre voucher MikroTik Mobile Money", "paiement hotspot WiFi", "vente ticket WiFi en ligne", "voucher FCFA MikroTik"],
    sections: [
      { title: "Transformez vos profils en catalogue", paragraphs: ["Présentez clairement prix, durée, débit et volume de chaque forfait afin que le client choisisse l'offre adaptée."], bullets: ["Prix en FCFA", "Durée et limites", "Stock en ligne", "Historique des ventes"] },
      { title: "Synchronisez les lots avec le routeur", paragraphs: ["Les vouchers disponibles sont reliés au routeur actif pour réduire les doubles ventes et les manipulations de stock."] },
      { title: "Encaissez à distance", paragraphs: ["La passerelle Mobile Money permet d'étendre la vente au-delà du comptoir physique et d'automatiser la remise du ticket après validation."] },
    ],
    faq: [
      { question: "Les stocks sont-ils synchronisés ?", answer: "Oui, l'interface affiche les lots Cloud synchronisés avec le routeur actif." },
      { question: "Peut-on vendre plusieurs forfaits ?", answer: "Oui, chaque profil tarifé peut devenir une offre avec ses propres limites de temps, débit ou volume." },
    ],
  },
  {
    slug: "diagnostic-securite-mikrotik-ia",
    title: "Diagnostic, sécurité et notifications IA pour MikroTik",
    metaTitle: "Diagnostic sécurité MikroTik et alertes IA",
    description: "Analysez la santé d'un routeur MikroTik, consultez les logs RouterOS et recevez des alertes et corrections assistées par IA avec MikhmoAI.",
    eyebrow: "Santé et automatisation",
    intro: "Détectez plus vite les erreurs de configuration, les événements critiques et les anomalies réseau. MikhmoAI combine scan de santé, logs temps réel et notifications intelligentes.",
    image: { src: "/mikhmoai-notifications-assistant-ia.png", alt: "Notifications MikhmoAI avec alertes réseau, bilan clients et suggestions de correction automatique" },
    mobileImage: { src: "/mikhmoai-mobile-assistant-ia.jpeg", alt: "Assistant Moailte AI sur mobile avec bilan réseau, ventes et actions rapides" },
    keywords: ["diagnostic MikroTik", "scan sécurité RouterOS", "logs MikroTik temps réel", "monitoring MikroTik IA", "alerte réseau MikroTik"],
    sections: [
      { title: "Scannez la santé du routeur", paragraphs: ["Le diagnostic examine sécurité, performances et configuration afin de mettre en évidence les points qui nécessitent une intervention."], bullets: ["Score de santé", "Contrôles de sécurité", "Analyse de configuration", "Recommandations"] },
      { title: "Lisez les logs en temps réel", paragraphs: ["Filtrez les événements DHCP, wireless, Hotspot, scripts, comptes et erreurs sans perdre le contexte opérationnel."] },
      { title: "Recevez des notifications utiles", paragraphs: ["L'assistant résume l'affluence, le trafic, les ventes et les déconnexions, puis peut suggérer une action ou signaler une correction automatique."] },
    ],
    faq: [
      { question: "MikhmoAI remplace-t-il un audit de sécurité ?", answer: "Le scan aide au diagnostic quotidien, mais les infrastructures critiques doivent également faire l'objet d'audits spécialisés." },
      { question: "Les logs RouterOS sont-ils filtrables ?", answer: "Oui, l'écran de logs permet une recherche par mot-clé et un filtrage par topic." },
    ],
  },
];

export type BlogPost = SeoPage & { publishedAt: string; readingTime: string };

export const blogPosts: BlogPost[] = [
  {
    slug: "creer-vouchers-mikrotik-android",
    title: "Comment créer des vouchers MikroTik depuis Android",
    metaTitle: "Créer des vouchers MikroTik sur Android : guide",
    description: "Guide pratique pour créer des vouchers Hotspot MikroTik depuis un téléphone Android, définir les profils et préparer les tickets à imprimer.",
    eyebrow: "Guide pratique",
    intro: "Vous pouvez créer et distribuer des tickets Wi-Fi MikroTik sans ordinateur. Voici la méthode, les réglages à vérifier et les erreurs à éviter.",
    keywords: ["créer voucher MikroTik Android", "ticket WiFi Android", "Mikhmon mobile"],
    publishedAt: "2026-07-17",
    readingTime: "7 min",
    sections: [
      { title: "1. Préparer le Hotspot et le profil", paragraphs: ["Vérifiez que le serveur Hotspot fonctionne déjà sur le routeur. Créez ensuite un profil utilisateur correspondant à l’offre : durée de session, débit maximal, nombre d’appareils et éventuelle limite de données."], bullets: ["Nommer clairement le profil", "Tester la durée et le débit", "Vérifier le pool d’adresses", "Conserver une sauvegarde RouterOS"] },
      { title: "2. Connecter le routeur à l’application", paragraphs: ["Ajoutez la passerelle avec son adresse, son port et un compte RouterOS dédié. Sur place, utilisez le réseau local. Pour un accès distant, privilégiez un VPN plutôt que l’exposition publique de l’API."] },
      { title: "3. Générer les vouchers", paragraphs: ["Choisissez le profil, la quantité et le format des identifiants. Générez d’abord quelques codes de test, connectez un appareil au portail captif puis confirmez que la durée et les limitations appliquées sont correctes."] },
      { title: "4. Exporter et distribuer", paragraphs: ["Préparez les tickets au format PDF ou avec QR code. Sur chaque ticket, indiquez la durée, les instructions de connexion et un contact support sans exposer d’informations d’administration."] },
    ],
    faq: [
      { question: "Combien de vouchers peut-on créer ?", answer: "La génération en lot permet de produire de grandes séries. Commencez néanmoins par tester quelques codes avant un lot important." },
      { question: "Un QR code peut-il remplacer le mot de passe ?", answer: "Il peut faciliter la saisie ou ouvrir le portail, selon le modèle de ticket et la configuration du hotspot." },
    ],
  },
  {
    slug: "connecter-mikrotik-routeros-v7",
    title: "Comment connecter Mikhmon à MikroTik RouterOS v7",
    metaTitle: "Connecter Mikhmon à RouterOS v7 en sécurité",
    description: "Étapes pour connecter une application Mikhmon à un routeur MikroTik RouterOS v7 : services, compte dédié, pare-feu, API et VPN.",
    eyebrow: "Configuration RouterOS v7",
    intro: "Une connexion fiable commence par un compte limité et un chemin réseau sécurisé. Suivez ces vérifications avant d’ajouter votre routeur à MikhmoAI.",
    keywords: ["Mikhmon RouterOS v7", "connecter MikroTik API", "MikroTik v7 Android"],
    publishedAt: "2026-07-17",
    readingTime: "8 min",
    sections: [
      { title: "1. Mettre RouterOS à jour et sauvegarder", paragraphs: ["Installez une version stable adaptée au matériel, exportez la configuration et créez une sauvegarde avant de modifier les services ou le pare-feu."] },
      { title: "2. Créer un utilisateur dédié", paragraphs: ["N’utilisez pas le compte administrateur principal dans une application. Créez un utilisateur réservé à la gestion Hotspot et accordez uniquement les permissions requises."] },
      { title: "3. Choisir le mode de connexion", paragraphs: ["Sur le réseau local, limitez le service aux sous-réseaux de confiance. À distance, établissez un tunnel VPN et autorisez uniquement son sous-réseau dans les règles de pare-feu."], bullets: ["Ne pas exposer Winbox ou l’API au monde entier", "Limiter les adresses sources", "Utiliser des secrets uniques", "Consulter régulièrement les journaux"] },
      { title: "4. Tester progressivement", paragraphs: ["Vérifiez d’abord l’accessibilité du routeur, puis l’authentification et enfin une lecture simple des profils Hotspot. N’effectuez une écriture qu’après validation de ces étapes."] },
    ],
    faq: [
      { question: "Quel port faut-il utiliser ?", answer: "Le port dépend du service choisi et de votre configuration. Évitez les valeurs publiques par défaut et restreignez toujours les sources autorisées." },
      { question: "RouterOS v6 est-il aussi compatible ?", answer: "MikhmoAI prend en charge RouterOS v6 et v7, avec des adaptations selon les capacités disponibles." },
    ],
  },
  {
    slug: "securiser-api-mikrotik",
    title: "Sécuriser l’API MikroTik : les bonnes pratiques",
    metaTitle: "Sécuriser l’API MikroTik et l’accès RouterOS",
    description: "Protégez l’API MikroTik avec VPN, pare-feu, comptes limités, chiffrement et journalisation. Checklist de sécurité RouterOS.",
    eyebrow: "Sécurité RouterOS",
    intro: "L’interface d’administration d’un routeur ne doit jamais être exposée sans restriction. Cette checklist réduit fortement les risques liés à l’accès distant.",
    keywords: ["sécuriser API MikroTik", "sécurité RouterOS", "pare-feu MikroTik API"],
    publishedAt: "2026-07-17",
    readingTime: "9 min",
    sections: [
      { title: "Réduire la surface d’exposition", paragraphs: ["Désactivez les services inutilisés et limitez chaque service aux adresses ou sous-réseaux autorisés. Un service absent ne peut pas être attaqué."] },
      { title: "Passer par un VPN", paragraphs: ["Le VPN évite d’exposer directement l’administration RouterOS. Le pare-feu peut ensuite accepter les connexions de gestion uniquement depuis le sous-réseau du tunnel."] },
      { title: "Appliquer le moindre privilège", paragraphs: ["Créez un compte par usage ou opérateur. Retirez les permissions non nécessaires et changez immédiatement les identifiants lorsqu’un appareil ou un collaborateur n’est plus autorisé."] },
      { title: "Surveiller et sauvegarder", paragraphs: ["Consultez les connexions échouées, conservez des sauvegardes chiffrées hors du routeur et documentez les changements. Testez régulièrement la restauration sur un environnement contrôlé."], bullets: ["Mises à jour stables", "Mots de passe uniques", "Règles de pare-feu explicites", "Sauvegardes vérifiées"] },
    ],
    faq: [
      { question: "Changer le port suffit-il ?", answer: "Non. Cela réduit seulement le bruit automatisé. Les contrôles essentiels restent le VPN, le pare-feu, le chiffrement et les permissions limitées." },
      { question: "Peut-on autoriser une seule adresse IP ?", answer: "Oui, lorsque l’adresse d’administration est stable. Sinon, autorisez uniquement le sous-réseau de votre VPN." },
    ],
  },
  {
    slug: "resoudre-connexion-api-mikrotik",
    title: "Connexion API MikroTik refusée : diagnostic et solutions",
    metaTitle: "API MikroTik refusée : résoudre la connexion",
    description: "Votre application ne se connecte pas à MikroTik ? Vérifiez service API, adresse, port, compte, permissions, pare-feu, NAT et version RouterOS.",
    eyebrow: "Dépannage MikroTik",
    intro: "Une erreur de connexion provient généralement du réseau, du service RouterOS ou des permissions. Diagnostiquez chaque couche dans le bon ordre.",
    keywords: ["connexion API MikroTik refusée", "Mikhmon ne se connecte pas", "erreur MikroTik API"],
    publishedAt: "2026-07-17",
    readingTime: "6 min",
    sections: [
      { title: "1. Vérifier le chemin réseau", paragraphs: ["Confirmez l’adresse du routeur et testez depuis le même réseau. À distance, vérifiez que le VPN est établi avant de chercher une erreur dans l’application."] },
      { title: "2. Contrôler le service RouterOS", paragraphs: ["Dans IP > Services, confirmez que le service nécessaire est activé, écoute sur le port attendu et autorise l’adresse source utilisée."] },
      { title: "3. Vérifier le compte et les droits", paragraphs: ["Retapez les identifiants et contrôlez le groupe de permissions. Une authentification réussie ne garantit pas que le compte possède le droit de lire ou modifier les éléments Hotspot."] },
      { title: "4. Inspecter le pare-feu et les journaux", paragraphs: ["Une règle input peut bloquer la connexion avant qu’elle atteigne le service. Consultez les compteurs des règles et les journaux, sans désactiver globalement le pare-feu."], bullets: ["Adresse correcte", "VPN actif", "Service autorisé", "Compte non désactivé", "Règle input correspondante"] },
    ],
    faq: [
      { question: "Pourquoi cela fonctionne en Wi-Fi mais pas à distance ?", answer: "Le service est probablement accessible sur le LAN mais aucun chemin VPN ou aucune règle de pare-feu n’autorise la connexion distante." },
      { question: "Faut-il désactiver le pare-feu pour tester ?", answer: "Non. Utilisez les journaux et compteurs, puis ajoutez une règle temporaire très limitée à votre adresse de test." },
    ],
  },
];

export const getSolution = (slug: string) => solutionPages.find((page) => page.slug === slug);
export const getPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
