import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Heart, RefreshCw, Award } from 'lucide-react';
import RakhiSVG from '../components/RakhiSVG';
import { SISTER_PROMISES } from '../data/sisterData';
import { audioSystem } from '../utils/audioSystem';
import { triggerFestiveConfetti, triggerHeartConfetti } from '../utils/confettiHelper';

export default function Section6VirtualRakhi({ onNext }) {
  const [isTied, setIsTied] = useState(false);
  const [isTyingAnimation, setIsTyingAnimation] = useState(false);

  const handleTieRakhi = () => {
    setIsTyingAnimation(true);
    audioSystem.playSparkle();

    setTimeout(() => {
      setIsTyingAnimation(false);
      setIsTied(true);
      audioSystem.playRakhiTied();
      triggerFestiveConfetti();
      triggerHeartConfetti();
    }, 1200);
  };

  const handleReset = () => {
    audioSystem.playClick();
    setIsTied(false);
  };

  return (
    <section className="section-wrapper">
      <div className="section-content" style={{ maxWidth: '860px' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-tag"
        >
          <span>CHAPTER 05</span>
          <span>•</span>
          <span>THE SACRED THREAD</span>
        </motion.div>

        <h2 className="section-title">
          A THREAD THAT MEANS <span className="text-gold">EVERYTHING ❤️</span>
        </h2>
        <p className="section-subtitle">
          Bound by love, blessed with protection, and tied forever in heart.
        </p>

        {/* Rakhi Presentation Box */}
        <div
          className="glass-card"
          style={{
            padding: '40px 24px',
            position: 'relative',
            marginBottom: '36px',
            border: isTied ? '2px solid #ffd700' : '1px solid var(--glass-border)',
            boxShadow: isTied
              ? '0 20px 60px rgba(0,0,0,0.7), 0 0 35px rgba(255, 215, 0, 0.4)'
              : 'var(--glass-shadow)'
          }}
        >
          {/* Decorative Wrist Illustration Background */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '460px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '260px'
            }}
          >
            {/* Traditional Wrist Band Graphic Container */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {/* Wrist Silhouette SVG */}
              <svg
                width="340"
                height="100"
                viewBox="0 0 340 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  opacity: 0.85,
                  zIndex: 1
                }}
              >
                <defs>
                  <linearGradient id="wristSkin" x1="0" y1="50" x2="340" y2="50" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#8d5524" />
                    <stop offset="25%" stopColor="#c68642" />
                    <stop offset="50%" stopColor="#e0ac69" />
                    <stop offset="75%" stopColor="#c68642" />
                    <stop offset="100%" stopColor="#8d5524" />
                  </linearGradient>
                </defs>
                {/* Arm / Wrist Form */}
                <rect x="10" y="20" width="320" height="60" rx="30" fill="url(#wristSkin)" />
                {/* Traditional Mehendi / Henna Dots */}
                <circle cx="80" cy="50" r="3" fill="#602010" />
                <circle cx="100" cy="40" r="2.5" fill="#602010" />
                <circle cx="100" cy="60" r="2.5" fill="#602010" />
                <circle cx="240" cy="40" r="2.5" fill="#602010" />
                <circle cx="240" cy="60" r="2.5" fill="#602010" />
                <circle cx="260" cy="50" r="3" fill="#602010" />
              </svg>

              {/* Rakhi SVG on top of wrist */}
              <motion.div
                animate={
                  isTyingAnimation
                    ? { scale: [1, 1.25, 0.95, 1.05, 1], rotate: [0, -5, 5, 0] }
                    : isTied
                    ? { scale: [1, 1.03, 1], filter: 'drop-shadow(0 0 24px #ffd700)' }
                    : { y: [0, -6, 0] }
                }
                transition={{
                  duration: isTyingAnimation ? 1.2 : 3,
                  repeat: isTied ? Infinity : Infinity,
                  repeatType: 'reverse'
                }}
                style={{ zIndex: 2, position: 'relative' }}
              >
                <RakhiSVG size={window.innerWidth < 480 ? 280 : 340} isTied={isTied} />
              </motion.div>
            </div>

            {/* Glowing Aura Ring when tied */}
            {isTied && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1.2 }}
                transition={{ duration: 0.8 }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255, 215, 0, 0.25) 0%, transparent 70%)',
                  pointerEvents: 'none',
                  zIndex: 0
                }}
              />
            )}
          </div>

          {/* Interactive Status / Promises Reveal */}
          <div style={{ marginTop: '24px' }}>
            <AnimatePresence mode="wait">
              {!isTied ? (
                <motion.div
                  key="untied"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <button
                    onClick={handleTieRakhi}
                    disabled={isTyingAnimation}
                    className="btn-festive animate-pulse-glow"
                    style={{ fontSize: '1.2rem', padding: '16px 40px' }}
                  >
                    <Sparkles size={22} />
                    <span>{isTyingAnimation ? 'Tying Sacred Rakhi… 🎀' : 'TIE THE RAKHI'}</span>
                    <Heart size={22} fill="#12072b" />
                  </button>
                  <p style={{ marginTop: '12px', fontSize: '0.9rem', color: 'var(--cream-muted)' }}>
                    Tap to tie the eternal thread of sisterhood
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="tied"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className="glass-pill"
                    style={{
                      fontSize: '1.3rem',
                      padding: '8px 24px',
                      marginBottom: '12px',
                      background: 'rgba(255, 215, 0, 0.15)',
                      borderColor: '#ffd700'
                    }}
                  >
                    <span>RAKHI TIED ❤️</span>
                  </div>

                  {/* Brother's Raksha Bandhan Greeting */}
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{
                      marginBottom: '20px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.2rem, 3.5vw, 1.65rem)',
                        color: '#ffd700',
                        fontWeight: 800,
                        textShadow: '0 0 16px rgba(255, 215, 0, 0.5)'
                      }}
                    >
                      Happy Raksha Bandhan Sisters! 🌸
                    </h3>
                    <span
                      style={{
                        fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
                        color: '#ff758c',
                        fontWeight: 700,
                        letterSpacing: '0.3px'
                      }}
                    >
                      — By your Lovely brother Kathirvel ❤️
                    </span>
                  </motion.div>

                  {/* Promises List */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      fontSize: '1.15rem',
                      fontWeight: 600,
                      maxWidth: '480px',
                      margin: '0 auto 24px'
                    }}
                  >
                    {SISTER_PROMISES.map((promise, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.15 }}
                        style={{
                          color: i === 0 ? '#ffd700' : 'var(--cream-100)',
                          fontFamily: i === 0 ? 'var(--font-display)' : 'var(--font-body)'
                        }}
                      >
                        {promise}
                      </motion.p>
                    ))}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
                    <button onClick={handleReset} className="btn-festive btn-festive-secondary">
                      <RefreshCw size={18} />
                      <span>Tie Again</span>
                    </button>
                    <button onClick={onNext} className="btn-festive">
                      <span>Unbox Brother's Gifts 🎁</span>
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Subtle hint */}
        {!isTied && (
          <button onClick={onNext} className="btn-festive btn-festive-secondary" style={{ marginTop: '12px' }}>
            <span>Skip to Gifts 🎁</span>
            <ArrowRight size={18} />
          </button>
        )}
      </div>
    </section>
  );
}
