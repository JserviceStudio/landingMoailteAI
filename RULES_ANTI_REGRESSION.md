# 🛡️# RÈGLES ANTI-RÉGRESSION (MOAILTE AI)

## 1. SENSIBILITÉ À LA CASSE (CASE-SENSITIVITY)

- **CRITIQUE** : Windows est insensible à la casse, mais le bundler Android (Metro/Linux) est **STRICT**.
- **RÈGLE** : Toujours vérifier le nom réel du fichier sur le disque avant un import.
- **VIGILANCE** : `SecurityService.ts` doit être importé comme `@/services/SecurityService` (S majuscule). Ne jamais utiliser de minuscules par erreur.

## 2. RESPONSIVE DESIGN (useResponsive)

- **RÈGLE** : Tout nouveau composant ou composant restauré doit utiliser les utilitaires `s`, `ms`, `vs` du hook `useResponsive`.
- **VIGILANCE** : Ne jamais utiliser de valeurs numériques brutes (ex: `padding: 20`) sans scaling.

## 3. TYPAGE STRICT

- **RÈGLE** : Aucun `any` ou `@ts-ignore` n'est autorisé. Utiliser des interfaces ou `Record<string, any>` pour les données dynamiques.

Ces règles sont **STRICTES** et doivent être appliquées avant toute modification de code pour garantir la stabilité du projet et l'alignement avec les standards **Google Pro 2026**.

## 1. ALIGNEMENT DE L'ENVIRONNEMENT (EXPO 52)

- **Règle 1.1** : Ne JAMAIS modifier les versions des dépendances dans `package.json` sans vérifier au préalable le dossier `.originel`.
- **Règle 1.2** : L'environnement cible est **Expo SDK 52**, **React 18.3.1** et **React Native 0.76.9**. Aucune mise à jour vers des versions bêta ou instables n'est autorisée.
- **Règle 1.3** : En cas de doute sur une librairie native, se référer systématiquement à la version installée dans `.originel`.

## 2. TYPAGE ET QUALITÉ DU CODE (TYPESCRIPT STRICT)

- **Règle 2.1** : Le type `any` est INTERDIT. Tout nouveau code doit être typé de manière stricte.
- **Règle 2.2** : Exécuter `npx tsc --noEmit` après chaque modification majeure pour valider l'intégrité des types.
- **Règle 2.3** : Une fonction = Une tâche (Principes SOLID). Toute fonction dépassant 50 lignes doit être candidate au refactoring.

## 3. DESIGN SYSTEM (MATERIAL DESIGN 3 & GLASSMORPHISM)

- **Règle 3.1** : Utiliser EXCLUSIVEMENT les tokens de couleur définis dans `src/hooks/useTheme.ts`. Aucune couleur "hardcoded" n'est permise.
- **Règle 3.2** : Tout nouveau composant doit supporter nativement le **Dark Mode**.
- **Règle 3.3** : Les effets de "Flou" (Glassmorphism) doivent utiliser `BlurView` ou l'équivalent optimisé, avec des fallback pour les appareils bas de gamme.
- **Règle 3.4 - NON-GLASS BY DEFAULT** : Ne JAMAIS forcer l'usage du Glassmorphism sur une interface qui n'a pas été conçue pour cela ou qui n'utilise aucun effet de flou dans sa version originelle. Si la page cible utilise des fonds solides, conserver l'aspect solide pour garantir la lisibilité et l'harmonie.

## 4. GESTION DES ERREURS ET LOGS

- **Règle 4.1** : Aucun `catch` de bloc vide. Les erreurs doivent être loguées via `AppLogService`.
- **Règle 4.2** : Les retours haptiques (`expo-haptics`) sont obligatoires pour les actions critiques (Success/Error/Warning).

## 5. WORKFLOW GIT ET SAUVEGARDE

- **Règle 5.1** : Un commit par fonctionnalité ou correction logique. Messages de commit suivant le format : `feat(scope): message` ou `fix(scope): message`.
- **Règle 5.2** : Sauvegarde régulière obligatoire : ne jamais accumuler plus de 3 fichiers modifiés sans lancer une vérification de compilation.

## 6. ACCESSIBILITÉ & UI/UX (RÈGLES D'OR)

