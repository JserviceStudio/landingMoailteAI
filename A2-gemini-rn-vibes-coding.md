---
name: gemini-rn-vibes-coding-prevention
description: Compétence et règles strictes pour Google Gemini afin de prévenir les erreurs de "vibes coding", d'hallucination Web->React Native, et les pièges classiques de performance.
---

# 🤖 A2-Gemini-RN: Anti-Vibes Coding & Règles de Conduite IA

Ce document liste les compétences et les garde-fous **spécifiques à Google Gemini (et aux LLM en général)** pour travailler sur un projet React Native / Expo. Le "Vibes Coding" (coder intuitivement sans vérifier les spécificités de la plateforme cible) est la première cause de crash et de régression.

En tant qu'Agent IA, tu DOIS valider mentalement ton code contre ces règles avant chaque outil de type `write_to_file` ou `replace_file_content` sur des fichiers `.tsx`.

---

## 🛑 1. HALLUCINATIONS WEB VS REACT NATIVE

L'erreur la plus courante d'une IA habituée au développement Web est d'insérer des éléments HTML ou du CSS non supporté dans React Native.

- ❌ **Interdit Absolu (Tags HTML)** : `<div>`, `<span>`, `<a>`, `<p>`, `<img>`, `<button>`.
- ✅ **Seulement des Composants RN** : `<View>`, `<Text>`, `<TouchableOpacity>`, `<Image>`, `<Pressable>`.
- ❌ **Interdit Absolu (CSS Web)** : `cursor: 'pointer'`, `display: 'grid'`, `position: 'fixed'`, `height: '100vh'`.
- ❌ **Ombres (Shadows)** : Attention au CSS Web `box-shadow: 0 4px 6px rgba(0,0,0,0.1)`. En RN, utiliser `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowRadius` (iOS) ET `elevation` (Android).
- ❌ **Images Dynamiques** : `<Image source={{ uri: url_externe }} />` ne s'affichera **JAMAIS** sans une dimension explicite (`width` et `height` obligatoires dans le style).
- ⚠️ **Flexbox par défaut** : En React Native, `flexDirection` est **TOUJOURS `column` par défaut**, contrairement au web où c'est `row`.

## 🔄 2. "VIBES CODING" ET GESTION DU CYCLE DE VIE (React)

L'IA a tendance à générer du code direct sans penser à la cascade de re-rendus.

- ❌ **Infinite Loops dans les useEffect** : Ne jamais modifier au sein d'un `useEffect` un état (State) qui se trouve dans son propre tableau de dépendances, sous peine de crash instantané de l'application (Call Stack Exceeded).
- ❌ **Fonctions anonymes massives dans les Props** : `<Button onPress={() => { ... 50 lignes de logique ... }} />`. Cela force le rendu des sous-composants.
- ✅ **La Règle d'or de la Mémoïsation** : Extraire les fonctions lourdes dans des `useCallback`, et envelopper les objets/tableaux injectés via des props dans des `useMemo`.

## 📱 3. ERREURS MOBILES DÉBUTANTES RÉCURRENTES

- **Le Clavier qui cache l'Input** : L'IA oublie systématiquement que le clavier virtuel iOS/Android obstrue l'écran. TOUTE page contenant un `<TextInput>` doit être enveloppée dans un `<KeyboardAvoidingView>` (avec `behavior="padding"` pour iOS) et souvent un `<ScrollView>`.
- **Ignorer l'Encoche (Notch/Dynamic Island)** : Positionner une vue en `position: 'absolute', top: 0` sans utiliser `useSafeAreaInsets()`. Le contenu sera caché sous la caméra.
- **Scrolls Imbriqués (Nested ScrollViews)** : Placer un `<FlatList>` à l'intérieur d'un `<ScrollView>` avec une direction de scroll identique. Cela casse la gestion des gestes natifs et déclenche un Warning sévère.

## 📦 4. PIÈGES DES LIBRAIRIES NODE.JS EN REACT NATIVE

- L'IA peut proposer d'utiliser des modules standards Node.js (comme `crypto`, `fs`, `path`, `stream`) pour résoudre un problème.
- ❌ C'est **STRICTEMENT INTERDIT**. React Native n'est pas un environnement Node.js. "fs" n'existe pas, il faut utiliser `expo-file-system`. "crypto" n'existe pas nativement, il faut utiliser `expo-crypto`.
- **Règle d'installation** : Ne JAMAIS utiliser `npm install {lib}` si la librairie touche aux composants natifs. Il faut toujours utiliser `npx expo install {lib}` pour garantir la compatibilité des versions.

## 🧠 5. COMPÉTENCES "GEMINI PRO" EXIGÉES

En tant que Développeur Senior Mobile (M3/Expo) IA :

1. **Pessimisme Actif** : Ne suppose jamais que le Web Code fonctionnera sur mobile. Demande-toi toujours : "Comment Android va-t-il interpréter ce style ?" "Est-ce que cette animation va bloquer le thread UI ?"
2. **Context Awareness** : Vérifie toujours l'extension du fichier cible (`.tsx` vs `.ts`). Si tu es dans un fichier UI, concentre-toi sur le Layout. Si tu es dans un Hook, concentre-toi sur la gestion de mémoire et les dépendances.
3. **Le principe du "Pas de Régression Silencieuse"** : Si tu dois supprimer une importation (import), utilise un script de recherche ou tes yeux (via le contexte) pour t'assurer qu'elle n'est plus appelée NULLE PART dans le fichier.

---
Vérification requise avant génération : "Mon code respecte-t-il le manifeste A2-Gemini-RN ?"
