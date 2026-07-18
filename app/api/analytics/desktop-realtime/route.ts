import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PROPERTY_ID = process.env.GA4_PROPERTY_ID ?? "518571871";
const DESKTOP_STREAM_ID = process.env.GA4_DESKTOP_STREAM_ID ?? "14217123189";
const CACHE_TTL_MS = 60_000;

type CountryActivity = {
  code: string;
  country: string;
  activeUsers: number;
};

let cache: { expiresAt: number; countries: CountryActivity[]; totalActiveUsers: number } | null = null;

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
  };
}

function analyticsClient() {
  const encodedCredentials = process.env.GA4_SERVICE_ACCOUNT_JSON_BASE64;
  if (!encodedCredentials) return new BetaAnalyticsDataClient();

  const credentials = JSON.parse(Buffer.from(encodedCredentials, "base64").toString("utf8")) as {
    client_email: string;
    private_key: string;
  };
  return new BetaAnalyticsDataClient({ credentials });
}

export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders() });
}

export async function GET() {
  try {
    if (cache && cache.expiresAt > Date.now()) {
      return NextResponse.json({ source: "cache", ...cache }, { headers: corsHeaders() });
    }

    const [report] = await analyticsClient().runRealtimeReport({
      property: `properties/${PROPERTY_ID}`,
      dimensions: [{ name: "countryId" }, { name: "country" }],
      metrics: [{ name: "activeUsers" }],
      dimensionFilter: {
        filter: {
          fieldName: "streamId",
          stringFilter: { value: DESKTOP_STREAM_ID, matchType: "EXACT" },
        },
      },
      orderBys: [{ metric: { metricName: "activeUsers" }, desc: true }],
      limit: 100,
    });

    const countries = (report.rows ?? []).flatMap((row) => {
      const code = row.dimensionValues?.[0]?.value?.toUpperCase();
      const country = row.dimensionValues?.[1]?.value;
      const activeUsers = Number(row.metricValues?.[0]?.value ?? 0);
      return code && code.length === 2 && country && activeUsers > 0
        ? [{ code, country, activeUsers }]
        : [];
    });
    const totalActiveUsers = countries.reduce((total, item) => total + item.activeUsers, 0);

    cache = { expiresAt: Date.now() + CACHE_TTL_MS, countries, totalActiveUsers };
    return NextResponse.json(
      { source: "ga4", updatedAt: new Date().toISOString(), countries, totalActiveUsers },
      { headers: corsHeaders() },
    );
  } catch (error) {
    console.error("GA4 realtime report failed", error);
    return NextResponse.json(
      { error: "analytics_unavailable", countries: [], totalActiveUsers: 0 },
      { status: 503, headers: { ...corsHeaders(), "Cache-Control": "no-store" } },
    );
  }
}
