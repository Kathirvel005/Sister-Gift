import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Play, RotateCcw, Zap, Trophy, Shield, Flame, Star } from 'lucide-react';
import { audioSystem } from '../utils/audioSystem';
import { triggerFestiveConfetti, triggerHeartConfetti } from '../utils/confettiHelper';

export default function Section8MiniGame({ onNext }) {
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWon, setIsWon] = useState(false);
  const [targets, setTargets] = useState([]);
  const [brotherComment, setBrotherComment] = useState("Catch my snacks and pocket money if you can! 😜");
  const [lastPopup, setLastPopup] = useState(null);
  const TARGET_SCORE = 100;
  const timerRef = useRef(null);

  const ITEM_TYPES = [
    {
      id: 'chocolate',
      name: "Kathirvel's Chocolate",
      emoji: '🍫',
      points: 10,
      color: '#ffd700',
      reaction: '“Hey! You just stole my favorite chocolate! 🍫😂”'
    },
    {
      id: 'money',
      name: "Kathirvel's Pocket Money",
      emoji: '💸',
      points: 20,
      color: '#2ed573',
      reaction: '“My wallet is crying! You’re taking all my money! 💸🤣”'
    },
    {
      id: 'pizza',
      name: "Kathirvel's Pizza",
      emoji: '🍕',
      points: 15,
      color: '#ff4757',
      reaction: '“Not my pizza slice! You snack ninja! 🍕😋”'
    },
    {
      id: 'gift',
      name: "Kathirvel's Gift Box",
      emoji: '🎁',
      points: 25,
      color: '#ff2e93',
      reaction: '“Nice catch! That special gift was for you anyway! 🎁✨”'
    },
    {
      id: 'crown',
      name: "Kathirvel's Sister Crown",
      emoji: '👑',
      points: 30,
      color: '#ffd700',
      reaction: '“A queen catch! You truly are the #1 sister! 👑💖”'
    },
    {
      id: 'broom',
      name: 'Prank Broom',
      emoji: '🧹',
      points: -5,
      isHazard: true,
      color: '#ff6b81',
      reaction: '“Oops! Caught the broom! Time for room cleaning duty! 🧹😜”'
    },
    {
      id: 'scrubber',
      name: 'Dish Scrubber',
      emoji: '🧽',
      points: -5,
      isHazard: true,
      color: '#00d2d3',
      reaction: '“Caught the sponge! The kitchen sink is calling your name! 🧽🫧”'
    }
  ];

  // Start / Restart Game
  const startGame = () => {
    setScore(0);
    setCombo(0);
    setIsWon(false);
    setIsPlaying(true);
    setTargets([]);
    setBrotherComment("Game started! Steal Kathirvel's treats as fast as you can! 🚀");
    audioSystem.playClick();
  };

  // Target spawner loop
  useEffect(() => {
    if (!isPlaying || isWon) return;

    const spawnTarget = () => {
      const id = Date.now() + Math.random();
      const x = Math.floor(Math.random() * 74) + 12; // 12% to 86%
      const y = Math.floor(Math.random() * 60) + 18; // 18% to 78%

      // 75% chance for reward, 25% chance for funny hazard
      const isHazard = Math.random() < 0.22;
      const filteredPool = isHazard
        ? ITEM_TYPES.filter((item) => item.isHazard)
        : ITEM_TYPES.filter((item) => !item.isHazard);

      const template = filteredPool[Math.floor(Math.random() * filteredPool.length)];

      setTargets((prev) => {
        const active = prev.filter((t) => Date.now() - t.createdAt < 3800);
        if (active.length >= 6) return active;
        return [...active, { ...template, id, x, y, createdAt: Date.now() }];
      });
    };

    // Initial batch
    for (let i = 0; i < 3; i++) {
      setTimeout(spawnTarget, i * 250);
    }

    timerRef.current = setInterval(spawnTarget, 650);

    return () => clearInterval(timerRef.current);
  }, [isPlaying, isWon]);

  // Handle clicking a target
  const handleCatch = (target, e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }

    if (target.isHazard) {
      audioSystem.playFunnyBoing();
      setCombo(0);
    } else {
      audioSystem.playHeartCatch();
      setCombo((prev) => prev + 1);
    }

    // Remove caught target
    setTargets((prev) => prev.filter((t) => t.id !== target.id));

    // Update brother commentary
    setBrotherComment(target.reaction);

    // Floating text indicator
    setLastPopup({
      text: target.points > 0 ? `+${target.points}` : `${target.points}`,
      color: target.points > 0 ? '#ffd700' : '#ff4757',
      x: target.x,
      y: target.y
    });
    setTimeout(() => setLastPopup(null), 700);

    // Update score
    setScore((prev) => {
      const nextScore = Math.max(0, prev + target.points);
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
      <div className="section-content" style={{ maxWidth: '880px' }}>
        {/* Section Header Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-tag"
        >
          <span>CHAPTER 08</span>
          <span>•</span>
          <span>KATHIRVEL'S SIBLING SHOWDOWN</span>
        </motion.div>

        {/* Section Title */}
        <h2 className="section-title text-glow-gold">
          STEAL KATHIRVEL’S SNACKS! <span className="text-pink">🍫🎮</span>
        </h2>
        <p className="section-subtitle">
          Lovely brother Kathirvel is throwing snacks, chocolates, and treats! Tap to catch <strong>100 Points</strong> before he runs away!
        </p>

        {/* Main Game Arena Box */}
        <div
          className="glass-card"
          style={{
            padding: '24px 20px',
            position: 'relative',
            minHeight: '480px',
            overflow: 'hidden',
            marginBottom: '32px',
            border: isWon ? '2px solid #ffd700' : '1px solid rgba(255, 215, 0, 0.3)',
            background: 'radial-gradient(circle at 50% 50%, rgba(42, 14, 80, 0.95) 0%, rgba(14, 4, 30, 0.98) 100%)',
            userSelect: 'none'
          }}
        >
          {/* Header Score & Brother Live Status Bar */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 20px',
              background: 'rgba(0, 0, 0, 0.55)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 215, 0, 0.3)',
              marginBottom: '16px',
              zIndex: 30,
              position: 'relative',
              flexWrap: 'wrap',
              gap: '12px'
            }}
          >
            {/* Score Display */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Trophy size={24} color="#ffd700" className="animate-pulse-glow" />
              <div>
                <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--cream-muted)', textTransform: 'uppercase' }}>
                  Target: 100 PTS
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontSize: '1.35rem',
                    color: '#ffd700'
                  }}
                >
                  SCORE: {score}/{TARGET_SCORE}
                </span>
              </div>
            </div>

            {/* Combo Streak */}
            {combo > 1 && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(255, 46, 147, 0.25)',
                  border: '1px solid #ff2e93',
                  padding: '4px 14px',
                  borderRadius: '9999px',
                  color: '#ff758c',
                  fontWeight: 800,
                  fontSize: '0.88rem'
                }}
              >
                <Flame size={16} fill="#ff2e93" color="#ff2e93" />
                <span>{combo}X KATHIRVEL STREAK! 🔥</span>
              </div>
            )}

            {/* Progress Bar */}
            <div
              style={{
                width: '140px',
                height: '14px',
                background: 'rgba(255, 255, 255, 0.12)',
                borderRadius: '7px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 215, 0, 0.3)'
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

          {/* Kathirvel's Live Reaction Speech Bubble */}
          {isPlaying && (
            <div
              style={{
                position: 'relative',
                zIndex: 20,
                background: 'rgba(26, 11, 51, 0.85)',
                border: '1px solid rgba(255, 117, 140, 0.4)',
                borderRadius: '12px',
                padding: '8px 16px',
                margin: '0 auto 12px',
                maxWidth: '560px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>👦</span>
              <span style={{ color: '#ffd700', fontSize: '0.92rem', fontWeight: 700, fontStyle: 'italic' }}>
                {brotherComment}
              </span>
            </div>
          )}

          {/* Pre-Game Start Screen */}
          {!isPlaying && !isWon && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '340px',
                textAlign: 'center',
                position: 'relative',
                zIndex: 20
              }}
            >
              <div style={{ fontSize: '4.5rem', marginBottom: '14px' }} className="animate-float">
                🍫🍕💸
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4rem, 4vw, 2rem)',
                  color: '#ffd700',
                  marginBottom: '10px'
                }}
              >
                KATHIRVEL'S SNACK RAID CHALLENGE!
              </h3>
              <p
                style={{
                  color: 'var(--cream-muted)',
                  maxWidth: '500px',
                  marginBottom: '20px',
                  fontSize: '1rem',
                  lineHeight: 1.6
                }}
              >
                Lovely brother Kathirvel's snacks and pocket money are flying across the screen! Catch chocolates (+10), pizza (+15), pocket money (+20), and gifts (+25) — but dodge the chore brooms (-5)!
              </p>

              {/* Legend preview pills */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '28px' }}>
                <span style={{ background: 'rgba(255,215,0,0.15)', border: '1px solid #ffd700', padding: '4px 10px', borderRadius: '9999px', fontSize: '0.82rem', color: '#ffd700' }}>
                  🍫 Chocolate (+10)
                </span>
                <span style={{ background: 'rgba(46,213,115,0.15)', border: '1px solid #2ed573', padding: '4px 10px', borderRadius: '9999px', fontSize: '0.82rem', color: '#2ed573' }}>
                  💸 Money (+20)
                </span>
                <span style={{ background: 'rgba(255,46,147,0.15)', border: '1px solid #ff2e93', padding: '4px 10px', borderRadius: '9999px', fontSize: '0.82rem', color: '#ff758c' }}>
                  🎁 Gift (+25)
                </span>
                <span style={{ background: 'rgba(255,71,87,0.15)', border: '1px solid #ff4757', padding: '4px 10px', borderRadius: '9999px', fontSize: '0.82rem', color: '#ff6b81' }}>
                  🧹 Broom (-5)
                </span>
              </div>

              <button
                onClick={startGame}
                className="btn-festive"
                style={{ fontSize: '1.2rem', padding: '16px 44px' }}
              >
                <Play size={22} fill="#12072b" />
                <span>START SNACK RAID 🎮</span>
              </button>
            </div>
          )}

          {/* Active Interactive Snack Raid Stage */}
          {isPlaying && !isWon && (
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '320px',
                borderRadius: '16px',
                overflow: 'hidden',
                background: 'rgba(0, 0, 0, 0.25)',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}
            >
              {/* Floating points popups */}
              {lastPopup && (
                <motion.div
                  initial={{ opacity: 1, scale: 0.8, y: 0 }}
                  animate={{ opacity: 0, scale: 1.4, y: -30 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    position: 'absolute',
                    left: `${lastPopup.x}%`,
                    top: `${lastPopup.y}%`,
                    color: lastPopup.color,
                    fontWeight: 900,
                    fontSize: '1.6rem',
                    zIndex: 50,
                    pointerEvents: 'none',
                    textShadow: '0 0 10px rgba(0,0,0,0.9)'
                  }}
                >
                  {lastPopup.text}
                </motion.div>
              )}

              {/* Falling / Floating Treats */}
              <AnimatePresence>
                {targets.map((target) => (
                  <motion.div
                    key={target.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: 1,
                      y: [0, -14, 0]
                    }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      scale: { duration: 1.6, repeat: Infinity },
                      y: { duration: 2, repeat: Infinity }
                    }}
                    style={{
                      position: 'absolute',
                      left: `${target.x}%`,
                      top: `${target.y}%`,
                      zIndex: 25
                    }}
                  >
                    <button
                      onClick={(e) => handleCatch(target, e)}
                      onTouchStart={(e) => handleCatch(target, e)}
                      style={{
                        padding: '10px 14px',
                        borderRadius: '9999px',
                        background: target.isHazard
                          ? 'rgba(40, 10, 20, 0.9)'
                          : 'linear-gradient(135deg, rgba(255, 46, 147, 0.85), rgba(255, 215, 0, 0.85))',
                        border: target.isHazard ? '2px solid #ff4757' : '2px solid #ffffff',
                        boxShadow: target.isHazard
                          ? '0 0 16px rgba(255, 71, 87, 0.6)'
                          : '0 0 20px rgba(255, 215, 0, 0.7), inset 0 0 10px rgba(255, 255, 255, 0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        cursor: 'pointer',
                        transform: 'translate(-50%, -50%)',
                        outline: 'none',
                        touchAction: 'none'
                      }}
                      aria-label={`Catch ${target.name}`}
                    >
                      <span style={{ fontSize: '1.8rem' }}>{target.emoji}</span>
                      <span style={{ fontSize: '0.85rem', fontWeight: 800, color: target.isHazard ? '#ff6b81' : '#ffffff' }}>
                        {target.points > 0 ? `+${target.points}` : target.points}
                      </span>
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
                minHeight: '340px',
                textAlign: 'center',
                padding: '20px',
                position: 'relative',
                zIndex: 20
              }}
            >
              <div style={{ fontSize: '4.5rem', marginBottom: '12px' }} className="animate-pulse-glow">
                🏆👑
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 4.5vw, 2.4rem)',
                  color: '#ffd700',
                  fontWeight: 900,
                  marginBottom: '10px',
                  lineHeight: 1.3
                }}
              >
                YOU DEFEATED LOVELY BROTHER KATHIRVEL! 🎉
              </h3>
              <p
                style={{
                  color: 'var(--cream-100)',
                  fontSize: '1.1rem',
                  maxWidth: '540px',
                  marginBottom: '10px',
                  lineHeight: 1.6
                }}
              >
                “I officially surrender all my chocolates, snacks, and pocket money to you! You truly are the unbeatable Supreme Sister!”
              </p>
              <span style={{ color: '#ff758c', fontWeight: 700, fontSize: '0.95rem', marginBottom: '28px' }}>
                — Lovely brother Kathirvel ❤️
              </span>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <button onClick={startGame} className="btn-festive btn-festive-secondary">
                  <RotateCcw size={18} />
                  <span>Play Again</span>
                </button>
                <button onClick={onNext} className="btn-festive">
                  <Sparkles size={20} />
                  <span>Reveal Grand Rakhi Surprise</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Skip Game Option */}
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
            <span>Auto-Win & Claim Kathirvel's Treats 🍫</span>
          </button>
        )}
      </div>
    </section>
  );
}
