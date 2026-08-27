import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Menu, X, Heart } from 'lucide-react';
import { audioSystem } from '../utils/audioSystem';

export default function HeaderNav({ activeSection, onNavigate, totalSections = 9 }) {
  const [isPlayingMusic, setIsPlayingMusic] = useState(audioSystem.isPlaying);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    return audioSystem.onStateChange(setIsPlayingMusic);
  }, []);

  const toggleMusic = () => {
    audioSystem.toggleMusic();
    audioSystem.playClick();
  };

  const sectionsList = [
    { id: 1, name: 'The Opening', icon: '✨' },
    { id: 2, name: 'What is a Sister?', icon: '📖' },
    { id: 3, name: 'Superpowers', icon: '⚡' },
    { id: 4, name: 'The Bond Timeline', icon: '⏳' },
    { id: 5, name: 'Virtual Rakhi', icon: '🎀' },
    { id: 6, name: "Brother's Gifts", icon: '🎁' },
    { id: 7, name: 'Heartfelt Words', icon: '💌' },
    { id: 8, name: 'Mini Game', icon: '🎮' },
    { id: 9, name: 'Grand Surprise', icon: '🌟' },
    { id: 10, name: 'Celebration & Certificate', icon: '📜' },
  ];

  const handleNavClick = (sectionId) => {
    audioSystem.playClick();
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  const progressPercent = Math.round((activeSection / totalSections) * 100);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 32px)',
          maxWidth: '1080px',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 20px',
          background: 'rgba(26, 11, 51, 0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 215, 0, 0.25)',
          borderRadius: '9999px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
        }}
      >
        {/* Brand / Logo */}
        <div
          onClick={() => handleNavClick(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <span style={{ fontSize: '1.25rem' }}>🌸</span>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1.1 }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(0.85rem, 2vw, 1.05rem)',
                letterSpacing: '0.5px'
              }}
              className="text-gold"
            >
              FOR ALL SISTERS
            </span>
            <span style={{ fontSize: '0.68rem', color: '#ff758c', fontWeight: 600, letterSpacing: '0.3px' }} className="hide-mobile">
              By Lovely brother Kathirvel
            </span>
          </div>
          <Heart size={16} fill="#ff2e93" color="#ff2e93" style={{ animation: 'pulse 1.5s infinite' }} />
        </div>

        {/* Progress Tracker (Desktop/Tablet) */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(0, 0, 0, 0.25)',
            padding: '4px 14px',
            borderRadius: '9999px',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}
          className="desktop-progress"
        >
          <span style={{ fontSize: '0.8rem', color: 'var(--gold-300)', fontWeight: 600 }}>
            Chapter {activeSection} of {totalSections}
          </span>
          <div
            style={{
              width: 80,
              height: 6,
              background: 'rgba(255, 255, 255, 0.15)',
              borderRadius: 3,
              overflow: 'hidden'
            }}
          >
            <div
              style={{
                width: `${progressPercent}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #ff2e93, #ffd700)',
                transition: 'width 0.4s ease'
              }}
            />
          </div>
        </div>

        {/* Controls: Sound & Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Music Toggle */}
          <button
            onClick={toggleMusic}
            aria-label={isPlayingMusic ? "Mute Background Music" : "Play Background Music"}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '9999px',
              border: isPlayingMusic ? '1px solid rgba(255, 215, 0, 0.5)' : '1px solid rgba(255, 255, 255, 0.2)',
              background: isPlayingMusic ? 'rgba(255, 215, 0, 0.15)' : 'rgba(255, 255, 255, 0.06)',
              color: isPlayingMusic ? '#ffd700' : 'var(--cream-muted)',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 600,
              transition: 'all 0.3s ease'
            }}
          >
            {isPlayingMusic ? (
              <>
                <Volume2 size={16} color="#ffd700" />
                <span className="hide-mobile">MUSIC ON 🎵</span>
              </>
            ) : (
              <>
                <VolumeX size={16} />
                <span className="hide-mobile">MUSIC OFF 🔇</span>
              </>
            )}
          </button>

          {/* Chapters Menu Toggle */}
          <button
            onClick={() => {
              audioSystem.playClick();
              setIsMenuOpen(!isMenuOpen);
            }}
            aria-label="Toggle Chapters Menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 36,
              height: 36,
              borderRadius: '50%',
              border: '1px solid rgba(255, 215, 0, 0.3)',
              background: 'rgba(255, 255, 255, 0.08)',
              color: 'var(--cream-100)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Chapters Overlay Drawer */}
      {isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            background: 'rgba(10, 2, 23, 0.88)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            style={{
              background: 'rgba(30, 12, 60, 0.95)',
              border: '1px solid rgba(255, 215, 0, 0.35)',
              borderRadius: '24px',
              padding: '32px 24px',
              maxWidth: '480px',
              width: '100%',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)',
              textAlign: 'center'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                marginBottom: '4px',
                color: '#ffd700'
              }}
            >
              JOURNEY CHAPTERS
            </h3>
            <p style={{ color: '#ff758c', fontSize: '0.82rem', fontWeight: 600, marginBottom: '6px' }}>
              Made with ❤️ by Lovely brother Kathirvel
            </p>
            <p style={{ color: 'var(--cream-muted)', fontSize: '0.88rem', marginBottom: '20px' }}>
              Jump to any moment of the sister celebration
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '10px',
                maxHeight: '340px',
                overflowY: 'auto',
                paddingRight: '6px'
              }}
            >
              {sectionsList.map((sec) => {
                const isActive = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    onClick={() => handleNavClick(sec.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 12px',
                      borderRadius: '12px',
                      border: isActive ? '1px solid #ffd700' : '1px solid rgba(255, 255, 255, 0.1)',
                      background: isActive
                        ? 'linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 46, 147, 0.2))'
                        : 'rgba(255, 255, 255, 0.05)',
                      color: isActive ? '#ffd700' : 'var(--cream-200)',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      fontWeight: isActive ? 700 : 500,
                      textAlign: 'left',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>{sec.icon}</span>
                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {sec.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 640px) {
          .desktop-progress {
            display: flex !important;
          }
        }
        @media (max-width: 500px) {
          .hide-mobile {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