- **GESTION CLAVIER** : Utiliser systématiquement `KeyboardAvoidingView` et `ScrollView`. Aucun élément critique ne doit être masqué par le clavier lors de la saisie.
- **RÉTABLISSEMENT TAILLE** : Vérifier que les éléments fixes (footer, headers) retrouvent leur position et taille d'origine à la fermeture du clavier sans décalage visuel (Layout stable).
- **CONTRASTE** : Garantir un contraste maximal sur les écrans critiques (Login, Setup). Préférer les fonds solides (`Full Color`) pour les formulaires plutôt que le Glassmorphism excessif si cela nuit à la lisibilité.
- **CHAMPS SENSIBLES** : Appliquer systématiquement `noSpaces={true}`, `autoCorrect={false}` et `autoCapitalize="none"` sur tous les champs d'identifiants, mots de passe et réponses de sécurité pour prévenir les erreurs de saisie automatique du clavier.
- **VISIBILITÉ MOT DE PASSE** : Chaque champ de mot de passe doit inclure un bouton de visualisation (icônes `Eye`/`EyeOff`) pour permettre à l'utilisateur de vérifier sa saisie et réduire les erreurs de login/création.
- **RETOUR HAPTIQUE** : Chaque interaction majeure (bouton, toggle, erreur) doit déclencher un retour haptique approprié via `expo-haptics`.
- **ESPACE ET DYNAMISME** : Exploiter de manière harmonieuse toute la surface de l'écran, en particulier pour les éléments dynamiques ou coulissants (ScrollViews horizontales, carrousels). Les éléments ne doivent pas être coupés artificiellement par des marges externes bloquantes, mais doivent glisser fluidement jusqu'aux bords physiques de l'écran tout en conservant leur espacement interne.
- **LISIBILITÉ DES INPUTS** : Éviter absolument le chevauchement ou le conflit visuel entre les titres/labels et les textes secondaires/placeholders dans les champs texte. Les placeholders (ex: "Ex: texte") ne doivent être visibles que lorsque le champ est ciblé (focus) ou si le label (titre) est décalé afin que les deux informations ne se superposent jamais horizontalement ou verticalement au même endroit.
- **DESIGN RESPONSIVE ADAPTATIF** : Utiliser OBLIGATOIREMENT le hook `src/hooks/useResponsive.ts` pour tout calcul de layout, marges, nombre de colonnes ou dimensionnement d'éléments. L'application doit maintenir une cohérence visuelle absolue et une ergonomie parfaite sur TOUS les formats d'appareils (Téléphones compacts, Smartphones larges, Tablettes et Pliables). Ne jamais utiliser de valeurs de pixels fixes pour les conteneurs principaux sans passer par une mise à l'échelle adaptive (`moderateScale`).
- **AUDIT DE GRILLE (FLASHLIST)** : Les composants de liste (`FlashList`) doivent avoir leur `contentContainerStyle` défini comme un **objet pur** (ex: `contentContainerStyle={{ ...styles.listContent }}`) et non un tableau. Le nombre de colonnes (`numColumns`) doit être piloté par la valeur `columns` du hook `useResponsive`.
- **RÈGLE DES ZONES DE DÉBORDEMENT** : Aucun import résiduel de `useWindowDimensions` de React Native n'est autorisé dans les pages. Seul `useResponsive` fait foi pour garantir la synchronisation du rendu lors des changements d'orientation ou de split-screen.

---
*Dernière mise à jour : 06 Mars 2026 (Logic Audit Update)*

## 7. PROTOCOLE DE MISE À NIVEAU (STRICT)

