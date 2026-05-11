// ===== PROJECTS RENDERER =====
(function () {
  const grid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  let currentFilter = 'all';

  function renderProjects(filter) {
    const filtered = filter === 'all'
      ? PROJECTS
      : PROJECTS.filter(p => p.category === filter);

    grid.innerHTML = '';
    filtered.forEach((project, i) => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.style.animationDelay = (i * 0.1) + 's';
      card.innerHTML = `
        <div class="project-card-top">${project.emoji}</div>
        <div class="project-card-body">
          <div class="project-tags">
            ${project.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          <div class="project-links">
            <a href="${project.github}" target="_blank" class="project-link">
              <i class="fab fa-github"></i> Code
            </a>
            ${project.demo !== '#' ? `<a href="${project.demo}" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>` : ''}
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter');
      renderProjects(currentFilter);
    });
  });

  // Initial render
  renderProjects('all');
})();
