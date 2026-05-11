// ===== TYPEWRITER =====
(function () {

  // --- Hero subtitle ---
  const el = document.getElementById('typed-subtitle');
  if (!el) return;

  const lines = [
    'C++ Developer & Problem Solver',
    'Full Stack Web Developer',
    'Open Source Enthusiast',
    'Building the Future, One Line at a Time'
  ];
  let li = 0, ci = 0, deleting = false;

  function tick() {
    const cur = lines[li];
    if (!deleting) {
      el.textContent = cur.slice(0, ++ci);
      if (ci === cur.length) { deleting = true; setTimeout(tick, 2200); return; }
    } else {
      el.textContent = cur.slice(0, --ci);
      if (ci === 0) { deleting = false; li = (li + 1) % lines.length; }
    }
    setTimeout(tick, deleting ? 35 : 75);
  }
  tick();

  // --- Code window ---
  const pre = document.getElementById('code-display');
  if (!pre) return;

  const code = [
    { text: '#include <iostream>',          color: '#7c3aed' },
    { text: '#include <string>',            color: '#7c3aed' },
    { text: '',                             color: '' },
    { text: '// Portfolio Engine v2.0',     color: '#475569' },
    { text: 'class Developer {',            color: '#f1f5f9' },
    { text: '  public:',                    color: '#7c3aed' },
    { text: '    string name  = "Aman Gaur";',   color: '#94a3b8' },
    { text: '    string alias = "SHINIGAMI1122";',color: '#94a3b8' },
    { text: '    string role  = "Full Stack Dev";',color: '#94a3b8' },
    { text: '    bool   passionate = true;', color: '#94a3b8' },
    { text: '',                             color: '' },
    { text: '    void build() {',           color: '#f1f5f9' },
    { text: '      while (passionate)',     color: '#7c3aed' },
    { text: '        create();  // ∞',     color: '#475569' },
    { text: '    }',                        color: '#f1f5f9' },
    { text: '};',                           color: '#f1f5f9' },
    { text: '',                             color: '' },
    { text: '// Let\'s build something!',  color: '#06b6d4' },
  ];

  let idx = 0;
  function typeLine() {
    if (idx >= code.length) return;
    const div = document.createElement('div');
    const c = code[idx];
    div.style.color = c.color || '#94a3b8';
    div.textContent = c.text;
    pre.appendChild(div);
    idx++;
    setTimeout(typeLine, 110);
  }
  setTimeout(typeLine, 600);
})();
