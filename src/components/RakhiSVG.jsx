import React from 'react';

export default function RakhiSVG({ size = 320, isTied = false, className = "" }) {
  return (
    <svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 500 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`rakhi-svg ${className}`}
      style={{ overflow: 'visible' }}
    >
      <defs>
        {/* Glow Filters */}
        <filter id="rakhi-center-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <filter id="gold-shimmer" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#ffd700" floodOpacity="0.5" />
        </filter>

        {/* Gradients */}
        <linearGradient id="thread-red" x1="0" y1="180" x2="500" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#800020" />
          <stop offset="30%" stopColor="#e63946" />
          <stop offset="50%" stopColor="#ffd700" />
          <stop offset="70%" stopColor="#e63946" />
          <stop offset="100%" stopColor="#800020" />
        </linearGradient>

        <linearGradient id="thread-gold" x1="0" y1="180" x2="500" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#d48806" />
          <stop offset="50%" stopColor="#fff275" />
          <stop offset="100%" stopColor="#d48806" />
        </linearGradient>

        <linearGradient id="ruby-gem" x1="230" y1="160" x2="270" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff4b6e" />
          <stop offset="50%" stopColor="#c0003a" />
          <stop offset="100%" stopColor="#66001d" />
        </linearGradient>

        <radialGradient id="gold-radial" cx="250" cy="180" r="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="35%" stopColor="#ffe58f" />
          <stop offset="70%" stopColor="#ffd700" />
          <stop offset="95%" stopColor="#b8860b" />
          <stop offset="100%" stopColor="#7a5500" />
        </radialGradient>
      </defs>

      {/* Background Sacred Threads (Moli / Kalava) */}
      {/* Left String */}
      <path
        d="M 20 180 Q 120 170, 250 180"
        stroke="url(#thread-red)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M 20 183 Q 120 195, 250 180"
        stroke="url(#thread-gold)"
        strokeWidth="4"
        strokeDasharray="8 6"
        strokeLinecap="round"
      />
      {/* Left Bead clusters */}
      <circle cx="90" cy="177" r="7" fill="#ffffff" stroke="#ffd700" strokeWidth="1.5" />
      <circle cx="120" cy="178" r="9" fill="#ffd700" stroke="#b8860b" strokeWidth="1.5" />
      <circle cx="150" cy="179" r="6" fill="#e63946" />
      <circle cx="175" cy="180" r="10" fill="#ffd700" stroke="#d48806" strokeWidth="2" />

      {/* Right String */}
      <path
        d="M 250 180 Q 380 170, 480 180"
        stroke="url(#thread-red)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M 250 180 Q 380 195, 480 183"
        stroke="url(#thread-gold)"
        strokeWidth="4"
        strokeDasharray="8 6"
        strokeLinecap="round"
      />
      {/* Right Bead clusters */}
      <circle cx="325" cy="180" r="10" fill="#ffd700" stroke="#d48806" strokeWidth="2" />
      <circle cx="350" cy="179" r="6" fill="#e63946" />
      <circle cx="380" cy="178" r="9" fill="#ffd700" stroke="#b8860b" strokeWidth="1.5" />
      <circle cx="410" cy="177" r="7" fill="#ffffff" stroke="#ffd700" strokeWidth="1.5" />

      {/* Tassels / Latkan strings */}
      <path d="M 20 180 C 10 195, 5 210, 8 230" stroke="#e63946" strokeWidth="3" strokeLinecap="round" />
      <circle cx="8" cy="232" r="5" fill="#ffd700" />
      <path d="M 25 183 C 18 200, 15 220, 20 238" stroke="#ffd700" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="20" cy="240" r="4" fill="#e63946" />

      <path d="M 480 180 C 490 195, 495 210, 492 230" stroke="#e63946" strokeWidth="3" strokeLinecap="round" />
      <circle cx="492" cy="232" r="5" fill="#ffd700" />
      <path d="M 475 183 C 482 200, 485 220, 480 238" stroke="#ffd700" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="480" cy="240" r="4" fill="#e63946" />

      {/* ================= CENTER EMBELLISHMENT ================= */}

      {/* Outer Golden Aura Glow */}
      <circle cx="250" cy="180" r="85" fill="rgba(255, 215, 0, 0.15)" filter="url(#rakhi-center-glow)" />

      {/* Outer Golden Sunburst Petals (16 rays) */}
      <g filter="url(#gold-shimmer)">
        {[...Array(16)].map((_, i) => {
          const angle = (i * 360) / 16;
          return (
            <g key={`outer-ray-${i}`} transform={`rotate(${angle}, 250, 180)`}>
              <path
                d="M 250 100 L 254 125 L 250 135 L 246 125 Z"
                fill="url(#gold-radial)"
                stroke="#b8860b"
                strokeWidth="0.8"
              />
              <circle cx="250" cy="100" r="3" fill="#ffffff" />
            </g>
          );
        })}
      </g>

      {/* Middle Velvet Petal Ring (8 Petals) */}
      <g>
        {[...Array(8)].map((_, i) => {
          const angle = (i * 360) / 8 + 22.5;
          return (
            <g key={`middle-petal-${i}`} transform={`rotate(${angle}, 250, 180)`}>
              <path
                d="M 250 120 C 265 130, 268 150, 250 162 C 232 150, 235 130, 250 120 Z"
                fill="#ff2e93"
                stroke="#ffd700"
                strokeWidth="1.5"
              />
              <circle cx="250" cy="130" r="2.5" fill="#ffd700" />
            </g>
          );
        })}
      </g>

      {/* Middle Zardozi Gold Flower Layer */}
      <g>
        {[...Array(8)].map((_, i) => {
          const angle = (i * 360) / 8;
          return (
            <path
              key={`zardozi-${i}`}
              transform={`rotate(${angle}, 250, 180)`}
              d="M 250 135 C 260 145, 260 160, 250 168 C 240 160, 240 145, 250 135 Z"
              fill="url(#gold-radial)"
              stroke="#873800"
              strokeWidth="1"
            />
          );
        })}
      </g>

      {/* Pearl Ring (Moti Ring) */}
      <g>
        {[...Array(14)].map((_, i) => {
          const angle = (i * 360) / 14;
          const rad = (angle * Math.PI) / 180;
          const px = 250 + 36 * Math.cos(rad);
          const py = 180 + 36 * Math.sin(rad);
          return (
            <circle
              key={`pearl-${i}`}
              cx={px}
              cy={py}
              r="4"
              fill="#ffffff"
              stroke="#ffd700"
              strokeWidth="1"
              filter="drop-shadow(0 1px 2px rgba(0,0,0,0.3))"
            />
          );
        })}
      </g>

      {/* Inner Golden Beaded Frame */}
      <circle cx="250" cy="180" r="28" fill="#d48806" stroke="#ffffff" strokeWidth="1" />
      <circle cx="250" cy="180" r="24" fill="url(#gold-radial)" stroke="#ffd700" strokeWidth="2" />

      {/* Central Royal Ruby Faceted Gemstone */}
      <circle
        cx="250"
        cy="180"
        r="16"
        fill="url(#ruby-gem)"
        stroke="#ffd700"
        strokeWidth="2"
        filter="url(#rakhi-center-glow)"
      >
        <animate attributeName="r" values="15;17;15" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Gem Facet Highlights */}
      <path
        d="M 245 173 L 255 173 L 258 180 L 250 188 L 242 180 Z"
        fill="#ffffff"
        opacity="0.3"
      />
      <circle cx="246" cy="175" r="2.5" fill="#ffffff" opacity="0.85" />
    </svg>
  );
}
