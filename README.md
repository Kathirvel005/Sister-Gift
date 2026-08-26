# FOR EVERY SISTER ❤️ — A Raksha Bandhan Experience

A premium, universal, cinematic interactive web experience celebrating the sacred and humorous bond of sisterhood for Raksha Bandhan.

> **100% Universal & Reusable**: Completely generic for ANY sister with **zero photo uploads, zero names required, and zero personal data**. Built entirely with vector SVGs, procedural Web Audio, HTML5 Canvas particles, and modern animations.

---

## 🌟 Key Features & Chapters

1. **Chapter 1: Cinematic Opening** — Atmospheric welcome screen with floating star dust, marigold petals, and glowing diya lamps.
2. **Chapter 2: What is a Sister?** — Animated kinetic storytelling revealing what makes sisters truly special.
3. **Chapter 3: The Sister Test 😂** — 6 universal, hilarious sibling quiz questions with instant playful reactions and celebratory fanfare.
4. **Chapter 4: Sister Superpowers ✨** — 8 interactive glassmorphism cards (Unlimited Love, Protective Mode, Snack Detector, Argument Champion, etc.) with 3D hover effects.
5. **Chapter 5: The Sister Bond Timeline** — "From Childhood to Forever" interactive journey through shared memories and growth.
6. **Chapter 6: Virtual Rakhi Ceremony 🎀** — Royal SVG Rakhi with floral zardozi, pearls, and sacred moli threads; interactive ceremony with tying animation around a decorative wrist and promise reveals.
7. **Chapter 7: Heartfelt Tribute 💌** — Cinematic emotional letter honoring every sister.
8. **Chapter 8: "Catch the Hearts" Mini-Game 🎮** — Interactive festive game where players catch 10 falling sparkling hearts to unlock the surprise.
9. **Chapter 9: Grand Surprise 🎁** — Dramatic 3-2-1 countdown into the grand "FOR EVERY SISTER ❤️" reveal.
10. **Chapter 10: Grand Finale Celebration 🎉** — Interactive canvas fireworks, confetti storms, audio controls, and an instant greeting card copy/share button.

---

## 🚀 1. How to Install

Ensure you have **Node.js (version 18 or higher)** installed on your machine.

1. Open your terminal in the project directory:
   ```bash
   cd "d:/Project work/Rakshabndhan/commn"
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

---

## 💻 2. How to Run Locally

Start the Vite development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🎨 3. How to Change Colors & Themes

All theme tokens are neatly defined as CSS variables in `src/styles.css`:

```css
:root {
  /* Festive Backgrounds */
  --bg-primary: #0e051e;
  --bg-secondary: #1a0b33;

  /* Royal Indian Gold */
  --gold-400: #ffd700;
  --gold-500: #f5b041;
  --gold-gradient: linear-gradient(135deg, #ffe58f 0%, #ffd700 50%, #d48806 100%);

  /* Sunset Pink & Magenta */
  --pink-400: #ff758c;
  --pink-500: #ff2e93;
  --pink-gradient: linear-gradient(135deg, #ff758c 0%, #ff2e93 50%, #c0005a 100%);

  /* Sacred Crimson */
  --crimson-500: #e63946;
}
```

Simply tweak any of these variables in `src/styles.css` to customize the festive ambiance!

---

## 🎵 4. How to Replace Background Music

The website comes with a **built-in procedural Web Audio synthesizer** that creates soothing Indian ambient Raag flute/drone music and game sound effects out-of-the-box with **no audio files needed**.

If you wish to use your own custom soundtrack (e.g., an Indian classical instrumental track):
1. Place an MP3 file named `rakhi_theme.mp3` inside `public/audio/`.
2. Path: `public/audio/rakhi_theme.mp3`.
3. The application will automatically stream your MP3 file when the user taps **"MUSIC ON"**!

---

## 📦 5. How to Build the Production Version

To compile optimized static assets for production:

```bash
npm run build
```

The output will be generated inside the `dist/` directory.

To preview the built production bundle locally:
```bash
npm run preview
```

---

## 🌐 6. How to Deploy

The built `dist/` folder is 100% static and can be deployed for free on any modern host:

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` and follow the prompts.

### Deploy to Netlify
1. Drag and drop the `dist/` folder directly into [Netlify Drop](https://app.netlify.com/drop), or connect your Git repository with build command `npm run build` and publish directory `dist`.

### Deploy to GitHub Pages
1. Install `gh-pages`: `npm install -D gh-pages`
2. Add `"base": "./"` to `vite.config.js`.
3. Run `npm run build` and push the `dist/` branch to GitHub Pages.

---

## 📱 Accessibility & Responsive Support

- **Mobile First**: Optimized touch interactions, large tap targets, and no horizontal scroll on all screen sizes.
- **Respects Motion Preferences**: Supports `prefers-reduced-motion` for reduced animation intensity.
- **Audio Autoplay Safety**: No unexpected audio plays until the user explicitly clicks the audio toggle or begins the journey.

---

Crafted with ❤️ for every sister in the world.
