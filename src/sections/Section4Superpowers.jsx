import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Check } from 'lucide-react';
import { SISTER_SUPERPOWERS } from '../data/sisterData';
import { audioSystem } from '../utils/audioSystem';
import { triggerFestiveConfetti } from '../utils/confettiHelper';

export default function Section4Superpowers({ onNext }) {
  const [activeCards, setActiveCards] = useState({});

  const toggleCard = (id) => {
    audioSystem.playSparkle();
    setActiveCards((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      // If 5 or more activated, trigger a mini confetti burst
      const count = Object.values(next).filter(Boolean).length;
      if (count === 4 || count === 8) {
        triggerFestiveConfetti();
      }
      return next;
    });
  };

  const activatedCount = Object.values(activeCards).filter(Boolean).length;

  return (
    <section className="section-wrapper">
      <div className="section-content" style={{ maxWidth: '1080px' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-tag"
        >
          <span>CHAPTER 03</span>
          <span>•</span>
          <span>SPECIAL ABILITIES</span>
        </motion.div>

        <h2 className="section-title">
          EVERY SISTER HAS <span className="text-gold">SUPERPOWERS ✨</span>
        </h2>
        <p className="section-subtitle">
          Tap on any superpower to test its power level ({activatedCount}/8 Activated)
        </p>

        {/* Superpower Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginBottom: '40px'
          }}
        >
          {SISTER_SUPERPOWERS.map((power, idx) => {
            const isActivated = !!activeCards[power.id];
            return (
              <motion.div
                key={power.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => toggleCard(power.id)}
                className="glass-card"
                style={{
                  padding: '24px 20px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  border: isActivated
                    ? `2px solid ${power.color}`
                    : '1px solid rgba(255, 215, 0, 0.18)',
                  background: isActivated
                    ? 'rgba(40, 18, 75, 0.9)'
                    : 'var(--glass-bg)',
                  boxShadow: isActivated
                    ? `0 12px 30px rgba(0,0,0,0.6), 0 0 20px ${power.color}40`
                    : 'var(--glass-shadow)',
                  position: 'relative'
                }}
              >
                {/* Header of card */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span
                    style={{
                      fontSize: '2.4rem',
                      filter: isActivated ? 'drop-shadow(0 0 12px rgba(255, 215, 0, 0.8))' : 'none',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {power.icon}
                  </span>

                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      background: isActivated ? power.color : 'rgba(255, 255, 255, 0.1)',
                      color: isActivated ? '#fff' : 'var(--cream-muted)',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {power.badge}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: isActivated ? '#ffd700' : 'var(--cream-100)',
                    marginBottom: '8px'
                  }}
                >
                  {power.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--cream-muted)',
                    lineHeight: 1.5,
                    marginBottom: '16px'
                  }}
                >
                  {power.desc}
                </p>

                {/* Activation Status Bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '10px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    fontSize: '0.8rem',
                    color: isActivated ? power.color : 'rgba(255, 255, 255, 0.4)',
                    fontWeight: 600
                  }}
                >
                  <span>{isActivated ? 'POWER: 100%' : 'Tap to Activate'}</span>
                  {isActivated ? <Zap size={14} fill={power.color} /> : <Sparkles size={14} />}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Continue Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button onClick={onNext} className="btn-festive">
            <span>Explore The Sister Timeline</span>
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
