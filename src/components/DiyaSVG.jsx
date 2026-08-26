import React from 'react';

export default function DiyaSVG({ size = 48, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`diya-svg ${className}`}
      style={{ overflow: 'visible' }}
    >
      <defs>
        {/* Glow Filters */}
        <filter id="flame-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        
        {/* Flame Gradient */}
        <linearGradient id="flame-grad" x1="50" y1="5" x2="50" y2="45" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="25%" stopColor="#ffe600" />
          <stop offset="70%" stopColor="#ff4500" />
          <stop offset="100%" stopColor="#c70039" />
        </linearGradient>

        {/* Diya Clay/Brass Gradient */}
        <linearGradient id="brass-grad" x1="20" y1="45" x2="80" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffe58f" />
          <stop offset="40%" stopColor="#ffd700" />
          <stop offset="80%" stopColor="#d48806" />
          <stop offset="100%" stopColor="#873800" />
        </linearGradient>

        {/* Oil Sheen */}
        <linearGradient id="oil-grad" x1="30" y1="48" x2="70" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ff7a00" />
          <stop offset="100%" stopColor="#ffae00" />
        </linearGradient>
      </defs>

      {/* Outer Flame Glow Halo */}
      <circle cx="50" cy="24" r="22" fill="rgba(255, 215, 0, 0.25)" filter="url(#flame-glow)">
        <animate attributeName="r" values="20;25;20" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Animated Flame */}
      <path
        d="M 50 8 C 42 22, 38 32, 50 42 C 62 32, 58 22, 50 8 Z"
        fill="url(#flame-grad)"
        filter="url(#flame-glow)"
      >
        <animate
          attributeName="d"
          values="
            M 50 8 C 42 22, 38 32, 50 42 C 62 32, 58 22, 50 8 Z;
            M 50 5 C 40 20, 36 34, 50 42 C 64 30, 60 18, 50 5 Z;
            M 50 8 C 44 24, 40 32, 50 42 C 60 34, 56 20, 50 8 Z;
            M 50 8 C 42 22, 38 32, 50 42 C 62 32, 58 22, 50 8 Z
          "
          dur="1.6s"
          repeatCount="indefinite"
        />
      </path>

      {/* Inner White Flame Core */}
      <path
        d="M 50 18 C 46 26, 44 32, 50 38 C 56 32, 54 26, 50 18 Z"
        fill="#ffffff"
        opacity="0.9"
      >
        <animate
          attributeName="d"
          values="
            M 50 18 C 46 26, 44 32, 50 38 C 56 32, 54 26, 50 18 Z;
            M 50 16 C 45 25, 43 33, 50 38 C 57 31, 55 24, 50 16 Z;
            M 50 18 C 46 26, 44 32, 50 38 C 56 32, 54 26, 50 18 Z
          "
          dur="1.2s"
          repeatCount="indefinite"
        />
      </path>

      {/* Diya Base / Oil Pot */}
      <path
        d="M 16 48 C 16 75, 40 85, 50 85 C 60 85, 84 75, 84 48 C 72 54, 28 54, 16 48 Z"
        fill="url(#brass-grad)"
        stroke="#ffd700"
        strokeWidth="1.5"
      />

      {/* Oil Surface */}
      <ellipse cx="50" cy="50" rx="30" ry="6" fill="url(#oil-grad)" opacity="0.8" />

      {/* Decorative Traditional Base Ring */}
      <path
        d="M 32 85 C 32 90, 42 92, 50 92 C 58 92, 68 90, 68 85 Z"
        fill="#b87333"
        stroke="#ffd700"
        strokeWidth="1"
      />

      {/* Gold Dot Accents */}
      <circle cx="28" cy="58" r="2.5" fill="#ffffff" opacity="0.8" />
      <circle cx="50" cy="68" r="3" fill="#ffffff" opacity="0.9" />
      <circle cx="72" cy="58" r="2.5" fill="#ffffff" opacity="0.8" />
    </svg>
  );
}
