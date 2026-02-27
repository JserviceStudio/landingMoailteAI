import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mikhmon Pro - Portails de Vente & Gestion",
  description: "Portail de gestion multi-tenant pour administrateurs et boutique de vouchers.",
};

import { ThemeProvider } from "@/components/providers/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="antialiased">
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
