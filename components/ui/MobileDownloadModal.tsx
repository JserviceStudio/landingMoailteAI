"use client";

import { useEffect } from "react";
import { Smartphone, Cpu, X, CircleHelp } from "lucide-react";

type MobileDownloadModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (arch: "arm64" | "arm32") => void;
};

export default function MobileDownloadModal({ isOpen, onClose, onSelect }: MobileDownloadModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="mobile-download-title">
      <button type="button" className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-md" onClick={onClose} aria-label="Fermer la fenêtre" />
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#111827] p-6 text-white shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] sm:p-9">
        <button type="button" onClick={onClose} className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 p-2.5 text-white/70 transition hover:bg-white/10 hover:text-white" aria-label="Fermer">
          <X className="h-5 w-5" />
        </button>

        <div className="max-w-xl pr-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-green-300">
            <Smartphone className="h-4 w-4" /> MikhmoAI Mobile
          </div>
          <h2 id="mobile-download-title" className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">Choisissez votre appareil</h2>
          <p className="mt-3 text-base text-white/60 sm:text-lg">Le choix dépend principalement de la mémoire et de l’ancienneté de votre téléphone Android.</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <button type="button" onClick={() => onSelect("arm64")} className="group rounded-[1.7rem] bg-green-500 p-6 text-left text-black transition hover:-translate-y-1 hover:bg-green-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-200">
            <Cpu className="h-9 w-9" />
            <div className="mt-8 flex items-center justify-between gap-3">
              <p className="text-2xl font-black">ARM64</p>
              <span className="rounded-full bg-black/10 px-3 py-1 text-[10px] font-black uppercase">Recommandé</span>
            </div>
            <p className="mt-2 text-sm font-semibold text-black/60">Téléphone récent · 4 Go de RAM ou plus</p>
            <span className="mt-5 inline-block text-xs font-black uppercase tracking-widest">Télécharger →</span>
          </button>
          <button type="button" onClick={() => onSelect("arm32")} className="group rounded-[1.7rem] border border-white/10 bg-white/5 p-6 text-left transition hover:-translate-y-1 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
            <Smartphone className="h-9 w-9" />
            <p className="mt-8 text-2xl font-black">ARM32</p>
            <p className="mt-2 text-sm font-semibold text-white/60">Ancien téléphone · moins de 4 Go de RAM</p>
            <span className="mt-5 inline-block text-xs font-black uppercase tracking-widest">Télécharger →</span>
          </button>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/60">
          <CircleHelp className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
          <p>Vous hésitez ? Choisissez ARM64. ARM32 est uniquement destiné aux appareils Android plus anciens.</p>
        </div>
      </div>
    </div>
  );
}
