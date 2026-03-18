"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimate } from "framer-motion"
import { useLanguage } from "@/components/language-context"
import { FloatingPetals, GoldSparkles } from "@/components/floating-petals"
import { LanternDecoration, CandleDecoration } from "@/components/decorations"

interface EnvelopeAnimationProps {
  onOpen: () => void
  onComplete?: () => void
}

const STAMP_SRC = "/assets/images/stamp.png"

function Corner({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 84 84" aria-hidden="true" fill="none">
      <path d="M9 75C38 73 62 50 75 9M16 68C36 64 53 49 67 16M25 59C38 55 48 42 58 25" stroke="#C9A84C" strokeWidth="1.2" />
      <path d="M20 20c4-10 16-12 23-4 2-7 13-10 18-3 4 5 3 12-4 18-8 7-23 10-37 9 0-11 0-15 0-20z" fill="rgba(201, 168, 76, 0.16)" stroke="#C9A84C" strokeWidth="1.2" />
    </svg>
  )
}

function EnvelopeSurface() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[6px]" style={{ background: "#EFE8D8" }}>
      <svg className="absolute h-0 w-0" aria-hidden="true">
        <filter id="paper">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" result="noise" />
          <feColorMatrix type="saturate" values="0" in="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="multiply" />
        </filter>
        <filter id="paper-soft">
          <feTurbulence type="fractalNoise" baseFrequency="0.4" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      <div className="absolute inset-0" style={{ background: "#EFE8D8" }} />

      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(0 0, 100% 0, 50% 50%)",
          background: "#E0D5BE",
          boxShadow: "inset 0 -1px 4px rgba(100,70,20,0.12)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(0 100%, 100% 100%, 50% 50%)",
          background: "#E0D5BE",
          boxShadow: "inset 0 1px 4px rgba(100,70,20,0.12)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(0 0, 0 100%, 50% 50%)",
          background: "#F2EAD8",
          boxShadow: "inset -1px 0 4px rgba(100,70,20,0.1)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(100% 0, 100% 100%, 50% 50%)",
          background: "#F2EAD8",
          boxShadow: "inset 1px 0 4px rgba(100,70,20,0.1)",
        }}
      />

      <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 56" preserveAspectRatio="none" fill="none" aria-hidden="true">
        <path d="M0 0 L50 28" stroke="rgba(201,168,76,0.4)" strokeWidth="0.2" />
        <path d="M100 0 L50 28" stroke="rgba(201,168,76,0.4)" strokeWidth="0.2" />
        <path d="M0 56 L50 28" stroke="rgba(201,168,76,0.4)" strokeWidth="0.2" />
        <path d="M100 56 L50 28" stroke="rgba(201,168,76,0.4)" strokeWidth="0.2" />
      </svg>

      <div className="absolute inset-0 opacity-[0.15] mix-blend-multiply" style={{ filter: "url(#paper)" }} />
      <div className="absolute inset-0 opacity-[0.08] mix-blend-multiply" style={{ filter: "url(#paper-soft)" }} />

      <div className="absolute inset-0 shadow-[inset_0_0_8px_rgba(100,70,20,0.1)]" />

      <div className="pointer-events-none absolute inset-[6px] rounded-[2px] border-[1.5px] border-[rgba(201,168,76,0.5)]" />
      <div className="pointer-events-none absolute inset-[10px] rounded-[2px] border-[0.5px] border-[rgba(201,168,76,0.3)]" />

      <div data-border-ornaments className="pointer-events-none absolute inset-0">
        <Corner className="absolute left-2 top-2 h-[48px] w-[48px]" />
        <Corner className="absolute right-2 top-2 h-[48px] w-[48px] rotate-90" />
        <Corner className="absolute bottom-2 left-2 h-[48px] w-[48px] -rotate-90" />
        <Corner className="absolute bottom-2 right-2 h-[48px] w-[48px] rotate-180" />
      </div>
    </div>
  )
}

