// ===== MAIN APP =====
(function () {

  // ---- Mobile hamburger menu ----
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = navLinks.classList.contains('open') ? 'rotate(45deg) translate(5px, 5px)' : '';
    spans[1].style.opacity = navLinks.classList.contains('open') ? '0' : '1';
    spans[2].style.transform = navLinks.classList.contains('open') ? 'rotate(-45deg) translate(5px, -5px)' : '';
  });

  // Close menu on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });

  // ---- Smooth scroll for all anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- Contact form handler ----
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';

    // Simulate sending (replace with real EmailJS or backend call)
    setTimeout(() => {
      status.textContent = '✓ Message sent! I\'ll get back to you soon.';
      status.className = 'form-status success';
      form.reset();
      btn.disabled = false;
      btn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
      setTimeout(() => { status.textContent = ''; status.className = 'form-status'; }, 5000);
    }, 1500);
  });

  // ---- Download CV placeholder ----
  document.getElementById('download-cv').addEventListener('click', function (e) {
    e.preventDefault();
    alert('CV download will be available soon! Contact me at aman1234gaur@gmail.com');
  });

  // ---- Page load entrance animation ----
  document.body.style.opacity = '0';
  window.addEventListener('load', () => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  });

})();
