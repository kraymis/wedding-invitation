import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useLanguage } from "../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const links = [
    { id: "home", label: t.navbar.home },
    { id: "programme", label: t.navbar.programme },
    { id: "venue", label: t.navbar.venue },
    { id: "rsvp", label: t.navbar.rsvp }
  ];

  const onJump = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-cream/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <button onClick={() => onJump("home")} className="btn-base font-heading text-2xl text-gold">
          {t.footer.monogram}
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <button key={link.id} onClick={() => onJump(link.id)} className="btn-base text-base text-dark">
              {link.label}
            </button>
          ))}
          <LanguageToggle />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t.navbar.closeMenu : t.navbar.openMenu}
          className="btn-base rounded-full border border-gold p-2 md:hidden"
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-4 bg-dark/95 md:hidden">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => onJump(link.id)}
              className="btn-base min-w-52 rounded-full border border-gold px-6 py-3 text-lg text-cream"
            >
              {link.label}
            </button>
          ))}
          <div className="mt-2">
            <LanguageToggle />
          </div>
        </div>
      )}
    </header>
  );
}
