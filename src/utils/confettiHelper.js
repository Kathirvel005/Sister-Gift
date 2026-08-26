import confetti from 'canvas-confetti';

export const triggerFestiveConfetti = (origin = { x: 0.5, y: 0.6 }) => {
  const count = 200;
  const defaults = {
    origin,
    zIndex: 9999,
    colors: ['#FFD700', '#FF2E93', '#FFA07A', '#FF4500', '#FF69B4', '#FFF9F2']
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.4
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};

export const triggerHeartConfetti = () => {
  const scalar = 2;
  const heart = confetti.shapeFromPath({
    path: 'M167 72c19,-38 37,-56 75,-56 42,0 76,33 76,75 0,76 -76,151 -151,227 -76,-76 -151,-151 -151,-227 0,-42 33,-75 76,-75 38,0 57,18 75,56z'
  });

  confetti({
    shapes: [heart],
    scalar,
    particleCount: 35,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#FF2E93', '#FF6584', '#FFD700', '#E63946'],
    zIndex: 9999
  });
};
