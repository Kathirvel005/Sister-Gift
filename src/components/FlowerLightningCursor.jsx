import React, { useEffect, useRef, useState } from 'react';

export default function FlowerLightningCursor() {
  const canvasRef = useRef(null);
  const cursorFlowerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [hasMouse, setHasMouse] = useState(false);

  useEffect(() => {
    // Check if device supports fine mouse pointer
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }
    setHasMouse(true);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const mouse = { x: -100, y: -100, prevX: -100, prevY: -100, speed: 0 };
    const trailParticles = [];
    const lightningArcs = [];

    // Helper: Draw a glowing heart on canvas
    const renderHeart = (c, size, color) => {
      c.fillStyle = color;
      c.shadowColor = color;
      c.shadowBlur = 10;
      c.beginPath();
      const s = size * 0.8;
      c.moveTo(0, s * 0.25);
      c.bezierCurveTo(-s * 0.6, -s * 0.6, -s * 1.1, s * 0.35, 0, s * 1.1);
      c.bezierCurveTo(s * 1.1, s * 0.35, s * 0.6, -s * 0.6, 0, s * 0.25);
      c.closePath();
      c.fill();
    };

    // Particle pool with Flowers, Hearts, Lightning Stars, and Light Orbs
    class TrailSpark {
      constructor(x, y, speed) {
        this.x = x + (Math.random() - 0.5) * 10;
        this.y = y + (Math.random() - 0.5) * 10;
        this.vx = (Math.random() - 0.5) * (speed * 0.35 + 2);
        this.vy = (Math.random() - 0.5) * (speed * 0.35 + 2) + 0.2;
        this.size = Math.random() * 7 + 4;
        this.alpha = 1;
        this.decay = Math.random() * 0.025 + 0.018;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.18;
        
        // 0 = Glowing Mini Heart ❤️
        // 1 = Blooming Flower Petal 🌸
        // 2 = Golden Electric Lightning Star ⚡
        // 3 = Electric Cyan Spark Bolt ⚡
        // 4 = Floating Golden Light Orb ✨
        this.type = Math.floor(Math.random() * 5);
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotSpeed;
        this.alpha -= this.decay;
        this.size *= 0.965;
      }

      draw(c) {
        if (this.alpha <= 0) return;
        c.save();
        c.translate(this.x, this.y);
        c.rotate(this.rotation);
        c.globalAlpha = Math.max(0, this.alpha);

        if (this.type === 0) {
          // Glowing Mini Heart ❤️
          const heartColors = ['#ff2e93', '#ff758c', '#ff3366', '#ffd700'];
          const color = heartColors[Math.floor(this.size) % heartColors.length];
          renderHeart(c, this.size, color);
        } else if (this.type === 1) {
          // Blooming Flower Petal 🌸
          const grad = c.createLinearGradient(-this.size, -this.size, this.size, this.size);
          grad.addColorStop(0, '#ffd700');
          grad.addColorStop(0.5, '#ff758c');
          grad.addColorStop(1, '#ff2e93');
          c.fillStyle = grad;
          c.shadowColor = '#ff2e93';
          c.shadowBlur = 8;
          c.beginPath();
          c.ellipse(0, 0, this.size * 0.65, this.size * 1.3, 0.4, 0, Math.PI * 2);
          c.fill();
        } else if (this.type === 2) {
          // 4-Point Golden Electric Lightning Star ⚡
          c.fillStyle = '#ffd700';
          c.shadowColor = '#ffe58f';
          c.shadowBlur = 12;
          const r = this.size * 1.2;
          c.beginPath();
          c.moveTo(0, -r);
          c.lineTo(r * 0.25, -r * 0.25);
          c.lineTo(r, 0);
          c.lineTo(r * 0.25, r * 0.25);
          c.lineTo(0, r);
          c.lineTo(-r * 0.25, r * 0.25);
          c.lineTo(-r, 0);
          c.lineTo(-r * 0.25, -r * 0.25);
          c.closePath();
          c.fill();
        } else if (this.type === 3) {
          // Electric Lightning Zig-Zag Bolt ⚡
          c.strokeStyle = Math.random() > 0.4 ? '#ffd700' : '#00ffff';
          c.shadowColor = c.strokeStyle;
          c.shadowBlur = 10;
          c.lineWidth = 2;
          c.beginPath();
          c.moveTo(-this.size, -this.size * 0.5);
          c.lineTo(0, -this.size * 0.2);
          c.lineTo(-this.size * 0.3, this.size * 0.2);
          c.lineTo(this.size * 0.8, this.size * 0.8);
          c.stroke();
        } else {
          // Floating Golden Light Orb ✨
          const radGrad = c.createRadialGradient(0, 0, 0, 0, 0, this.size);
          radGrad.addColorStop(0, '#ffffff');
          radGrad.addColorStop(0.4, '#ffd700');
          radGrad.addColorStop(1, 'rgba(255, 46, 147, 0)');
          c.fillStyle = radGrad;
          c.beginPath();
          c.arc(0, 0, this.size * 1.3, 0, Math.PI * 2);
          c.fill();
        }

        c.restore();
      }
    }

    // Mini Electric Lightning Arcs connecting cursor to trailing points
    class LightningArc {
      constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.alpha = 0.85;
        this.color = Math.random() > 0.5 ? '#ffd700' : '#ff2e93';
      }

      update() {
        this.alpha -= 0.12;
      }

      draw(c) {
        if (this.alpha <= 0) return;
        c.save();
        c.globalAlpha = Math.max(0, this.alpha);
        c.strokeStyle = this.color;
        c.shadowColor = this.color;
        c.shadowBlur = 12;
        c.lineWidth = 1.8;

        // Generate jagged electric path
        const midX = (this.x1 + this.x2) / 2 + (Math.random() - 0.5) * 20;
        const midY = (this.y1 + this.y2) / 2 + (Math.random() - 0.5) * 20;

        c.beginPath();
        c.moveTo(this.x1, this.y1);
        c.lineTo(midX, midY);
        c.lineTo(this.x2, this.y2);
        c.stroke();
        c.restore();
      }
    }

    let flowerAngle = 0;

    const handleMouseMove = (e) => {
      const dx = e.clientX - mouse.x;
      const dy = e.clientY - mouse.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.speed = speed;

      // Update lead cursor DOM element directly for instant responsiveness
      if (cursorFlowerRef.current) {
        cursorFlowerRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%) rotate(${flowerAngle}deg)`;
      }

      // Spawn trailing flower petals, hearts & lightning sparks based on movement speed
      const spawnCount = Math.min(Math.floor(speed / 5) + 1, 5);
      for (let i = 0; i < spawnCount; i++) {
        trailParticles.push(new TrailSpark(mouse.x, mouse.y, speed));
      }

      // Occasional lightning arc between current and previous mouse pos
      if (speed > 7 && Math.random() > 0.45 && mouse.prevX > 0) {
        lightningArcs.push(new LightningArc(mouse.prevX, mouse.prevY, mouse.x, mouse.y));
      }

      // Check hover state on interactive targets
      const target = e.target;
      const isInteractive = target && (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'SELECT' ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.btn-festive') ||
        target.closest('.glass-card')
      );
      setIsHovered(!!isInteractive);
    };

    const handleMouseDown = (e) => {
      setIsClicked(true);
      // Explosive burst of flower petals, beating hearts, and lightning on click
      for (let i = 0; i < 22; i++) {
        trailParticles.push(new TrailSpark(e.clientX, e.clientY, 16));
      }
      for (let i = 0; i < 6; i++) {
        const offsetAngle = (i / 6) * Math.PI * 2;
        const targetX = e.clientX + Math.cos(offsetAngle) * 40;
        const targetY = e.clientY + Math.sin(offsetAngle) * 40;
        lightningArcs.push(new LightningArc(e.clientX, e.clientY, targetX, targetY));
      }
    };

    const handleMouseUp = () => {
      setIsClicked(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      flowerAngle += 1.4;

      // Render & update lightning arcs
      for (let i = lightningArcs.length - 1; i >= 0; i--) {
        const arc = lightningArcs[i];
        arc.update();
        arc.draw(ctx);
        if (arc.alpha <= 0) {
          lightningArcs.splice(i, 1);
        }
      }

      // Render & update trail particles (hearts, petals, lightning)
      for (let i = trailParticles.length - 1; i >= 0; i--) {
        const p = trailParticles[i];
        p.update();
        p.draw(ctx);
        if (p.alpha <= 0) {
          trailParticles.splice(i, 1);
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!hasMouse) return null;

  return (
    <>
      {/* Canvas for Flower Petals, Hearts, Sparks & Lightning trails */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 99998
        }}
      />

      {/* Floating Flower + Heart + Lightning Core Cursor */}
      <div
        ref={cursorFlowerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 99999,
          willChange: 'transform',
          transition: 'width 0.2s ease, height 0.2s ease, filter 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: isHovered ? '50px' : '40px',
          height: isHovered ? '50px' : '40px',
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)'
        }}
      >
        {/* Outer Pulsing Golden-Pink Light Halo */}
        <div
          style={{
            position: 'absolute',
            inset: -6,
            borderRadius: '50%',
            background: isHovered
              ? 'radial-gradient(circle, rgba(255, 215, 0, 0.7) 0%, rgba(255, 46, 147, 0.5) 50%, transparent 80%)'
              : 'radial-gradient(circle, rgba(255, 215, 0, 0.4) 0%, rgba(255, 46, 147, 0.25) 60%, transparent 80%)',
            filter: 'blur(5px)',
            animation: 'pulseGlow 1.6s infinite ease-in-out'
          }}
        />

        {/* Center Glowing Blooming Flower with Embedded Heart SVG */}
        <svg
          viewBox="0 0 100 100"
          style={{
            width: '100%',
            height: '100%',
            filter: isHovered
              ? 'drop-shadow(0 0 14px #ffd700) drop-shadow(0 0 20px #ff2e93)'
              : 'drop-shadow(0 0 8px #ffd700) drop-shadow(0 0 12px #ff2e93)',
            transform: isClicked ? 'scale(0.85)' : isHovered ? 'scale(1.25)' : 'scale(1)',
            transition: 'transform 0.15s ease'
          }}
        >
          {/* 5 Blooming Lotus/Blossom Petals */}
          <g>
            {[0, 72, 144, 216, 288].map((angle, idx) => (
              <path
                key={idx}
                d="M 50 50 C 34 22, 40 6, 50 0 C 60 6, 66 22, 50 50 Z"
                fill="url(#flowerPetalGrad)"
                stroke="#ffd700"
                strokeWidth="1.5"
                transform={`rotate(${angle} 50 50)`}
                opacity="0.95"
              />
            ))}
          </g>

          {/* Golden Ring between petals and heart */}
          <circle cx="50" cy="50" r="18" fill="url(#coreGoldGrad)" stroke="#ffd700" strokeWidth="1.5" />

          {/* Central Glowing Beating Heart */}
          <path
            d="M 50 44 C 47 38, 38 38, 38 46 C 38 53, 46 58, 50 62 C 54 58, 62 53, 62 46 C 62 38, 53 38, 50 44 Z"
            fill="url(#heartGrad)"
            stroke="#ffffff"
            strokeWidth="1.2"
            style={{
              transformOrigin: '50px 50px',
              animation: 'pulseGlow 1.2s infinite ease-in-out'
            }}
          />

          {/* Central Sparkle Star on the Heart */}
          <circle cx="50" cy="49" r="2.5" fill="#ffffff" />

          {/* Gradients */}
          <defs>
            <linearGradient id="flowerPetalGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#ffd700" />
              <stop offset="45%" stopColor="#ff758c" />
              <stop offset="100%" stopColor="#ff2e93" />
            </linearGradient>
            <radialGradient id="coreGoldGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#ffe58f" />
              <stop offset="100%" stopColor="#d48806" />
            </radialGradient>
            <linearGradient id="heartGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff758c" />
              <stop offset="50%" stopColor="#ff2e93" />
              <stop offset="100%" stopColor="#c0005a" />
            </linearGradient>
          </defs>
        </svg>

        {/* Orbiting Lightning Spark Dot */}
        <div
          style={{
            position: 'absolute',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#ffffff',
            boxShadow: '0 0 10px #ffffff, 0 0 18px #ffd700'
          }}
        />
      </div>
    </>
  );
}
