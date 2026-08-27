import React from 'react';

// 1. Magical Flying Broom Illustration
export function BroomSVG({ size = 200 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 10px 20px rgba(255, 215, 0, 0.35))' }}
    >
      {/* Background Soft Glow */}
      <circle cx="100" cy="100" r="85" fill="radial-gradient(circle, rgba(255, 215, 0, 0.2) 0%, transparent 70%)" />

      {/* Speed & Sparkle Stars */}
      <text x="30" y="50" fontSize="18" fill="#ffd700">✨</text>
      <text x="160" y="60" fontSize="18" fill="#ffd700">✨</text>
      <text x="145" y="150" fontSize="16" fill="#ff758c">💨</text>
      <text x="25" y="140" fontSize="16" fill="#ffd700">⭐</text>

      {/* Long Wooden / Golden Handle */}
      <g transform="rotate(-38 100 100)">
        {/* Handle Shaft */}
        <rect x="94" y="15" width="12" height="120" rx="6" fill="url(#broomHandle)" stroke="#d48806" strokeWidth="1.5" />
        {/* Top Gold Cap */}
        <circle cx="100" cy="18" r="8" fill="#ffd700" stroke="#b87700" strokeWidth="2" />
        <circle cx="100" cy="18" r="4" fill="#ffffff" />

        {/* Festive Red Rakhi Ribbon Bow on Handle */}
        <rect x="90" y="80" width="20" height="8" rx="4" fill="#ff2e93" />
        <circle cx="100" cy="84" r="5" fill="#ffd700" />
        <path d="M96 84 C85 75, 80 95, 96 88 Z" fill="#ff2e93" />
        <path d="M104 84 C115 75, 120 95, 104 88 Z" fill="#ff2e93" />

        {/* Broom Straw Bristles */}
        <path
          d="M85 130 C70 170, 60 185, 55 190 C80 195, 120 195, 145 190 C140 185, 130 170, 115 130 Z"
          fill="url(#strawGrad)"
          stroke="#b87700"
          strokeWidth="2"
        />
        {/* Straw Details Lines */}
        <line x1="75" y1="140" x2="65" y2="188" stroke="#8d5524" strokeWidth="1.5" strokeDasharray="3 2" />
        <line x1="90" y1="135" x2="85" y2="192" stroke="#8d5524" strokeWidth="1.5" />
        <line x1="100" y1="135" x2="100" y2="194" stroke="#8d5524" strokeWidth="1.5" />
        <line x1="110" y1="135" x2="115" y2="192" stroke="#8d5524" strokeWidth="1.5" />
        <line x1="125" y1="140" x2="135" y2="188" stroke="#8d5524" strokeWidth="1.5" strokeDasharray="3 2" />

        {/* Binding Rings */}
        <rect x="83" y="132" width="34" height="6" rx="3" fill="#ff2e93" stroke="#b8004f" strokeWidth="1" />
        <rect x="80" y="142" width="40" height="5" rx="2.5" fill="#ffd700" stroke="#b87700" strokeWidth="1" />
      </g>

      {/* Gradients */}
      <defs>
        <linearGradient id="broomHandle" x1="94" y1="15" x2="106" y2="135" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffe58f" />
          <stop offset="40%" stopColor="#ffd700" />
          <stop offset="100%" stopColor="#c68642" />
        </linearGradient>
        <linearGradient id="strawGrad" x1="100" y1="130" x2="100" y2="195" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffe082" />
          <stop offset="50%" stopColor="#ffd54f" />
          <stop offset="100%" stopColor="#ffb300" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 2. High-Tech Washing Brush & Dish Scrubber Illustration
export function WashingBrushSVG({ size = 200 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 10px 20px rgba(0, 210, 211, 0.35))' }}
    >
      {/* Background Soft Glow */}
      <circle cx="100" cy="100" r="85" fill="radial-gradient(circle, rgba(0, 210, 211, 0.2) 0%, transparent 70%)" />

      {/* Soap Bubbles */}
      <circle cx="45" cy="65" r="14" fill="rgba(255, 255, 255, 0.5)" stroke="#00d2d3" strokeWidth="2" />
      <circle cx="41" cy="61" r="4" fill="#ffffff" />
      <circle cx="160" cy="50" r="18" fill="rgba(255, 255, 255, 0.45)" stroke="#54a0ff" strokeWidth="2" />
      <circle cx="155" cy="45" r="5" fill="#ffffff" />
      <circle cx="150" cy="140" r="12" fill="rgba(255, 255, 255, 0.4)" stroke="#00d2d3" strokeWidth="1.5" />
      <text x="30" y="145" fontSize="20" fill="#ffd700">🫧</text>
      <text x="135" y="85" fontSize="16" fill="#ffd700">✨</text>

      {/* Modern Ergonomic Washing Brush */}
      <g transform="rotate(25 100 100)">
        {/* Brush Handle */}
        <path
          d="M90 20 C90 10, 110 10, 110 20 L112 110 C112 115, 88 115, 88 110 Z"
          fill="url(#brushHandleGrad)"
          stroke="#0097e6"
          strokeWidth="2"
        />
        {/* Handle Grip Ribs */}
        <rect x="91" y="40" width="18" height="4" rx="2" fill="#ffffff" opacity="0.6" />
        <rect x="91" y="52" width="18" height="4" rx="2" fill="#ffffff" opacity="0.6" />
        <rect x="91" y="64" width="18" height="4" rx="2" fill="#ffffff" opacity="0.6" />

        {/* Brush Head Base */}
        <path
          d="M75 110 C75 105, 125 105, 125 110 L132 135 C132 140, 68 140, 68 135 Z"
          fill="#00a8ff"
          stroke="#0077b6"
          strokeWidth="2"
        />

        {/* Scrubbing Bristles */}
        <g fill="#00d2d3" stroke="#0097e6" strokeWidth="1">
          {/* Bristle rows */}
          <rect x="70" y="140" width="8" height="35" rx="3" />
          <rect x="80" y="140" width="8" height="40" rx="3" />
          <rect x="90" y="140" width="8" height="44" rx="3" />
          <rect x="100" y="140" width="8" height="44" rx="3" />
          <rect x="110" y="140" width="8" height="40" rx="3" />
          <rect x="120" y="140" width="8" height="35" rx="3" />
        </g>
        {/* Yellow Sponge Layer Attached */}
        <rect x="68" y="136" width="64" height="8" rx="2" fill="#ffd700" stroke="#f39c12" strokeWidth="1" />
      </g>

      <defs>
        <linearGradient id="brushHandleGrad" x1="90" y1="20" x2="110" y2="110" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#48dbfb" />
          <stop offset="50%" stopColor="#0abde3" />
          <stop offset="100%" stopColor="#10ac84" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 3. Chef Cooking Vessel / Kadai / Pan Illustration
export function CookingVesselSVG({ size = 200 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 10px 24px rgba(255, 107, 107, 0.4))' }}
    >
      {/* Background Soft Glow */}
      <circle cx="100" cy="110" r="85" fill="radial-gradient(circle, rgba(255, 107, 107, 0.2) 0%, transparent 70%)" />

      {/* Steam Hearts & Aroma */}
      <path d="M75 55 C70 45, 80 35, 75 25" stroke="#ff758c" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 2" />
      <path d="M100 50 C95 38, 105 28, 100 16" stroke="#ffd700" strokeWidth="3" strokeLinecap="round" />
      <path d="M125 55 C120 45, 130 35, 125 25" stroke="#ff758c" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="4 2" />
      <text x="92" y="32" fontSize="16" fill="#ff2e93">❤️</text>
      <text x="35" y="55" fontSize="18" fill="#ffd700">👩‍🍳</text>
      <text x="148" y="55" fontSize="18" fill="#ffd700">🔥</text>

      {/* Left Handle */}
      <path
        d="M32 98 C20 98, 15 118, 36 122"
        fill="none"
        stroke="#ffd700"
        strokeWidth="6"
        strokeLinecap="round"
      />
      {/* Right Handle */}
      <path
        d="M168 98 C180 98, 185 118, 164 122"
        fill="none"
        stroke="#ffd700"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Cooking Kadai / Vessel Body */}
      <path
        d="M35 100 C35 155, 165 155, 165 100 Z"
        fill="url(#kadaiGrad)"
        stroke="#ffd700"
        strokeWidth="3.5"
      />

      {/* Rim of Kadai */}
      <ellipse cx="100" cy="100" rx="65" ry="14" fill="#2d3436" stroke="#ffd700" strokeWidth="2.5" />
      {/* Interior Delicious Maggie / Stew Glowing Gold */}
      <ellipse cx="100" cy="102" rx="55" ry="10" fill="url(#foodGrad)" />

      {/* Golden Base Stand */}
      <path d="M70 148 C70 156, 130 156, 130 148 Z" fill="#ffd700" />

      {/* Front Golden Chef Crest */}
      <circle cx="100" cy="128" r="10" fill="#ffd700" stroke="#d48806" strokeWidth="1.5" />
      <text x="94" y="133" fontSize="11" fill="#12072b">👑</text>

      <defs>
        <linearGradient id="kadaiGrad" x1="100" y1="100" x2="100" y2="155" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3d1e6d" />
          <stop offset="60%" stopColor="#1a0b33" />
          <stop offset="100%" stopColor="#0a0317" />
        </linearGradient>
        <linearGradient id="foodGrad" x1="50" y1="100" x2="150" y2="105" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f39c12" />
          <stop offset="50%" stopColor="#f1c40f" />
          <stop offset="100%" stopColor="#e67e22" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 4. Deluxe Royal Bathroom Cleaning Kit Illustration (Grand Finale Prank Gift)
export function BathroomKitSVG({ size = 220 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 12px 28px rgba(116, 185, 255, 0.45))' }}
    >
      {/* Background Royal Aura */}
      <circle cx="110" cy="110" r="95" fill="radial-gradient(circle, rgba(116, 185, 255, 0.25) 0%, transparent 70%)" />

      {/* Sparkles & Bubbles */}
      <text x="25" y="45" fontSize="20" fill="#ffd700">✨</text>
      <text x="175" y="45" fontSize="20" fill="#ffd700">✨</text>
      <text x="180" y="170" fontSize="22" fill="#ffd700">👑</text>
      <text x="18" y="165" fontSize="18" fill="#ffd700">🧼</text>
      <circle cx="40" cy="90" r="10" fill="rgba(255, 255, 255, 0.5)" stroke="#0984e3" strokeWidth="1.5" />
      <circle cx="170" cy="110" r="14" fill="rgba(255, 255, 255, 0.4)" stroke="#00cec9" strokeWidth="2" />

      {/* Left Item: HARPY Royal Toilet Cleaner Bottle */}
      <g transform="translate(45, 45)">
        {/* Bottle Angled Nozzle */}
        <path d="M22 25 C22 15, 35 10, 42 12 L44 20 C38 18, 30 22, 30 28 Z" fill="#e74c3c" stroke="#c0392b" strokeWidth="1.5" />
        {/* Cap */}
        <rect x="36" y="8" width="12" height="10" rx="3" fill="#ffd700" stroke="#d48806" strokeWidth="1" />

        {/* Bottle Body */}
        <path
          d="M18 35 C18 28, 32 26, 32 26 L42 28 C42 28, 56 30, 56 38 L54 110 C54 118, 16 118, 16 110 Z"
          fill="url(#harpyGrad)"
          stroke="#0984e3"
          strokeWidth="2.5"
        />
        {/* Bottle Label */}
        <rect x="22" y="55" width="28" height="38" rx="4" fill="#ffffff" stroke="#ffd700" strokeWidth="1.5" />
        <text x="25" y="70" fontSize="8" fontWeight="bold" fill="#0984e3">HARPY</text>
        <text x="24" y="80" fontSize="6" fontWeight="bold" fill="#e74c3c">10X CLEAN</text>
        <text x="29" y="90" fontSize="9" fill="#f1c40f">🚽</text>
      </g>

      {/* Right Item: Long Toilet Scrubber Brush in Royal Caddy */}
      <g transform="translate(115, 35)">
        {/* Long Chrome Handle */}
        <rect x="22" y="10" width="8" height="75" rx="4" fill="url(#chromeGrad)" stroke="#b2bec3" strokeWidth="1.5" />
        <circle cx="26" cy="12" r="6" fill="#ffd700" stroke="#d48806" strokeWidth="1.5" />

        {/* Brush Bristles inside Holder */}
        <circle cx="26" cy="90" r="16" fill="#00cec9" stroke="#00b894" strokeWidth="1.5" />

        {/* Holder Caddy Pot */}
        <path
          d="M10 85 C10 80, 42 80, 42 85 L40 125 C40 130, 12 130, 12 125 Z"
          fill="url(#holderGrad)"
          stroke="#ffd700"
          strokeWidth="2"
        />
        <ellipse cx="26" cy="85" rx="16" ry="6" fill="#2d3436" stroke="#ffd700" strokeWidth="1.5" />
      </g>

      {/* Front Item: Bright Pink Sibling Rubber Gloves */}
      <g transform="translate(72, 125)">
        {/* Left Glove */}
        <path
          d="M10 35 C5 25, 0 10, 12 5 C22 0, 25 15, 25 25 L35 22 C38 20, 44 26, 40 32 L36 40 C42 45, 38 52, 28 55 L10 52 Z"
          fill="url(#gloveGrad)"
          stroke="#e84393"
          strokeWidth="2"
        />
        {/* Glove Cuff Ribbon */}
        <rect x="8" y="48" width="22" height="6" rx="2" fill="#ffd700" stroke="#d48806" strokeWidth="1" />
      </g>

      <defs>
        <linearGradient id="harpyGrad" x1="16" y1="30" x2="56" y2="115" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0984e3" />
          <stop offset="50%" stopColor="#2980b9" />
          <stop offset="100%" stopColor="#1e3799" />
        </linearGradient>
        <linearGradient id="chromeGrad" x1="22" y1="10" x2="30" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#dfe6e9" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#b2bec3" />
        </linearGradient>
        <linearGradient id="holderGrad" x1="10" y1="85" x2="42" y2="130" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6c5ce7" />
          <stop offset="100%" stopColor="#341f97" />
        </linearGradient>
        <linearGradient id="gloveGrad" x1="0" y1="5" x2="40" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fd79a8" />
          <stop offset="50%" stopColor="#e84393" />
          <stop offset="100%" stopColor="#d63031" />
        </linearGradient>
      </defs>
    </svg>
  );
}
