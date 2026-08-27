import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HeaderNav from './components/HeaderNav';
import FloatingParticles from './components/FloatingParticles';
import FlowerLightningCursor from './components/FlowerLightningCursor';

// Sections
import Section1Opening from './sections/Section1Opening';
import Section2WhatIsASister from './sections/Section2WhatIsASister';
import Section3Superpowers from './sections/Section4Superpowers';
import Section4Timeline from './sections/Section5Timeline';
import Section5VirtualRakhi from './sections/Section6VirtualRakhi';
import Section6FunnyGifts from './sections/SectionFunnyGifts';
import Section7EmotionalMessage from './sections/Section7EmotionalMessage';
import Section8MiniGame from './sections/Section8MiniGame';
import Section9FinalSurprise from './sections/Section9FinalSurprise';
import Section10Celebration from './sections/Section10Celebration';

export default function App() {
  const [activeSection, setActiveSection] = useState(1);
  const TOTAL_SECTIONS = 10;

  // Scroll to top on section change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const handleNextSection = () => {
    if (activeSection < TOTAL_SECTIONS) {
      setActiveSection((prev) => prev + 1);
    }
  };

  const handleNavigate = (sectionId) => {
    if (sectionId >= 1 && sectionId <= TOTAL_SECTIONS) {
      setActiveSection(sectionId);
    }
  };

  const handleReplay = () => {
    setActiveSection(1);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' && activeSection < TOTAL_SECTIONS) {
        setActiveSection((prev) => prev + 1);
      } else if (e.key === 'ArrowLeft' && activeSection > 1) {
        setActiveSection((prev) => prev - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSection]);

  return (
    <div className="app-container" style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Background Animated Floating Petals & Light Orbs Canvas */}
      <FloatingParticles />

      {/* Interactive Flower + Lightning Glowing Cursor */}
      <FlowerLightningCursor />

      {/* Floating Header Navigation */}
      <HeaderNav
        activeSection={activeSection}
        onNavigate={handleNavigate}
        totalSections={TOTAL_SECTIONS}
      />

      {/* Main Section Content with Animated Transitions */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={`section-${activeSection}`}
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -30, filter: 'blur(8px)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {activeSection === 1 && <Section1Opening onNext={handleNextSection} />}
            {activeSection === 2 && <Section2WhatIsASister onNext={handleNextSection} />}
            {activeSection === 3 && <Section3Superpowers onNext={handleNextSection} />}
            {activeSection === 4 && <Section4Timeline onNext={handleNextSection} />}
            {activeSection === 5 && <Section5VirtualRakhi onNext={handleNextSection} />}
            {activeSection === 6 && <Section6FunnyGifts onNext={handleNextSection} />}
            {activeSection === 7 && <Section7EmotionalMessage onNext={handleNextSection} />}
            {activeSection === 8 && <Section8MiniGame onNext={handleNextSection} />}
            {activeSection === 9 && <Section9FinalSurprise onNext={handleNextSection} />}
            {activeSection === 10 && <Section10Celebration onReplay={handleReplay} />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
