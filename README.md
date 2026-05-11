# 🚀 SHINIGAMI | Portfolio

> A unique, animated developer portfolio built with HTML, CSS, JavaScript and **C++ backend**.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![C++](https://img.shields.io/badge/Backend-C%2B%2B-blue)
![License](https://img.shields.io/badge/License-MIT-purple)

## ✨ Features

- 🎨 **Dark glassmorphism UI** with purple/cyan gradient theme
- 🌌 **Interactive particle system** — reacts to mouse movement
- ⚡ **C++ computation engine** running in the browser
- 🖊️ **Typewriter animations** for hero subtitle
- 📊 **Animated skill bars** with scroll reveal
- 🃏 **Filterable project cards**
- 📱 **Fully responsive** for all screen sizes
- 🖱️ **Custom cursor** with follower effect
- 📬 **Contact form** with validation

## 🗂️ Project Structure

```
micro-project-1/
├── index.html          # Main HTML
├── css/
│   ├── style.css       # Main styles
│   └── animations.css  # Keyframe animations
├── js/
│   ├── particles.js    # Canvas particle system
│   ├── cursor.js       # Custom cursor
│   ├── typewriter.js   # Typing effects
│   ├── animations.js   # Scroll animations & counters
│   ├── projects.js     # Project card renderer
│   ├── cpp-engine.js   # C++ logic simulation
│   └── main.js         # App entry point
├── data/
│   └── projects.js     # Project data (edit to add projects)
├── backend/
│   └── portfolio.cpp   # C++ source code
└── README.md
```

## 🛠️ Tech Stack

| Layer    | Technology |
|----------|-----------|
| Frontend | HTML5, CSS3, JavaScript (ES6+) |
| Backend  | **C++17** (WebAssembly ready) |
| Fonts    | Orbitron, Rajdhani (Google Fonts) |
| Icons    | Font Awesome 6 |

## 🚀 Getting Started

Just open `index.html` in any modern browser — no build step needed!

```bash
# Clone the repo
git clone https://github.com/SHINIGAMI1122/micro-project-1.git

# Open in browser
open index.html
```

## ⚙️ Compile C++ Backend (Optional)

```bash
# Native build
g++ -std=c++17 -O2 backend/portfolio.cpp -o portfolio
./portfolio

# WebAssembly (requires Emscripten)
em++ backend/portfolio.cpp -o portfolio.js \
  -s EXPORTED_FUNCTIONS='["_compute","_fibonacci"]' \
  -s EXPORTED_RUNTIME_METHODS='["ccall","cwrap"]'
```

## 📝 Customization

- **Add projects** → Edit `data/projects.js`
- **Change colors** → Edit CSS variables in `css/style.css` (`:root` block)
- **Update info** → Edit `index.html` (name, email, links)
- **Add skills** → Edit the skills section in `index.html`

## 👤 Author

**Aman Gaur** — [@SHINIGAMI1122](https://github.com/SHINIGAMI1122)

---
*Built with ❤️ and C++*
