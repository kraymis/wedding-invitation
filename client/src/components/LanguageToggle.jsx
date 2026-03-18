import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t.language.toggleAria}
      className="btn-base inline-flex items-center gap-2 rounded-full border border-gold px-3 py-2 text-sm font-semibold text-dark"
    >
      <span className={language === "fr" ? "text-gold" : "text-dark/70"}>{t.language.fr}</span>
      <span className="text-dark/40">|</span>
      <span className={language === "en" ? "text-gold" : "text-dark/70"}>{t.language.en}</span>
    </button>
  );
}
