import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';
import { SISTER_TIMELINE } from '../data/sisterData';

export default function Section5Timeline({ onNext }) {
  return (
    <section className="section-wrapper">
      <div className="section-content" style={{ maxWidth: '840px' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-tag"
        >
          <span>CHAPTER 04</span>
          <span>•</span>
          <span>THE JOURNEY</span>
        </motion.div>

        <h2 className="section-title">
          FROM CHILDHOOD <span className="text-pink">TO FOREVER</span>
        </h2>
        <p className="section-subtitle">
          A timeless timeline of memories, laughter, and unbreakable unity.
        </p>

        {/* Timeline Container */}
        <div style={{ position: 'relative', margin: '40px auto', padding: '10px 0' }}>
          {/* Vertical Connecting Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '50%',
              width: '3px',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(to bottom, #ffd700, #ff2e93, #b388ff, #ffd700)',
              borderRadius: '2px',
              opacity: 0.6
            }}
          />

          {/* Timeline Nodes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {SISTER_TIMELINE.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isEven ? -30 : 30, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isEven ? 'flex-start' : 'flex-end',
                    position: 'relative',
                    width: '100%'
                  }}
                >
                  {/* Center Node Indicator */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: item.color,
                      border: '4px solid #0e051e',
                      boxShadow: `0 0 16px ${item.color}`,
                      zIndex: 2
                    }}
                  />

                  {/* Content Card */}
                  <div
                    className="glass-card timeline-card"
                    style={{
                      width: 'calc(50% - 32px)',
                      padding: '20px 22px',
                      textAlign: isEven ? 'right' : 'left',
                      borderLeft: isEven ? '1px solid var(--glass-border)' : `3px solid ${item.color}`,
                      borderRight: isEven ? `3px solid ${item.color}` : '1px solid var(--glass-border)',
                      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)'
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.2rem',
                        fontWeight: 800,
                        color: item.color,
                        marginBottom: '6px'
                      }}
                    >
                      {item.stage}
                    </div>
                    <h4
                      style={{
                        fontSize: '1rem',
                        color: 'var(--cream-100)',
                        fontWeight: 600,
                        marginBottom: '8px'
                      }}
                    >
                      {item.title}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.88rem',
                        color: 'var(--cream-muted)',
                        lineHeight: 1.5
                      }}
                    >
                      {item.quote}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Ending Poetic Reflection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card"
          style={{
            padding: '36px 24px',
            margin: '40px auto 32px',
            border: '1px solid rgba(255, 215, 0, 0.35)',
            background: 'linear-gradient(135deg, rgba(35, 15, 70, 0.8), rgba(20, 7, 40, 0.9))'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', fontWeight: 600 }}>
            <p style={{ color: 'var(--cream-muted)' }}>Life changes.</p>
            <p style={{ color: 'var(--cream-muted)' }}>People grow.</p>
            <p style={{ color: 'var(--cream-muted)' }}>Distances happen.</p>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)',
                color: '#ffd700',
                fontWeight: 900,
                marginTop: '6px'
              }}
            >
              “But the bond remains.”
            </p>
          </div>
        </motion.div>

        {/* Continue Button */}
        <div>
          <button onClick={onNext} className="btn-festive">
            <span>Proceed To Virtual Rakhi</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-card {
            width: calc(100% - 48px) !important;
            margin-left: 48px !important;
            text-align: left !important;
            border-left: 3px solid #ffd700 !important;
            border-right: 1px solid var(--glass-border) !important;
          }
          .section-wrapper div[style*="left: 50%"] {
            left: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
