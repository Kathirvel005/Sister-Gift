// Web Audio Synthesizer & MP3 Player Engine
import sisterBgmUrl from '../assets/audio/sister_bgm.mp3';

class SoundSystem {
  constructor() {
    this.ctx = null;
    this.bgmAudio = null;
    this.isPlaying = false;
    this.isMuted = true;
    this.listeners = [];
    this.proceduralInterval = null;
    this.droneNodes = [];
    this.scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25]; // Raag Bhoopali / Major Pentatonic
  }

  onStateChange(callback) {
    if (typeof callback === 'function') {
      this.listeners.push(callback);
      callback(this.isPlaying);
      return () => {
        this.listeners = this.listeners.filter(cb => cb !== callback);
      };
    }
    return () => {};
  }

  notify() {
    this.listeners.forEach(cb => {
      try { cb(this.isPlaying); } catch (e) {}
    });
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMusic() {
    this.init();
    if (this.isPlaying) {
      this.pauseMusic();
    } else {
      this.playMusic();
    }
    return this.isPlaying;
  }

  playMusic() {
    this.init();
    // 1. Play the Sister Love BGM file (bundled via Vite)
    if (!this.bgmAudio) {
      this.bgmAudio = new Audio(sisterBgmUrl || '/audio/rakhi_theme.mp3');
      this.bgmAudio.loop = true;
      this.bgmAudio.volume = 0.6;
      
      this.bgmAudio.play().then(() => {
        this.isPlaying = true;
        this.isMuted = false;
        this.notify();
      }).catch(() => {
        // If audio autoplay is restricted, fallback to ambient Raag drone
        this.startProceduralAmbient();
        this.isPlaying = true;
        this.isMuted = false;
        this.notify();
      });
    } else {
      this.bgmAudio.play().then(() => {
        this.isPlaying = true;
        this.isMuted = false;
        this.notify();
      }).catch(() => {
        this.startProceduralAmbient();
        this.isPlaying = true;
        this.isMuted = false;
        this.notify();
      });
    }
  }

  pauseMusic() {
    if (this.bgmAudio) {
      this.bgmAudio.pause();
    }
    this.stopProceduralAmbient();
    this.isPlaying = false;
    this.isMuted = true;
    this.notify();
  }

  startProceduralAmbient() {
    if (!this.ctx || this.proceduralInterval) return;

    // Create warm tanpura / drone base
    const baseFreqs = [130.81, 196.00]; // C3 and G3
    this.droneNodes = baseFreqs.map(freq => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      return { osc, gain };
    });

    // Melodic sparkling santoor/flute notes playing peaceful pentatonic melody
    this.proceduralInterval = setInterval(() => {
      if (!this.isPlaying || !this.ctx) return;
      
      const randomNote = this.scale[Math.floor(Math.random() * this.scale.length)];
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = Math.random() > 0.5 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(randomNote, this.ctx.currentTime);
      
      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.08, now + 0.3);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.5);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start(now);
      osc.stop(now + 2.6);
    }, 1800);
  }

  stopProceduralAmbient() {
    if (this.proceduralInterval) {
      clearInterval(this.proceduralInterval);
      this.proceduralInterval = null;
    }
    if (this.droneNodes && this.droneNodes.length > 0) {
      this.droneNodes.forEach(({ osc, gain }) => {
        try {
          gain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
          setTimeout(() => osc.stop(), 600);
        } catch (e) {}
      });
      this.droneNodes = [];
    }
  }

  // Sound Effects
  playClick() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.09);
  }

  playSparkle() {
    this.init();
    if (!this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
    notes.forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const startTime = this.ctx.currentTime + (i * 0.06);
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);
      gain.gain.setValueAtTime(0.08, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + 0.35);
    });
  }

  playHeartCatch() {
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const now = this.ctx.currentTime;
    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, now);
    osc.frequency.exponentialRampToValueAtTime(1040, now + 0.15);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.21);
  }

  playRakhiTied() {
    this.init();
    if (!this.ctx) return;
    // Harmonious chord for sacred tying
    const chord = [392.00, 493.88, 587.33, 783.99]; // G Major
    chord.forEach((freq, index) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const startTime = this.ctx.currentTime + (index * 0.08);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);
      gain.gain.setValueAtTime(0.1, startTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 1.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + 1.3);
    });
  }

  playCelebrationFanfare() {
    this.init();
    if (!this.ctx) return;
    const fanfare = [
      { f: 523.25, d: 0.12, t: 0 },
      { f: 659.25, d: 0.12, t: 0.12 },
      { f: 783.99, d: 0.12, t: 0.24 },
      { f: 1046.50, d: 0.45, t: 0.36 }
    ];
    fanfare.forEach(({ f, d, t }) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const startTime = this.ctx.currentTime + t;
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(f, startTime);
      gain.gain.setValueAtTime(0.18, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + d);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + d + 0.05);
    });
  }
}

export const audioSystem = new SoundSystem();
