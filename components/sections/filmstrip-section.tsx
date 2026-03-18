"use client"

import { motion } from "framer-motion"
import { FloralDivider, FloralDividerAlt } from "@/components/floral-divider"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"

const filmstripPhotos = [
  "/images/couple-1.jpg",
  "/images/couple-2.jpg",
  "/images/couple-3.jpg",
  "/images/couple-4.jpg",
  "/images/couple-5.jpg",
  "/images/couple-6.jpg",
]

export function FilmstripSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-cream py-12 md:py-24">
      {/* Top floral divider */}
      <motion.div
        className="container mx-auto px-4 mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <FloralDividerAlt className="w-72 md:w-96 mx-auto" />
      </motion.div>

      {/* Filmstrip container */}
      <motion.div
        className="relative overflow-hidden py-6 md:py-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Filmstrip holes top */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-foreground/10 flex items-center justify-around">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={`top-${i}`} className="w-2 h-2 rounded-sm bg-cream" />
          ))}
        </div>

        {/* Main filmstrip */}
        <div className="flex animate-filmstrip">
          {[...filmstripPhotos, ...filmstripPhotos, ...filmstripPhotos].map((photo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 md:w-96 h-48 md:h-64 mx-2 relative"
            >
              <div className="absolute inset-2 rounded-sm overflow-hidden shadow-lg">
                <Image
                  src={photo}
                  alt={`${t.welcome.photoAltPrefix} ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 288px, 384px"
                />
              </div>
              {/* Film frame border */}
              <div className="absolute inset-0 border-2 border-foreground/10 rounded-sm pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Filmstrip holes bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-foreground/10 flex items-center justify-around">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={`bottom-${i}`} className="w-2 h-2 rounded-sm bg-cream" />
          ))}
        </div>
      </motion.div>

      {/* Bottom floral divider */}
      <motion.div
        className="container mx-auto px-4 mt-12"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <FloralDivider className="w-72 md:w-96 mx-auto" />
      </motion.div>
    </section>
  )
}
