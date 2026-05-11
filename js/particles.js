// ===== PARTICLE SYSTEM =====
(function () {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles = [];
  const COUNT = 75;
  const CONNECT_DIST = 120;
  const REPEL_DIST   = 90;
  let mouse = { x: -999, y: -999 };

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() { this.init(); }
    init() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.r  = Math.random() * 1.8 + 0.8;
      this.a  = Math.random() * 0.4 + 0.15;
      this.c  = Math.random() > 0.5 ? '124,58,237' : '6,182,212';
    }
    update() {
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const d  = Math.hypot(dx, dy);
      if (d < REPEL_DIST) {
        const f = (REPEL_DIST - d) / REPEL_DIST * 0.4;
        this.vx += (dx / d) * f;
        this.vy += (dy / d) * f;
      }
      this.vx *= 0.98;
      this.vy *= 0.98;
      const spd = Math.hypot(this.vx, this.vy);
      if (spd > 1.8) { this.vx = this.vx / spd * 1.8; this.vy = this.vy / spd * 1.8; }
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0) this.x = W;
      if (this.x > W) this.x = 0;
      if (this.y < 0) this.y = H;
      if (this.y > H) this.y = 0;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.c},${this.a})`;
      ctx.fill();
    }
  }

  function init() {
    particles = Array.from({ length: COUNT }, () => new Particle());
  }

  function drawLines() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const d = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
        if (d < CONNECT_DIST) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(124,58,237,${(1 - d / CONNECT_DIST) * 0.12})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    drawLines();
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', () => { resize(); init(); });
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
  window.addEventListener('mouseleave', () => { mouse.x = -999; mouse.y = -999; });

  resize(); init(); loop();
})();
