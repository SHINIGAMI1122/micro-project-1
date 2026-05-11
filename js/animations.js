// ===== SCROLL ANIMATIONS, COUNTERS, NAVBAR =====
(function () {

  // ---- Reveal on scroll ----
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });

  function addReveal(selector, cls) {
    document.querySelectorAll(selector).forEach(el => {
      el.classList.add(cls);
      revealObserver.observe(el);
    });
  }

  addReveal('.section-header', 'reveal');
  addReveal('.about-image-wrapper', 'reveal-left');
  addReveal('.about-text', 'reveal-right');
  addReveal('.wasm-demo', 'reveal');
  addReveal('.contact-info', 'reveal-left');
  addReveal('.contact-form', 'reveal-right');

  // Stagger skill categories
  document.querySelectorAll('.skill-category').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i * 0.12) + 's';
    revealObserver.observe(el);
  });

  // ---- Skill bars ----
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.skill-fill').forEach(fill => {
          fill.style.width = fill.dataset.width + '%';
          fill.classList.add('animate');
        });
        skillObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.3 });

  const skillsSection = document.querySelector('.skills');
  if (skillsSection) skillObserver.observe(skillsSection);

  // ---- Counters ----
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.stat-number').forEach(el => {
          const target = parseInt(el.dataset.target);
          let cur = 0;
          const step = target / 55;
          const t = setInterval(() => {
            cur += step;
            if (cur >= target) {
              el.textContent = target + (target === 100 ? '' : '+');
              clearInterval(t);
            } else {
              el.textContent = Math.floor(cur);
            }
          }, 22);
        });
        counterObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  const stats = document.querySelector('.hero-stats');
  if (stats) counterObserver.observe(stats);

  // ---- Navbar scroll + active link ----
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    // Shrink navbar
    navbar.classList.toggle('scrolled', window.scrollY > 60);

    // Active link
    const scrollY = window.scrollY + 120;
    sections.forEach(sec => {
      if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${sec.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  });

  // ---- Ripple on buttons ----
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const r = document.createElement('span');
      r.className = 'ripple';
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      r.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size/2}px;top:${e.clientY - rect.top - size/2}px`;
      this.appendChild(r);
      setTimeout(() => r.remove(), 600);
    });
  });

})();
