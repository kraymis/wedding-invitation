"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ScrollIndicatorProps {
  show: boolean
}

export function ScrollIndicator({ show }: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!show) return

    // Show indicator at 0.95s
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 950)

    // Hide indicator at 3.25s
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 3250)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [show])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed right-5 md:right-6 top-1/2 -translate-y-1/2 z-50 pointer-events-none"
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Vertical line */}
          <div className="w-px h-[60px] md:h-[40px] bg-[#C9A84C] mx-auto" />

          {/* Chevron down */}
          <svg
            className="w-4 h-4 mx-auto mt-2 text-[#C9A84C]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>

          {/* "Défiler" text - hidden on mobile */}
          <p className="hidden md:block text-[#C9A84C] text-[0.65rem] opacity-70 font-italic text-center mt-2 whitespace-nowrap"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontStyle: "italic",
              transform: "rotate(-90deg)",
              transformOrigin: "center",
              marginTop: "0.5rem",
              width: "60px",
              textAlign: "center",
            }}
          >
            Défiler
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
