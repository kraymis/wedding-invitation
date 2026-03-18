export function FloralDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 30"
      fill="none"
      className={className}
    >
      {/* Left branch */}
      <path
        d="M0 15 Q 30 15, 50 12 Q 70 10, 85 15"
        stroke="currentColor"
        strokeWidth="1"
        className="text-gold"
      />
      <path
        d="M30 12 Q 35 5, 45 8"
        stroke="currentColor"
        strokeWidth="0.8"
        className="text-gold/70"
      />
      <path
        d="M55 10 Q 60 3, 70 7"
        stroke="currentColor"
        strokeWidth="0.8"
        className="text-gold/70"
      />
      
      {/* Center flourish */}
      <circle cx="100" cy="15" r="6" className="fill-gold" />
      <circle cx="100" cy="15" r="4" className="fill-ivory" />
      <circle cx="100" cy="15" r="2" className="fill-gold" />
      
      {/* Right branch (mirrored) */}
      <path
        d="M200 15 Q 170 15, 150 12 Q 130 10, 115 15"
        stroke="currentColor"
        strokeWidth="1"
        className="text-gold"
      />
      <path
        d="M170 12 Q 165 5, 155 8"
        stroke="currentColor"
        strokeWidth="0.8"
        className="text-gold/70"
      />
      <path
        d="M145 10 Q 140 3, 130 7"
        stroke="currentColor"
        strokeWidth="0.8"
        className="text-gold/70"
      />
      
      {/* Small decorative dots */}
      <circle cx="40" cy="10" r="1.5" className="fill-gold/50" />
      <circle cx="65" cy="7" r="1" className="fill-gold/40" />
      <circle cx="160" cy="10" r="1.5" className="fill-gold/50" />
      <circle cx="135" cy="7" r="1" className="fill-gold/40" />
    </svg>
  )
}

export function FloralDividerAlt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 40"
      fill="none"
      className={className}
    >
      {/* Left rose/peony */}
      <g transform="translate(30, 20)">
        <circle cx="0" cy="0" r="8" className="fill-rose/30" />
        <circle cx="0" cy="0" r="5" className="fill-rose/50" />
        <circle cx="0" cy="0" r="2" className="fill-gold" />
        {/* Petals */}
        <ellipse cx="-6" cy="-3" rx="4" ry="2" className="fill-rose/40" transform="rotate(-30)" />
        <ellipse cx="6" cy="-3" rx="4" ry="2" className="fill-rose/40" transform="rotate(30)" />
        <ellipse cx="-5" cy="4" rx="4" ry="2" className="fill-rose/30" transform="rotate(-60)" />
        <ellipse cx="5" cy="4" rx="4" ry="2" className="fill-rose/30" transform="rotate(60)" />
      </g>

      {/* Left eucalyptus sprig */}
      <path d="M50 20 Q 70 15, 90 18 Q 110 22, 130 20" stroke="url(#goldGrad)" strokeWidth="1" fill="none" />
      <ellipse cx="60" cy="16" rx="6" ry="3" className="fill-gold/20" transform="rotate(-20 60 16)" />
      <ellipse cx="75" cy="14" rx="5" ry="2.5" className="fill-gold/25" transform="rotate(-15 75 14)" />
      <ellipse cx="90" cy="16" rx="6" ry="3" className="fill-gold/20" transform="rotate(-10 90 16)" />
      <ellipse cx="105" cy="18" rx="5" ry="2.5" className="fill-gold/25" transform="rotate(-5 105 18)" />
      <ellipse cx="120" cy="19" rx="6" ry="3" className="fill-gold/20" transform="rotate(0 120 19)" />
      
      {/* Center element */}
      <g transform="translate(150, 20)">
        <path d="M-12 0 L0 -8 L12 0 L0 8 Z" className="fill-gold" />
        <circle cx="0" cy="0" r="4" className="fill-ivory" />
        <circle cx="0" cy="0" r="2" className="fill-gold" />
      </g>

      {/* Right eucalyptus sprig */}
      <path d="M170 20 Q 190 18, 210 22 Q 230 15, 250 20" stroke="url(#goldGrad)" strokeWidth="1" fill="none" />
      <ellipse cx="180" cy="19" rx="6" ry="3" className="fill-gold/20" transform="rotate(0 180 19)" />
      <ellipse cx="195" cy="18" rx="5" ry="2.5" className="fill-gold/25" transform="rotate(5 195 18)" />
      <ellipse cx="210" cy="20" rx="6" ry="3" className="fill-gold/20" transform="rotate(10 210 20)" />
      <ellipse cx="225" cy="17" rx="5" ry="2.5" className="fill-gold/25" transform="rotate(15 225 17)" />
      <ellipse cx="240" cy="18" rx="6" ry="3" className="fill-gold/20" transform="rotate(20 240 18)" />

      {/* Right rose/peony */}
      <g transform="translate(270, 20)">
        <circle cx="0" cy="0" r="8" className="fill-rose/30" />
        <circle cx="0" cy="0" r="5" className="fill-rose/50" />
        <circle cx="0" cy="0" r="2" className="fill-gold" />
        <ellipse cx="-6" cy="-3" rx="4" ry="2" className="fill-rose/40" transform="rotate(-30)" />
        <ellipse cx="6" cy="-3" rx="4" ry="2" className="fill-rose/40" transform="rotate(30)" />
        <ellipse cx="-5" cy="4" rx="4" ry="2" className="fill-rose/30" transform="rotate(-60)" />
        <ellipse cx="5" cy="4" rx="4" ry="2" className="fill-rose/30" transform="rotate(60)" />
      </g>
      
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#c9a84c" />
          <stop offset="100%" stopColor="#c9a84c" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function RoseDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 50"
      fill="none"
      className={className}
    >
      {/* Left line */}
      <line x1="0" y1="25" x2="70" y2="25" stroke="url(#roseLine)" strokeWidth="1" />
      
      {/* Center rose */}
      <g transform="translate(100, 25)">
        {/* Outer petals */}
        <ellipse cx="-12" cy="0" rx="8" ry="5" className="fill-rose/30" transform="rotate(-30 -12 0)" />
        <ellipse cx="12" cy="0" rx="8" ry="5" className="fill-rose/30" transform="rotate(30 12 0)" />
        <ellipse cx="0" cy="-10" rx="8" ry="5" className="fill-rose/35" transform="rotate(0 0 -10)" />
        <ellipse cx="-8" cy="8" rx="7" ry="4" className="fill-rose/25" transform="rotate(-60 -8 8)" />
        <ellipse cx="8" cy="8" rx="7" ry="4" className="fill-rose/25" transform="rotate(60 8 8)" />
        {/* Inner petals */}
        <circle cx="0" cy="0" r="10" className="fill-rose/40" />
        <circle cx="0" cy="0" r="6" className="fill-rose/60" />
        <circle cx="0" cy="0" r="3" className="fill-gold" />
      </g>
      
      {/* Small leaves */}
      <ellipse cx="75" cy="22" rx="8" ry="4" className="fill-gold/30" transform="rotate(-20 75 22)" />
      <ellipse cx="125" cy="22" rx="8" ry="4" className="fill-gold/30" transform="rotate(20 125 22)" />
      
      {/* Right line */}
      <line x1="130" y1="25" x2="200" y2="25" stroke="url(#roseLine)" strokeWidth="1" />
      
      <defs>
        <linearGradient id="roseLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="#c9a84c" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  )
}
