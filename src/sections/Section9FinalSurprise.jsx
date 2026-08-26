import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';
import DiyaSVG from '../components/DiyaSVG';
import { audioSystem } from '../utils/audioSystem';
import { triggerFestiveConfetti, triggerHeartConfetti } from '../utils/confettiHelper';

export default function Section9FinalSurprise({ onNext }) {
  // Phase: 0 = "WAIT...", 1 = "ONE LAST THING...", 2 = "3", 3 = "2", 4 = "1", 5 = Grand Reveal
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    let timer;
    if (phase === 0) {
      timer = setTimeout(() => {
        setPhase(1);
        audioSystem.playClick();
      }, 1800);
    } else if (phase === 1) {
      timer = setTimeout(() => {
        setPhase(2);
        audioSystem.playClick();
      }, 1800);
    } else if (phase === 2) {
      timer = setTimeout(() => {
        setPhase(3);
        audioSystem.playClick();
      }, 1000);
    } else if (phase === 3) {
      timer = setTimeout(() => {
        setPhase(4);
        audioSystem.playClick();
      }, 1000);
    } else if (phase === 4) {
      timer = setTimeout(() => {
        setPhase(5);
        audioSystem.playCelebrationFanfare();
        triggerFestiveConfetti();
        triggerHeartConfetti();
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [phase]);

  const handleSkipToReveal = () => {
    setPhase(5);
    audioSystem.playCelebrationFanfare();
    triggerFestiveConfetti();
  };

  return (
    <section className="section-wrapper" style={{ minHeight: '100vh', justifyContent: 'center' }}>
      <div className="section-content" style={{ maxWidth: '880px' }}>
        <AnimatePresence mode="wait">
          {/* Phase 0: WAIT... */}
          {phase === 0 && (
            <motion.div
              key="wait"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(3rem, 8vw, 5rem)',
                  color: '#ffd700',
                  letterSpacing: '3px'
                }}
              >
                WAIT…
              </h2>
            </motion.div>
          )}

          {/* Phase 1: ONE LAST THING... */}
          {phase === 1 && (
            <motion.div
              key="one-last-thing"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.2rem, 6vw, 4rem)',
                  color: '#ff758c',
                  letterSpacing: '2px'
                }}
              >
                ONE LAST THING…
              </h2>
            </motion.div>
          )}

          {/* Countdown Phase (3, 2, 1) */}
          {(phase === 2 || phase === 3 || phase === 4) && (
            <motion.div
              key={`count-${phase}`}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1.2 }}
              exit={{ opacity: 0, scale: 1.8 }}
              transition={{ duration: 0.6 }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(6rem, 15vw, 10rem)',
                  fontWeight: 900,
                  color: phase === 2 ? '#ff2e93' : phase === 3 ? '#ff9f43' : '#ffd700',
                  textShadow: '0 0 40px rgba(255, 215, 0, 0.8)'
                }}
              >
                {phase === 2 ? '3' : phase === 3 ? '2' : '1'}
              </div>
            </motion.div>
          )}

          {/* Phase 5: Grand Reveal */}
          {phase === 5 && (
            <motion.div
              key="grand-reveal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Floating Diyas */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
                <DiyaSVG size={40} />
                <DiyaSVG size={40} />
              </div>

              {/* Title Reveal */}
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
                  fontWeight: 900,
                  marginBottom: '24px',
                  lineHeight: 1.2
                }}
              >
                A RAKSHA BANDHAN GIFT FOR ALL SISTERS <span className="text-pink">❤️</span>
              </h1>

              {/* Emotional Card Lines */}
              <div
                className="glass-card"
                style={{
                  padding: '36px 28px',
                  marginBottom: '32px',
                  border: '2px solid rgba(255, 215, 0, 0.5)',
                  background: 'linear-gradient(135deg, rgba(35, 14, 75, 0.85), rgba(18, 5, 40, 0.95))'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: 'clamp(1.1rem, 2.8vw, 1.4rem)' }}>
                  <p style={{ color: 'var(--cream-muted)' }}>“Connected by blood, or chosen by heart as soul sisters…”</p>
                  <p style={{ color: 'var(--cream-muted)' }}>“No matter how much you fight, tease, or laugh together…”</p>
                  <p style={{ color: 'var(--cream-muted)' }}>“No matter how far life takes you…”</p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      color: 'var(--cream-100)',
                      fontSize: 'clamp(1.2rem, 3.2vw, 1.6rem)',
                      marginTop: '6px'
                    }}
                  >
                    “A sister — in blood or in spirit — is a forever blessing.”
                  </p>
                </div>

                <div
                  style={{
                    marginTop: '28px',
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(255, 215, 0, 0.2)'
                  }}
                >
                  <h2
                    className="text-gold animate-pulse-glow"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
                      fontWeight: 900
                    }}
                  >
                    HAPPY RAKSHA BANDHAN 🌸
                  </h2>
                </div>
              </div>

              {/* Action */}
              <button onClick={onNext} className="btn-festive" style={{ fontSize: '1.15rem', padding: '16px 36px' }}>
                <Sparkles size={22} />
                <span>Grand Finale & Sister Certificate</span>
                <ArrowRight size={22} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skip button during countdown */}
        {phase < 5 && (
          <div style={{ marginTop: '40px' }}>
            <button
              onClick={handleSkipToReveal}
              className="btn-festive btn-festive-secondary"
              style={{ fontSize: '0.85rem', padding: '8px 20px' }}
            >
              Skip to Reveal ✨
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
