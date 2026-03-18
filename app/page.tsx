"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { EnvelopeAnimation } from "@/components/envelope-animation"
import { HeroSection } from "@/components/sections/hero-section"
import { CountdownSection } from "@/components/sections/countdown-section"
import { WelcomeSection } from "@/components/sections/welcome-section"
import { ProgrammeSection } from "@/components/sections/programme-section"
import { MapSection } from "@/components/sections/map-section"
import { FilmstripSection } from "@/components/sections/filmstrip-section"
import { RsvpSection } from "@/components/sections/rsvp-section"
import { FooterSection } from "@/components/sections/footer-section"
import { Navigation } from "@/components/navigation"
import { ScrollProgress } from "@/components/scroll-progress"
import { FloralDivider, FloralDividerAlt } from "@/components/floral-divider"
import { DiamondDivider } from "@/components/diamond-divider"
import { BackgroundMusic } from "@/components/background-music"

export default function WeddingInvitation() {
  const [showEnvelope, setShowEnvelope] = useState(true)
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)

  return (
    <main className={`relative min-h-screen bg-cream ${showEnvelope ? "overflow-hidden" : ""}`}>
      <div className="pointer-events-none absolute inset-0 bg-cream" />

      {/* Envelope Animation */}
      {showEnvelope && (
        <EnvelopeAnimation
          onOpen={() => setIsEnvelopeOpen(true)}
          onComplete={() => setShowEnvelope(false)}
        />
      )}

      {/* Main Content */}
      <AnimatePresence>
        {isEnvelopeOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.55, delay: 0.05, ease: "easeOut" }}
          >
          {isEnvelopeOpen ? <BackgroundMusic /> : null}
          <ScrollProgress />
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.12, ease: "easeOut" }}
          >
            <Navigation />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.18, ease: "easeOut" }}
          >
            <HeroSection />
          </motion.div>
          
          {/* Floral divider between hero and countdown */}
          <div className="bg-cream py-1 md:py-6">
            <FloralDividerAlt className="w-64 md:w-80 mx-auto" />
          </div>
          
          <CountdownSection />
          
          {/* Divider */}
          <div className="bg-ivory py-4 md:py-6">
            <DiamondDivider />
          </div>
          
          <WelcomeSection />
          
          <ProgrammeSection />
          
          {/* Divider */}
          <div className="bg-ivory py-1 md:py-4">
            <FloralDivider className="w-48 md:w-64 mx-auto" />
          </div>
          
          <MapSection />
          
          <FilmstripSection />
          
          {/* Divider */}
          <div className="bg-ivory py-1 md:py-4">
            <FloralDividerAlt className="w-64 md:w-80 mx-auto" />
          </div>
          
          <RsvpSection />
          
          <FooterSection />
        </motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  )
}
