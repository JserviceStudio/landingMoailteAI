const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public');
const outputPath = path.join(publicDir, 'apk-manifest.json');

function detectArch(filename) {
  const lower = filename.toLowerCase();
  if (lower.includes('arm64') || lower.includes('v8a') || lower.includes('aarch64') || /\b64\b/.test(lower)) {
    return 'arm64';
  }
  if (lower.includes('arm32') || lower.includes('v7a') || lower.includes('armeabi') || /\b32\b/.test(lower)) {
    return 'arm32';
  }
  return 'universal';
}

function extractVersion(filename) {
  const match = filename.match(/(\d+\.\d+(?:\.\d+)?)/);
  return match ? match[1] : 'unknown';
}

const files = fs.readdirSync(publicDir);
const apkFiles = files.filter(file => file.toLowerCase().endsWith('.apk'));

const apks = apkFiles
  .map(name => {
    const stat = fs.statSync(path.join(publicDir, name));
    return {
      name,
      url: `/${name}`,
      arch: detectArch(name),
      version: extractVersion(name),
      size: stat.size,
      updatedAt: stat.mtime.toISOString(),
    };
  })
  .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

const manifest = {
  generatedAt: new Date().toISOString(),
  apks,
  latestByArch: {},
};

for (const apk of apks) {
  if (!manifest.latestByArch[apk.arch]) {
    manifest.latestByArch[apk.arch] = apk;
  }
}

fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));
console.log(`Generated apk-manifest.json with ${apks.length} APK(s)`);
for (const arch of Object.keys(manifest.latestByArch)) {
  console.log(`  Latest ${arch}: ${manifest.latestByArch[arch].name}`);
}
