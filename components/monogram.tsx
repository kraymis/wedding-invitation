interface MonogramProps {
  size?: "sm" | "md" | "lg"
  className?: string
  label?: string
}

const sizeMap = {
  sm: "w-16 h-16 text-base",
  md: "w-20 h-20 text-2xl",
  lg: "w-28 h-28 text-3xl",
}

export function Monogram({ size = "md", className = "", label = "O & W" }: MonogramProps) {
  return (
    <div className={`relative mx-auto ${className}`}>
      <div className={`${sizeMap[size]} rounded-full border-2 border-gold flex items-center justify-center bg-ivory/50`}>
        <span className="font-serif text-gold font-semibold whitespace-nowrap leading-none">{label}</span>
      </div>
      {/* Decorative ring */}
      <div 
        className={`absolute inset-0 rounded-full border border-gold/30`}
        style={{ transform: "scale(1.15)" }}
      />
    </div>
  )
}

export function MonogramBadge({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      className={className}
    >
      {/* Outer decorative ring */}
      <circle cx="40" cy="40" r="38" stroke="url(#badgeGold)" strokeWidth="1" fill="none" />
      <circle cx="40" cy="40" r="35" stroke="url(#badgeGold)" strokeWidth="0.5" fill="none" opacity="0.5" />
      
      {/* Inner circle */}
      <circle cx="40" cy="40" r="28" fill="none" stroke="url(#badgeGold)" strokeWidth="1.5" />
      
      {/* Flourish decorations */}
      <path d="M15 40 Q20 35, 25 40" stroke="url(#badgeGold)" strokeWidth="1" fill="none" />
      <path d="M55 40 Q60 45, 65 40" stroke="url(#badgeGold)" strokeWidth="1" fill="none" />
      <path d="M40 15 Q45 20, 40 25" stroke="url(#badgeGold)" strokeWidth="1" fill="none" />
      <path d="M40 55 Q35 60, 40 65" stroke="url(#badgeGold)" strokeWidth="1" fill="none" />
      
      {/* Small dots */}
      <circle cx="20" cy="40" r="1.5" fill="url(#badgeGold)" />
      <circle cx="60" cy="40" r="1.5" fill="url(#badgeGold)" />
      <circle cx="40" cy="20" r="1.5" fill="url(#badgeGold)" />
      <circle cx="40" cy="60" r="1.5" fill="url(#badgeGold)" />
      
      {/* Text */}
      <text
        x="40"
        y="45"
        textAnchor="middle"
        fill="url(#badgeGold)"
        fontSize="16"
        fontFamily="serif"
        fontWeight="600"
      >
        O&amp;W
      </text>
      
      <defs>
        <linearGradient id="badgeGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4a574" />
          <stop offset="50%" stopColor="#c9a84c" />
          <stop offset="100%" stopColor="#b8956a" />
        </linearGradient>
      </defs>
    </svg>
  )
}
