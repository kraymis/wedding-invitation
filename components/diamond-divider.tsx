interface DiamondDividerProps {
  className?: string
}

export function DiamondDivider({ className = "" }: DiamondDividerProps) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <div className="flex-1 max-w-32 h-px bg-gradient-to-r from-transparent to-gold/50" />
      <div className="w-2 h-2 rotate-45 bg-gold" />
      <div className="flex-1 max-w-32 h-px bg-gradient-to-l from-transparent to-gold/50" />
    </div>
  )
}

export function OrnateRule({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 300 20" className="w-full max-w-md h-5" fill="none">
        {/* Left line */}
        <line x1="0" y1="10" x2="120" y2="10" stroke="url(#ruleGold)" strokeWidth="1" />
        
        {/* Center diamond ornament */}
        <path d="M140 10 L150 3 L160 10 L150 17 Z" fill="url(#ruleGold)" />
        <path d="M145 10 L150 6 L155 10 L150 14 Z" fill="none" stroke="url(#ruleGold)" strokeWidth="0.5" />
        
        {/* Small side diamonds */}
        <path d="M125 10 L130 7 L135 10 L130 13 Z" fill="url(#ruleGold)" opacity="0.6" />
        <path d="M165 10 L170 7 L175 10 L170 13 Z" fill="url(#ruleGold)" opacity="0.6" />
        
        {/* Right line */}
        <line x1="180" y1="10" x2="300" y2="10" stroke="url(#ruleGold)" strokeWidth="1" />
        
        <defs>
          <linearGradient id="ruleGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="30%" stopColor="#c9a84c" />
            <stop offset="50%" stopColor="#d4a574" />
            <stop offset="70%" stopColor="#c9a84c" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
