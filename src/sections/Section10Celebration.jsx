import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, RotateCcw, Volume2, VolumeX, Heart, Award, ArrowDown } from 'lucide-react';
import RakhiSVG from '../components/RakhiSVG';
import SisterCertificate from '../components/SisterCertificate';
import { audioSystem } from '../utils/audioSystem';
import { triggerFestiveConfetti, triggerHeartConfetti } from '../utils/confettiHelper';

export default function Section10Celebration({ onReplay }) {
  const [isPlayingMusic, setIsPlayingMusic] = useState(audioSystem.isPlaying);
  const fireworksCanvasRef = useRef(null);

  // Auto trigger celebratory confetti upon entering celebration
  useEffect(() => {
    triggerFestiveConfetti({ x: 0.2, y: 0.5 });
    triggerFestiveConfetti({ x: 0.8, y: 0.5 });
    triggerHeartConfetti();
    audioSystem.playCelebrationFanfare();

    const interval = setInterval(() => {
      triggerFestiveConfetti({ x: Math.random() * 0.6 + 0.2, y: Math.random() * 0.4 + 0.3 });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // Interactive Fireworks Canvas
  useEffect(() => {
    const canvas = fireworksCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    let width = (canvas.width = canvas.parentElement.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight || 450);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    const sparks = [];

    const createFirework = (x, y) => {
      const count = 40;
      const colors = ['#FFD700', '#FF2E93', '#00FFFF', '#FF9F43', '#FFFFFF', '#FF6B6B'];
      const baseColor = colors[Math.floor(Math.random() * colors.length)];
      for (let i = 0; i < count; i++) {
        const angle = (i * Math.PI * 2) / count;
        const speed = Math.random() * 4 + 2;
        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color: baseColor,
          decay: Math.random() * 0.02 + 0.015,
          size: Math.random() * 3 + 2
        });
      }
    };

    // Random ambient fireworks
    const autoFirework = setInterval(() => {
      createFirework(Math.random() * width, Math.random() * (height * 0.6) + 40);
    }, 1400);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i];
        s.x += s.vx;
        s.y += s.vy;
        s.vy += 0.05; // gravity
        s.alpha -= s.decay;

        if (s.alpha <= 0) {
          sparks.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = s.alpha;
        ctx.fillStyle = s.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    // Canvas click to spawn fireworks
    const handleCanvasClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      createFirework(x, y);
      audioSystem.playSparkle();
    };

    canvas.addEventListener('click', handleCanvasClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(autoFirework);
      cancelAnimationFrame(animId);
      if (canvas) canvas.removeEventListener('click', handleCanvasClick);
    };
  }, []);

  useEffect(() => {
    return audioSystem.onStateChange(setIsPlayingMusic);
  }, []);

  const toggleMusic = () => {
    audioSystem.toggleMusic();
    audioSystem.playClick();
  };

  const scrollToCertificate = () => {
    audioSystem.playSparkle();
    const el = document.getElementById('sister-certificate-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-wrapper" style={{ minHeight: '100vh', justifyContent: 'center' }}>
      <div className="section-content" style={{ maxWidth: '960px' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-tag"
        >
          <span>CHAPTER 09</span>
          <span>•</span>
          <span>GRAND FINALE</span>
        </motion.div>

        <h1
          className="section-title text-glow-gold"
          style={{
            fontSize: 'clamp(2.2rem, 6vw, 4rem)',
            color: '#ffd700',
            marginBottom: '12px'
          }}
        >
          CELEBRATE THE BOND <span className="text-pink">❤️</span>
        </h1>

        <p className="section-subtitle">
          Click anywhere on the festive sky below to burst fireworks, and customize your Sister's official Keepsake Certificate! 🎆
        </p>

        {/* Grand Celebration Arena Card */}
        <div
          className="glass-card"
          style={{
            position: 'relative',
            minHeight: '440px',
            padding: '32px 20px',
            marginBottom: '32px',
            overflow: 'hidden',
            border: '2px solid rgba(255, 215, 0, 0.6)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(255, 215, 0, 0.35)'
          }}
        >
          {/* Background Interactive Fireworks Canvas */}
          <canvas
            ref={fireworksCanvasRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
              cursor: 'crosshair'
            }}
          />

          {/* Foreground Festive Centerpiece */}
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none'
            }}
          >
            {/* Center Royal Rakhi */}
            <div className="animate-float" style={{ marginBottom: '16px' }}>
              <RakhiSVG size={260} isTied={true} />
            </div>

            {/* Glowing Festival Message */}
            <div
              className="glass-pill"
              style={{
                fontSize: '1.25rem',
                padding: '10px 28px',
                background: 'rgba(30, 10, 60, 0.85)',
                borderColor: '#ffd700',
                marginBottom: '20px'
              }}
            >
              <Sparkles size={20} color="#ffd700" />
              <span className="text-gold" style={{ fontWeight: 800 }}>
                HAPPY RAKSHA BANDHAN
              </span>
              <Sparkles size={20} color="#ffd700" />
            </div>

            <p
              style={{
                color: 'var(--cream-100)',
                fontSize: '1.05rem',
                maxWidth: '520px',
                textAlign: 'center',
                lineHeight: 1.6,
                textShadow: '0 2px 10px rgba(0,0,0,0.9)',
                marginBottom: '16px'
              }}
            >
              May this sacred festival bring joy, laughter, eternal health, and endless sweet memories to every sister.
            </p>

            {/* Quick jump to Certificate */}
            <button
              onClick={scrollToCertificate}
              className="btn-festive"
              style={{ pointerEvents: 'auto', padding: '12px 28px', fontSize: '0.95rem' }}
            >
              <Award size={18} />
              <span>Create Sister Certificate</span>
              <ArrowDown size={16} />
            </button>
          </div>
        </div>

        {/* Action Controls Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '40px'
          }}
        >
          {/* Replay Journey */}
          <button
            onClick={() => {
              audioSystem.playSparkle();
              onReplay();
            }}
            className="btn-festive"
          >
            <RotateCcw size={20} />
            <span>🔄 EXPERIENCE AGAIN</span>
          </button>

          {/* Music Toggle */}
          <button
            onClick={toggleMusic}
            className="btn-festive btn-festive-secondary"
          >
            {isPlayingMusic ? (
              <>
                <Volume2 size={20} color="#ffd700" />
                <span>🎵 MUSIC ON</span>
              </>
            ) : (
              <>
                <VolumeX size={20} />
                <span>🔇 MUSIC OFF</span>
              </>
            )}
          </button>
        </div>

        {/* Integrated Personalized Sister Certificate Section */}
        <SisterCertificate />

        {/* Footer Note */}
        <div
          style={{
            marginTop: '56px',
            fontSize: '0.9rem',
            color: 'var(--cream-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          <span>Crafted with</span>
          <Heart size={16} fill="#ff2e93" color="#ff2e93" />
          <span>for all sisters in the world</span>
        </div>
      </div>
    </section>
  );
}
