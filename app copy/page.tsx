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
import { FloralDivider, FloralDividerAlt } from "@/components/floral-divider"
import { DiamondDivider } from "@/components/diamond-divider"

export default function WeddingInvitation() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false)

  return (
    <main className="relative">
      {/* Envelope Animation */}
      {!isEnvelopeOpen && (
        <EnvelopeAnimation onOpen={() => setIsEnvelopeOpen(true)} />
      )}

      {/* Main Content */}
      <AnimatePresence>
        {isEnvelopeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navigation />
            <HeroSection />
            
            {/* Floral divider between hero and countdown */}
            <div className="py-8 bg-cream">
              <FloralDividerAlt className="w-64 md:w-80 mx-auto" />
            </div>
            
            <CountdownSection />
            
            {/* Divider */}
            <div className="py-6 bg-ivory">
              <DiamondDivider />
            </div>
            
            <WelcomeSection />
            
            <ProgrammeSection />
            
            {/* Divider */}
            <div className="py-8 bg-ivory">
              <FloralDivider className="w-48 md:w-64 mx-auto" />
            </div>
            
            <MapSection />
            
            <FilmstripSection />
            
            {/* Divider */}
            <div className="py-8 bg-ivory">
              <FloralDividerAlt className="w-64 md:w-80 mx-auto" />
            </div>
            
            <RsvpSection />
            
            <FooterSection />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
