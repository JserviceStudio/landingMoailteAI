# APW - Architecture & Engineering Standards (Google Pro 2026)

Ce socle architectural définit les règles strictes, méthodes et attentes d'un projet React Native / Expo de classe "Enterprise" (Standard Google 2026). Tout développement doit impérativement respecter cette topologie pour garantir la performance, la sécurité, l'accessibilité et la maintenabilité à très grande échelle.

---

## 1. Topologie & Architecture Modulaire (Feature-First)

- **`src/app/` (Expo Router)** : Routing strictement déclaratif, fortement typé (Typed Routes) et axé sur les *Layouts*. Aucune logique métier ne doit y polluer l'orchestration navigationnelle.
- **`src/modules/<feature>/`** : Architecture en silos (approche *Feature-Sliced Design*). Chaque module est autonome et hermétique :
  - `ui/` : Écrans et composants de domaine.
  - `api/` : Requêtes, mutations (React Query) et schémas de validation.
  - `model/` : Hooks locaux, logique métier complexe, types, micro-stores (Zustand slice).
- **`src/core/` ou `src/lib/`** : L'infrastructure bas-niveau (clients HTTP, persistance MMKV/SQLite, observabilité Sentry/DataDog, gestionnaires de sécurité).
- **`src/design-system/` ou `src/ui/`** : Primitives UI (Boutons, Inputs, Typographie) 100% découplées, agnostiques, et réutilisables.
- **Contrat d'Interface** : Un module `A` ne doit interagir avec un module `B` *que* via son fichier d'export public (`src/modules/B/index.ts`).

## 2. Rendu (React 19+) & Hooks Modernes

- **Suspense & Error Boundaries** : L'asynchronisme doit être encapsulé de façon granulaire. Chaque zone asynchrone utilise `<Suspense fallback={...}>` et est protégée par un `ErrorBoundary` robuste (avec mécanisme de recouvrement automatique ou manuel).
- **Logique "Zéro État Caché"** : Les composants d'UI pure (Design System) sont des composants contrôlés et déterministes. Aucun *side-effect* (`useEffect`) n'est toléré dans les couches de présentation.
- **Validation Runtime (Zero-Trust Model)** : **Interdiction** d'utiliser le cast aveugle TypeScript (`as Type`). Tous les payloads (API, AsyncStorage, Websockets, Deep Links) doivent être validés en temps d'exécution (utilisation de `Zod` ou `ArkType`).
- **Réduction de la verbosité** : Tirer parti du React Compiler pour la stabilité référentielle. Sinon, mémoïsation préventive justifiée (`React.memo`, `useMemo`) aux goulots d'étranglement reconnus.

## 3. Performance & Threading (New Architecture & Fabric)

