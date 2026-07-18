import "server-only";
import crypto from "crypto";
import fs from "fs";
import path from "path";
import type { NextRequest } from "next/server";
import { getCountryForTimezone } from "countries-and-timezones";

type Platform = "android" | "windows" | "linux" | "macos";
type StatsFile = {
  downloads: { total: number; platforms: Record<Platform, number> };
  visits: { total: number; countries: Record<string, number>; dailyHashes: Record<string, string[]> };
  updatedAt: string;
};

const emptyStats = (): StatsFile => ({
  downloads: { total: 0, platforms: { android: 0, windows: 0, linux: 0, macos: 0 } },
  visits: { total: 0, countries: {}, dailyHashes: {} },
  updatedAt: new Date(0).toISOString(),
});

function statsPath() {
  const persistentRoot = process.env.MIKHMOAI_RELEASES_DIR?.trim();
  return persistentRoot ? path.join(persistentRoot, ".mikhmoai-live-stats.json") : path.join(process.cwd(), ".data", "mikhmoai-live-stats.json");
}

function readStats(): StatsFile {
  try {
    const parsed = JSON.parse(fs.readFileSync(statsPath(), "utf8")) as Partial<StatsFile>;
    const defaults = emptyStats();
    return {
      downloads: { total: parsed.downloads?.total ?? 0, platforms: { ...defaults.downloads.platforms, ...parsed.downloads?.platforms } },
      visits: { total: parsed.visits?.total ?? 0, countries: parsed.visits?.countries ?? {}, dailyHashes: parsed.visits?.dailyHashes ?? {} },
      updatedAt: parsed.updatedAt ?? defaults.updatedAt,
    };
  } catch { return emptyStats(); }
}

function writeStats(stats: StatsFile) {
  const file = statsPath();
  fs.mkdirSync(path.dirname(file), { recursive: true });
  stats.updatedAt = new Date().toISOString();
  const temporary = `${file}.${process.pid}.tmp`;
  fs.writeFileSync(temporary, JSON.stringify(stats), "utf8");
  fs.renameSync(temporary, file);
}

function countryFromRequest(request: NextRequest, timezone?: string) {
  for (const header of ["x-country-code", "x-hcdn-country", "x-visitor-country", "cf-ipcountry", "x-vercel-ip-country", "cloudfront-viewer-country"]) {
    const value = request.headers.get(header)?.trim().toUpperCase();
    if (value && /^[A-Z]{2}$/.test(value) && value !== "XX") return value;
  }
  if (timezone && timezone.length <= 64) return getCountryForTimezone(timezone)?.id ?? "";
  return "";
}

function visitorHash(request: NextRequest, day: string) {
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = forwarded || request.headers.get("x-real-ip") || "unknown";
  const userAgent = request.headers.get("user-agent") || "unknown";
  const secret = process.env.STATS_HASH_SECRET || process.env.MIKHMOAI_RELEASES_DIR || "mikhmoai";
  return crypto.createHash("sha256").update(`${secret}:${day}:${ip}:${userAgent}`).digest("hex");
}

export function recordDownload(platform: Platform) {
  const stats = readStats();
  stats.downloads.total += 1;
  stats.downloads.platforms[platform] += 1;
  writeStats(stats);
}

export function recordVisit(request: NextRequest, timezone?: string) {
  const stats = readStats();
  const day = new Date().toISOString().slice(0, 10);
  const hash = visitorHash(request, day);
  const seenToday = stats.visits.dailyHashes[day] ?? [];
  if (!seenToday.includes(hash)) {
    seenToday.push(hash);
    stats.visits.dailyHashes[day] = seenToday;
    stats.visits.total += 1;
    const country = countryFromRequest(request, timezone);
    if (country) stats.visits.countries[country] = (stats.visits.countries[country] ?? 0) + 1;
  }
  const cutoff = new Date();
  cutoff.setUTCDate(cutoff.getUTCDate() - 7);
  const cutoffDay = cutoff.toISOString().slice(0, 10);
  for (const storedDay of Object.keys(stats.visits.dailyHashes)) if (storedDay < cutoffDay) delete stats.visits.dailyHashes[storedDay];
  writeStats(stats);
  return countryFromRequest(request, timezone) || null;
}

export function publicStats() {
  const stats = readStats();
  return {
    downloads: stats.downloads,
    visits: { total: stats.visits.total, countries: Object.entries(stats.visits.countries).map(([code, count]) => ({ code, count })).sort((a, b) => b.count - a.count) },
    updatedAt: stats.updatedAt,
  };
}
