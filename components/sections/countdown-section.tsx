"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FloralDivider } from "@/components/floral-divider"
import { GoldSparkles } from "@/components/floating-petals"
import { DiamondDivider } from "@/components/diamond-divider"
import { useLanguage } from "@/components/language-context"

const WEDDING_DATE = new Date("2026-04-01T11:00:00")

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function calculateTimeLeft(): TimeLeft {
  const difference = WEDDING_DATE.getTime() - new Date().getTime()
  
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

export function CountdownSection() {
  const { t, language } = useLanguage()
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!mounted) {
    return (
      <section id="countdown" className="bg-ivory py-14 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
            {t.countdown.fallback}
          </h2>
        </div>
      </section>
    )
  }

  const timeUnits = [
    { value: timeLeft.days, label: t.countdown.units.days },
    { value: timeLeft.hours, label: t.countdown.units.hours },
    { value: timeLeft.minutes, label: t.countdown.units.minutes },
    { value: timeLeft.seconds, label: t.countdown.units.seconds },
  ]

  return (
    <section id="countdown" className="relative overflow-hidden bg-ivory py-14 md:py-32">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at center, var(--gold) 1px, transparent 1px)`,
            backgroundSize: "40px 40px"
          }}
        />
      </div>

      {/* Gold sparkles */}
      <GoldSparkles />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
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
            {t.countdown.eyebrow}
          </motion.p>
          <motion.h2 
            className="text-3xl md:text-5xl font-serif text-foreground mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            {t.countdown.title}
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

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={language}
            className="flex justify-center gap-4 md:gap-8 flex-wrap"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.32, ease: "easeOut" }}
          >
            {timeUnits.map((unit, index) => (
              <motion.div
                key={`unit-${index}`}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.1, ease: "easeOut" }}
              >
                <div className="relative w-20 h-20 md:w-28 md:h-28 bg-cream border-2 border-gold/40 rounded-sm flex items-center justify-center shadow-lg">
                  <div className="absolute -top-0.5 -left-0.5 w-2 h-2 border-t border-l border-gold" />
                  <div className="absolute -top-0.5 -right-0.5 w-2 h-2 border-t border-r border-gold" />
                  <div className="absolute -bottom-0.5 -left-0.5 w-2 h-2 border-b border-l border-gold" />
                  <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 border-b border-r border-gold" />

                  <span className="text-3xl md:text-5xl font-serif font-semibold text-foreground">
                    {unit.value.toString().padStart(2, "0")}
                  </span>
                </div>
                <span className="mt-3 text-gold text-xs md:text-sm tracking-[0.2em] uppercase">{unit.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <DiamondDivider className="my-12" />

        <motion.p
          className="text-center text-muted-foreground text-lg md:text-xl font-serif italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          {`"${t.countdown.quote}"`}
        </motion.p>
      </div>
    </section>
  )
}
