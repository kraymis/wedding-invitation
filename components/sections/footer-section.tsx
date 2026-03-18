"use client"

import { motion } from "framer-motion"
import { FloralDivider } from "@/components/floral-divider"
import { Heart } from "lucide-react"
import { LanternDecoration, CandleDecoration } from "@/components/decorations"
import { Monogram } from "@/components/monogram"
import { useLanguage } from "@/components/language-context"

export function FooterSection() {
  const { t } = useLanguage()

  return (
    <footer className="relative overflow-hidden border-t border-gold/20 bg-cream py-12 md:py-24">
      {/* Decorative lanterns */}
      <LanternDecoration className="absolute top-8 left-8 w-12 h-20 opacity-15 hidden md:block" />
      <LanternDecoration className="absolute top-8 right-8 w-12 h-20 opacity-15 hidden md:block" />
      <CandleDecoration className="absolute bottom-8 left-20 w-8 h-16 opacity-10 hidden lg:block" />
      <CandleDecoration className="absolute bottom-8 right-20 w-8 h-16 opacity-10 hidden lg:block" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Monogram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <Monogram size="lg" className="mb-8" label={t.footer.monogram} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <FloralDivider className="w-32 mx-auto mb-8" />
          </motion.div>

          <motion.p 
            className="text-gold text-xl font-serif tracking-wider mb-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            {t.footer.date}
          </motion.p>

          <motion.p 
            className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            {t.footer.thanks}
          </motion.p>

          <motion.p
            className="text-foreground/80 mx-auto mb-8 max-w-2xl font-serif text-lg italic"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
          >
            {`“${t.footer.quote}”`}
          </motion.p>

          {/* Hearts */}
          <motion.div 
            className="flex items-center justify-center gap-3 text-gold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <Heart className="w-4 h-4 fill-current" />
            <Heart className="w-5 h-5 fill-current" />
            <Heart className="w-4 h-4 fill-current" />
          </motion.div>

          {/* Copyright */}
          <motion.p 
            className="text-muted-foreground/60 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            {t.footer.copyright}
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}
