import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, Gift, Laugh, Check, Heart, Shield, Star, Lock, HelpCircle } from 'lucide-react';
import { FUNNY_RAKHI_GIFTS } from '../data/sisterData';
import { BroomSVG, WashingBrushSVG, CookingVesselSVG, BathroomKitSVG } from '../components/FunnyGiftSVGs';
import { audioSystem } from '../utils/audioSystem';
import { triggerFestiveConfetti, triggerHeartConfetti } from '../utils/confettiHelper';

export default function SectionFunnyGifts({ onNext }) {
  const [activeGiftIndex, setActiveGiftIndex] = useState(0);
  const [isOpeningBox, setIsOpeningBox] = useState(false);
  const [openedSet, setOpenedSet] = useState(new Set()); // IDs of gifts that have been unwrapped

  const currentGift = FUNNY_RAKHI_GIFTS[activeGiftIndex];
  const isCurrentOpened = openedSet.has(currentGift.id);
  const allOpened = openedSet.size === FUNNY_RAKHI_GIFTS.length;

  const handleOpenGift = (giftId) => {
    setIsOpeningBox(true);
    audioSystem.playFunnyBoing();

    setTimeout(() => {
      audioSystem.playGiftUnbox();
      if (giftId === 'bathroom_kit') {
        audioSystem.playCelebrationFanfare();
      }
      triggerFestiveConfetti();
      triggerHeartConfetti();
      setIsOpeningBox(false);
      setOpenedSet((prev) => new Set([...prev, giftId]));
    }, 850);
  };

  const handleSelectGift = (index) => {
    // Only allow selecting if already opened or if it's the next unrevealed gift
    if (index === 0 || openedSet.has(FUNNY_RAKHI_GIFTS[index - 1].id)) {
      audioSystem.playClick();
      setActiveGiftIndex(index);
    }
  };

  const handleNextGift = () => {
    if (activeGiftIndex < FUNNY_RAKHI_GIFTS.length - 1) {
      audioSystem.playSparkle();
      setActiveGiftIndex((prev) => prev + 1);
    }
  };

  const renderGiftIllustration = (id) => {
    switch (id) {
      case 'broom':
        return <BroomSVG size={220} />;
      case 'washing_brush':
        return <WashingBrushSVG size={220} />;
      case 'cooking_vessel':
        return <CookingVesselSVG size={220} />;
      case 'bathroom_kit':
        return <BathroomKitSVG size={240} />;
      default:
        return <BroomSVG size={220} />;
    }
  };

  // Mystery descriptions before opening
  const mysteryTeasers = [
    {
      label: 'SURPRISE GIFT #1',
      teaser: 'A magical transportation & lifestyle device for your daily room routine! 🌸',
      btn: '🎁 TAP TO UNWRAP SURPRISE GIFT #1',
      boxEmoji: '🎁',
      bgGlow: 'rgba(255, 215, 0, 0.4)'
    },
    {
      label: 'SURPRISE GIFT #2',
      teaser: 'An exclusive VIP executive household privilege curated by your brother! 🫧',
      btn: '🎁 TAP TO UNWRAP SURPRISE GIFT #2',
      boxEmoji: '🎁',
      bgGlow: 'rgba(0, 210, 211, 0.4)'
    },
    {
      label: 'SURPRISE GIFT #3',
      teaser: 'A gourmet culinary machine designed for midnight snack emergencies! 🍜',
      btn: '🎁 TAP TO UNWRAP SURPRISE GIFT #3',
      boxEmoji: '🎁',
      bgGlow: 'rgba(255, 117, 140, 0.4)'
    },
    {
      label: '👑 THE GRAND FINALE VIP SURPRISE',
      teaser: '⚠️ Warning: Extremely prestigious, high-value luxury gift package! Get ready to be astonished… 🌟',
      btn: '👑 UNWRAP THE ULTIMATE GRAND SURPRISE 🎁',
      boxEmoji: '👑',
      bgGlow: 'rgba(84, 160, 255, 0.55)'
    }
  ];

  const currentTeaser = mysteryTeasers[activeGiftIndex];

  return (
    <section className="section-wrapper">
      <div className="section-content" style={{ maxWidth: '940px' }}>
        {/* Section Header Tag */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-tag"
        >
          <Gift size={16} color="#ffd700" />
          <span>CHAPTER 06</span>
          <span>•</span>
          <span>MYSTERY RAKHI GIFTS</span>
        </motion.div>

        {/* Section Title */}
        <h2 className="section-title text-glow-gold">
          UNWRAP YOUR SURPRISE GIFTS! <span className="text-pink">🎁</span>
        </h2>
        <p className="section-subtitle">
          Handpicked with infinite love, sibling humor, and 100% mischief by <strong>Lovely brother Kathirvel</strong>!
        </p>

        {/* Surprise Gift Tabs Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '28px',
            flexWrap: 'wrap'
          }}
        >
          {FUNNY_RAKHI_GIFTS.map((g, idx) => {
            const isActive = activeGiftIndex === idx;
            const isOpened = openedSet.has(g.id);
            const isLocked = idx > 0 && !openedSet.has(FUNNY_RAKHI_GIFTS[idx - 1].id);

            return (
              <button
                key={g.id}
                onClick={() => !isLocked && handleSelectGift(idx)}
                disabled={isLocked}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 18px',
                  borderRadius: '9999px',
                  border: isActive
                    ? `2px solid ${isOpened ? g.color : '#ffd700'}`
                    : '1px solid rgba(255, 255, 255, 0.15)',
                  background: isActive
                    ? `linear-gradient(135deg, ${isOpened ? g.color : '#ffd700'}35, rgba(26, 11, 51, 0.9))`
                    : isLocked
                    ? 'rgba(255, 255, 255, 0.03)'
                    : 'rgba(255, 255, 255, 0.07)',
                  color: isLocked ? 'rgba(255, 255, 255, 0.35)' : isActive ? '#ffffff' : 'var(--cream-muted)',
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 700 : 500,
                  cursor: isLocked ? 'not-allowed' : 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isActive ? `0 0 16px ${isOpened ? g.color : '#ffd700'}50` : 'none',
                  transform: isActive ? 'scale(1.04)' : 'scale(1)',
                  opacity: isLocked ? 0.6 : 1
                }}
              >
                {/* Icon or Question mark before reveal */}
                <span style={{ fontSize: '1.2rem' }}>
                  {isOpened ? g.icon : isLocked ? '🔒' : '❓'}
                </span>

                {/* Name: Hidden as 'Mystery Gift #N' before reveal, revealed name after */}
                <span>
                  {isOpened ? g.shortName : idx === 3 ? 'VIP Mystery Gift #4 👑' : `Surprise Gift #${idx + 1}`}
                </span>

                {isOpened && <Check size={14} color="#2ed573" strokeWidth={3} />}
              </button>
            );
          })}
        </div>

        {/* Main Gift Mystery Arena Card */}
        <div
          className="glass-card"
          style={{
            padding: '36px 28px',
            position: 'relative',
            minHeight: '480px',
            border: `2px solid ${isCurrentOpened ? currentGift.color : '#ffd700'}`,
            boxShadow: `0 20px 60px rgba(0, 0, 0, 0.7), 0 0 35px ${isCurrentOpened ? currentGift.color : '#ffd700'}35`,
            marginBottom: '32px',
            background: 'radial-gradient(circle at 50% 30%, rgba(35, 12, 68, 0.95) 0%, rgba(14, 4, 30, 0.98) 100%)'
          }}
        >
          {/* Top Tag */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(0, 0, 0, 0.45)',
              border: `1px solid ${isCurrentOpened ? currentGift.color : '#ffd700'}`,
              color: isCurrentOpened ? currentGift.color : '#ffd700',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '1px',
              marginBottom: '16px'
            }}
          >
            <Sparkles size={14} />
            <span>{isCurrentOpened ? currentGift.category : currentTeaser.label}</span>
          </div>

          <AnimatePresence mode="wait">
            {!isCurrentOpened ? (
              /* UNOPENED MYSTERY STATE: Shaking Mystery Surprise Box */
              <motion.div
                key={`unopened-${currentGift.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.4 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px 0',
                  minHeight: '340px'
                }}
              >
                {/* 3D Shaking Mystery Box with Glowing Ribbons */}
                <motion.div
                  animate={
                    isOpeningBox
                      ? { rotate: [-12, 12, -18, 18, 0], scale: [1, 1.3, 0.88, 1.25, 1] }
                      : { y: [0, -12, 0], rotate: [0, -3, 3, 0] }
                  }
                  transition={{
                    duration: isOpeningBox ? 0.85 : 2.5,
                    repeat: isOpeningBox ? 0 : Infinity,
                    repeatType: 'reverse'
                  }}
                  style={{
                    position: 'relative',
                    cursor: 'pointer',
                    marginBottom: '20px'
                  }}
                  onClick={() => !isOpeningBox && handleOpenGift(currentGift.id)}
                >
                  <div
                    style={{
                      fontSize: '6.5rem',
                      filter: `drop-shadow(0 15px 30px ${currentTeaser.bgGlow})`
                    }}
                  >
                    {activeGiftIndex === 3 ? '👑' : '🎁'}
                  </div>

                  {/* Question Mark floating badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: -6,
                      right: -10,
                      background: 'radial-gradient(circle, #ff2e93, #b8004f)',
                      color: '#ffffff',
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 900,
                      fontSize: '1.25rem',
                      border: '2px solid #ffffff',
                      boxShadow: '0 0 16px rgba(255, 46, 147, 0.8)'
                    }}
                  >
                    ?
                  </div>
                </motion.div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 4vw, 2.3rem)',
                    color: '#ffd700',
                    marginBottom: '10px',
                    letterSpacing: '0.5px'
                  }}
                >
                  {activeGiftIndex === 3
                    ? '✨ THE GRAND FINALE VIP SURPRISE! 👑'
                    : `MYSTERY SURPRISE GIFT #${activeGiftIndex + 1} 🎀`}
                </h3>

                <p
                  style={{
                    color: 'var(--cream-200)',
                    fontSize: '1.05rem',
                    maxWidth: '520px',
                    marginBottom: '28px',
                    lineHeight: 1.6
                  }}
                >
                  {currentTeaser.teaser}
                </p>

                {/* Surprise Unwrap Action Button */}
                <button
                  onClick={() => handleOpenGift(currentGift.id)}
                  disabled={isOpeningBox}
                  className="btn-festive animate-pulse-glow"
                  style={{ padding: '16px 44px', fontSize: '1.15rem' }}
                >
                  <Sparkles size={22} />
                  <span>{isOpeningBox ? 'Unwrapping Mystery Box… 🎀' : currentTeaser.btn}</span>
                </button>
              </motion.div>
            ) : (
              /* DRAMATIC REVEALED GIFT SHOWCASE */
              <motion.div
                key={`opened-${currentGift.id}`}
                initial={{ opacity: 0, scale: 0.8, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                style={{ textAlign: 'center' }}
              >
                {/* Reveal Header Pill */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '6px 20px',
                    borderRadius: '9999px',
                    background: 'linear-gradient(90deg, #ff2e93, #ffd700)',
                    color: '#12072b',
                    fontSize: '0.95rem',
                    fontWeight: 900,
                    letterSpacing: '1px',
                    marginBottom: '14px',
                    boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)'
                  }}
                >
                  <span>🎉 SURPRISE REVEALED! 😂</span>
                </motion.div>

                {/* Gift SVG Illustration */}
                <div className="animate-float" style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
                  {renderGiftIllustration(currentGift.id)}
                </div>

                {/* Tag / Badge */}
                <div
                  style={{
                    display: 'inline-block',
                    padding: '4px 14px',
                    borderRadius: '9999px',
                    background: `${currentGift.color}25`,
                    border: `1px solid ${currentGift.color}`,
                    color: currentGift.color,
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    marginBottom: '10px'
                  }}
                >
                  {currentGift.tag}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.6rem, 4.5vw, 2.5rem)',
                    color: '#ffffff',
                    fontWeight: 900,
                    marginBottom: '12px',
                    textShadow: `0 0 20px ${currentGift.color}80`
                  }}
                >
                  {currentGift.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: 'var(--cream-200)',
                    fontSize: '1.05rem',
                    maxWidth: '620px',
                    margin: '0 auto 20px',
                    lineHeight: 1.6
                  }}
                >
                  {currentGift.desc}
                </p>

                {/* Funny Brother Quote Card */}
                <div
                  style={{
                    background: 'rgba(0, 0, 0, 0.55)',
                    border: '1px solid rgba(255, 215, 0, 0.35)',
                    borderRadius: '16px',
                    padding: '18px 24px',
                    maxWidth: '640px',
                    margin: '0 auto 24px',
                    textAlign: 'left'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffd700', fontWeight: 800, fontSize: '0.9rem', marginBottom: '6px' }}>
                    <Laugh size={16} color="#ff758c" />
                    <span>BROTHER'S DEDICATION & WISDOM:</span>
                  </div>
                  <p style={{ color: '#fff9f2', fontSize: '1.02rem', fontStyle: 'italic', lineHeight: 1.5, marginBottom: '6px' }}>
                    {currentGift.quote}
                  </p>
                  <div style={{ textAlign: 'right', fontSize: '0.88rem', color: '#ff758c', fontWeight: 700 }}>
                    — {currentGift.sender}
                  </div>
                </div>

                {/* Feature Highlights Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '10px',
                    maxWidth: '640px',
                    margin: '0 auto 28px',
                    textAlign: 'left'
                  }}
                >
                  {currentGift.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        fontSize: '0.86rem',
                        color: 'var(--cream-100)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                      }}
                    >
                      <Star size={14} color="#ffd700" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Next Surprise Button */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
                  {activeGiftIndex < FUNNY_RAKHI_GIFTS.length - 1 ? (
                    <button onClick={handleNextGift} className="btn-festive" style={{ padding: '14px 36px' }}>
                      <span>
                        {activeGiftIndex === 2
                          ? '👑 UNWRAP THE GRAND FINALE SURPRISE! 🎁'
                          : `🎁 READY FOR SURPRISE GIFT #${activeGiftIndex + 2}? (TAP HERE)`}
                      </span>
                      <ArrowRight size={20} />
                    </button>
                  ) : (
                    <div
                      className="glass-pill"
                      style={{
                        borderColor: '#2ed573',
                        color: '#2ed573',
                        fontWeight: 800,
                        padding: '12px 28px',
                        fontSize: '1rem'
                      }}
                    >
                      🎉 ALL 4 SURPRISE GIFTS REVEALED!
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Brother's Sweet True Love Bridge Card (Once all gifts or currently viewed) */}
        {openedSet.size > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card"
            style={{
              padding: '32px 24px',
              border: '1px solid rgba(255, 46, 147, 0.4)',
              background: 'linear-gradient(135deg, rgba(45, 12, 65, 0.85) 0%, rgba(20, 5, 38, 0.95) 100%)',
              marginBottom: '32px',
              textAlign: 'center'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '10px' }}>
              <Heart size={20} fill="#ff2e93" color="#ff2e93" />
              <span style={{ fontSize: '1.2rem' }}>🌸</span>
              <Heart size={20} fill="#ffd700" color="#ffd700" />
            </div>

            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)',
                color: '#ffd700',
                marginBottom: '8px'
              }}
            >
              OKAY OKAY, ALL JOKES ASIDE… ❤️
            </h4>

            <p
              style={{
                color: 'var(--cream-100)',
                fontSize: '1.05rem',
                maxWidth: '620px',
                margin: '0 auto 16px',
                lineHeight: 1.6
              }}
            >
              No matter how much we tease, fight, or pull each other’s legs, having you as my sister is the greatest blessing of all.
            </p>

            <p style={{ color: '#ff758c', fontWeight: 700, fontSize: '0.95rem' }}>
              With endless love, protection & lifelong teasing — Lovely brother Kathirvel
            </p>
          </motion.div>
        )}

        {/* Continue to Emotional Message */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <button onClick={onNext} className="btn-festive" style={{ fontSize: '1.15rem', padding: '16px 40px' }}>
            <span>READ HEARTFELT WORDS FROM BROTHER ❤️</span>
            <ArrowRight size={22} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
