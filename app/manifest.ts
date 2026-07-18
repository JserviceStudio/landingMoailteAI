import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MikhmoAI — Suite MikroTik tout-en-un",
    short_name: "MikhmoAI",
    description: "Suite multiplateforme de gestion Hotspot MikroTik, vouchers et monitoring RouterOS.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0f19",
    theme_color: "#2563eb",
    lang: "fr",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
