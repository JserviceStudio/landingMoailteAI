import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

type Platform = "android" | "windows" | "linux";

type ReleaseFile = {
  absolutePath: string;
  publicPath: string;
  name: string;
  modifiedAt: number;
  version: number[];
};

const platformExtensions: Record<Platform, string[]> = {
  android: [".apk"],
  windows: [".exe", ".msi", ".msix"],
  linux: [".appimage", ".deb", ".rpm", ".tar.gz"],
};

function walkFiles(directory: string): string[] {
  if (!fs.existsSync(directory)) return [];

  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walkFiles(fullPath) : [fullPath];
  });
}

function extractVersion(filename: string): number[] {
  const match = filename.match(/(?:^|[-_v])([0-9]+(?:\.[0-9]+){1,3})(?:[-_.]|$)/i);
  return match ? match[1].split(".").map(Number) : [];
}

function compareVersions(a: number[], b: number[]): number {
  const length = Math.max(a.length, b.length);
  for (let index = 0; index < length; index += 1) {
    const difference = (a[index] ?? 0) - (b[index] ?? 0);
    if (difference !== 0) return difference;
  }
  return 0;
}

function matchesExtension(filename: string, extensions: string[]) {
  const lowerName = filename.toLowerCase();
  return extensions.some((extension) => lowerName.endsWith(extension));
}

function matchesArchitecture(filename: string, platform: Platform, arch: string) {
  if (!arch) return true;
  const name = filename.toLowerCase();

  if (platform === "android" && arch === "arm32") {
    return ["arm32", "v7a", "armeabi", "32"].some((token) => name.includes(token));
  }
  if (platform === "android" && arch === "arm64") {
    return ["arm64", "v8a", "aarch64", "64"].some((token) => name.includes(token));
  }
  if (arch === "x64") {
    return ["x64", "x86_64", "amd64", "64"].some((token) => name.includes(token));
  }
  if (arch === "arm64") {
    return ["arm64", "aarch64"].some((token) => name.includes(token));
  }
  return true;
}

export async function GET(request: NextRequest) {
  try {
    const requestedPlatform = request.nextUrl.searchParams.get("platform")?.toLowerCase();
    const platform: Platform = requestedPlatform === "windows" || requestedPlatform === "linux"
      ? requestedPlatform
      : "android";
    const arch = request.nextUrl.searchParams.get("arch")?.toLowerCase() ?? "";
    const publicDir = path.join(process.cwd(), "public");
    const releaseDir = path.join(publicDir, "downloads", platform);

    // Android releases historically lived at the root of /public. Keep that
    // location supported while preferring the organized downloads directory.
    const candidatePaths = [
      ...walkFiles(releaseDir),
      ...(platform === "android" ? walkFiles(publicDir).filter((file) => path.dirname(file) === publicDir) : []),
    ];

    const releases: ReleaseFile[] = candidatePaths
      .filter((file) => matchesExtension(path.basename(file), platformExtensions[platform]))
      .filter((file) => matchesArchitecture(path.basename(file), platform, arch))
      .map((absolutePath) => {
        const name = path.basename(absolutePath);
        return {
          absolutePath,
          name,
          publicPath: path.relative(publicDir, absolutePath).split(path.sep).join("/"),
          modifiedAt: fs.statSync(absolutePath).mtimeMs,
          version: extractVersion(name),
        };
      })
      .sort((a, b) => compareVersions(b.version, a.version) || b.modifiedAt - a.modifiedAt);

    if (releases.length === 0) {
      return NextResponse.json(
        {
          error: `Aucune version ${platform} disponible pour le moment.`,
          expectedDirectory: `/public/downloads/${platform}`,
          supportedExtensions: platformExtensions[platform],
        },
        { status: 404 },
      );
    }

    const release = releases[0];
    const forwardedHost = request.headers.get("x-forwarded-host");
    const directHost = request.headers.get("host");
    const protocol = request.headers.get("x-forwarded-proto") || "https";
    let realHost = forwardedHost || directHost || "localhost:3000";

    if (realHost.includes("0.0.0.0")) {
      const envUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
      realHost = envUrl.replace(/^https?:\//, "").replace(/^\//, "");
    }

    const downloadUrl = new URL(`/${release.publicPath}`, `${protocol}://${realHost}`);
    const response = NextResponse.redirect(downloadUrl);
    response.headers.set("X-Release-Platform", platform);
    response.headers.set("X-Release-File", release.name);
    return response;
  } catch (error) {
    console.error("Error finding latest release:", error);
    return NextResponse.json({ error: "Impossible de trouver la dernière version." }, { status: 500 });
  }
}
