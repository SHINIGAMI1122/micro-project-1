// ===== PROJECT CARDS RENDERER =====
(function () {
  const grid    = document.getElementById('projects-grid');
  const filters = document.querySelectorAll('.filter-btn');
  if (!grid) return;

  function render(filter) {
    const list = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === filter);
    grid.innerHTML = '';
    list.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = 'project-card entering';
      card.style.animationDelay = (i * 0.08) + 's';
      card.innerHTML = `
        <div class="project-card-top">${p.emoji}</div>
        <div class="project-card-body">
          <div class="project-tags">
            ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
          </div>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>
          <div class="project-links">
            <a href="${p.github}" target="_blank" class="project-link" onclick="event.stopPropagation()">
              <i class="fab fa-github"></i> Code
            </a>
            ${p.demo && p.demo !== '#'
              ? `<a href="${p.demo}" target="_blank" class="project-link" onclick="event.stopPropagation()">
                   <i class="fas fa-external-link-alt"></i> Live
                 </a>`
              : ''}
            <span class="project-link" style="margin-left:auto; color:var(--accent-primary); cursor:pointer">
              <i class="fas fa-expand-alt"></i> Details
            </span>
          </div>
        </div>`;

      // Open modal on card click
      card.addEventListener('click', () => {
        if (typeof openProjectModal === 'function') openProjectModal(p.id);
      });

      grid.appendChild(card);
    });
  }

  filters.forEach(btn => {
    btn.addEventListener('click', () => {
      filters.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render(btn.dataset.filter);
    });
  });

  render('all');
})();
