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
    
    // Récupérer le paramètre d'architecture (arm64 ou arm32)
    const arch = request.nextUrl.searchParams.get('arch')?.toLowerCase() || '';
    let filteredApks = apkFiles;
    
    if (arch === 'arm32') {
      filteredApks = apkFiles.filter(name => 
        name.toLowerCase().includes('arm32') || 
        name.toLowerCase().includes('v7a') || 
        name.toLowerCase().includes('armeabi') ||
        name.toLowerCase().includes('32')
      );
    } else if (arch === 'arm64') {
      filteredApks = apkFiles.filter(name => 
        name.toLowerCase().includes('arm64') || 
        name.toLowerCase().includes('v8a') || 
        name.toLowerCase().includes('aarch64') ||
        name.toLowerCase().includes('64')
      );
    }
    
    // Repli de sécurité : si aucun APK ne correspond au filtre, utiliser tous les APK disponibles
    if (filteredApks.length === 0) {
      filteredApks = apkFiles;
    }
    
    // Récupérer le plus récent
    const latestApk = filteredApks
      .map(name => ({
        name,
        time: fs.statSync(path.join(publicDir, name)).mtime.getTime(),
      }))
      .sort((a, b) => b.time - a.time)[0];

    // Récupérer le véritable host depuis les headers (très commun derrière un Nginx, Docker ou Vercel)
    const forwardedHost = request.headers.get('x-forwarded-host');
    const directHost = request.headers.get('host');
    const protocol = request.headers.get('x-forwarded-proto') || 'https';
    
    let realHost = forwardedHost || directHost || 'localhost:3000';
    
    // Le reverse proxy interne (ex: Docker) peut forcer le host à 0.0.0.0
    // Dans ce cas, on se rabat sur la variable d'environnement
    if (realHost.includes('0.0.0.0')) {
      const envUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
      realHost = envUrl.replace(/^https?:\/\//, ''); // Enlever le protocole pour garder juste le host
    }

    // Construire l'URL absolue fiable
    const downloadUrl = new URL(`/${latestApk.name}`, `${protocol}://${realHost}`);

    // Rediriger vers le fichier statique (Next.js sert le dossier public à la racine)
    return NextResponse.redirect(downloadUrl);
  } catch (error) {
    console.error('Error finding latest APK:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
