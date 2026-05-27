import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request: NextRequest) {
  try {
    const publicDir = path.join(process.cwd(), 'public');

    const files = fs.readdirSync(publicDir);
    const apkFiles = files.filter(file => file.toLowerCase().endsWith('.apk'));

    if (apkFiles.length === 0) {
      return new NextResponse('No APK found', { status: 404 });
    }

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

    if (filteredApks.length === 0) {
      filteredApks = apkFiles;
    }

    const latestApk = filteredApks
      .map(name => ({
        name,
        time: fs.statSync(path.join(publicDir, name)).mtime.getTime(),
      }))
      .sort((a, b) => b.time - a.time)[0];

    const forwardedHost = request.headers.get('x-forwarded-host');
    const directHost = request.headers.get('host');
    const protocol = request.headers.get('x-forwarded-proto') || 'https';

    let realHost = forwardedHost || directHost || 'localhost:3000';

    if (realHost.includes('0.0.0.0')) {
      const envUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
      realHost = envUrl.replace(/^https?:\//, '').replace(/^\//, '');
    }

    const downloadUrl = new URL(`/${latestApk.name}`, `${protocol}://${realHost}`);

    return NextResponse.redirect(downloadUrl);
  } catch (error) {
    console.error('Error finding latest APK:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
