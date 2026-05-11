// ===== PROJECT MODAL =====
(function () {

  // Create overlay once
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.id = 'project-modal';
  overlay.innerHTML = `
    <div class="modal" id="modal-box">
      <div class="modal-header">
        <div class="modal-emoji" id="modal-emoji"></div>
        <div class="modal-title-wrap">
          <h2 class="modal-title" id="modal-title"></h2>
          <div class="modal-tags" id="modal-tags"></div>
        </div>
        <button class="modal-close" id="modal-close"><i class="fas fa-times"></i></button>
      </div>
      <div class="modal-body">
        <p class="modal-desc" id="modal-desc"></p>
        <div class="modal-features">
          <h4>KEY FEATURES</h4>
          <ul id="modal-features"></ul>
        </div>
      </div>
      <div class="modal-footer" id="modal-footer"></div>
    </div>`;
  document.body.appendChild(overlay);

  // Close handlers
  document.getElementById('modal-close').addEventListener('click', closeModal);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  window.openProjectModal = function (id) {
    const p = PROJECTS.find(x => x.id === id);
    if (!p) return;

    document.getElementById('modal-emoji').textContent  = p.emoji;
    document.getElementById('modal-title').textContent  = p.title;
    document.getElementById('modal-desc').textContent   = p.longDesc || p.description;

    document.getElementById('modal-tags').innerHTML =
      p.tags.map(t => `<span class="project-tag">${t}</span>`).join('');

    document.getElementById('modal-features').innerHTML =
      (p.features || ['Clean, well-documented code', 'Optimized performance', 'Easy to extend and modify'])
        .map(f => `<li>${f}</li>`).join('');

    document.getElementById('modal-footer').innerHTML = `
      <a href="${p.github}" target="_blank" class="btn btn-primary">
        <i class="fab fa-github"></i> View Code
      </a>
      ${p.demo && p.demo !== '#'
        ? `<a href="${p.demo}" target="_blank" class="btn btn-outline"><i class="fas fa-external-link-alt"></i> Live Demo</a>`
        : ''}`;

    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

})();
