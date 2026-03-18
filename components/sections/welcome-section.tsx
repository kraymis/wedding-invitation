"use client"

import { motion } from "framer-motion"
import { FloralDivider, FloralDividerAlt } from "@/components/floral-divider"
import Image from "next/image"
import { useLanguage } from "@/components/language-context"

const horizontalPhotos = [
  "/images/couple-1.jpg",
  "/images/couple-2.jpg",
  "/images/couple-3.jpg",
  "/images/couple-4.jpg",
  "/images/couple-5.jpg",
  "/images/couple-6.jpg",
]

const verticalPhotos = [
  "/images/couple-3.jpg",
  "/images/couple-1.jpg",
  "/images/couple-5.jpg",
  "/images/couple-2.jpg",
  "/images/couple-6.jpg",
  "/images/couple-4.jpg",
]

export function WelcomeSection() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden bg-cream py-14 md:py-32">
      {/* Watercolor wash backgrounds */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose/8 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl font-serif text-gold mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            {t.welcome.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <FloralDivider className="w-48 md:w-64 mx-auto mb-6" />
          </motion.div>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            {t.welcome.description}
          </motion.p>
        </motion.div>

        {/* Dual Slideshow Container */}
        <motion.div
          className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex h-full gap-4">
            {/* Horizontal auto-sliding strip */}
            <div className="flex-1 overflow-hidden relative">
              <div className="absolute inset-0 flex animate-slide-horizontal">
                {[...horizontalPhotos, ...horizontalPhotos].map((photo, index) => (
                  <div 
                    key={`h-${index}`} 
                    className="flex-shrink-0 w-64 md:w-80 h-full p-2"
                  >
                    <div 
                      className="relative w-full h-full rounded-lg overflow-hidden shadow-xl"
                      style={{
                        transform: `rotate(${(index % 3 - 1) * 2}deg)`,
                        boxShadow: "0 10px 30px rgba(201, 168, 76, 0.3)"
                      }}
                    >
                      <Image
                        src={photo}
                        alt={`${t.welcome.photoAltPrefix} ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="320px"
                      />
                      {/* Polaroid-style bottom */}
                      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-ivory to-transparent" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical auto-sliding strip */}
            <div className="w-48 md:w-64 overflow-hidden relative hidden md:block">
              <div className="absolute inset-0 flex flex-col animate-slide-vertical">
                {[...verticalPhotos, ...verticalPhotos].map((photo, index) => (
                  <div 
                    key={`v-${index}`} 
                    className="flex-shrink-0 w-full h-64 p-2"
                  >
                    <div 
                      className="relative w-full h-full rounded-lg overflow-hidden shadow-xl"
                      style={{
                        transform: `rotate(${(index % 3 - 1) * 1.5}deg)`,
                        boxShadow: "0 10px 30px rgba(201, 168, 76, 0.3)"
                      }}
                    >
                      <Image
                        src={photo}
                        alt={`${t.welcome.photoAltPrefix} ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="256px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-cream to-transparent pointer-events-none z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-cream to-transparent pointer-events-none z-10" />
        </motion.div>
      </div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <FloralDividerAlt className="w-64 mx-auto" />
      </motion.div>
    </section>
  )
}
