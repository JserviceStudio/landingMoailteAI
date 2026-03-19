---
name: mobile-app-ux-m3-2026
description: Guide absolu des meilleures pratiques UI/UX Mobile-First (Standards 2025/2026). Intègre le Glassmorphism de production, Material Design 3 (M3), l'edge-to-edge, la lisibilité et les critères de performance Google Web/Native Vitals.
---

# 📱 Standards UI/UX App Mobile (Édition Google Pro 2025-2026)

L'expérience mobile n'est plus seulement fonctionnelle, elle doit être sensorielle, fluide et adaptative. Ce document définit les standards d'une interface mobile de pointe.

---

## 🎨 1. Esthétique & Tendances (M3 & Glassmorphism)

### Material Design 3 (M3) "Sensory"

- **Couleurs Dynamiques (Dynamic Color)** : Utilisation de palettes tonales. Éviter les couleurs brutes, préférer les variations de luminance (Tone 10 pure à Tone 90 clair).
- **Élévation Tonale (Tonal Elevation)** : L'élévation s'exprime par le changement de couleur d'arrière-plan (plus clair en surface) et pas uniquement par des ombres dures (`box-shadow`).
- **Formes Expressives (Shape Morphing)** : Coins asymétriques pour indiquer la direction (ex: bulle de discussion) et "Pill-shape" (arrondi total) pour la majorité des boutons d'action principale (FAB, CTA).
- **Retour Visuel et Haptique** : Le "Ripple Effect" (onde de clic) est combiné avec des retours haptiques natifs (micro-vibrations contextuelles) sur chaque interaction à succès.

### Glassmorphism "Pro Max" (UI Translucide)

- **Couches Floues (Background Blur)** : Flou intensif (20px à 40px) avec une transparence maîtrisée (`bg-white/60` en mode clair, `bg-slate-900/40` en mode nuit).
- **Bordures de Réfraction (Light Borders)** : Chaque carte en verre requiert une fine bordure contrastante. Utiliser une bordure semi-transparente claire en haut/gauche, et plus sombre en bas/droite.
- **Hiérarchie Spatiale** : Réserver le Glassmorphism aux éléments flottants : Bottom Sheets, Navbars, Top Sheets, Modales.
- ⚠️ **Dette de Performance** : Le flou en temps réel est cher pour le GPU. Le limiter aux superpositions strictes et prévoir un *fallback* (fond solide opaque) pour les appareils Android bas de gamme ou sous mode économie d'énergie.

---

## 📐 2. L'Approche "Thumb Zone" & Edge-to-Edge

### Immersion Totale (Edge-to-Edge)

L'interface doit s'étendre physiquement de tout en haut (sous le trou de la caméra/Dynamic Island) jusqu'à tout en bas (sous la barre de navigation système/barre gestuelle).

- **Interdit** : Les barres noires en haut et en bas. Le background global de l'app plonge derrière les insets systèmes.
- **Padding** : Les contenus défilants et interactifs doivent utiliser `SafeAreaInsets` pour prévenir les chevauchements.

### Anatomie du Design Mobile-First (Zone de Pouce)

