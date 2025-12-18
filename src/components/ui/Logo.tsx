interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'full' | 'icon'
}

export function Logo({ className = '', size = 'md', variant = 'full' }: LogoProps) {
  const sizes = {
    sm: { icon: 32, text: 'text-lg' },
    md: { icon: 40, text: 'text-xl' },
    lg: { icon: 56, text: 'text-3xl' },
  }

  const iconSize = sizes[size].icon
  const textSize = sizes[size].text

  const CherryIcon = () => (
    <svg
      width={iconSize}
      height={iconSize}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {/* Stem */}
      <path
        d="M32 8C32 8 28 16 24 20C20 24 16 26 16 26"
        stroke="#5C4A33"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M32 8C32 8 36 16 40 20C44 24 48 26 48 26"
        stroke="#5C4A33"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Leaf */}
      <ellipse
        cx="32"
        cy="10"
        rx="6"
        ry="4"
        fill="#30A8BC"
        transform="rotate(-20 32 10)"
      />
      <path
        d="M29 9C32 8 35 10 35 10"
        stroke="#1D8A9C"
        strokeWidth="1"
        strokeLinecap="round"
      />

      {/* Left Cherry */}
      <circle cx="20" cy="40" r="14" fill="#E63950" />
      <circle cx="20" cy="40" r="14" fill="url(#cherryGradientLeft)" />
      {/* Cherry shine */}
      <ellipse cx="15" cy="35" rx="4" ry="3" fill="white" opacity="0.4" />
      <circle cx="14" cy="34" r="2" fill="white" opacity="0.6" />

      {/* Right Cherry */}
      <circle cx="44" cy="40" r="14" fill="#E63950" />
      <circle cx="44" cy="40" r="14" fill="url(#cherryGradientRight)" />
      {/* Cherry shine */}
      <ellipse cx="39" cy="35" rx="4" ry="3" fill="white" opacity="0.4" />
      <circle cx="38" cy="34" r="2" fill="white" opacity="0.6" />

      {/* Wave underneath - the "bay" */}
      <path
        d="M6 54C10 50 14 52 18 52C22 52 26 48 32 48C38 48 42 52 46 52C50 52 54 50 58 54"
        stroke="#30A8BC"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M2 58C6 54 10 56 14 56C18 56 22 52 28 52C34 52 38 56 42 56C46 56 50 54 54 54C58 54 62 58 62 58"
        stroke="#60C8D8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Gradients */}
      <defs>
        <radialGradient id="cherryGradientLeft" cx="0.3" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="#FF7080" />
          <stop offset="100%" stopColor="#CC2D42" />
        </radialGradient>
        <radialGradient id="cherryGradientRight" cx="0.3" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="#FF7080" />
          <stop offset="100%" stopColor="#CC2D42" />
        </radialGradient>
      </defs>
    </svg>
  )

  if (variant === 'icon') {
    return (
      <div className={className}>
        <CherryIcon />
      </div>
    )
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <CherryIcon />
      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-semibold tracking-tight ${textSize}`}
          style={{ color: '#E63950' }}
        >
          Cherry
        </span>
        <span
          className={`font-display font-medium tracking-wide ${textSize}`}
          style={{ color: '#30A8BC' }}
        >
          Bay
        </span>
      </div>
    </div>
  )
}

// Alternative playful logo with bouncy cherries
export function LogoPlayful({ className = '', size = 'md' }: Omit<LogoProps, 'variant'>) {
  const sizes = {
    sm: { width: 120, height: 48 },
    md: { width: 160, height: 64 },
    lg: { width: 220, height: 88 },
  }

  return (
    <svg
      width={sizes[size].width}
      height={sizes[size].height}
      viewBox="0 0 220 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cherries */}
      {/* Stem */}
      <path
        d="M28 12C28 12 24 22 20 26C16 30 12 32 12 32"
        stroke="#5C4A33"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M28 12C28 12 32 22 36 26C40 30 44 32 44 32"
        stroke="#5C4A33"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Leaf */}
      <ellipse
        cx="30"
        cy="12"
        rx="8"
        ry="5"
        fill="#30A8BC"
        transform="rotate(-15 30 12)"
      />

      {/* Left Cherry with happy face */}
      <circle cx="16" cy="48" r="16" fill="url(#playfulCherryLeft)" />
      <ellipse cx="11" cy="43" rx="4" ry="3" fill="white" opacity="0.5" />
      {/* Cute eyes */}
      <circle cx="12" cy="46" r="2" fill="#2D2926" />
      <circle cx="20" cy="46" r="2" fill="#2D2926" />
      <circle cx="12.5" cy="45.5" r="0.8" fill="white" />
      <circle cx="20.5" cy="45.5" r="0.8" fill="white" />
      {/* Smile */}
      <path d="M11 52C13 55 19 55 21 52" stroke="#2D2926" strokeWidth="1.5" strokeLinecap="round" />
      {/* Blush */}
      <ellipse cx="8" cy="51" rx="2.5" ry="1.5" fill="#FF9999" opacity="0.6" />
      <ellipse cx="24" cy="51" rx="2.5" ry="1.5" fill="#FF9999" opacity="0.6" />

      {/* Right Cherry with wink */}
      <circle cx="44" cy="48" r="16" fill="url(#playfulCherryRight)" />
      <ellipse cx="39" cy="43" rx="4" ry="3" fill="white" opacity="0.5" />
      {/* Cute eyes - one winking */}
      <circle cx="40" cy="46" r="2" fill="#2D2926" />
      <circle cx="40.5" cy="45.5" r="0.8" fill="white" />
      <path d="M46 46C48 46 50 46 50 46" stroke="#2D2926" strokeWidth="2" strokeLinecap="round" />
      {/* Smile */}
      <path d="M39 52C41 55 47 55 49 52" stroke="#2D2926" strokeWidth="1.5" strokeLinecap="round" />
      {/* Blush */}
      <ellipse cx="36" cy="51" rx="2.5" ry="1.5" fill="#FF9999" opacity="0.6" />
      <ellipse cx="52" cy="51" rx="2.5" ry="1.5" fill="#FF9999" opacity="0.6" />

      {/* Text: Cherry */}
      <text
        x="68"
        y="42"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="32"
        fontWeight="600"
        fill="#E63950"
      >
        Cherry
      </text>

      {/* Text: Bay */}
      <text
        x="68"
        y="70"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="32"
        fontWeight="500"
        fill="#30A8BC"
      >
        Bay
      </text>

      {/* Small wave accent */}
      <path
        d="M68 78C72 74 78 76 84 76C90 76 96 72 102 72C108 72 114 76 120 76C126 76 130 74 134 74"
        stroke="#60C8D8"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <defs>
        <radialGradient id="playfulCherryLeft" cx="0.3" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="#FF7080" />
          <stop offset="100%" stopColor="#E63950" />
        </radialGradient>
        <radialGradient id="playfulCherryRight" cx="0.3" cy="0.3" r="0.7">
          <stop offset="0%" stopColor="#FF7080" />
          <stop offset="100%" stopColor="#E63950" />
        </radialGradient>
      </defs>
    </svg>
  )
}

// Simple inline logo for header
export function LogoInline({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Mini cherry icon */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Stem */}
        <path
          d="M18 4C18 4 15 9 13 11C11 13 9 14 9 14"
          stroke="#5C4A33"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M18 4C18 4 21 9 23 11C25 13 27 14 27 14"
          stroke="#5C4A33"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Leaf */}
        <ellipse
          cx="18"
          cy="5"
          rx="4"
          ry="2.5"
          fill="#30A8BC"
          transform="rotate(-15 18 5)"
        />

        {/* Left Cherry */}
        <circle cx="11" cy="22" r="8" fill="url(#inlineCherryLeft)" />
        <ellipse cx="9" cy="19" rx="2" ry="1.5" fill="white" opacity="0.5" />

        {/* Right Cherry */}
        <circle cx="25" cy="22" r="8" fill="url(#inlineCherryRight)" />
        <ellipse cx="23" cy="19" rx="2" ry="1.5" fill="white" opacity="0.5" />

        {/* Wave */}
        <path
          d="M3 32C5 30 8 31 11 31C14 31 17 29 18 29C19 29 22 31 25 31C28 31 31 30 33 32"
          stroke="#30A8BC"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <defs>
          <radialGradient id="inlineCherryLeft" cx="0.3" cy="0.3" r="0.7">
            <stop offset="0%" stopColor="#FF7080" />
            <stop offset="100%" stopColor="#E63950" />
          </radialGradient>
          <radialGradient id="inlineCherryRight" cx="0.3" cy="0.3" r="0.7">
            <stop offset="0%" stopColor="#FF7080" />
            <stop offset="100%" stopColor="#E63950" />
          </radialGradient>
        </defs>
      </svg>

      {/* Text */}
      <span className="font-display text-2xl font-semibold">
        <span style={{ color: '#E63950' }}>Cherry </span>
        <span style={{ color: '#30A8BC' }}>Bay</span>
      </span>
    </div>
  )
}
