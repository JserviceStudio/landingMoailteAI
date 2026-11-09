import { createHash } from "node:crypto";

type PurchaseInput = {
  eventId: string;
  value: number;
  contentName: string;
  eventSourceUrl: string;
  email?: string;
  phone?: string;
  clientIpAddress?: string;
  clientUserAgent?: string;
  fbp?: string;
  fbc?: string;
  attribution?: Record<string, string>;
};

function sha256(value: string) {
  return createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

/** Sends a confirmed purchase from a trusted payment webhook. Never call this from client code. */
export async function sendMetaPurchase(input: PurchaseInput) {
  const token = process.env.META_CAPI_TOKEN?.trim();
  const pixelId = process.env.META_PIXEL_ID?.trim() || "1853403099123232";
  if (!token) return { sent: false, reason: "META_CAPI_TOKEN is not configured" } as const;

  const userData: Record<string, unknown> = {};
  if (input.email) userData.em = [sha256(input.email)];
  if (input.phone) userData.ph = [sha256(input.phone.replace(/[^0-9+]/g, ""))];
  if (input.clientIpAddress) userData.client_ip_address = input.clientIpAddress;
  if (input.clientUserAgent) userData.client_user_agent = input.clientUserAgent;
  if (input.fbp) userData.fbp = input.fbp;
  if (input.fbc) userData.fbc = input.fbc;

  const apiVersion = process.env.META_CAPI_API_VERSION?.trim() || "v20.0";
  const response = await fetch(`https://graph.facebook.com/${apiVersion}/${pixelId}/events?access_token=${encodeURIComponent(token)}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: [{
        event_name: "Purchase",
        event_time: Math.floor(Date.now() / 1000),
        event_id: input.eventId,
        event_source_url: input.eventSourceUrl,
        action_source: "website",
        user_data: userData,
        custom_data: {
          value: input.value,
          currency: "XOF",
          content_name: input.contentName,
          ...(input.attribution ?? {}),
        },
      }],
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Meta Conversions API rejected Purchase: ${response.status} ${detail}`);
  }

  return { sent: true } as const;
}
