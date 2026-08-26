import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles, Gift, Laugh, Shield } from 'lucide-react';
import { audioSystem } from '../utils/audioSystem';
import { triggerFestiveConfetti, triggerHeartConfetti } from '../utils/confettiHelper';

export default function SisterCertificate() {
  const [sisterName, setSisterName] = useState('');
  const [brotherName, setBrotherName] = useState('');
  const [awardTitle, setAwardTitle] = useState("World's #1 Drama Queen & Best Sister 🏆");
  const [customTitle, setCustomTitle] = useState('');
  const [brotherPromise, setBrotherPromise] = useState("Unlimited 24/7 Bodyguard Protection & Zero Snitching 🛡️");
  const [theme, setTheme] = useState('royal'); // 'royal' | 'ruby' | 'midnight'
  const [isDownloading, setIsDownloading] = useState(false);

  const displaySisterName = sisterName.trim() || 'My Favorite Drama Queen';
  const displayBrotherName = brotherName.trim() || 'Your Cooler Brother Kathirvel T 😎';
  const finalAwardTitle = awardTitle === 'custom' ? (customTitle.trim() || 'Supreme Sibling of Chaos 👑') : awardTitle;

  const awardOptions = [
    { value: "World's #1 Drama Queen & Best Sister 🏆", label: "🏆 World's #1 Drama Queen & Best Sister" },
    { value: "Certified Snack Thief & Remote Hijacker 🍫", label: "🍫 Certified Snack Thief & Remote Hijacker" },
    { value: "Master of Fake Crying to Parents 😭", label: "😭 Master of Fake Crying to Parents" },
    { value: "Argument Champion (Winner by Screaming Louder) 😂", label: "😂 Argument Champion (Winner by Screaming Louder)" },
    { value: "Most Expensive Sister to Keep Happy 💸", label: "💸 Most Expensive Sister to Keep Happy" },
    { value: "Chief Secret Keeper & Blackmail Specialist 🕶️", label: "🕶️ Chief Secret Keeper & Blackmail Specialist" },
    { value: "Most Precious Sister & Forever Bestie ❤️", label: "❤️ Most Precious Sister & Forever Bestie" },
    { value: "custom", label: "✏️ Write Custom Funny Title..." }
  ];

  const brotherPromises = [
    { value: "Unlimited 24/7 Bodyguard Protection & Zero Snitching 🛡️", label: "🛡️ Unlimited 24/7 Bodyguard Protection & Zero Snitching" },
    { value: "Right to steal 20% of brother's snacks without lawsuit 🍟", label: "🍟 Right to steal 20% of brother's snacks without lawsuit" },
    { value: "Free lifelong tech support and spider killing services 🕷️", label: "🕷️ Free lifelong tech support and spider killing services" },
    { value: "Always picking you up when you're stranded anywhere 🚗", label: "🚗 Always picking you up when you're stranded anywhere" },
    { value: "Listening to your 45-minute daily gossip without sleeping 👂", label: "👂 Listening to your 45-minute daily gossip without sleeping" }
  ];

  const handleGenerate = (e) => {
    if (e) e.preventDefault();
    audioSystem.playCelebrationFanfare();
    triggerFestiveConfetti();
    triggerHeartConfetti();
  };

  // High-Resolution Canvas Certificate Generator & Downloader (Funny Brother's Gift Edition)
  const downloadCertificate = () => {
    setIsDownloading(true);
    audioSystem.playSparkle();

    const canvas = document.createElement('canvas');
    const width = 1600;
    const height = 1140;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // 1. Theme Background
    let bgGrad;
    if (theme === 'ruby') {
      bgGrad = ctx.createRadialGradient(width / 2, height / 2, 80, width / 2, height / 2, 950);
      bgGrad.addColorStop(0, '#4a0821');
      bgGrad.addColorStop(0.5, '#290312');
      bgGrad.addColorStop(1, '#120007');
    } else if (theme === 'midnight') {
      bgGrad = ctx.createRadialGradient(width / 2, height / 2, 80, width / 2, height / 2, 950);
      bgGrad.addColorStop(0, '#0f2452');
      bgGrad.addColorStop(0.5, '#08132e');
      bgGrad.addColorStop(1, '#020714');
    } else {
      // Royal Purple default
      bgGrad = ctx.createRadialGradient(width / 2, height / 2, 80, width / 2, height / 2, 950);
      bgGrad.addColorStop(0, '#320e63');
      bgGrad.addColorStop(0.5, '#1b0638');
      bgGrad.addColorStop(1, '#0c021a');
    }
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, width, height);

    // Sparkle festive stars
    ctx.fillStyle = 'rgba(255, 215, 0, 0.18)';
    for (let i = 0; i < 50; i++) {
      const sx = (i * 137.5) % width;
      const sy = (i * 219.7) % height;
      const sr = (i % 3) + 1.5;
      ctx.beginPath();
      ctx.arc(sx, sy, sr, 0, Math.PI * 2);
      ctx.fill();
    }

    // 2. Ornate Golden Outer & Inner Borders
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 8;
    ctx.strokeRect(36, 36, width - 72, height - 72);

    ctx.strokeStyle = 'rgba(255, 215, 0, 0.45)';
    ctx.lineWidth = 3;
    ctx.strokeRect(54, 54, width - 108, height - 108);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.12)';
    ctx.lineWidth = 1;
    ctx.strokeRect(68, 68, width - 136, height - 136);

    // 3. Decorative Gold Corner Floral Accents
    const drawCorner = (cx, cy) => {
      ctx.fillStyle = '#ffd700';
      ctx.beginPath();
      ctx.arc(cx, cy, 18, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = '#ff758c';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(cx, cy, 28, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = '22px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('🌸', cx, cy);
    };
    drawCorner(54, 54);
    drawCorner(width - 54, 54);
    drawCorner(54, height - 54);
    drawCorner(width - 54, height - 54);

    // 4. Header Top Banner (Gift from Brother)
    ctx.textBaseline = 'alphabetic';
    ctx.textAlign = 'center';
    ctx.font = 'bold 22px Outfit, sans-serif';
    ctx.fillStyle = '#ff758c';
    ctx.shadowColor = 'rgba(255, 46, 147, 0.7)';
    ctx.shadowBlur = 10;
    ctx.fillText('🎁 OFFICIAL RAKSHA BANDHAN GIFT & TOLERANCE AWARD FROM YOUR BROTHER 🎁', width / 2, 130);
    ctx.shadowBlur = 0;

    // 5. Main Certificate Title
    ctx.font = '900 56px "Cinzel Decorative", Georgia, serif';
    const titleGrad = ctx.createLinearGradient(width / 2 - 350, 0, width / 2 + 350, 0);
    titleGrad.addColorStop(0, '#ffe58f');
    titleGrad.addColorStop(0.5, '#ffd700');
    titleGrad.addColorStop(1, '#d48806');
    ctx.fillStyle = titleGrad;
    ctx.shadowColor = 'rgba(255, 215, 0, 0.7)';
    ctx.shadowBlur = 25;
    ctx.fillText('CERTIFICATE OF SISTERHOOD', width / 2, 210);
    ctx.shadowBlur = 0;

    // Sub-banner
    ctx.font = '600 20px Outfit, sans-serif';
    ctx.fillStyle = 'rgba(255, 215, 0, 0.8)';
    ctx.fillText('⭐ OFFICIAL BROTHER-APPROVED SIBLING SURVIVAL AWARD ⭐', width / 2, 250);

    // Decorative divider line
    ctx.strokeStyle = '#ffd700';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 320, 275);
    ctx.lineTo(width / 2 + 320, 275);
    ctx.stroke();

    // 6. Presentation Text
    ctx.font = '300 26px Outfit, sans-serif';
    ctx.fillStyle = '#fde8d7';
    ctx.fillText('This official Raksha Bandhan gift is proudly presented to:', width / 2, 335);

    // 7. Sister Name (Glowing and Large)
    ctx.font = 'bold 68px "Outfit", Georgia, serif';
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = 'rgba(255, 46, 147, 0.9)';
    ctx.shadowBlur = 24;
    ctx.fillText(displaySisterName, width / 2, 425);
    ctx.shadowBlur = 0;

    // Decorative underline under sister name
    const nameLineGrad = ctx.createLinearGradient(width / 2 - 320, 0, width / 2 + 320, 0);
    nameLineGrad.addColorStop(0, 'rgba(255, 215, 0, 0)');
    nameLineGrad.addColorStop(0.5, '#ffd700');
    nameLineGrad.addColorStop(1, 'rgba(255, 215, 0, 0)');
    ctx.strokeStyle = nameLineGrad;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 320, 455);
    ctx.lineTo(width / 2 + 320, 455);
    ctx.stroke();

    // 8. Award Category Box
    ctx.font = 'bold 34px Outfit, sans-serif';
    ctx.fillStyle = '#ffd700';
    ctx.fillText(`“ ${finalAwardTitle} ”`, width / 2, 520);

    // 9. Funny & Heartfelt Citation Text
    ctx.font = '400 23px Outfit, sans-serif';
    ctx.fillStyle = '#f5e6d3';
    ctx.fillText('For successfully surviving her brother, eating 50% of his food without permission,', width / 2, 595);
    ctx.fillText('winning every argument by sheer volume, and being the most irreplaceable, beloved blessing in life.', width / 2, 635);

    // 10. Brother's Sacred Gift Perks (The Official Clauses Box)
    const boxX = 140;
    const boxY = 675;
    const boxW = width - 280;
    const boxH = 160;

    ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
    ctx.fillRect(boxX, boxY, boxW, boxH);
    ctx.strokeStyle = 'rgba(255, 215, 0, 0.35)';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(boxX, boxY, boxW, boxH);

    ctx.textAlign = 'left';
    ctx.font = 'bold 20px Outfit, sans-serif';
    ctx.fillStyle = '#ff758c';
    ctx.fillText('📜 BROTHER\'S SACRED RAKSHA BANDHAN GIFT CLAUSES & PROMISES:', boxX + 24, boxY + 38);

    ctx.font = '400 20px Outfit, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`1. Brother's Special Promise: ${brotherPromise}`, boxX + 24, boxY + 76);
    ctx.fillText('2. Lifetime Warranty: 100% Free emergency hugs, defense against anyone who annoys you, and zero returns!', boxX + 24, boxY + 110);
    ctx.font = 'italic 17px Outfit, sans-serif';
    ctx.fillStyle = '#ffd700';
    ctx.fillText('*Warning: Brother still reserves the legal right to tease you daily and blame you for broken household items.', boxX + 24, boxY + 142);

    // 11. Footer: Occasion, Center Seal, Brother Signature
    // Left: Occasion & Rakhi Gift
    ctx.textAlign = 'left';
    ctx.font = '600 19px Outfit, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fillText('FESTIVAL:', 140, 915);
    ctx.font = 'bold 23px Outfit, sans-serif';
    ctx.fillStyle = '#ffd700';
    ctx.fillText('Raksha Bandhan 2026', 140, 948);
    ctx.font = '500 17px Outfit, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.fillText('Gift Status: Delivered with Love ❤️', 140, 980);

    // Center Gold Seal Graphic
    ctx.textAlign = 'center';
    const sealX = width / 2;
    const sealY = 945;
    const sealR = 66;

    ctx.shadowColor = 'rgba(255, 215, 0, 0.75)';
    ctx.shadowBlur = 25;
    const sealGrad = ctx.createRadialGradient(sealX, sealY, 10, sealX, sealY, sealR);
    sealGrad.addColorStop(0, '#ffe58f');
    sealGrad.addColorStop(0.6, '#ffd700');
    sealGrad.addColorStop(1, '#b87700');
    ctx.fillStyle = sealGrad;
    ctx.beginPath();
    ctx.arc(sealX, sealY, sealR, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // Seal Inner Ring
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(sealX, sealY, sealR - 8, 0, Math.PI * 2);
    ctx.stroke();

    // Seal Text
    ctx.fillStyle = '#1a0833';
    ctx.font = '900 16px Outfit, sans-serif';
    ctx.fillText('100% BRO APPROVED', sealX, sealY - 14);
    ctx.font = '900 20px Outfit, sans-serif';
    ctx.fillText('NO REFUNDS', sealX, sealY + 12);
    ctx.font = 'bold 13px Outfit, sans-serif';
    ctx.fillText('★ ★ ★', sealX, sealY + 30);

    // Right: Presented By Brother
    ctx.textAlign = 'right';
    ctx.font = '600 19px Outfit, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fillText('GIFTED WITH LOVE BY YOUR BROTHER:', width - 140, 915);

    ctx.font = 'bold 28px Outfit, sans-serif';
    ctx.fillStyle = '#ffd700';
    ctx.fillText(displayBrotherName, width - 140, 955);

    ctx.strokeStyle = 'rgba(255, 215, 0, 0.5)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(width - 420, 980);
    ctx.lineTo(width - 140, 980);
    ctx.stroke();

    ctx.font = 'italic 16px Outfit, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
    ctx.fillText('Authorized Brother Signature & Lifetime Bond', width - 140, 1005);

    // 12. Trigger Instant Download
    setTimeout(() => {
      const link = document.createElement('a');
      const safeName = displaySisterName.replace(/[^a-zA-Z0-9]/g, '_');
      link.download = `Sister_Rakhi_Gift_Certificate_${safeName}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      setIsDownloading(false);
    }, 400);
  };

  return (
    <div id="sister-certificate-section" style={{ marginTop: '56px', width: '100%' }}>
      {/* Header Tag */}
      <div className="section-tag" style={{ marginBottom: '14px' }}>
        <Gift size={16} />
        <span>GIFT FROM BROTHER FOR RAKSHA BANDHAN</span>
      </div>

      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.8rem, 5vw, 3rem)',
          color: '#ffd700',
          marginBottom: '10px'
        }}
      >
        CLAIM YOUR SISTER CERTIFICATE 📜
      </h2>
      <p style={{ color: 'var(--cream-muted)', fontSize: '1.05rem', maxWidth: '680px', margin: '0 auto 32px', lineHeight: 1.6 }}>
        A funny, heartwarming, and 100% original gift certificate from brother to sister! Personalize it with her name and download the keepsake award.
      </p>

      {/* Input Form & Customization Box */}
      <div
        className="glass-card"
        style={{
          padding: '32px 28px',
          maxWidth: '740px',
          margin: '0 auto 36px',
          textAlign: 'left',
          border: '1px solid rgba(255, 215, 0, 0.4)',
          boxShadow: '0 12px 36px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 215, 0, 0.15)'
        }}
      >
        <form onSubmit={handleGenerate} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Sister's Name & Brother's Name Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
            {/* Sister's Name */}
            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold-300)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '8px' }}>
                <Laugh size={16} color="#ff758c" />
                <span>Sister's Name:</span>
                <span style={{ color: '#ff758c', fontSize: '0.8rem' }}>(Required)</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Priya, Diya, Sneha, Drama Queen..."
                value={sisterName}
                onChange={(e) => setSisterName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '13px 16px',
                  borderRadius: '12px',
                  background: 'rgba(0, 0, 0, 0.45)',
                  border: '1px solid rgba(255, 215, 0, 0.4)',
                  color: '#ffffff',
                  fontSize: '1rem',
                  outline: 'none',
                  fontFamily: 'var(--font-body)',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)'
                }}
              />
            </div>

            {/* Brother's Name */}
            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold-300)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '8px' }}>
                <Shield size={16} color="#ffd700" />
                <span>Brother's Name / Nickname:</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Kathirvel T, Your Cooler Brother, Bhaiya..."
                value={brotherName}
                onChange={(e) => setBrotherName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '13px 16px',
                  borderRadius: '12px',
                  background: 'rgba(0, 0, 0, 0.45)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  fontSize: '0.95rem',
                  outline: 'none',
                  fontFamily: 'var(--font-body)'
                }}
              />
            </div>
          </div>

          {/* Funny Award Title & Brother's Promise */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
            <div>
              <label style={{ display: 'block', color: 'var(--gold-300)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '8px' }}>
                🏆 Sister's Official Funny Award:
              </label>
              <select
                value={awardTitle}
                onChange={(e) => setAwardTitle(e.target.value)}
                style={{
                  width: '100%',
                  padding: '13px 16px',
                  borderRadius: '12px',
                  background: '#1a0b33',
                  border: '1px solid rgba(255, 215, 0, 0.4)',
                  color: '#ffd700',
                  fontSize: '0.95rem',
                  outline: 'none',
                  fontFamily: 'var(--font-body)',
                  cursor: 'pointer'
                }}
              >
                {awardOptions.map((opt, i) => (
                  <option key={i} value={opt.value} style={{ background: '#1a0b33', color: '#ffd700' }}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', color: 'var(--gold-300)', fontSize: '0.95rem', fontWeight: 700, marginBottom: '8px' }}>
                🎁 Brother's Special Rakhi Promise:
              </label>
              <select
                value={brotherPromise}
                onChange={(e) => setBrotherPromise(e.target.value)}
                style={{
                  width: '100%',
                  padding: '13px 16px',
                  borderRadius: '12px',
                  background: '#1a0b33',
                  border: '1px solid rgba(255, 215, 0, 0.4)',
                  color: '#ffd700',
                  fontSize: '0.95rem',
                  outline: 'none',
                  fontFamily: 'var(--font-body)',
                  cursor: 'pointer'
                }}
              >
                {brotherPromises.map((opt, i) => (
                  <option key={i} value={opt.value} style={{ background: '#1a0b33', color: '#ffd700' }}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Custom Award Title input if selected */}
          {awardTitle === 'custom' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              style={{ overflow: 'hidden' }}
            >
              <label style={{ display: 'block', color: 'var(--gold-300)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '6px' }}>
                Your Custom Funny Title:
              </label>
              <input
                type="text"
                placeholder="e.g. Master of Stealing My Hoodies 🧥"
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  background: 'rgba(0, 0, 0, 0.45)',
                  border: '1px solid #ffd700',
                  color: '#ffd700',
                  fontSize: '0.95rem',
                  outline: 'none',
                  fontFamily: 'var(--font-body)'
                }}
              />
            </motion.div>
          )}

          {/* Certificate Color Theme Picker */}
          <div>
            <label style={{ display: 'block', color: 'var(--gold-300)', fontSize: '0.9rem', fontWeight: 700, marginBottom: '8px' }}>
              Certificate Theme Style:
            </label>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                { id: 'royal', label: '👑 Royal Purple & Gold', bg: 'linear-gradient(135deg, #320e63, #150529)' },
                { id: 'ruby', label: '🌹 Ruby Rose & Gold', bg: 'linear-gradient(135deg, #4a0821, #1e020d)' },
                { id: 'midnight', label: '🌌 Midnight Celestial', bg: 'linear-gradient(135deg, #0f2452, #040b1a)' }
              ].map((thm) => (
                <button
                  type="button"
                  key={thm.id}
                  onClick={() => {
                    audioSystem.playClick();
                    setTheme(thm.id);
                  }}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '9999px',
                    border: theme === thm.id ? '2px solid #ffd700' : '1px solid rgba(255, 255, 255, 0.15)',
                    background: thm.bg,
                    color: theme === thm.id ? '#ffd700' : 'var(--cream-200)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    transform: theme === thm.id ? 'scale(1.04)' : 'scale(1)'
                  }}
                >
                  {thm.label}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <div style={{ textAlign: 'center', marginTop: '8px' }}>
            <button
              type="button"
              onClick={handleGenerate}
              className="btn-festive"
              style={{ padding: '14px 40px', width: '100%', maxWidth: '360px' }}
            >
              <Sparkles size={20} />
              <span>SEAL & CELEBRATE GIFT 🎁</span>
            </button>
          </div>
        </form>
      </div>

      {/* Live Certificate Visual Preview Card */}
      <div className="printable-certificate-area">
        <motion.div
          key={`${theme}-${displaySisterName}-${finalAwardTitle}-${brotherPromise}`}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="glass-card certificate-card"
          style={{
            maxWidth: '840px',
            margin: '0 auto 36px',
            padding: '48px 36px',
            border: '3px solid #ffd700',
            borderRadius: '24px',
            background:
              theme === 'ruby'
                ? 'radial-gradient(circle at 50% 30%, rgba(74, 8, 33, 0.96) 0%, rgba(18, 2, 13, 0.98) 100%)'
                : theme === 'midnight'
                ? 'radial-gradient(circle at 50% 30%, rgba(15, 36, 82, 0.96) 0%, rgba(4, 11, 26, 0.98) 100%)'
                : 'radial-gradient(circle at 50% 30%, rgba(55, 20, 105, 0.96) 0%, rgba(18, 5, 40, 0.98) 100%)',
            boxShadow: '0 24px 70px rgba(0, 0, 0, 0.85), 0 0 45px rgba(255, 215, 0, 0.35)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Ornate Corner Accents */}
          <div style={{ position: 'absolute', top: 16, left: 16, color: '#ffd700', fontSize: '1.5rem', filter: 'drop-shadow(0 0 6px rgba(255, 215, 0, 0.6))' }}>🌸</div>
          <div style={{ position: 'absolute', top: 16, right: 16, color: '#ffd700', fontSize: '1.5rem', filter: 'drop-shadow(0 0 6px rgba(255, 215, 0, 0.6))' }}>🌸</div>
          <div style={{ position: 'absolute', bottom: 16, left: 16, color: '#ffd700', fontSize: '1.5rem', filter: 'drop-shadow(0 0 6px rgba(255, 215, 0, 0.6))' }}>🌸</div>
          <div style={{ position: 'absolute', bottom: 16, right: 16, color: '#ffd700', fontSize: '1.5rem', filter: 'drop-shadow(0 0 6px rgba(255, 215, 0, 0.6))' }}>🌸</div>

          {/* Certificate Gift Tag */}
          <p style={{ fontSize: '0.85rem', color: '#ff758c', letterSpacing: '2px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '10px' }}>
            🎁 OFFICIAL RAKSHA BANDHAN GIFT FROM YOUR BROTHER 🎁
          </p>

          {/* Main Title */}
          <h3
            className="text-gold text-glow-gold"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.7rem, 4.8vw, 2.8rem)',
              fontWeight: 900,
              marginBottom: '6px',
              letterSpacing: '1px'
            }}
          >
            CERTIFICATE OF SISTERHOOD
          </h3>

          <p style={{ color: 'var(--gold-300)', fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1.5px', marginBottom: '14px' }}>
            ⭐ OFFICIAL BROTHER-APPROVED SIBLING SURVIVAL AWARD ⭐
          </p>

          <p style={{ color: 'var(--cream-muted)', fontSize: '1.05rem', marginBottom: '12px' }}>
            This official Raksha Bandhan gift is proudly presented to:
          </p>

          {/* Sister's Name */}
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 6vw, 3.6rem)',
              fontWeight: 900,
              color: '#ffffff',
              textShadow: '0 0 28px rgba(255, 46, 147, 0.85), 0 0 10px rgba(255, 215, 0, 0.5)',
              marginBottom: '8px',
              letterSpacing: '0.5px'
            }}
          >
            {displaySisterName}
          </div>

          {/* Gold Underline */}
          <div style={{ width: '260px', height: '2px', background: 'linear-gradient(90deg, transparent, #ffd700, transparent)', margin: '0 auto 18px' }} />

          {/* Award Title Badge */}
          <div
            className="glass-pill"
            style={{
              fontSize: '1.15rem',
              fontWeight: 700,
              padding: '8px 24px',
              marginBottom: '20px',
              background: 'rgba(255, 215, 0, 0.18)',
              borderColor: '#ffd700',
              boxShadow: '0 0 16px rgba(255, 215, 0, 0.25)'
            }}
          >
            <span>“ {finalAwardTitle} ”</span>
          </div>

          {/* Citation Paragraph */}
          <p
            style={{
              fontSize: 'clamp(0.95rem, 2.4vw, 1.1rem)',
              color: 'var(--cream-200)',
              maxWidth: '640px',
              margin: '0 auto 24px',
              lineHeight: 1.6
            }}
          >
            For successfully surviving her brother, eating 50% of his food without permission, winning every single argument by sheer volume, and being an irreplaceable blessing in life.
          </p>

          {/* Brother's Sacred Clauses Box */}
          <div
            style={{
              background: 'rgba(0, 0, 0, 0.45)',
              border: '1px solid rgba(255, 215, 0, 0.35)',
              borderRadius: '16px',
              padding: '18px 22px',
              maxWidth: '680px',
              margin: '0 auto 28px',
              textAlign: 'left',
              fontSize: '0.92rem',
              lineHeight: 1.6
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ff758c', fontWeight: 800, marginBottom: '8px' }}>
              <Shield size={16} />
              <span>BROTHER'S SACRED RAKSHA BANDHAN CLAUSES & PROMISES:</span>
            </div>
            <p style={{ color: '#ffffff', marginBottom: '6px' }}>
              <strong>1. Special Gift Promise:</strong> {brotherPromise}
            </p>
            <p style={{ color: 'var(--cream-muted)', marginBottom: '6px' }}>
              <strong>2. Lifetime Warranty:</strong> 100% Free emergency hugs, defense against anyone who annoys you, and zero returns!
            </p>
            <p style={{ color: '#ffd700', fontSize: '0.82rem', fontStyle: 'italic' }}>
              *Warning: Brother still reserves the legal right to tease you daily and blame you for broken household items.
            </p>
          </div>

          {/* Footer Details: Seal & Signatures */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 215, 0, 0.25)',
              flexWrap: 'wrap',
              gap: '20px'
            }}
          >
            {/* Occasion */}
            <div style={{ textAlign: 'left' }}>
              <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--cream-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Festival & Occasion
              </span>
              <span style={{ fontSize: '0.95rem', color: '#ffd700', fontWeight: 700 }}>
                Raksha Bandhan 2026
              </span>
              <span style={{ display: 'block', fontSize: '0.75rem', color: '#ff758c', fontWeight: 600, marginTop: '2px' }}>
                Gift Status: Delivered with Love ❤️
              </span>
            </div>

            {/* Center Royal Gold Seal Stamp */}
            <div
              style={{
                width: '76px',
                height: '76px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #ffe58f 0%, #ffd700 40%, #b87700 100%)',
                border: '3px solid #ffffff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#12072b',
                fontWeight: 900,
                fontSize: '0.62rem',
                boxShadow: '0 0 20px rgba(255, 215, 0, 0.8)',
                letterSpacing: '0.5px'
              }}
            >
              <span>100% BRO</span>
              <span style={{ fontSize: '0.68rem' }}>APPROVED</span>
              <span style={{ fontSize: '0.55rem' }}>NO REFUNDS</span>
            </div>

            {/* Presented By Brother */}
            <div style={{ textAlign: 'right' }}>
              <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--cream-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Gifted With Love By Brother
              </span>
              <span style={{ fontSize: '1rem', color: '#ffd700', fontWeight: 700 }}>
                {displayBrotherName}
              </span>
              <div style={{ width: '120px', height: '1px', background: 'rgba(255, 215, 0, 0.4)', marginTop: '4px', marginLeft: 'auto' }} />
              <span style={{ display: 'block', fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic', marginTop: '2px' }}>
                Authorized Sibling Bond
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Action Button: Download PNG Certificate Only */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '8px' }}>
        <button
          onClick={downloadCertificate}
          disabled={isDownloading}
          className="btn-festive"
          style={{ padding: '16px 36px', fontSize: '1.15rem' }}
        >
          <Download size={22} />
          <span>{isDownloading ? 'Generating Image… ⏳' : 'DOWNLOAD GIFT CERTIFICATE (PNG) 📸'}</span>
        </button>
      </div>
    </div>
  );
}
