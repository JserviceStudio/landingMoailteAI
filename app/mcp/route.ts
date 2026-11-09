import { NextResponse } from "next/server";

const tools = [
  { name: "get_site_overview", title: "Get MikhmoAI site overview", description: "Return official MikhmoAI business, product and contact information.", inputSchema: { type: "object", properties: {} } },
  { name: "list_downloads", title: "List MikhmoAI downloads", description: "Return official download pages and platform links.", inputSchema: { type: "object", properties: { platform: { type: "string", enum: ["android", "windows", "linux", "mac", "all"] } } } },
];

const overview = {
  name: "MikhmoAI",
  publisher: "J+Services / Moailte Studio",
  description: "MikroTik Hotspot and Monitoring with AI for Hotspot, RADIUS, VPN, vouchers, monitoring and Mobile Money sales.",
  website: "https://mikhmoai.com/",
  products: ["MikhmoAI", "MikhmonV8", "TiketMOMO", "Starlink monitoring"],
  contact: { email: "justemoailtepro@gmail.com", whatsapp: "https://wa.me/22941438405" },
};

const downloads = [
  { platform: "android", name: "MikhmoAI Android", url: "https://mikhmoai.com/downloads#android" },
  { platform: "windows", name: "MikhmoAI Windows", url: "https://mikhmoai.com/downloads" },
  { platform: "linux", name: "MikhmoAI Linux", url: "https://mikhmoai.com/downloads" },
  { platform: "mac", name: "MikhmoAI Mac PWA", url: "https://app.mikhmo.tech" },
];

const json = (id: string | number | null, result: unknown) => ({ jsonrpc: "2.0", id, result });
const error = (id: string | number | null, message: string) => ({ jsonrpc: "2.0", id, error: { code: -32601, message } });
const cors = { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET, POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type, Mcp-Session-Id" };

export async function OPTIONS() { return new NextResponse(null, { status: 204, headers: cors }); }

export async function GET() { return NextResponse.json({ name: "com.mikhmoai/website", version: "1.0.0", capabilities: { tools: {} } }, { headers: cors }); }

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as { id?: string | number; method?: string; params?: { name?: string; arguments?: Record<string, unknown> } } | null;
  const id = body?.id ?? null;
  let response: unknown;
  if (!body?.method) response = error(id, "Missing JSON-RPC method");
  else if (body.method === "initialize") response = json(id, { protocolVersion: "2025-06-18", capabilities: { tools: {} }, serverInfo: { name: "com.mikhmoai/website", version: "1.0.0" } });
  else if (body.method === "notifications/initialized") return new NextResponse(null, { status: 202, headers: cors });
  else if (body.method === "tools/list") response = json(id, { tools });
  else if (body.method === "tools/call") {
    const name = body.params?.name;
    const input = body.params?.arguments ?? {};
    if (name === "get_site_overview") response = json(id, { content: [{ type: "text", text: JSON.stringify(overview) }] });
    else if (name === "list_downloads") {
      const platform = typeof input.platform === "string" ? input.platform : "all";
      response = json(id, { content: [{ type: "text", text: JSON.stringify(downloads.filter((item) => platform === "all" || item.platform === platform)) }] });
    } else response = error(id, `Unknown tool: ${name ?? ""}`);
  } else response = error(id, `Unsupported method: ${body.method}`);
  return NextResponse.json(response, { headers: { ...cors, "MCP-Protocol-Version": "2025-06-18" } });
}
