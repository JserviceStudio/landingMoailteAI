---
name: error-prevention-rugle
description: Règles strictes pour éviter les erreurs de compilation et de rendu fréquentes (Imports cassés, composants imbriqués, props manquantes).
---

# 🚨 A1-error-rugle: Prévention des Erreurs Courantes (Anti-Crash)

Ce document liste les erreurs fréquentes (et souvent critiques) rencontrées durant le développement, et impose des vérifications strictes avant toute validation de code pour éviter qu'elles ne se reproduisent.

---

## ⛔ 1. DANGER SUR LES IMPORTS (React Native vs Expo Router)

- **Le Piège** : L'auto-complétion ou une modification en masse remplace la source de l'import des éléments de base.
- **Conséquence** : Importer des éléments UI natifs depuis `expo-router` fait crasher l'application instantanément (ex: `TypeError: Cannot read property 'create' of undefined` pour `StyleSheet`).
- **LA RÈGLE STRICTE** :
  - Avant de sauvegarder, vérifier **TOUS** les blocs d'import.
  - ✅ `import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView } from 'react-native';`
  - ❌ `import { View, Text, StyleSheet } from 'expo-router';` (INTERDIT)
  - Depuis `expo-router`, on n'importe **QUE** les outils de navigation : `Stack`, `useRouter`, `Link`, `useLocalSearchParams`, `Redirect`, `Tabs`.

---

## 🔄 2. ANTI-PATTERN REACT : COMPOSANTS IMBRIQUÉS (Nested Components)

- **Le Piège** : Définir un composant React entier (ex: `const MonSousComposant = () => <View>...</View>`) *à l'intérieur* de la fonction d'un parent (ex: `export default function Page() { ... }`).
- **Conséquence** : À chaque rendu (re-render) du composant parent (ex: chargement API, frappe clavier), React considère le sous-composant comme un tout nouvel élément. Il détruit l'ancien et monte le nouveau.
  - Provoque le "clignotement" continu des pages.
  - Casse les animations d'entrée (Reanimated).
  - Fait perdre le focus (`Keyboard.dismiss()` intempestif) dans les `<TextInput>`.
  - Détruit les états locaux (`useState`).
- **LA RÈGLE STRICTE** :
  - **Interdiction formelle** de définir des composants Majuscules dans un autre composant de page.
  - ✅ **Option A (Composant Externe)** : Sortir le composant complétement et lui passer des `props`.
  - ✅ **Option B (Fonction de Rendu)** : Si le contexte parent est indispensable, utiliser une simple fonction qui retourne du JSX. Elle **DOIT** commencer par une minuscule (ex: `const renderStep = () => (<View>...</View>);`) et être appelée comme une fonction React standard : `{renderStep()}` et non `<renderStep />`.

---

## 🧩 3. HOOKS ET PROPS MANQUANTES DANS LES COMPOSANTS DÉPORTÉS

- **Le Piège** : Extraire une partie de la page dans une fonction ou un sous-composant, mais oublier de lui passer des props critiques provenant de Hooks comme `useTheme` ou `useResponsive`.
- **Conséquence** : Erreur de type `TypeError: ... is not a function` ou valeurs de thème "undefined".
- **LA RÈGLE STRICTE** :
  - Si l'on extrait de la logique vers un composant pur (`React.memo`), on s'assure que 100% des fonctions/valeurs utilisées (`theme`, `vs`, `ms`, handlers) sont injectées en tant que *props*.

---

## 💾 4. MISE À JOUR ATOMIQUE ET SAUVEGARDE

- La Règle d'Or : Ne pas effectuer 20 modifications critiques sur 5 fichiers différents sans rien tester.
- Appliquer un changement => Tester (`npm run start` ou rafraîchissement) => Confirmer l'absence d'erreurs Rouges.
- Scanner le terminal en arrière-plan pour détecter les *Warnings* liés au cycle de rendu de React.

---

## 👻 5. LE SYNDROME DU COMPOSANT ORPHELIN (Missing Exports & Imports)

- **Le Piège** : Lorsqu'un agent IA ou un développeur "emprunte" un bloc de code dynamique d'une autre page (ex: `FloatingBackground` ou avec une icône comme `Wand2`), il copie le rendu JSX mais oublie de tracer la chaîne complète des dépendances de ce composant.
- **Conséquence** : Erreur bloquante instantanée (`[ReferenceError: Property 'Wand2' doesn't exist]`) qui détruit l'arbre complet de navigation, car React ne peut pas interpréter un symbole non importé.
- **LA RÈGLE STRICTE EN 3 ÉTAPES (Audit Chirurgical)** :
    1. **Isolation** : Identifier chaque composant et icône nouvellement insérés dans le fichier.
    2. **Traçabilité** : Remonter en haut du fichier pour vérifier qu'un import correspond **exactement** à la casse (`Wand2` depuis `lucide-react-native`, `FloatingBackground` depuis `@/components/...`).
    3. **Pre-Flight Check (Linter)** : Toute modification insérant de nouveaux `<Tags>` non-standards DOIT soulever la question : "Ai-je importé tous les éléments nécessaires pour rendre cette vue ?". Un oubli d'import = 1 crash. Aucun ajout visuel n'est "gratuit".
