# APW - Stratégie de Refonte "In-Place" (Strangler Fig Pattern)

Cette règle définit le protocole de migration du projet pilote vers le standard Google Pro 2026 tout en garantissant la continuité absolue des services (Firebase, Identité OS, Signatures).

---

## 1. La Source de Vérité : Répertoire `.originel/`

- **Définition** : Le dossier `.originel/` contient l'intégralité du code source du pilote fonctionnel (`MikhmonPro` v3.4.4). Il est la **source principale et ultime** de toute la logique métier, des configurations et de l'identité de l'application.
- **Identité Verrouillée** :
  - Nom : `MikhmonPro`
  - Bundle ID (iOS) : `com.moailte.mikhmonproai`
  - Package Name (Android) : `com.moailte.mikhmonproai`
  - Firebase Project : `moailte-mikhmon`
  - EAS Project ID : `b7c12b7e-d6c6-41ee-9585-c4e048bbf872`
- **Règle d'accès** : Aucun code logique ou fonctionnel ne doit être "inventé" durant la refonte. Tout doit être extrait de `.originel/`, analysé, puis ré-architecturé (refactorisé) dans le nouveau `src/`.
- **Intégrité numérique** : Les fichiers suivants de `.originel/` sont considérés comme **intouchables et permanents** pour la signature :
  - `google-services.json` (Android)
  - `GoogleService-Info.plist` (iOS)
  - Clés de signature (`.keystore`, fichiers `.jks`, secrets EAS)
  - Identifiants de package/bundle (ex: `com.company.app`)

## 2. Le Mécanisme "Strangler Fig" (Le Figuier Étrangleur)

La stratégie consiste à créer un nouveau système (Standard 2026) autour de l'ancien, en migrant les fonctionnalités une par une jusqu'à ce que l'ancien code disparaisse totalement.

### Phase A : Extraction de l'Identité

- Copie de l'identité système issue de `.originel/app.json` (ou `app.config.js`).
- Injection dans le nouveau `app.config.ts`.
- Vérification que la version système est supérieure à celle de l'original pour permettre la mise à jour (Over-The-Air ou Store).

### Phase B : Migration de la Logique (Extraction du Cerveau)

- **Cibles prioritaires** :
  - Services Mikrotik/Networking : `@speedshield/react-native-ssh-sftp`, `tcp-socket`.
  - Firebase Logic : Auth flows, Firestore collections, Crashlytics.
  - State Management : Migration des stores Zustand de `.originel/store` vers `src/modules/<feature>/model`.
- Identifier les services Firebase et les hooks de données dans `.originel/`.
- Les porter vers `src/modules/<feature>/api/` ou `model/`.
- **Règle de Typage** : Durant le portage, la logique de `.originel/` doit être parée de types stricts et de schémas de validation `Zod`.

### Phase C : Remplacement d'Interface (Le Nouveau Corps)

- **Refactorisation du Routage** : Migration de l'arborescence chaotique de `.originel/app/` (mélange admin, hotspot, ppp) vers une structure Expo Router propre régie par les groupes métier.
- Conception des nouveaux écrans (`src/modules/<feature>/ui/`) selon les critères **mobile-app-ux-m3.md**.
- **RESPONSIVE SCALING** : Utilisation obligatoire de `useResponsive.ts` pour toutes les dimensions. Proscription de `useWindowDimensions`.
- **CONTRAINTE GLASS** : Appliquer le Glassmorphism uniquement si le design d'origine le prévoit ou s'y prête. Ne pas forcer cet effet sur des interfaces conçues pour être opaques.
- Connexion de la nouvelle interface aux fonctions logiques migrées en Phase B.

---

## 3. Contraintes Critiques de Continuité

- **Firebase Database / Firestore** : Toute modification de structure de donnée durant la refonte doit être rétro-compatible avec les données existantes dans `.originel/`. On ne vide jamais une base de production.
- **Local Storage** : Si `.originel/` utilisait `AsyncStorage`, la nouvelle application doit être capable de lire ces données (via un script de migration vers `MMKV`) pour ne pas déconnecter l'utilisateur lors de la mise à jour.
- **Authentification** : Les jetons de session (tokens) stockés par l'ancienne version doivent rester valides ou être rafraîchis de manière transparente.

## 4. Vérification de Conformité (Sync Check)

Avant de supprimer un module de `.originel/` de notre vue de travail, nous devons valider :

1. ✅ La fonctionnalité est identique (comportement métier 1:1).
2. ✅ L'UI respecte les standards M3 2026.
3. ✅ Les performances (LCP, INP) sont supérieures à l'original.
4. ✅ Aucune régression n'est détectée sur les signatures Firebase.
5. ✅ Le style visuel (Glass vs Solide) respecte l'intention du design original.

---
> **Note** : Le dossier `.originel/` est exclu du build final mais reste présent durant toute la phase de développement comme référence de comparaison permanente.
