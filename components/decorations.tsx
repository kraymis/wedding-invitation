export function LanternDecoration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 100" fill="none" className={className}>
      {/* Hook/chain */}
      <path
        d="M30 0 L30 15"
        stroke="url(#lanternGold)"
        strokeWidth="2"
      />
      <circle cx="30" cy="12" r="3" fill="none" stroke="url(#lanternGold)" strokeWidth="1.5" />
      
      {/* Top cap */}
      <path
        d="M20 20 L40 20 L38 28 L22 28 Z"
        fill="url(#lanternGold)"
      />
      
      {/* Main lantern body */}
      <rect x="18" y="28" width="24" height="50" rx="2" fill="none" stroke="url(#lanternGold)" strokeWidth="1.5" />
      
      {/* Glass panels */}
      <rect x="20" y="30" width="20" height="46" rx="1" fill="rgba(255, 220, 150, 0.2)" />
      
      {/* Vertical bars */}
      <line x1="30" y1="28" x2="30" y2="78" stroke="url(#lanternGold)" strokeWidth="1" />
      
      {/* Cross bars */}
      <line x1="18" y1="45" x2="42" y2="45" stroke="url(#lanternGold)" strokeWidth="1" />
      <line x1="18" y1="62" x2="42" y2="62" stroke="url(#lanternGold)" strokeWidth="1" />
      
      {/* Bottom cap */}
      <path
        d="M22 78 L38 78 L40 85 L20 85 Z"
        fill="url(#lanternGold)"
      />
      
      {/* Bottom finial */}
      <path
        d="M28 85 L32 85 L30 95 Z"
        fill="url(#lanternGold)"
      />
      
      {/* Flame/glow */}
      <ellipse cx="30" cy="55" rx="6" ry="10" fill="rgba(255, 200, 100, 0.3)" />
      <ellipse cx="30" cy="55" rx="3" ry="6" fill="rgba(255, 180, 50, 0.4)" />
      
      <defs>
        <linearGradient id="lanternGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4a574" />
          <stop offset="50%" stopColor="#c9a84c" />
          <stop offset="100%" stopColor="#8b7355" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function CandleDecoration({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 80" fill="none" className={className}>
      {/* Candle holder base */}
      <ellipse cx="20" cy="75" rx="15" ry="4" fill="url(#candleGold)" />
      <ellipse cx="20" cy="72" rx="12" ry="3" fill="url(#candleGold)" />
      
      {/* Stem */}
      <rect x="17" y="55" width="6" height="17" fill="url(#candleGold)" />
      
      {/* Holder cup */}
      <path
        d="M12 55 Q12 48, 20 48 Q28 48, 28 55 L28 56 L12 56 Z"
        fill="url(#candleGold)"
      />
      
      {/* Candle */}
      <rect x="15" y="25" width="10" height="25" rx="1" fill="#f5f0e8" stroke="url(#candleGold)" strokeWidth="0.5" />
      
      {/* Wick */}
      <line x1="20" y1="20" x2="20" y2="25" stroke="#4a3728" strokeWidth="1" />
      
      {/* Flame */}
      <path
        d="M20 5 Q25 12, 22 18 Q20 20, 18 18 Q15 12, 20 5"
        fill="url(#flameGradient)"
      />
      
      {/* Flame glow */}
      <ellipse cx="20" cy="15" rx="8" ry="12" fill="rgba(255, 200, 100, 0.2)" />
      
      <defs>
        <linearGradient id="candleGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4a574" />
          <stop offset="50%" stopColor="#c9a84c" />
          <stop offset="100%" stopColor="#8b7355" />
        </linearGradient>
        <linearGradient id="flameGradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#fff8e0" />
          <stop offset="30%" stopColor="#ffd54f" />
          <stop offset="70%" stopColor="#ff9800" />
          <stop offset="100%" stopColor="#e65100" />
        </linearGradient>
      </defs>
    </svg>
  )
}
