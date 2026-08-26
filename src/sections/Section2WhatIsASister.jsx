import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, RefreshCw, Heart } from 'lucide-react';
import { WHAT_IS_A_SISTER_ITEMS } from '../data/sisterData';
import { audioSystem } from '../utils/audioSystem';
import { triggerHeartConfetti } from '../utils/confettiHelper';

export default function Section2WhatIsASister({ onNext }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay || isCompleted) return;

    const timer = setTimeout(() => {
      if (currentStep < WHAT_IS_A_SISTER_ITEMS.length - 1) {
        setCurrentStep((prev) => prev + 1);
        audioSystem.playClick();
      } else {
        setIsCompleted(true);
        audioSystem.playSparkle();
        triggerHeartConfetti();
      }
    }, currentStep === 0 || currentStep === 8 ? 1600 : 2000);

    return () => clearTimeout(timer);
  }, [currentStep, autoPlay, isCompleted]);

  const handleManualNext = () => {
    setAutoPlay(false);
    audioSystem.playClick();
    if (currentStep < WHAT_IS_A_SISTER_ITEMS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      audioSystem.playSparkle();
      triggerHeartConfetti();
    }
  };

  const handleReplay = () => {
    audioSystem.playClick();
    setCurrentStep(0);
    setIsCompleted(false);
    setAutoPlay(true);
  };

  const currentItem = WHAT_IS_A_SISTER_ITEMS[currentStep];

  return (
    <section className="section-wrapper">
      <div className="section-content" style={{ maxWidth: '850px' }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-tag"
        >
          <span>CHAPTER 02</span>
          <span>•</span>
          <span>THE ESSENCE</span>
        </motion.div>

        <h2 className="section-title">
          WHAT IS A <span className="text-gold">SISTER?</span>
        </h2>
        <p className="section-subtitle">
          An unspoken truth that every sibling knows by heart.
        </p>

        {/* Dynamic Storytelling Card */}
        <div
          className="glass-card"
          style={{
            padding: '50px 24px',
            minHeight: '280px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '36px',
            border: isCompleted ? '2px solid rgba(255, 215, 0, 0.6)' : '1px solid var(--glass-border)'
          }}
        >
          <AnimatePresence mode="wait">
            {!isCompleted ? (
              <motion.div
                key={`step-${currentStep}`}
                initial={{ opacity: 0, scale: 0.85, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.45 }}
                style={{ textAlign: 'center' }}
              >
                {currentItem.icon && (
                  <div
                    style={{
                      fontSize: '3.5rem',
                      marginBottom: '16px',
                      filter: 'drop-shadow(0 0 16px rgba(255, 215, 0, 0.4))'
                    }}
                  >
                    {currentItem.icon}
                  </div>
                )}
                <p
                  style={{
                    fontFamily: currentItem.type ? 'var(--font-script)' : 'var(--font-display)',
                    fontSize: currentItem.type
                      ? 'clamp(2.2rem, 5vw, 3.2rem)'
                      : 'clamp(1.5rem, 3.8vw, 2.2rem)',
                    color: currentItem.color || 'var(--cream-100)',
                    fontWeight: 700,
                    lineHeight: 1.4
                  }}
                >
                  “{currentItem.text}”
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="final-reveal"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{ fontSize: '3.5rem', marginBottom: '16px' }} className="animate-pulse-glow">
                  ❤️
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
                    color: '#ffd700',
                    fontWeight: 900,
                    lineHeight: 1.3,
                    marginBottom: '14px'
                  }}
                >
                  THAT'S WHAT MAKES A SISTER SPECIAL. ❤️
                </h3>
                <p style={{ color: 'var(--cream-muted)', fontSize: '1.1rem' }}>
                  A unique combination of love, madness, and lifelong protection.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Step Progress Indicators */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '32px',
            flexWrap: 'wrap'
          }}
        >
          {WHAT_IS_A_SISTER_ITEMS.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setAutoPlay(false);
                setCurrentStep(idx);
                setIsCompleted(false);
                audioSystem.playClick();
              }}
              style={{
                width: currentStep === idx ? '28px' : '10px',
                height: '10px',
                borderRadius: '5px',
                border: 'none',
                background: currentStep >= idx ? 'linear-gradient(90deg, #ff2e93, #ffd700)' : 'rgba(255, 255, 255, 0.2)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
          {!isCompleted ? (
            <button onClick={handleManualNext} className="btn-festive btn-festive-secondary">
              <span>Next Line</span>
              <ArrowRight size={18} />
            </button>
          ) : (
            <button onClick={handleReplay} className="btn-festive btn-festive-secondary">
              <RefreshCw size={18} />
              <span>Read Again</span>
            </button>
          )}

          <button onClick={onNext} className="btn-festive">
            <span>Explore Sister Superpowers</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
