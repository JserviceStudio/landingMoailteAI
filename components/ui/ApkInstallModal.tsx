"use client";

import { useEffect, useState } from "react";
import { Download, ShieldCheck, FileKey, X, Smartphone } from "lucide-react";
import { useTranslation } from "@/components/i18n/LanguageContext";

interface ApkInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ApkInstallModal({ isOpen, onClose }: ApkInstallModalProps) {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShow(true);
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => setShow(false), 300);
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen && !show) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 transition-all duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="apk-modal-title"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div 
        className={`relative w-full max-w-md bg-background border border-border/50 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 transform ${
          isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"
        }`}
      >
        {/* Header */}
        <div className="bg-primary/5 p-6 sm:p-8 flex flex-col items-center text-center relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground bg-background/50 hover:bg-background/80 rounded-full transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <Download className="w-8 h-8 text-primary animate-bounce" />
          </div>
          <h2 id="apk-modal-title" className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
            Téléchargement en cours...
          </h2>
          <p className="text-sm text-muted-foreground mt-2 font-medium">
            Voici comment installer le fichier APK sur votre appareil Android.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-1">
              <Smartphone className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">1. Ouvrez le fichier</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Une fois le téléchargement terminé, appuyez sur le fichier <span className="font-mono text-xs bg-muted px-1 py-0.5 rounded">.apk</span> dans vos notifications ou votre dossier de téléchargements.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center flex-shrink-0 mt-1">
              <ShieldCheck className="w-5 h-5 text-yellow-500" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">2. Autorisez l'installation</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Si Android affiche un avertissement, allez dans les <strong>Paramètres</strong> et activez <strong>"Autoriser depuis cette source"</strong>.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-1">
              <FileKey className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">3. Installez et profitez</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Appuyez sur <strong>Installer</strong>, patientez quelques secondes, puis ouvrez MikhmonPro.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 sm:p-8 bg-muted/20 border-t border-border/50 text-center">
          <button 
            onClick={onClose}
            className="w-full py-3.5 bg-foreground text-background font-bold rounded-xl hover:opacity-90 transition-opacity"
          >
            J'ai compris
          </button>
        </div>
      </div>
    </div>
  );
}
