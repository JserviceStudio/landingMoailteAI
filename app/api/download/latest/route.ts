import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

type Platform = "android" | "windows" | "linux" | "macos";
type Variant = "installer" | "portable";

type ReleaseFile = {
  absolutePath: string;
  relativePath: string;
  name: string;
  modifiedAt: number;
  version: number[];
};

const platformExtensions: Record<Platform, string[]> = {
  android: [".apk"],
  windows: [".exe", ".msi", ".msix", ".zip"],
  linux: [".appimage", ".deb", ".rpm", ".tar.gz"],
  macos: [".dmg", ".pkg", ".zip"],
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

function isPortable(file: string) {
  const normalized = file.toLowerCase().replaceAll("\\", "/");
  return normalized.includes("/portable/") || normalized.includes("portable");
}

function isInside(directory: string, file: string) {
  const relative = path.relative(directory, file);
  return relative !== "" && !relative.startsWith("..") && !path.isAbsolute(relative);
}

export async function GET(request: NextRequest) {
  try {
    const requestedPlatform = request.nextUrl.searchParams.get("platform")?.toLowerCase();
    const platform: Platform = requestedPlatform === "windows" || requestedPlatform === "linux" || requestedPlatform === "macos"
      ? requestedPlatform
      : "android";
    const arch = request.nextUrl.searchParams.get("arch")?.toLowerCase() ?? "";
    const requestedVariant = request.nextUrl.searchParams.get("variant")?.toLowerCase();
    const variant: Variant = requestedVariant === "portable" ? "portable" : "installer";
    const requestedFormat = request.nextUrl.searchParams.get("format")?.toLowerCase() ?? "";
    const publicDir = path.join(process.cwd(), "public");
    // Production releases should live outside the deployed application so a
    // new build cannot delete them. Keep /public/downloads as a local fallback.
    const externalReleaseDir = process.env.MIKHMOAI_RELEASES_DIR?.trim();
    const releasesRoot = externalReleaseDir
      ? path.resolve(externalReleaseDir)
      : path.join(publicDir, "downloads");
    const releaseDir = path.join(releasesRoot, platform);

    // Android releases historically lived at the root of /public. Keep that
    // location supported while preferring the organized downloads directory.
    const candidatePaths = [
      ...walkFiles(releaseDir),
      ...(platform === "android" ? walkFiles(publicDir).filter((file) => path.dirname(file) === publicDir) : []),
    ];

    const releases: ReleaseFile[] = candidatePaths
      .filter((file) => matchesExtension(path.basename(file), platformExtensions[platform]))
      .filter((file) => matchesArchitecture(path.basename(file), platform, arch))
      .filter((file) => platform === "android" || (variant === "portable" ? isPortable(file) : !isPortable(file)))
      .filter((file) => !requestedFormat || path.basename(file).toLowerCase().endsWith(`.${requestedFormat.replace(/^\./, "")}`))
      .map((absolutePath) => {
        const name = path.basename(absolutePath);
        const releaseIsExternal = Boolean(externalReleaseDir) && isInside(releasesRoot, absolutePath);
        return {
          absolutePath,
          name,
          relativePath: path.relative(releaseIsExternal ? releasesRoot : publicDir, absolutePath).split(path.sep).join("/"),
          modifiedAt: fs.statSync(absolutePath).mtimeMs,
          version: extractVersion(name),
        };
      })
      .sort((a, b) => compareVersions(b.version, a.version) || b.modifiedAt - a.modifiedAt);

    if (releases.length === 0) {
      return NextResponse.json(
        {
          error: `Aucune version ${platform} disponible pour le moment.`,
          expectedDirectory: path.join(releasesRoot, platform),
          variant,
          supportedExtensions: platformExtensions[platform],
        },
        { status: 404 },
      );
    }

    const release = releases[0];
    let downloadUrl: URL;
    const externalPublicUrl = process.env.MIKHMOAI_RELEASES_URL?.trim();

    if (externalReleaseDir && externalPublicUrl && isInside(releasesRoot, release.absolutePath)) {
      const baseUrl = externalPublicUrl.endsWith("/") ? externalPublicUrl : `${externalPublicUrl}/`;
      downloadUrl = new URL(release.relativePath.split("/").map(encodeURIComponent).join("/"), baseUrl);
    } else {
      const forwardedHost = request.headers.get("x-forwarded-host");
      const directHost = request.headers.get("host");
      const protocol = request.headers.get("x-forwarded-proto") || "https";
      let realHost = forwardedHost || directHost || "localhost:3000";

      if (realHost.includes("0.0.0.0")) {
        const envUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
        realHost = envUrl.replace(/^https?:\//, "").replace(/^\//, "");
      }

      downloadUrl = new URL(
        `/${release.relativePath.split("/").map(encodeURIComponent).join("/")}`,
        `${protocol}://${realHost}`,
      );
    }
    const response = NextResponse.redirect(downloadUrl);
    response.headers.set("X-Release-Platform", platform);
    response.headers.set("X-Release-File", release.name);
    response.headers.set("X-Release-Variant", variant);
    return response;
  } catch (error) {
    console.error("Error finding latest release:", error);
    return NextResponse.json({ error: "Impossible de trouver la dernière version." }, { status: 500 });
  }
}
