import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, ArrowRight } from 'lucide-react';
import DiyaSVG from '../components/DiyaSVG';
import { audioSystem } from '../utils/audioSystem';
import { triggerFestiveConfetti } from '../utils/confettiHelper';

export default function Section1Opening({ onNext }) {
  const handleBegin = () => {
    audioSystem.playSparkle();
    audioSystem.playMusic();
    triggerFestiveConfetti();
    onNext();
  };

  return (
    <section className="section-wrapper" style={{ minHeight: '100vh', justifyContent: 'center' }}>
      <div className="section-content">
        {/* Floating Diya Accents */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            marginBottom: '24px'
          }}
        >
          <div className="animate-float" style={{ animationDelay: '0s' }}>
            <DiyaSVG size={42} />
          </div>
          <div className="glass-pill">
            <Sparkles size={16} color="#ffd700" />
            <span>A RAKSHA BANDHAN GIFT • BY LOVELY BROTHER KATHIRVEL</span>
            <Sparkles size={16} color="#ffd700" />
          </div>
          <div className="animate-float" style={{ animationDelay: '1.5s' }}>
            <DiyaSVG size={42} />
          </div>
        </motion.div>

        {/* Main Title Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <h1
            className="section-title"
            style={{
              fontSize: 'clamp(2.4rem, 7vw, 4.5rem)',
              letterSpacing: '1px',
              textShadow: '0 0 30px rgba(255, 46, 147, 0.4)'
            }}
          >
            HEY SISTER… <span className="text-pink">❤️</span>
          </h1>
        </motion.div>

        {/* Subtitle Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="section-subtitle"
          style={{
            fontSize: 'clamp(1.15rem, 3vw, 1.55rem)',
            color: 'var(--cream-200)',
            fontWeight: 400,
            marginTop: '12px'
          }}
        >
          This little surprise is crafted with love for you by your Lovely brother Kathirvel — by blood, by friendship, or chosen by heart ❤️
        </motion.p>

        {/* Decorative Floating Heart Ring */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          style={{
            margin: '28px auto 44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px'
          }}
        >
          <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, transparent, #ffd700)' }} />
          <Heart size={24} fill="#ff2e93" color="#ff2e93" className="animate-pulse-glow" />
          <span style={{ fontSize: '1.4rem' }}>🌸</span>
          <Heart size={24} fill="#ffd700" color="#ffd700" className="animate-pulse-glow" />
          <div style={{ width: '40px', height: '1px', background: 'linear-gradient(90deg, #ffd700, transparent)' }} />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <button
            onClick={handleBegin}
            className="btn-festive"
            style={{ fontSize: '1.25rem', padding: '18px 44px' }}
          >
            <Sparkles size={22} />
            <span>✨ BEGIN THE JOURNEY</span>
            <ArrowRight size={22} />
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 1.6 }}
          style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'center' }}
        >
          <span style={{ fontSize: '0.95rem', color: '#ffd700', fontWeight: 600 }}>
            Made with ❤️ by your Lovely brother Kathirvel
          </span>
          <span style={{ fontSize: '0.82rem', color: 'var(--cream-muted)' }}>
            Best experienced with sound 🎵
          </span>
        </motion.div>
      </div>
    </section>
  );
}
