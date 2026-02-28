import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mikhmoai.com"),
  title: "MikhmonPro — Gestion Hotspot MikroTik V6 & V7",
  description: "L'excellence de la gestion Hotspot MikroTik sur Android. Gagnez en productivité avec Moailte AI et la Boutique Web SaaS intégrée.",
  keywords: ["MikroTik", "Mikhmon", "Hotspot", "Voucher", "SaaS", "VPN", "Android", "Gestion Réseau"],
  authors: [{ name: "J+Services" }],
  openGraph: {
    title: "MikhmonPro — Gestion Hotspot MikroTik Elite",
    description: "Conçue pour les professionnels. Gérez vos zones Wifi, générez des tickets et automatisez votre business 24h/24.",
    url: "https://mikhmon-pro.jservices.fr",
    siteName: "MikhmonPro",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MikhmonPro Dashboard Preview",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MikhmonPro — Hotspot Management Pro",
    description: "Simplifiez la gestion de vos serveurs MikroTik avec l'IA et le mode SaaS.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

import { ThemeProvider } from "@/components/providers/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} antialiased font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
