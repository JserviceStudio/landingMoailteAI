import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

// Hostinger CDN previously kept prerendered HTML from an older deployment
// while the corresponding hashed Next.js chunks had already been removed.
// Dynamic HTML prevents that version mismatch; hashed static assets remain
// immutable and cacheable by Next.js.
export const dynamic = "force-dynamic";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mikhmoai.com"),
  title: {
    default: "MikhmoAI — Suite MikroTik tout-en-un",
    template: "%s | MikhmoAI",
  },
  description: "MikhmoAI (MikroTik Hotspot and Monitoring with AI) automatise Hotspot, RADIUS, multi-site, VPN, monitoring et déploiement de services MikroTik sur mobile et ordinateur.",
  keywords: ["MikroTik", "Mikhmon", "Hotspot", "Voucher", "SaaS", "VPN", "Android", "Gestion Réseau"],
  authors: [{ name: "J+Services" }],
  creator: "Moailte Studio",
  publisher: "J+Services",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
  applicationName: "MikhmoAI",
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "MikhmoAI — Suite d’exploitation MikroTik tout-en-un",
    description: "Hotspot, RADIUS, multi-routeurs, VPN, topologie, monitoring et déploiement automatisé sur Android, Windows et Linux.",
    url: "https://mikhmoai.com",
    siteName: "MikhmoAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MikhmoAI Dashboard Preview",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MikhmoAI — MikroTik Hotspot and Monitoring with AI",
    description: "Une plateforme unique pour exploiter, superviser et déployer vos services MikroTik.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LanguageProvider } from "@/components/i18n/LanguageContext";

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
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
