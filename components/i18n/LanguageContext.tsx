"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/locales/translations";

export type Language = "fr" | "en" | "fil" | "id";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const getBrowserLanguage = (): Language => {
  if (typeof window === "undefined") return "fr";
  const navLang = navigator.language || "";
  const langCode = navLang.split("-")[0].toLowerCase();
  
  if (["fr", "en", "fil", "id"].includes(langCode)) {
    return langCode as Language;
  }
  // Tagalog (tl) map to Filipino (fil)
  if (langCode === "tl" || langCode === "tag") {
    return "fil";
  }
  // Default fallback is English
  return "en";
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("fr");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Defer client preference hydration to keep the server-rendered French
    // content stable and avoid a synchronous render cascade in the effect.
    const timer = window.setTimeout(() => {
      const savedLang = localStorage.getItem("mikhmonpro_lang") as Language;
      if (savedLang && ["fr", "en", "fil", "id"].includes(savedLang)) {
        setLanguageState(savedLang);
      } else {
        const detected = getBrowserLanguage();
        setLanguageState(detected);
        localStorage.setItem("mikhmonpro_lang", detected);
      }
      setIsMounted(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("mikhmonpro_lang", lang);
    // Update HTML lang attribute dynamically
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        // Fallback to English dictionary if key is missing in active language
        let fallbackValue: any = translations["en"];
        for (const fk of keys) {
          if (fallbackValue && typeof fallbackValue === "object" && fk in fallbackValue) {
            fallbackValue = fallbackValue[fk];
          } else {
            fallbackValue = undefined;
            break;
          }
        }
        return typeof fallbackValue === "string" ? fallbackValue : key;
      }
    }
    
    return typeof value === "string" ? value : key;
  };

  // Render the French SSR content immediately so search engines and users
  // receive meaningful content before JavaScript hydration.
  if (!isMounted) {
    // Fallback dictionary functions during hydration (default to fr)
    const tFallback = (key: string): string => {
      const keys = key.split(".");
      let value: any = translations["fr"];
      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = value[k];
        } else {
          return key;
        }
      }
      return typeof value === "string" ? value : key;
    };
    
    return (
      <LanguageContext.Provider value={{ language: "fr", setLanguage, t: tFallback }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
};
