import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Heart, Play, RotateCcw, Zap } from 'lucide-react';
import { audioSystem } from '../utils/audioSystem';
import { triggerFestiveConfetti, triggerHeartConfetti } from '../utils/confettiHelper';

export default function Section8MiniGame({ onNext }) {
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [targets, setTargets] = useState([]);
  const [feedback, setFeedback] = useState("");
  const TARGET_SCORE = 10;
  const timerRef = useRef(null);

  // Start / Restart Game
  const startGame = () => {
    setScore(0);
    setIsWon(false);
    setIsPlaying(true);
    setTargets([]);
    setFeedback("Tap the glowing hearts!");
    audioSystem.playClick();
  };

  // Generate targets constantly when playing
  useEffect(() => {
    if (!isPlaying || isWon) return;

    // Initial batch
    const spawnTarget = () => {
      const id = Date.now() + Math.random();
      const x = Math.floor(Math.random() * 75) + 10; // 10% to 85%
      const y = Math.floor(Math.random() * 65) + 15; // 15% to 80%
      const emojis = ['💖', '❤️', '🌸', '✨', '💛', '👑', '🎀'];
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];
      const points = 1;

      setTargets((prev) => {
        // Keep between 4 and 7 targets on screen at any time
        const filtered = prev.filter((t) => Date.now() - t.createdAt < 4500);
        if (filtered.length >= 6) return filtered;
        return [...filtered, { id, x, y, emoji, points, createdAt: Date.now() }];
      });
    };

    // Spawn initial 4 targets
    for (let i = 0; i < 4; i++) {
      setTimeout(spawnTarget, i * 200);
    }

    timerRef.current = setInterval(spawnTarget, 700);

    return () => clearInterval(timerRef.current);
  }, [isPlaying, isWon]);

  // Click on a target
  const handleCatch = (id, e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    audioSystem.playHeartCatch();

    // Remove caught target
    setTargets((prev) => prev.filter((t) => t.id !== id));

    const praises = ["Awesome! 💖", "Super Sister! ✨", "Nice Catch! 🌸", "Almost There! 🌟", "Keep Going! 🔥"];
    setFeedback(praises[Math.floor(Math.random() * praises.length)]);

    setScore((prev) => {
      const nextScore = prev + 1;
      if (nextScore >= TARGET_SCORE) {
        setIsWon(true);
        setIsPlaying(false);
        audioSystem.playCelebrationFanfare();
        triggerFestiveConfetti();
        triggerHeartConfetti();
      }
      return nextScore;
    });
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
          <span>CHAPTER 07</span>
          <span>•</span>
          <span>FESTIVE MINI-GAME</span>
        </motion.div>

        <h2 className="section-title">
          CATCH THE <span className="text-pink">HEARTS 🎮</span>
        </h2>
        <p className="section-subtitle">
          Tap 10 floating hearts to unlock the special Raksha Bandhan surprise!
        </p>

        {/* Game Arena Card */}
        <div
          className="glass-card"
          style={{
            padding: '20px',
            position: 'relative',
            minHeight: '440px',
            overflow: 'hidden',
            marginBottom: '32px',
            border: isWon ? '2px solid #ffd700' : '1px solid var(--glass-border)',
            background: 'radial-gradient(circle at 50% 50%, rgba(38, 14, 75, 0.9) 0%, rgba(16, 5, 36, 0.98) 100%)',
            userSelect: 'none'
          }}
        >
          {/* Header Score Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 20px',
              background: 'rgba(0, 0, 0, 0.45)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 215, 0, 0.25)',
              marginBottom: '16px',
              zIndex: 30,
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Heart size={24} fill="#ff2e93" color="#ff2e93" className="animate-pulse-glow" />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: '1.25rem',
                  color: '#ffd700',
                  letterSpacing: '0.5px'
                }}
              >
                HEARTS: {score}/{TARGET_SCORE}
              </span>
            </div>

            {/* Score progress bar */}
            <div
              style={{
                width: '140px',
                height: '12px',
                background: 'rgba(255, 255, 255, 0.12)',
                borderRadius: '6px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 215, 0, 0.2)'
              }}
            >
              <div
                style={{
                  width: `${Math.min((score / TARGET_SCORE) * 100, 100)}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #ff2e93, #ffd700)',
                  transition: 'width 0.25s ease'
                }}
              />
            </div>
          </div>

          {/* Feedback popup text */}
          {isPlaying && (
            <div
              style={{
                position: 'relative',
                zIndex: 20,
                color: '#ffd700',
                fontSize: '0.95rem',
                fontWeight: 700,
                textAlign: 'center',
                marginBottom: '10px'
              }}
            >
              {feedback}
            </div>
          )}

          {/* Pre-game Screen */}
          {!isPlaying && !isWon && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '320px',
                textAlign: 'center',
                position: 'relative',
                zIndex: 20
              }}
            >
              <div style={{ fontSize: '4rem', marginBottom: '16px' }} className="animate-float">
                🎁
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4rem, 4vw, 1.8rem)',
                  color: '#ffd700',
                  marginBottom: '10px'
                }}
              >
                READY TO PLAY?
              </h3>
              <p
                style={{
                  color: 'var(--cream-muted)',
                  maxWidth: '440px',
                  marginBottom: '28px',
                  fontSize: '1rem',
                  lineHeight: 1.5
                }}
              >
                Floating sister hearts and blessings will appear. Tap or click on 10 of them to reveal the grand Raksha Bandhan surprise!
              </p>
              <button
                onClick={startGame}
                className="btn-festive"
                style={{ fontSize: '1.2rem', padding: '16px 40px' }}
              >
                <Play size={22} fill="#12072b" />
                <span>START GAME</span>
              </button>
            </div>
          )}

          {/* Active Interactive Play Stage */}
          {isPlaying && !isWon && (
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '320px',
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'rgba(0, 0, 0, 0.2)'
              }}
            >
              <AnimatePresence>
                {targets.map((target) => (
                  <motion.div
                    key={target.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: 1,
                      y: [0, -12, 0]
                    }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      scale: { duration: 1.8, repeat: Infinity },
                      y: { duration: 2.2, repeat: Infinity }
                    }}
                    style={{
                      position: 'absolute',
                      left: `${target.x}%`,
                      top: `${target.y}%`,
                      zIndex: 25
                    }}
                  >
                    <button
                      onClick={(e) => handleCatch(target.id, e)}
                      onTouchStart={(e) => handleCatch(target.id, e)}
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, rgba(255, 46, 147, 0.8), rgba(255, 215, 0, 0.8))',
                        border: '2px solid #ffffff',
                        boxShadow: '0 0 20px rgba(255, 215, 0, 0.6), inset 0 0 10px rgba(255, 255, 255, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem',
                        cursor: 'pointer',
                        transform: 'translate(-50%, -50%)',
                        outline: 'none',
                        touchAction: 'none'
                      }}
                      aria-label="Catch floating heart"
                    >
                      {target.emoji}
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* Victory Modal */}
          {isWon && (
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '320px',
                textAlign: 'center',
                padding: '20px',
                position: 'relative',
                zIndex: 20
              }}
            >
              <div style={{ fontSize: '4.5rem', marginBottom: '14px' }} className="animate-pulse-glow">
                🎉
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 4.5vw, 2.4rem)',
                  color: '#ffd700',
                  fontWeight: 900,
                  marginBottom: '12px',
                  lineHeight: 1.3
                }}
              >
                YOU UNLOCKED THE RAKSHA BANDHAN SURPRISE! 🎁
              </h3>
              <p
                style={{
                  color: 'var(--cream-muted)',
                  fontSize: '1.1rem',
                  maxWidth: '520px',
                  marginBottom: '28px'
                }}
              >
                You caught all 10 hearts of sisterly love! The final surprise is ready for you.
              </p>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button onClick={startGame} className="btn-festive btn-festive-secondary">
                  <RotateCcw size={18} />
                  <span>Play Again</span>
                </button>
                <button onClick={onNext} className="btn-festive">
                  <Sparkles size={20} />
                  <span>Reveal Final Surprise</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Skip Game / Direct Unlock option */}
        {!isWon && isPlaying && (
          <button
            onClick={() => {
              setIsWon(true);
              setIsPlaying(false);
              audioSystem.playCelebrationFanfare();
              triggerFestiveConfetti();
            }}
            className="btn-festive btn-festive-secondary"
            style={{ fontSize: '0.9rem', padding: '10px 24px' }}
          >
            <span>Skip Game (Unlock Surprise Directly) 🎁</span>
          </button>
        )}
      </div>
    </section>
  );
}
