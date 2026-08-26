import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, RotateCcw, CheckCircle2, Heart } from 'lucide-react';
import { SISTER_QUIZ_QUESTIONS } from '../data/sisterData';
import { audioSystem } from '../utils/audioSystem';
import { triggerHeartConfetti, triggerFestiveConfetti } from '../utils/confettiHelper';

export default function Section3SisterQuiz({ onNext }) {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [reactionMsg, setReactionMsg] = useState(null);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQ = SISTER_QUIZ_QUESTIONS[currentQIndex];

  const handleSelectOption = (option) => {
    if (reactionMsg) return; // Prevent double clicking during reaction delay
    audioSystem.playSparkle();
    setSelectedOption(option);
    setReactionMsg(option.reaction);

    setTimeout(() => {
      if (currentQIndex < SISTER_QUIZ_QUESTIONS.length - 1) {
        setCurrentQIndex((prev) => prev + 1);
        setSelectedOption(null);
        setReactionMsg(null);
      } else {
        setQuizFinished(true);
        audioSystem.playCelebrationFanfare();
        triggerFestiveConfetti();
        triggerHeartConfetti();
      }
    }, 1400);
  };

  const handleRestartQuiz = () => {
    audioSystem.playClick();
    setCurrentQIndex(0);
    setSelectedOption(null);
    setReactionMsg(null);
    setQuizFinished(false);
  };

  return (
    <section className="section-wrapper">
      <div className="section-content" style={{ maxWidth: '800px' }}>
        {/* Header Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-tag"
        >
          <span>CHAPTER 03</span>
          <span>•</span>
          <span>THE SISTER TEST 😂</span>
        </motion.div>

        <h2 className="section-title">
          THE SISTER <span className="text-pink">TEST 😂</span>
        </h2>
        <p className="section-subtitle">
          6 questions every sibling in the world can instantly relate to.
        </p>

        {!quizFinished ? (
          <div className="glass-card" style={{ padding: '36px 24px', textAlign: 'left' }}>
            {/* Question Progress Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px',
                borderBottom: '1px solid rgba(255, 215, 0, 0.15)',
                paddingBottom: '12px'
              }}
            >
              <span style={{ fontSize: '0.9rem', color: '#ffd700', fontWeight: 700 }}>
                Question {currentQIndex + 1} of {SISTER_QUIZ_QUESTIONS.length}
              </span>
              <span className="glass-pill" style={{ fontSize: '0.75rem', padding: '3px 10px' }}>
                100% Scientific 🔬
              </span>
            </div>

            {/* Question Text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`q-${currentQ.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(1.25rem, 3.5vw, 1.65rem)',
                    fontWeight: 700,
                    color: 'var(--cream-100)',
                    marginBottom: '24px',
                    lineHeight: 1.4
                  }}
                >
                  {currentQ.question}
                </h3>

                {/* Options List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {currentQ.options.map((opt, idx) => {
                    const isSelected = selectedOption === opt;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelectOption(opt)}
                        disabled={!!reactionMsg}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '16px 20px',
                          borderRadius: '14px',
                          border: isSelected
                            ? '2px solid #ffd700'
                            : '1px solid rgba(255, 255, 255, 0.12)',
                          background: isSelected
                            ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.3), rgba(255, 46, 147, 0.3))'
                            : 'rgba(255, 255, 255, 0.05)',
                          color: isSelected ? '#ffd700' : 'var(--cream-200)',
                          cursor: reactionMsg ? 'default' : 'pointer',
                          fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)',
                          fontWeight: 500,
                          textAlign: 'left',
                          transition: 'all 0.25s ease',
                          transform: isSelected ? 'scale(1.02)' : 'none'
                        }}
                      >
                        <span>{opt.text}</span>
                        {isSelected && <CheckCircle2 size={20} color="#ffd700" />}
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Live Reaction Popup */}
            {reactionMsg && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                style={{
                  marginTop: '20px',
                  padding: '12px 18px',
                  background: 'rgba(255, 46, 147, 0.2)',
                  border: '1px solid rgba(255, 46, 147, 0.5)',
                  borderRadius: '12px',
                  textAlign: 'center',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '1.05rem'
                }}
              >
                {reactionMsg}
              </motion.div>
            )}
          </div>
        ) : (
          /* Quiz Results Reveal */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card"
            style={{
              padding: '48px 24px',
              textAlign: 'center',
              border: '2px solid rgba(255, 215, 0, 0.7)'
            }}
          >
            <div style={{ fontSize: '3.5rem', marginBottom: '16px' }} className="animate-pulse-glow">
              👑
            </div>

            <p style={{ color: 'var(--cream-muted)', fontSize: '1.2rem', marginBottom: '8px' }}>
              Whatever your answers…
            </p>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.6rem, 4.5vw, 2.6rem)',
                color: '#ffd700',
                fontWeight: 900,
                lineHeight: 1.3,
                marginBottom: '18px'
              }}
            >
              THE SISTER BOND ALWAYS WINS ❤️
            </h3>

            <p
              style={{
                color: 'var(--cream-200)',
                fontSize: '1.05rem',
                maxWidth: '560px',
                margin: '0 auto 32px',
                lineHeight: 1.6
              }}
            >
              Whether you fight over snacks or tease each other endlessly, there is nobody quite like a sister.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button onClick={handleRestartQuiz} className="btn-festive btn-festive-secondary">
                <RotateCcw size={18} />
                <span>Retake Quiz</span>
              </button>
              <button onClick={onNext} className="btn-festive">
                <span>View Sister Superpowers</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
