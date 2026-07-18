# Stockage persistant des téléchargements MikhmoAI

Les installateurs ne doivent pas être envoyés dans le dossier du projet déployé. Ce dossier est remplacé lors d'un nouveau build ou d'un `git pull`.

## 1. Dossier permanent sur le serveur

Créer cette arborescence une seule fois, en dehors du projet :

```text
/var/www/mikhmoai-releases/
├── android/
├── windows/
│   ├── installer/
│   └── portable/
├── linux/
│   ├── installer/
│   └── portable/
└── macos/
    ├── installer/
    └── portable/
```

Avec FileZilla, envoyer ensuite les fichiers directement dans ces dossiers. Exemple :

```text
/var/www/mikhmoai-releases/windows/installer/MikhmoAI-2.0.2-win-x64-setup.exe
```

Le nom Windows doit contenir `x64`, `x86_64`, `amd64` ou `64` pour être reconnu par le bouton x64. Ajouter une version comme `2.0.2` permet à l'API de sélectionner automatiquement la plus récente.

## 2. Variables d'environnement de l'application

Ajouter au service Node.js, à PM2 ou au fichier `.env.production` :

```dotenv
MIKHMOAI_RELEASES_DIR=/var/www/mikhmoai-releases
MIKHMOAI_RELEASES_URL=https://mikhmoai.com/releases
```

Redémarrer ensuite l'application. Ces variables sont lues côté serveur et ne doivent pas être préfixées par `NEXT_PUBLIC_`.

## 3. Route Nginx

Dans le bloc `server` de `mikhmoai.com`, ajouter :

```nginx
location /releases/ {
    alias /var/www/mikhmoai-releases/;
    autoindex off;
    add_header X-Content-Type-Options nosniff always;
    add_header Content-Disposition "attachment" always;
    types {
        application/vnd.microsoft.portable-executable exe;
        application/x-msi msi;
        application/vnd.android.package-archive apk;
        application/vnd.debian.binary-package deb;
        application/octet-stream AppImage dmg pkg;
        application/zip zip;
    }
}
```

Puis vérifier et recharger Nginx :

```bash
sudo nginx -t
sudo systemctl reload nginx
```

Le compte qui exécute Next.js doit pouvoir lire les dossiers pour détecter les versions. Nginx doit aussi pouvoir lire les fichiers.

## 4. Test

Tester d'abord le fichier directement :

```text
https://mikhmoai.com/releases/windows/installer/MikhmoAI-2.0.2-win-x64-setup.exe
```

Puis tester l'API automatique :

```text
https://mikhmoai.com/api/download/latest?platform=windows&arch=x64&variant=installer
```

L'API doit répondre par une redirection vers le premier lien. Les futurs déploiements du site ne toucheront plus aux installateurs.
