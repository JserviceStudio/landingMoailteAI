import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "État des services",
  description: "Consultez l’état de l’application MikhmoAI, des services MikroTik, de l’assistant Moailte AI et de la boutique.",
  alternates: { canonical: "/status" },
  robots: { index: true, follow: true },
};

export default function StatusLayout({ children }: { children: ReactNode }) {
  return children;
}
