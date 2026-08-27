import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';
import DiyaSVG from '../components/DiyaSVG';
import { EMOTIONAL_MESSAGE_LINES } from '../data/sisterData';

export default function Section7EmotionalMessage({ onNext }) {
  return (
    <section className="section-wrapper">
      <div className="section-content" style={{ maxWidth: '820px' }}>
        {/* Section Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-tag"
        >
          <span>CHAPTER 07</span>
          <span>•</span>
          <span>FROM THE HEART</span>
        </motion.div>

        <h2 className="section-title">
          AN EMOTIONAL <span className="text-pink">TRIBUTE</span>
        </h2>
        <p className="section-subtitle">
          Words that often remain unsaid, but are always felt.
        </p>

        {/* Letter Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card"
          style={{
            padding: '48px 32px',
            marginBottom: '40px',
            position: 'relative',
            border: '1px solid rgba(255, 215, 0, 0.3)',
            background: 'radial-gradient(circle at 50% 30%, rgba(45, 18, 85, 0.8) 0%, rgba(20, 8, 42, 0.95) 100%)'
          }}
        >
          {/* Diya at Top Center */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
            <DiyaSVG size={48} />
          </div>

          {/* Emotional Lines Reveal */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', textAlign: 'center' }}>
            {EMOTIONAL_MESSAGE_LINES.map((line, idx) => {
              const isFirst = idx === 0;
              const isLast = idx === EMOTIONAL_MESSAGE_LINES.length - 1;
              const isHighlight = line.includes('matters') || line.includes('priceless');

              return (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  style={{
                    fontFamily: isFirst ? 'var(--font-script)' : isLast ? 'var(--font-display)' : 'var(--font-body)',
                    fontSize: isFirst
                      ? 'clamp(2rem, 4.5vw, 2.8rem)'
                      : isLast
                      ? 'clamp(1.6rem, 4vw, 2.4rem)'
                      : isHighlight
                      ? 'clamp(1.2rem, 3vw, 1.45rem)'
                      : 'clamp(1.05rem, 2.5vw, 1.25rem)',
                    color: isLast ? '#ffd700' : isHighlight ? '#fff9f2' : 'var(--cream-muted)',
                    fontWeight: isLast ? 900 : isHighlight ? 700 : 400,
                    letterSpacing: isLast ? '0.5px' : 'normal',
                    lineHeight: 1.5
                  }}
                >
                  {line}
                </motion.p>
              );
            })}
          </div>

          {/* Brother's Signature */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ marginTop: '28px', textAlign: 'center' }}
          >
            <p style={{ fontFamily: 'var(--font-script)', fontSize: 'clamp(1.8rem, 4.5vw, 2.5rem)', color: '#ffd700', marginBottom: '4px' }}>
              With endless love & protection,
            </p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.15rem, 3.2vw, 1.55rem)', fontWeight: 800, color: '#ffffff', letterSpacing: '0.5px' }}>
              — Your Lovely brother Kathirvel ❤️
            </p>
          </motion.div>

          {/* Decorative Divider */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '28px'
            }}
          >
            <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #ffd700)' }} />
            <Heart size={20} fill="#ff2e93" color="#ff2e93" />
            <span style={{ color: '#ffd700', fontSize: '1.2rem' }}>🌸</span>
            <Heart size={20} fill="#ffd700" color="#ffd700" />
            <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, #ffd700, transparent)' }} />
          </div>
        </motion.div>

        {/* CTA to Mini Game */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <button onClick={onNext} className="btn-festive">
            <span>Play The Festive Mini-Game</span>
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
