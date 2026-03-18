"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/components/language-context"

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "#accueil", label: t.navbar.links.home },
    { href: "#programme", label: t.navbar.links.programme },
    { href: "#location", label: t.navbar.links.location },
    { href: "#rsvp", label: t.navbar.links.rsvp },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled 
            ? "bg-ivory/85 backdrop-blur-md shadow-sm border-b border-gold/10" 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a 
              href="#" 
              className="text-xl font-serif text-gold hover:text-gold-dark transition-colors min-h-12 min-w-12 inline-flex items-center"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
            >
              {t.navbar.brand}
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`min-h-12 inline-flex items-center text-sm tracking-wider uppercase transition-colors relative group ${
                    isScrolled
                      ? "text-foreground hover:text-gold"
                      : "text-foreground/90 hover:text-gold"
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}

              <LanguageToggle
                language={language}
                onSetLanguage={setLanguage}
                label={t.navbar.languageLabel}
                frLabel={t.navbar.languageFr}
                enLabel={t.navbar.languageEn}
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground p-3 min-h-12 min-w-12"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? t.navbar.closeMenu : t.navbar.openMenu}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-30 bg-ivory md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-2xl font-serif text-foreground hover:text-gold transition-colors min-h-12 w-full max-w-xs inline-flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="mt-4"
              >
                <LanguageToggle
                  language={language}
                  onSetLanguage={(next) => {
                    setLanguage(next)
                    setIsMobileMenuOpen(false)
                  }}
                  label={t.navbar.languageLabel}
                  frLabel={t.navbar.languageFr}
                  enLabel={t.navbar.languageEn}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function LanguageToggle({
  language,
  onSetLanguage,
  label,
  frLabel,
  enLabel,
}: {
  language: "fr" | "en"
  onSetLanguage: (lang: "fr" | "en") => void
  label: string
  frLabel: string
  enLabel: string
}) {
  return (
    <div
      className="inline-flex items-center rounded-full border border-gold/40 bg-cream/80 p-1"
      aria-label={label}
      title={label}
    >
      <button
        type="button"
        onClick={() => onSetLanguage("fr")}
        className={`min-h-11 min-w-11 rounded-full px-3 text-xs font-semibold tracking-wider transition-all ${
          language === "fr" ? "bg-gold text-ivory" : "text-foreground"
        }`}
      >
        {frLabel}
      </button>
      <span className="px-1 text-gold">|</span>
      <button
        type="button"
        onClick={() => onSetLanguage("en")}
        className={`min-h-11 min-w-11 rounded-full px-3 text-xs font-semibold tracking-wider transition-all ${
          language === "en" ? "bg-gold text-ivory" : "text-foreground"
        }`}
      >
        {enLabel}
      </button>
    </div>
  )
}
