// ===== CUSTOM CURSOR =====
(function () {
  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('cursor-follower');
  if (!cursor || !follower) return;

  let mx = 0, my = 0, fx = 0, fy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  (function animateFollower() {
    fx += (mx - fx) * 0.1;
    fy += (my - fy) * 0.1;
    follower.style.left = fx + 'px';
    follower.style.top  = fy + 'px';
    requestAnimationFrame(animateFollower);
  })();

  // Hover expand
  document.querySelectorAll('a, button, .filter-btn, .project-card, input, textarea, select').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform   = 'translate(-50%,-50%) scale(2.5)';
      cursor.style.opacity     = '0.4';
      follower.style.transform = 'translate(-50%,-50%) scale(1.6)';
      follower.style.borderColor = '#06b6d4';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform   = 'translate(-50%,-50%) scale(1)';
      cursor.style.opacity     = '1';
      follower.style.transform = 'translate(-50%,-50%) scale(1)';
      follower.style.borderColor = '#7c3aed';
    });
  });

  document.addEventListener('mousedown', () => { cursor.style.transform = 'translate(-50%,-50%) scale(0.7)'; });
  document.addEventListener('mouseup',   () => { cursor.style.transform = 'translate(-50%,-50%) scale(1)'; });
})();
