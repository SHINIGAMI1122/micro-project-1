// ===== MAIN =====
(function () {

  // ---- Page fade in ----
  document.body.style.opacity = '0';
  window.addEventListener('load', () => {
    document.body.style.transition = 'opacity 0.6s ease';
    document.body.style.opacity = '1';
  });

  // ---- Mobile nav ----
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    const [s1, s2, s3] = hamburger.querySelectorAll('span');
    s1.style.transform  = open ? 'rotate(45deg) translate(5px,5px)'  : '';
    s2.style.opacity    = open ? '0' : '1';
    s3.style.transform  = open ? 'rotate(-45deg) translate(5px,-5px)' : '';
  });

  document.querySelectorAll('.nav-link').forEach(l =>
    l.addEventListener('click', () => navLinks.classList.remove('open'))
  );

  // ---- Smooth scroll ----
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  // ---- Contact form ----
  const form   = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    // Simulate send — replace with EmailJS or backend endpoint
    setTimeout(() => {
      status.textContent = '✓ Message sent! I\'ll get back to you soon.';
      status.className   = 'form-status success';
      form.reset();
      btn.disabled = false;
      btn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
      setTimeout(() => { status.textContent = ''; status.className = 'form-status'; }, 5000);
    }, 1500);
  });

  // ---- CV download placeholder ----
  document.getElementById('download-cv').addEventListener('click', e => {
    e.preventDefault();
    alert('CV coming soon! Reach me at aman1234gaur@gmail.com');
  });

})();