- **Architecture JSI/Fabric** : Le code doit être conçu et validé pour la *New Architecture* (pas d'anciens modules *bridge*).
- **Rendu des Listes** : Fin de vie pour `FlatList` sur des grands jeux de données ; utilisation obligatoire de `@shopify/flash-list` avec provisionnement correct du `estimatedItemSize`.
- **Animations sur UI Thread** : Toutes les animations et gestuelles s'exécutent en exclusivité sur l'UI Thread (*Worklets* avec `react-native-reanimated` et `react-native-gesture-handler`). Jamais d'animation drivée par du State classique JS.
- **Gestion des Inputs** : La frappe utilisateur ne doit jamais déclencher le re-rendu de composants parents ou lointains. Emploi obligatoire de bibliothèques non-contrôlées (ex: `react-hook-form` avec validations asynchrones et debounce natif).

## 4. Layout, Edge-to-Edge & Accessibilité (A11y)

- **Expérience Edge-to-Edge** : L'application doit s'étendre derrière les barres de statut et de navigation système (pleine immersion Android 15+ / iOS 18+). Gestion exclusive par le module `react-native-safe-area-context` combiné à la configuration Expo Router.
- **Responsivité Structurelle** : Pas d'encodage de dimensions rigides. Conception adaptative intégrant naturellement les écrans larges (Tablettes, Foldables).
- **Outils de Style Performants** : Options restreintes aux générateurs *Zero-Runtime* ou hyper optimisés (ex: NativeWind v4, Unistyles ou StyleSheet brutes). Le CSS-in-JS dynamique côté JS (Styled Components classiques) est proscrit.
- **Standard A11y & Dynamic Type** :
  - Prise en charge native de la mise à l'échelle des polices (`Dynamic Type` iOS / `Font Scaling` Android).
  - Contrôle du contraste de couleurs (WCAG AA).
  - Implémentation complète des attributs `accessibilityRole`, `accessibilityLabel` et `accessibilityState` sur les éléments interactifs.

## 5. Gestion des Données & "Offline-First"

- **Server-State** : Seul TanStack React Query (v5+) peut gérer la synchronisation serveur, le cache, le *polling*, les *retries*, et la gestion optimiste (Optimistic UI).
- **État Global Minimal** : Les outils de *Global State* (Zustand, Jotai) sont strictement limités aux données transitoires UI réelles d'application (Thème, Modales, Notifications in-app locales) et non dupliqués avec le cache serveur.
- **Local-First & Sync** : Stratégie de persistance ultra-rapide (utilisation de `react-native-mmkv` pour tout stockage clé/valeur, et OP-SQLite ou équivalent pour les structures relationnelles déconnectées).

## 6. Routage (Expo Router)

- **Typage Natif Absolu** : Typage strict garanti automatiquement par un système déclaratif (`Link href="/(auth)/login"` doit lever une erreur TS si le chemin change).
- **Navigation Optimisée** : Le *prefetching* de routes prédictif est encouragé sur les flux d'inscription et entonnoirs critiques.
- **Transmission d'Arguments** : Seuls les identifiants simples (UUIDs, slugs) transitent dans l'URL/Path Params. Les objets imbriqués massifs ne se passent pas de page à page (problèmes de sérialisation et URLs complexes) ; la nouvelle page les récupère via le cache React Query.

## 7. Plateformes & Interfaces Nativisées

- **Android M3 & Systèmes** : Matérialisation du clic visuel (Ripple effect Material 3), comportement robuste du balayage de "retour arrière", navigation prédictive ("Predictive Back Gesture" Android 14+) et tests poussés du clavier, sans "bondir" de façon buggée (KeyboardAvoidingView).
- **iOS & Human Interface** : Utilisation du retour haptique ciblé (`expo-haptics`), comportements fins liés au défilement et au Keyboard dismissal (`keyboardDismissMode="interactive"`), intégration profonde du Swipe pour fermer des contextes (Modales Sheet).

## 8. Sécurité (SecOps) & Assurances Qualité

- **Sauvegarde Zero-Secret** : Les tokens d'authentification ou jetons de transfert confidentiels se stockent exclusivement via `expo-secure-store` (ou librairie chiffrée similaire).
- **Pyramide des Tests** :
  - *Unitaire / Métier (Hooks/Services/Models)* : `Jest` (100% logique domaine couverte).
  - *Intégration Composant* : `React Native Testing Library`.
  - *Black-Box/E2E Critical Flows* : Implémentation via `Maestro` ciblant les workflows capitaux (Login, Achat, Synchronisation).
- **Hygiène de Code** : Tolérance zéro pour les `warnings` Typescript (0 erreurs), Lint strict (utilisation de Biome recommandé), et nettoyage rigoureux du console.log de développement. L'utilisation des "Branded Types" (ex : `type TicketId = string & { readonly __brand: unique symbol }`) est valorisée pour éviter l'inversion de propriétés.

---

## Le "Litmus Test" de Pull Request ("The 5 Yes")

Avant chaque *Commit / Pull Request*, le développeur doit obtenir *OUI* à ces cinq questions :

1. ✅ Mon composant est-il testable isolément sans avoir à mocker artificiellement des objets distants, un store global géant ou une route ?
2. ✅ S'il y a un événement inattendu asynchrone (coupure réseau), mon app ne crash pas et informe l'utilisateur poliment ?
3. ✅ Mon interface a-t-elle été éprouvée sur de mauvaises conditions réseau grâce à React Query ?
4. ✅ Est-ce que mes payloads entrants d'API ou deeplinks sont interceptés et validés par un schéma `Zod` ?
5. ✅ La refactorisation de module ne crée-t-elle aucune dépendance circulaire avec l'infrastructure ?
