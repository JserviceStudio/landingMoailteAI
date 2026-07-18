# Fichiers de distribution MikhmonPro

Déposez les versions publiées dans les dossiers suivants :

- `windows/` : `.exe`, `.msi` ou `.msix`
- `linux/` : `.AppImage`, `.deb`, `.rpm` ou `.tar.gz`
- `android/` : `.apk`

Utilisez un numéro de version dans le nom, par exemple :

- `MikhmonPro-Desktop-3.5.0-x64.exe`
- `MikhmonPro-Desktop-3.5.0-x86_64.AppImage`
- `MikhmonPro-Android-3.5.0-arm64.apk`

L’endpoint `/api/download/latest` sélectionne d’abord la version sémantique la
plus élevée, puis la date de modification la plus récente en cas d’égalité.
