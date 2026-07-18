import { NextRequest, NextResponse } from "next/server";
import { publicStats, recordVisit } from "@/lib/live-stats";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(publicStats(), { headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({})) as { timezone?: unknown };
  const timezone = typeof body.timezone === "string" ? body.timezone : undefined;
  const detectedCountry = recordVisit(request, timezone);
  return NextResponse.json({ ...publicStats(), detectedCountry }, { headers: { "Cache-Control": "no-store" } });
}