export function EnvelopeAnimation({ onOpen, onComplete }: EnvelopeAnimationProps) {
  const { t } = useLanguage()
  const [scope, animate] = useAnimate()
  const [opening, setOpening] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const timersRef = useRef<number[]>([])

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)")
    const update = () => setIsMobile(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    return () => {
      timersRef.current.forEach((id) => window.clearTimeout(id))
      timersRef.current = []
    }
  }, [])

  const handleOpen = async () => {
    if (opening) return
    setOpening(true)
    timersRef.current.push(window.setTimeout(() => onOpen(), 650))
    if (onComplete) timersRef.current.push(window.setTimeout(() => onComplete(), 1250))

    // STEP 1: Micro shake on wrapper (0.0s – 0.25s)
    animate("[data-flap-stamp-wrapper]", 
      { 
        x: [0, -2, 2, 0]
      }, 
      { duration: 0.35, delay: 0, ease: "easeInOut" }
    )

    // STEP 2: Stamp rips into two pieces (0.2s – 0.8s)
    animate(
      "[data-stamp-left]",
      { x: [0, -6, -70], rotate: [0, -6, -16], opacity: [1, 1, 0] },
      { duration: 0.85, delay: 0.25, ease: "easeInOut" }
    )
    animate(
      "[data-stamp-right]",
      { x: [0, 6, 70], rotate: [0, 6, 16], opacity: [1, 1, 0] },
      { duration: 0.85, delay: 0.25, ease: "easeInOut" }
    )
    // Flap rotates back from TOP center (stays anchored at top, bottom lifts with stamp)
    animate("[data-top-flap-element]", 
      { rotateX: [0, -150] }, 
      { duration: 0.85, delay: 0.25, ease: "easeInOut" }
    )
    // Everything fades smoothly (light revealing website) - faster to not interfere with content
    animate("[data-envelope-body]", 
      { opacity: [1, 0] }, 
      { duration: 0.65, delay: 0.32, ease: "easeIn" }
    )
    animate("[data-flap-stamp-wrapper]", 
      { opacity: [1, 0] }, 
      { duration: 0.65, delay: 0.32, ease: "easeIn" }
    )
    animate(
      "[data-open-light]",
      { opacity: [0, 0.95, 0], scale: [0.7, 1.45, 1.9] },
      { duration: 0.8, delay: 0.28, ease: "easeOut" }
    )
    animate(
      "[data-envelope-card]",
      { opacity: [1, 0], scale: [1, 1.02] },
      { duration: 0.7, delay: 0.35, ease: "easeIn" }
    )
  }

  return (
    <div ref={scope} className="fixed inset-0 z-[90] h-[100dvh] w-screen overflow-hidden bg-cream">
      {/* Background Decorations - Behind Everything */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-cream">
        <FloatingPetals />
        <GoldSparkles />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-[10%] left-[5%] w-[120px] h-[120px] opacity-40">
            <LanternDecoration />
          </div>
          <div className="absolute bottom-[15%] right-[8%] w-[100px] h-[160px] opacity-35">
            <CandleDecoration />
          </div>
        </div>
      </div>

      {/* Envelope and Stamp Layer */}
      <div className="absolute inset-0 z-10 flex items-center justify-center" style={{ perspective: `${isMobile ? 700 : 1100}px` }}>
        <div data-envelope-card className="relative" style={{ transformStyle: "preserve-3d", boxShadow: "0 2px 4px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.12), 0 20px 48px rgba(0,0,0,0.08)" }}>
          <div className="relative w-[min(85vw,720px)] max-[768px]:w-[92vw] aspect-[100/56]">
            {/* Envelope Body Layer */}
            <div data-envelope-body className="absolute inset-0">
              <EnvelopeSurface />
            </div>

            {/* Opening light burst */}
            <div
              data-open-light
              className="pointer-events-none absolute inset-0 z-[15] rounded-[6px]"
              style={{
                opacity: 0,
                transform: "scale(0.7)",
                background:
                  "radial-gradient(circle at 50% 60%, rgba(255,250,225,0.95) 0%, rgba(255,245,205,0.55) 24%, rgba(255,240,190,0.25) 44%, rgba(255,240,190,0) 72%)",
                mixBlendMode: "screen",
              }}
            />

            {/* Inner Glow Layer - REMOVED */}

            {/* Top Flap + Stamp Wrapper */}
            <div
              data-flap-stamp-wrapper
              className="absolute inset-0 z-[20]"
              style={{ perspective: "1200px" }}
            >
              {/* Top Flap (rotates back from TOP center) */}
              <motion.div
                data-top-flap-element
                className="pointer-events-none absolute inset-0"
                style={{
                  clipPath: "polygon(0 0, 100% 0, 50% 50%)",
                  background: "#E0D5BE",
                  transformOrigin: "top center",
                  transformStyle: "preserve-3d",
                }}>
                <div
                  className="absolute inset-0"
                  style={{
                    transform: "rotateX(180deg)",
                    transformOrigin: "top center",
                    background: "#D4C6A0",
                    clipPath: "polygon(0 0, 100% 0, 50% 50%)",
                  }}
                />
              </motion.div>

              {/* Stamp and Text */}
              <motion.div className="absolute left-1/2 top-1/2 z-[30] -translate-x-1/2 -translate-y-1/2 text-center">
                <motion.button
                  type="button"
                  onClick={handleOpen}
                  className="cursor-pointer"
                  style={{
                    background: "transparent",
                    border: "none",
                    boxShadow: "none",
                    outline: "none",
                    padding: 0,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div className="relative w-[155px] md:w-[210px]" style={{ aspectRatio: "1 / 1" }}>
                    <motion.img
                      data-stamp-left
                      src={STAMP_SRC}
                      alt="Sceau"
                      className="absolute inset-0 h-full w-full"
                      style={{
                        clipPath: "inset(0 50% 0 0)",
                        background: "transparent",
                        border: "none",
                        boxShadow: "none",
                        outline: "none",
                        display: "block",
                        height: "100%",
                        objectFit: "contain",
                        filter: "drop-shadow(0 0 10px #C9A84C)",
                        animation: "stampGlow 3s ease-in-out infinite",
                        transformOrigin: "right center",
                      }}
                    />
                    <motion.img
                      data-stamp-right
                      src={STAMP_SRC}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full"
                      style={{
                        clipPath: "inset(0 0 0 50%)",
                        background: "transparent",
                        border: "none",
                        boxShadow: "none",
                        outline: "none",
                        display: "block",
                        height: "100%",
                        objectFit: "contain",
                        filter: "drop-shadow(0 0 10px #C9A84C)",
                        animation: "stampGlow 3s ease-in-out infinite",
                        transformOrigin: "left center",
                      }}
                    />
                  </div>
                </motion.button>

                <motion.p
                  data-open-text
                  className="mt-[18px] font-serif italic text-[0.85rem] md:text-[0.95rem] tracking-[0.08em] text-[#C9A84C]"
                  style={{
                    textShadow: "0 0 8px rgba(201, 168, 76, 0.4)",
                    animation: "textBreath 2.5s ease-in-out infinite",
                  }}
                >
                  {t.envelope.clickToOpen}
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
