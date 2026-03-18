"use client"

import { motion } from "framer-motion"

const confettiPieces = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  x: Math.random() * 100 - 50,
  initialY: -20,
  delay: Math.random() * 0.5,
  duration: 2 + Math.random() * 2,
  rotation: Math.random() * 720 - 360,
  color: [
    "#c9a84c", // gold
    "#d4a574", // light gold
    "#f5ede4", // ivory
    "#d4a5a5", // dusty rose
    "#b8956a", // dark gold
  ][Math.floor(Math.random() * 5)],
  size: 6 + Math.random() * 8,
  shape: ["circle", "square", "triangle"][Math.floor(Math.random() * 3)],
}))

export function ConfettiExplosion() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {confettiPieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute left-1/2"
          style={{
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.shape !== "triangle" ? piece.color : "transparent",
            borderRadius: piece.shape === "circle" ? "50%" : piece.shape === "square" ? "2px" : "0",
            borderLeft: piece.shape === "triangle" ? `${piece.size / 2}px solid transparent` : undefined,
            borderRight: piece.shape === "triangle" ? `${piece.size / 2}px solid transparent` : undefined,
            borderBottom: piece.shape === "triangle" ? `${piece.size}px solid ${piece.color}` : undefined,
          }}
          initial={{
            x: 0,
            y: piece.initialY,
            opacity: 1,
            rotate: 0,
            scale: 0,
          }}
          animate={{
            x: piece.x * 3,
            y: 300,
            opacity: [1, 1, 0],
            rotate: piece.rotation,
            scale: [0, 1, 1],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}
