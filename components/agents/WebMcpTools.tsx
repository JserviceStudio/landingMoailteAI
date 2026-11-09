"use client";

import { useEffect } from "react";

type WebMcpTool = {
  name: string;
  title?: string;
  description: string;
  inputSchema: Record<string, unknown>;
  execute: (input: Record<string, unknown>) => Promise<{ content: Array<{ type: "text"; text: string }> }>;
  annotations?: { readOnlyHint?: boolean };
};

type ModelContext = {
  registerTool: (tool: WebMcpTool, options?: { signal?: AbortSignal }) => Promise<unknown>;
};

declare global {
  interface Navigator { modelContext?: ModelContext; }
  interface Document { modelContext?: ModelContext; }
}

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

function textResult(value: unknown) {
  return { content: [{ type: "text" as const, text: JSON.stringify(value) }] };
}

export default function WebMcpTools() {
  useEffect(() => {
    const context = navigator.modelContext ?? document.modelContext;
    if (!context) return;
    const controller = new AbortController();
    const tools: WebMcpTool[] = [
      {
        name: "get_site_overview",
        title: "Get MikhmoAI site overview",
        description: "Return official MikhmoAI business, product and contact information.",
        inputSchema: { type: "object", properties: {} },
        annotations: { readOnlyHint: true },
        execute: async () => textResult(overview),
      },
      {
        name: "list_downloads",
        title: "List MikhmoAI downloads",
        description: "Return official download pages and platform links.",
        inputSchema: {
          type: "object",
          properties: { platform: { type: "string", enum: ["android", "windows", "linux", "mac", "all"] } },
        },
        annotations: { readOnlyHint: true },
        execute: async (input) => {
          const platform = typeof input.platform === "string" ? input.platform : "all";
          return textResult(downloads.filter((item) => platform === "all" || item.platform === platform));
        },
      },
    ];
    Promise.all(tools.map((tool) => context.registerTool(tool, { signal: controller.signal }))).catch(() => undefined);
    return () => controller.abort();
  }, []);

  return null;
}
