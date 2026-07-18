import { NextRequest, NextResponse } from "next/server";
import { publicStats, recordVisit } from "@/lib/live-stats";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json(publicStats(), { headers: { "Cache-Control": "no-store" } });
}

export function POST(request: NextRequest) {
  const detectedCountry = recordVisit(request);
  return NextResponse.json({ ...publicStats(), detectedCountry }, { headers: { "Cache-Control": "no-store" } });
}
