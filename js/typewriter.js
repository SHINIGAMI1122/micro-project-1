// ===== TYPEWRITER EFFECT =====
(function () {
  // Subtitle typewriter
  const subtitleEl = document.getElementById('typed-subtitle');
  const subtitles = [
    'C++ Developer & Problem Solver',
    'Full Stack Web Developer',
    'Open Source Enthusiast',
    'Building the Future, One Line at a Time'
  ];
  let subIdx = 0, charIdx = 0, deleting = false;

  function typeSubtitle() {
    const current = subtitles[subIdx];
    if (!deleting) {
      subtitleEl.textContent = current.slice(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(typeSubtitle, 2000);
        return;
      }
    } else {
      subtitleEl.textContent = current.slice(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        subIdx = (subIdx + 1) % subtitles.length;
      }
    }
    setTimeout(typeSubtitle, deleting ? 40 : 80);
  }
  typeSubtitle();

  // Code window typewriter
  const codeEl = document.getElementById('code-display');
  const codeLines = [
    '<span style="color:#7c3aed">#include</span> <span style="color:#06b6d4">&lt;iostream&gt;</span>',
    '<span style="color:#7c3aed">#include</span> <span style="color:#06b6d4">&lt;string&gt;</span>',
    '',
    '<span style="color:#94a3b8">// Portfolio Engine v1.0</span>',
    '<span style="color:#7c3aed">class</span> <span style="color:#f1f5f9">Developer</span> {',
    '  <span style="color:#7c3aed">public:</span>',
    '    <span style="color:#06b6d4">string</span> name = <span style="color:#28c840">"Aman Gaur"</span>;',
    '    <span style="color:#06b6d4">string</span> role = <span style="color:#28c840">"Full Stack Dev"</span>;',
    '    <span style="color:#06b6d4">bool</span>   passionate = <span style="color:#febc2e">true</span>;',
    '',
    '    <span style="color:#06b6d4">void</span> <span style="color:#f1f5f9">build</span>() {',
    '      <span style="color:#94a3b8">// Writing clean code...</span>',
    '      <span style="color:#7c3aed">while</span>(passionate)',
    '        create();',
    '    }',
    '};',
    '',
    '<span style="color:#94a3b8">// Let\'s build something great!</span>'
  ];

  let lineIdx = 0;
  function typeLine() {
    if (lineIdx < codeLines.length) {
      const div = document.createElement('div');
      div.innerHTML = codeLines[lineIdx];
      codeEl.appendChild(div);
      lineIdx++;
      setTimeout(typeLine, 120);
    }
  }
  setTimeout(typeLine, 800);
})();
