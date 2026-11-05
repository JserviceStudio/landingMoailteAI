const OFFICIAL_STORE_URL = "https://store.mikhmoai.com";

export type OfficialStorePrices = {
  pro: number;
  vpn: number;
};

export const FALLBACK_STORE_PRICES: OfficialStorePrices = {
  pro: 17400,
  vpn: 8000,
};

function extractPrice(html: string, productName: string) {
  const escapedName = productName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = html.match(new RegExp(`${escapedName}</h3>[\\s\\S]*?XOF<!-- -->([0-9]+)`));
  const price = match?.[1] ? Number(match[1]) : NaN;

  return Number.isFinite(price) && price > 0 ? price : null;
}

export async function getOfficialStorePrices(): Promise<OfficialStorePrices> {
  try {
    const response = await fetch(OFFICIAL_STORE_URL, {
      next: { revalidate: 300 },
    });

    if (!response.ok) return FALLBACK_STORE_PRICES;

    const html = await response.text();
    const pro = extractPrice(html, "MikhmoAI Pro");
    const vpn = extractPrice(html, "VPN 1 ANS");

    return {
      pro: pro ?? FALLBACK_STORE_PRICES.pro,
      vpn: vpn ?? FALLBACK_STORE_PRICES.vpn,
    };
  } catch {
    return FALLBACK_STORE_PRICES;
  }
}

export function formatXof(price: number) {
  return `${new Intl.NumberFormat("fr-FR").format(price).replace(/\u202f/g, " ")} F`;
}

export function formatApproxUsd(price: number) {
  return `≈ ${Math.round(price / 600)} $`;
}
