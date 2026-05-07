"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { Language, languages, translations } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "rtl" | "ltr";
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ar");

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    // Update document direction
    const langConfig = languages.find((l) => l.code === lang);
    if (langConfig) {
      document.documentElement.dir = langConfig.dir;
      document.documentElement.lang = lang;
    }
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[language][key] || key;
    },
    [language]
  );

  const langConfig = languages.find((l) => l.code === language);
  const dir = langConfig?.dir || "ltr";
  const isRTL = dir === "rtl";

  // Set initial direction on mount
  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