- **Zone "Ergonomique" (Bas de l'écran)** : Placer les CTA primaires de validation, le Floating Action Button (FAB), et la navigation principale.
- **Zone "Extrême" (Haut de l'écran)** : Réserver exclusivement à la navigation contextuelle secondaire (Filtres, Titre, Bouton Profil), qui n'est pas nécessaire à la complétion de la tâche directe.
- **Super-Composants 2026** :
  - Disparition progressive des Modales centrées classiques et des Menus hamburger au profit des **Immersive Bottom Sheets** (avec point d'ancrage dynamique).
  - Navigation par balayage (Swipe to Go Back) prioritaire sur le bouton "Retour" classique.

---

## 🔘 3. Règles Strictes de Taille & Zones de Clic (Touch Targets)

Pour satisfaire les critères d'Accessibilité Google et l'expérience tactile 2026 :

| Élément | Taille Minimale Absolue | Taille Recommandée M3 | Espacement Minimum |
|---------|-------------|-------------|---------|
| Boutons d'Action (CTA) | 48×48px | 56px de hauteur | 8px entre éléments |
| Icônes & Boutons Icones | 24×24px visuel | 48×48px zone de clic (Hitbox) | 12px entre éléments |
| Lignes de Liste | 56px de hauteur | 72px (avec avatars/sous-titres) | Lignes de séparation très douces |
| Champs de Texte (Inputs) | 48px de hauteur | 56px de hauteur (Filled M3) | 16px d'écart vertical |

> **Astuce d'implémentation** : Étendre visuellement la "Hitbox" (Slop) sans grossir l'icône grâce à des marges internes ou en utilisant la propriété `hitSlop` en React Native.

---

## ⚡ 4. Critères de Performance (Inspiré des Web/App Vitals)

### Métriques Cibles (Google Standards)

- **Largest Contentful Paint (LCP) / TTF (Time To First Frame)** : < 1.0 seconde (Affichage de la UI primaire instantané avec cache).
- **Interaction to Next Paint (INP) / Thread Block** : < 200 ms. L'application doit répondre instantanément même si l'action n'a pas été confirmée par le serveur (Optimistic UI).
- **Cumulative Layout Shift (CLS) / Frame Drop** : 0 saut de mise en page. Utilisation massive de Skeletons asymétriques pour pré-remplir l'espace lors des appels réseau. 60 FPS constants (ou 120 FPS sur dalles ProMotion) en animation.

### Recommandations Techniques UI

- **Jamais de Spinners Globaux (Bloquants)** : Privilégier des chargements ciblés dans le bouton cliqué (Bouton avec loading state interne).
- **Transitions partagées (Shared Elements Transition)** : Utiliser des animations naturelles où l'élément cliqué "grandit" pour devenir la page suivante.
- **Lazy Loading Intelligent** : Les images hors écran ne sont chargées que lors de l'approche du saut de défilement central. Format lourd (PNG/JPEG haute def) banni au profit du *WebP* / *AVIF*.

---

## ❌ 5. Les Anti-Patterns UX à Bannir DÉFINITIVEMENT

- ❌ **Les menus Hamburger pour la navigation vitale** (Préférer la Bottom Tab Bar).
- ❌ **Les carrousels avec défilement infini masqué** (Si ça défile, il faut des *dots* ou apercevoir le bord de l'item suivant).
- ❌ **Le texte de moins de 16px (16sp) pour le corps principal** (Illisible pour la majorité, et contre les règles de lisibilité Google).
- ❌ **La validation "On Submit" uniquement** (Il faut une validation "As-you-type" ou lors de la perte de focus `onBlur`).
- ❌ **L'état vide ("No Data") générique** : Une vue vide doit TOUGHOUT expliquer pourquoi c'est vide et offrir un CTA pour le remplir (Empty State + Call to Action).
- ❌ **Des formulaires longs sur une page** : Couper en étapes (Wizards) avec barre de progression continue si > 5 champs.

---

## 🛡️ 6. Checklist Accessibilité & Inclusion (A11y)

| Règle | Implémentation requise |
|-------|------------------------|
| **Contraste** | Minimum 4.5:1 exigé entre le texte et le fond (Attention avec le Glassmorphism). |
| **Typographie Dynamique** | S'assurer que tous les textes peuvent adapter leur taille (`allowFontScaling={true}`) si l'utilisateur y voit mal (jusqu'à +200%). |
| **Aria & Screen Readers** | Tous les éléments interactifs visuels (Boutons Icone sans texte) DOIVENT avoir des libellés audio (`accessibilityLabel="Fermer"`). |
| **Agnosticisme Moteur** | Les animations (fonds qui bougent, parallaxe) doivent respecter le réglage système "Réduire les animations" (`prefers-reduced-motion`). |
