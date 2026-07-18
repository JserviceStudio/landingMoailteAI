"use client";

import { useEffect } from "react";
import { MonitorDown, PackageOpen, X, ShieldCheck } from "lucide-react";

type DesktopDownloadModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function DesktopDownloadModal({ isOpen, onClose }: DesktopDownloadModalProps) {
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="desktop-download-title">
      <button type="button" className="absolute inset-0 cursor-default bg-black/70 backdrop-blur-md" onClick={onClose} aria-label="Fermer la fenêtre" />
      <div className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#111827] p-6 text-white shadow-[0_40px_120px_-20px_rgba(0,0,0,0.8)] sm:p-9">
        <button type="button" onClick={onClose} className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 p-2.5 text-white/70 transition hover:bg-white/10 hover:text-white" aria-label="Fermer">
          <X className="h-5 w-5" />
        </button>

        <div className="max-w-xl pr-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-blue-300">
            <MonitorDown className="h-4 w-4" /> MikhmoAI Desktop V7
          </div>
          <h2 id="desktop-download-title" className="mt-5 text-3xl font-black tracking-tight sm:text-5xl">Choisissez votre système</h2>
          <p className="mt-3 text-base text-white/60 sm:text-lg">Le bouton télécharge automatiquement la version la plus récente disponible.</p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a href="/api/download/latest?platform=windows&arch=x64" onClick={onClose} className="group rounded-[1.7rem] bg-blue-600 p-6 transition hover:-translate-y-1 hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300">
            <MonitorDown className="h-9 w-9" />
            <p className="mt-8 text-2xl font-black">Windows</p>
            <p className="mt-1 text-sm font-semibold text-white/70">Windows 10 / 11 · x64</p>
            <span className="mt-5 inline-block text-xs font-black uppercase tracking-widest">Télécharger →</span>
          </a>
          <a href="/api/download/latest?platform=linux&arch=x64" onClick={onClose} className="group rounded-[1.7rem] bg-orange-500 p-6 text-black transition hover:-translate-y-1 hover:bg-orange-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-200">
            <PackageOpen className="h-9 w-9" />
            <p className="mt-8 text-2xl font-black">Linux</p>
            <p className="mt-1 text-sm font-semibold text-black/60">AppImage · DEB · RPM</p>
            <span className="mt-5 inline-block text-xs font-black uppercase tracking-widest">Télécharger →</span>
          </a>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/60">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
          <p>Installez uniquement les fichiers distribués depuis mikhmoai.com et vérifiez leur version avant installation.</p>
        </div>
      </div>
    </div>
  );
}
