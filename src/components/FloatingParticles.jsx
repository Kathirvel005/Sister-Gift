import React, { useEffect, useRef } from 'react';

export default function FloatingParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle Classes
    const particles = [];
    const PARTICLE_COUNT = Math.min(Math.floor(window.innerWidth / 20), 65);

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : -30;
        this.size = Math.random() * 8 + 4;
        this.speedY = Math.random() * 0.7 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.6;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.02;
        this.opacity = Math.random() * 0.6 + 0.3;
        
        // Types: 0 = Marigold Petal, 1 = Rose Petal, 2 = Gold Star Sparkle, 3 = Soft Light Orb
        this.type = Math.floor(Math.random() * 4);
      }

      update() {
        this.y += this.speedY;
        this.x += Math.sin(this.y * 0.01) * 0.5 + this.speedX;
        this.rotation += this.rotSpeed;

        if (this.y > height + 30 || this.x < -30 || this.x > width + 30) {
          this.reset(false);
        }
      }

      draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;

        if (this.type === 0) {
          // Marigold Petal (Golden Orange)
          const grad = ctx.createLinearGradient(-this.size / 2, -this.size, this.size / 2, this.size);
          grad.addColorStop(0, '#ffd700');
          grad.addColorStop(1, '#ff6b00');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.ellipse(0, 0, this.size * 0.6, this.size * 1.2, 0, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.type === 1) {
          // Rose Petal (Deep Pink/Crimson)
          const grad = ctx.createLinearGradient(-this.size / 2, -this.size, this.size / 2, this.size);
          grad.addColorStop(0, '#ff758c');
          grad.addColorStop(1, '#c00040');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.ellipse(0, 0, this.size * 0.7, this.size * 1.1, 0.3, 0, Math.PI * 2);
          ctx.fill();
        } else if (this.type === 2) {
          // Golden Sparkle Star
          ctx.fillStyle = '#ffd700';
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#ffe58f';
          const r = this.size * 0.6;
          ctx.beginPath();
          for (let i = 0; i < 4; i++) {
            ctx.lineTo(Math.cos(((18 + i * 90) * Math.PI) / 180) * r, -Math.sin(((18 + i * 90) * Math.PI) / 180) * r);
            ctx.lineTo(Math.cos(((54 + i * 90) * Math.PI) / 180) * (r / 3), -Math.sin(((54 + i * 90) * Math.PI) / 180) * (r / 3));
          }
          ctx.closePath();
          ctx.fill();
        } else {
          // Soft Glowing Light Orb
          const radGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
          radGrad.addColorStop(0, 'rgba(255, 215, 0, 0.8)');
          radGrad.addColorStop(0.5, 'rgba(255, 46, 147, 0.4)');
          radGrad.addColorStop(1, 'rgba(255, 46, 147, 0)');
          ctx.fillStyle = radGrad;
          ctx.beginPath();
          ctx.arc(0, 0, this.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (let p of particles) {
        p.update();
        p.draw();
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  );
}
