"use client"

import { motion } from "framer-motion"
import { FloralDivider } from "@/components/floral-divider"
import { Clock, Heart, Music, Utensils, MessageSquare, Sparkles, PartyPopper, Star } from "lucide-react"
import { useLanguage } from "@/components/language-context"

const programmeIcons = [Sparkles, Heart, Star, Utensils, MessageSquare, Music, PartyPopper, Sparkles]

export function ProgrammeSection() {
  const { t } = useLanguage()

  return (
    <section id="programme" className="py-14 md:py-20 bg-cream relative overflow-hidden">
      {/* Watercolor wash backgrounds */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-rose/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-rose/6 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-10 md:mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.p 
            className="text-gold text-sm tracking-[0.2em] uppercase mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {t.programme.eyebrow}
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-5xl font-serif text-foreground mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            {t.programme.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <FloralDivider className="w-40 md:w-56 mx-auto" />
          </motion.div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gold/30 md:-translate-x-px" />

          {t.programme.items.map((item, index) => {
            const Icon = programmeIcons[index % programmeIcons.length]
            const isEven = index % 2 === 0

            return (
              <motion.div
                key={item.time}
                className={`relative flex items-start gap-6 mb-8 md:mb-10 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                {/* Timeline dot with clock icon */}
                <div className="absolute left-4 md:left-1/2 w-10 h-10 -translate-x-1/2 bg-gold rounded-full flex items-center justify-center shadow-lg z-10 border-2 border-ivory">
                  <Clock className="w-5 h-5 text-ivory" />
                </div>

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${isEven ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                  <div className="bg-ivory border border-gold/20 rounded-sm p-4 md:p-5 shadow-sm relative">
                    {/* Corner ornaments */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-gold/40" />
                    <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-gold/40" />
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-gold/40" />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-gold/40" />

                    <div className={`flex items-center gap-3 mb-2 ${isEven ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-gold text-base md:text-lg font-semibold tracking-wider font-serif">{item.time}</span>
                    </div>
                    <h3 className="text-lg md:text-xl font-serif text-foreground mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for the other side on desktop */}
                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
