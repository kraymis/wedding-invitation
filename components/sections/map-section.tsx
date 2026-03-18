"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { FloralDivider } from "@/components/floral-divider"
import { useLanguage } from "@/components/language-context"

const MAPS_APP_URL = "https://maps.app.goo.gl/BMXn5nTfmNrewcmt9"
const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=Salle%20des%20f%C3%AAtes%20Dar%20Soltane%2C%20Es%20S%C3%A9nia%2C%20Oran&output=embed"

export function MapSection() {
  const { t } = useLanguage()
  const [imageOffset, setImageOffset] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const updateViewport = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    const onScroll = () => {
      if (!isDesktop) return
      setImageOffset(Math.min(40, window.scrollY * 0.03))
    }

    updateViewport()
    window.addEventListener("resize", updateViewport)
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => {
      window.removeEventListener("resize", updateViewport)
      window.removeEventListener("scroll", onScroll)
    }
  }, [isDesktop])

  return (
    <section id="location" className="bg-[#FAF7F2] py-14 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 relative z-10">
        <motion.div
          className="relative z-20 mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-serif text-3xl text-gold md:text-5xl">{t.venue.title}</h2>
          <FloralDivider className="mx-auto mt-6 w-44 md:w-60" />
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[10px]"
          style={{ height: isDesktop ? 420 : 280 }}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div
            className="absolute inset-0"
            style={{ transform: isDesktop ? `translateY(${imageOffset}px)` : "translateY(0)", transition: "transform 200ms ease-out" }}
          >
            <Image
              src="/assets/images/dar-soltane.jpg"
              alt={t.venue.name}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FAF7F2]" />
          <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_60px_rgba(250,247,242,0.95)]" />
        </motion.div>

        <motion.div
          className="relative z-20 mt-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <h3 className="font-serif text-[1.8rem] text-gold md:text-[2.5rem]">{t.venue.name}</h3>
          <OrnateRule className="mx-auto mt-4 w-56" />
        </motion.div>

        <motion.div
          className="relative mx-auto mt-8 w-full max-w-4xl rounded-[4px] border-2 border-[#C9A84C] bg-[#FAF7F2] p-2 shadow-[0_8px_28px_rgba(0,0,0,0.14)]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <CornerFlourish className="absolute -left-3 -top-3 h-10 w-10" />
          <CornerFlourish className="absolute -right-3 -top-3 h-10 w-10 scale-x-[-1]" />
          <CornerFlourish className="absolute -bottom-3 -left-3 h-10 w-10 scale-y-[-1]" />
          <CornerFlourish className="absolute -bottom-3 -right-3 h-10 w-10 scale-[-1]" />

          <iframe
            src={MAP_EMBED_SRC}
            width="100%"
            height="380"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            title={t.venue.iframeTitle}
            className="h-[240px] w-full rounded-[2px] md:h-[320px] lg:h-[380px]"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <motion.div
          className="mt-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
        >
          <a
            href={MAPS_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold px-8 py-3 font-medium text-ivory transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
          >
            {t.venue.directions}
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function OrnateRule({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 24" className={className}>
      <line x1="0" y1="12" x2="102" y2="12" stroke="#C9A84C" strokeWidth="1.2" />
      <line x1="138" y1="12" x2="240" y2="12" stroke="#C9A84C" strokeWidth="1.2" />
      <path d="M120 4 L128 12 L120 20 L112 12 Z" fill="none" stroke="#C9A84C" strokeWidth="1.2" />
    </svg>
  )
}

function CornerFlourish({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 50 50" className={className} fill="none">
      <path d="M0 4 Q10 8 12 20 Q16 14 22 18 Q18 10 30 8 Q14 6 0 4" stroke="#C9A84C" strokeWidth="1.4" />
      <path d="M4 6 Q14 14 12 26 Q18 22 24 28" stroke="#C9A84C" strokeWidth="1.1" opacity="0.7" />
      <circle cx="10" cy="11" r="2" fill="#C9A84C" />
    </svg>
  )
}
