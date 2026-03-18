"use client"

import { motion } from "framer-motion"
import { FloralDivider } from "@/components/floral-divider"
import { FloatingPetals } from "@/components/floating-petals"
import { Monogram } from "@/components/monogram"
import { useLanguage } from "@/components/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream pt-0">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L30 60M0 30L60 30' stroke='%23C9A84C' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      {/* Watercolor wash background blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-rose/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-rose/8 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />

      {/* Floating petals */}
      <FloatingPetals />

      {/* Decorative corners */}
      <FloralCornerDecoration className="absolute top-20 left-4 md:top-24 md:left-8" />
      <FloralCornerDecoration className="absolute top-20 right-4 md:top-24 md:right-8 scale-x-[-1]" />
      <FloralCornerDecoration className="absolute bottom-4 left-4 md:bottom-8 md:left-8 scale-y-[-1]" />
      <FloralCornerDecoration className="absolute bottom-4 right-4 md:bottom-8 md:right-8 scale-[-1]" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gold text-sm md:text-base tracking-[0.3em] uppercase mb-4">
            {t.hero.familyLine}
          </p>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold text-foreground mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block text-balance">{t.hero.names.first}</span>
          <span className="text-gold text-3xl md:text-4xl lg:text-5xl font-light italic">&</span>
          <span className="block text-balance">{t.hero.names.second}</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <FloralDivider className="w-48 md:w-64 mx-auto mb-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-muted-foreground text-lg md:text-xl tracking-wider mb-2">
            {t.hero.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="inline-block bg-ivory border border-gold/30 px-8 py-4 rounded-sm shadow-sm relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Corner ornaments */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-gold" />
          <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-gold" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-gold" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-gold" />
          
          <p className="text-gold text-sm tracking-[0.2em] uppercase mb-1">{t.hero.saveTheDate}</p>
          <p className="text-foreground text-2xl md:text-3xl font-serif font-semibold">
            {t.hero.date}
          </p>
        </motion.div>

        {/* Small monogram decoration */}
        <motion.div
          className="mt-4 md:mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Monogram size="sm" />
        </motion.div>

        <motion.div
          className="mt-2 md:mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <a 
            href="#countdown"
            className="inline-flex items-center text-gold hover:text-gold-dark transition-colors"
          >
            <span className="text-sm tracking-wider uppercase mr-2">{t.hero.scroll}</span>
            <motion.svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              stroke="currentColor"
              strokeWidth="1.5"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path d="M10 3v14M3 10l7 7 7-7" />
            </motion.svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function FloralCornerDecoration({ className }: { className?: string }) {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 100 100"
      fill="none"
      className={className}
    >
      <path 
        d="M0 0 Q 30 10, 20 40 Q 10 20, 40 20 Q 20 30, 0 0" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1"
        className="text-gold/40"
      />
      <path 
        d="M5 0 Q 35 15, 25 50 Q 15 25, 50 25 Q 25 35, 5 0" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="0.5"
        className="text-gold/30"
      />
      <circle cx="20" cy="20" r="2" className="fill-gold/50" />
      <circle cx="30" cy="30" r="1.5" className="fill-gold/40" />
    </svg>
  )
}