- **Règle 7.1 - Zéro Dégradation** : On part du principe que l'API et les services originels sont fonctionnels. On les améliore structurellement sans jamais réécrire la logique métier de zéro. On recopie ce qui fonctionne déjà et on le débarrasse des dettes techniques.
- **Règle 7.2 - Préservation UI/UX** : Le schéma originel (boutons, positions, textes, logique derrière chaque bouton) doit être respecté. On élimine la dette technique (types, hardcoding) sans dénaturer le visuel. Amélioration selon les règles établies uniquement.
- **Règle 7.3 - Mise à jour Atomique** : On ne traite JAMAIS plusieurs pages en même temps. Chaque page doit être validée, restituée et branchée individuellement avant de passer à la suivante.
- **Règle 7.4 - Vérification des Dépendances** : Avant de valider une page, vérifier que chaque bibliothèque importée est présente et installée.
- **Règle 7.5 - Anti-Sur-Réflexion** : La logique et le code ont déjà été établis et sont fonctionnels (générés et testés). On les applique avec rigueur sans chercher à complexifier inutilement ce qui fonctionne.
- **Règle 7.6 - Audit de l'Original** : Comparer systématiquement avec le dossier `.Originel` à la racine pour ne perdre aucun détail métier, texte ou UX. Ce dossier contient la version stable actuelle servant de **Source de Vérité Visuelle et Fonctionnelle** absolue.
- **Règle 7.7 - Protocole "Full Injection" & Modernisation** : Pour chaque page à moderniser :
    1. **Doublon de Sécurité** : La page originale reste intacte dans `.Originel`.
    2. **Modernisation Chirurgicale** : On travaille sur la page dans `app/`.
    3. **Respect du Layout** : On peut moderniser les composants (Glassmorphism, animations) mais SANS changer la structure des boutons, les textes ou les fonctions métier héritées de `.Originel`.
- **Règle 7.8 - COHÉRENCE DU STYLE** : Respecter le choix esthétique de l'original. Si une page n'utilise pas de Glassmorphism, ne pas l'ajouter arbitrairement.
- **Règle 7.9 - ARCHITECTURE OFFICIELLE** : Le dossier `app/` à la racine (Expo Router) est l'architecture officielle du projet. Ne pas tenter de déplacer son contenu vers `src/app/`.
- **Règle 7.10 - AUDIT LOGIQUE PRÉ-MODIF** : Avant de modifier ou de "moderniser" un bouton ou un élément d'interface, il est **OBLIGATOIRE** de vérifier la logique de programmation/métier associée (redirections, appels API, état du store). Toute modification esthétique ne doit **JAMAIS** altérer le flux logique original sans une raison technique documentée et validée par le dossier `.Originel`.
- **Règle 7.11 - CHECK-LIST POST-MODIFICATION (MANDATOIRE)** :
    Avant de déclarer toute mise à jour comme "réussie" ou "conforme", l'agent DOIT obligatoirement vérifier :
    1. **Intégrité des Imports** : S'assurer qu'aucun import essentiel (ex: `React`) n'a été supprimé accidentellement lors d'un nettoyage.
    2. **Cohérence des Exports** : Vérifier que les `export default` requis par Expo Router sont toujours présents et au bon format.
    3. **Cycles de Dépendances** : Analyser les nouveaux imports pour ne pas créer de "Require cycles" (cas de `mikrotikApi`).
    4. **Typage de Propagation** : Vérifier que le changement de type d'une fonction n'a pas cassé ses appels dans d'autres fichiers.
    *Note : L'échec d'un seul de ces points invalide la mise à jour.*
- **Règle 7.12 - VALIDATION DES PROPS INJECTÉES** : Lorsqu'une logique est déportée dans un Hook parent (ex: `useResponsive`), l'agent doit VALIDER que toutes les props requises par les sous-composants mémoïsés (React.memo) sont explicitement passées lors de l'appel. L'absence d'une prop injectée (ex: `vs={vs}`) provoque un crash `TypeError: ... is not a function`.

## 8. PRÉVENTION DES CRASHS & ERREURS DE RENDU (RÉFÉRENCE)

- **DOCUMENT A1** : Une liste exhaustive des erreurs fréquentes et bloquantes (comme les conflits d'imports React Native / Expo Router et les anti-patterns de composants imbriqués) est consignée dans le fichier `A1-error-rugle.md`.
- **DOCUMENT A2 (ANTI-VIBES CODING)** : Les règles spécifiques pour cadrer les LLM (Google Gemini) et empêcher les hallucinations Web, les infinite loops React, et les pièges natifs sont consignées dans `A2-gemini-rn-vibes-coding.md`. L'IA **DOIT** consulter ce document avant toute génération de code massive.
- **OBLIGATION** : L'agent ou le développeur doit **OBLIGATOIREMENT** lire et appliquer les vérifications des documents `A1-error-rugle.md` et `A2-gemini-rn-vibes-coding.md` avant de soumettre une modification de fichier contenant des composants React (`.tsx`).
