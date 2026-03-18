"use client"

import { useEffect, useRef, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"

const AUDIO_SRC = "/assets/music/background.mp3"
const MUSIC_VOLUME_PERCENT = 50

function clampVolumePercent(value: number) {
  return Math.min(100, Math.max(0, value))
}

export function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const normalizedVolume = clampVolumePercent(MUSIC_VOLUME_PERCENT) / 100
    audio.volume = normalizedVolume

    const tryPlay = async () => {
      try {
        await audio.play()
      } catch {
        const resumeOnGesture = () => {
          audio.play().catch(() => {})
          window.removeEventListener("pointerdown", resumeOnGesture)
          window.removeEventListener("keydown", resumeOnGesture)
        }

        window.addEventListener("pointerdown", resumeOnGesture)
        window.addEventListener("keydown", resumeOnGesture)
      }
    }

    tryPlay()
  }, [])

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return

    const nextMuted = !audio.muted
    audio.muted = nextMuted
    setIsMuted(nextMuted)
  }

  return (
    <>
      <audio ref={audioRef} src={AUDIO_SRC} loop preload="auto" aria-hidden="true" />
      <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? "Activer la musique" : "Couper la musique"}
        className="fixed bottom-4 right-4 z-[80] inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-ivory/95 text-gold shadow-md backdrop-blur-sm transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>
    </>
  )
}
