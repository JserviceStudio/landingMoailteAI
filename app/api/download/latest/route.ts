import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    const publicDir = path.join(process.cwd(), 'public');
    
    // Lister tous les fichiers du dossier public
    const files = fs.readdirSync(publicDir);
    
    // Filtrer les fichiers APK
    const apkFiles = files.filter(file => file.toLowerCase().endsWith('.apk'));
    
    if (apkFiles.length === 0) {
      return new NextResponse('No APK found', { status: 404 });
    }
    
    // Récupérer les infos de chaque fichier pour trouver le plus récent
    const latestApk = apkFiles
      .map(name => ({
        name,
        time: fs.statSync(path.join(publicDir, name)).mtime.getTime(),
      }))
      .sort((a, b) => b.time - a.time)[0];

    // Construire une URL absolue dynamique basée sur l'URL d'origine
    const downloadUrl = request.nextUrl.clone();
    downloadUrl.pathname = `/${latestApk.name}`;

    // Rediriger vers le fichier statique (Next.js sert le dossier public à la racine)
    return NextResponse.redirect(downloadUrl);
  } catch (error) {
    console.error('Error finding latest APK:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
