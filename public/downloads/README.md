# Fichiers de distribution MikhmoAI

> En production, utilisez de préférence un dossier persistant extérieur au
> projet. Consultez `docs/stockage-persistant-telechargements.md`. Le contenu
> de ce dossier sert principalement au développement local.

Déposez les versions publiées dans les dossiers suivants :

- `windows/installer/` : `.exe`, `.msi` ou `.msix`
- `windows/portable/` : `.zip`
- `linux/installer/` : `.deb`, `.rpm` ou `.AppImage`
- `linux/portable/` : `.tar.gz` ou `.AppImage`
- `macos/installer/` : `.dmg` ou `.pkg`
- `macos/portable/` : `.zip`
- `android/` : `.apk`

Exemples :

- `MikhmoAI-Setup-7.0.0-x64.exe`
- `MikhmoAI-Portable-7.0.0-x64.zip`
- `MikhmoAI-7.0.0-x86_64.AppImage`
- `MikhmoAI-Android-7.0.0-arm64.apk`

L'endpoint `/api/download/latest` sélectionne d'abord la version sémantique la
plus élevée, puis la date de modification la plus récente en cas d'égalité.

Sans paramètre, l'API sélectionne toujours une version installable et ignore les
fichiers placés dans `portable/`. Utilisez `variant=portable` pour une version
autonome et `format=msi`, `format=deb`, etc. pour demander un format précis.
