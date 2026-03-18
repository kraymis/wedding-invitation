"use client"

import { motion } from "framer-motion"

const petals = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  initialX: Math.random() * 100,
  initialY: -10 - Math.random() * 20,
  delay: Math.random() * 10,
  duration: 15 + Math.random() * 10,
  size: 8 + Math.random() * 12,
  rotation: Math.random() * 360,
}))

export function FloatingPetals() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.initialX}%`,
            top: `${petal.initialY}%`,
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.sin(petal.id) * 100, Math.sin(petal.id + 1) * -50, 0],
            rotate: [petal.rotation, petal.rotation + 360],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.5}
            viewBox="0 0 20 30"
            fill="none"
          >
            <path
              d="M10 0 C15 8, 20 15, 15 25 C12 30, 8 30, 5 25 C0 15, 5 8, 10 0"
              fill="rgba(201, 168, 76, 0.2)"
              stroke="rgba(201, 168, 76, 0.3)"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>
      ))}
      {/* Rose petals */}
      {petals.slice(0, 8).map((petal) => (
        <motion.div
          key={`rose-${petal.id}`}
          className="absolute"
          style={{
            left: `${(petal.initialX + 30) % 100}%`,
            top: `${petal.initialY}%`,
          }}
          animate={{
            y: ["0vh", "110vh"],
            x: [0, Math.cos(petal.id) * 80, Math.cos(petal.id + 2) * -40, 0],
            rotate: [petal.rotation, petal.rotation - 360],
          }}
          transition={{
            duration: petal.duration + 5,
            delay: petal.delay + 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg
            width={petal.size * 0.8}
            height={petal.size}
            viewBox="0 0 16 20"
            fill="none"
          >
            <ellipse
              cx="8"
              cy="10"
              rx="7"
              ry="9"
              fill="rgba(212, 165, 165, 0.25)"
              stroke="rgba(212, 165, 165, 0.35)"
              strokeWidth="0.5"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

// Gold sparkle particles
export function GoldSparkles() {
  const sparkles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 3,
    size: 2 + Math.random() * 4,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full bg-gold"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
