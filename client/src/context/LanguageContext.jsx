import { createContext, useContext, useMemo, useState } from "react";
import { translations } from "../translations";

const LanguageContext = createContext(null);

const STORAGE_KEY = "wedding_lang";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem(STORAGE_KEY) || "fr");

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "fr" ? "en" : "fr";
      localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
      return next;
    });
  };

  const value = useMemo(
    () => ({ language, setLanguage, toggleLanguage, t: translations[language] }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
