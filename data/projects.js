// ===== PROJECTS DATA =====
// Add a new project by appending an object here — no other file needs changing.
const PROJECTS = [
  {
    id: 1,
    title: "C++ Data Structures Library",
    description: "High-performance library implementing AVL trees, graphs, hash maps in modern C++17.",
    longDesc: "A comprehensive C++ library featuring advanced data structures built from scratch. Implements AVL trees with auto-balancing, directed/undirected graphs with BFS/DFS, open-addressing hash maps, and a priority queue. Benchmarked against STL — up to 2x faster for specific use cases.",
    emoji: "🌳",
    tags: ["C++17", "DSA", "Algorithms"],
    category: "cpp",
    github: "https://github.com/SHINIGAMI1122",
    demo: "#",
    features: [
      "AVL tree with O(log n) insert, delete, search",
      "Graph algorithms: BFS, DFS, Dijkstra",
      "Custom hash map with open addressing",
      "Full unit test suite included",
      "Header-only, zero dependencies"
    ]
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "This portfolio — built with HTML, CSS, JS and a C++ computation engine running in the browser.",
    longDesc: "A fully custom portfolio site with a dark glassmorphism design, interactive particle canvas, typewriter animations, scroll-reveal effects, and a live C++ computation demo. Every feature is hand-coded — no frameworks, no templates.",
    emoji: "🚀",
    tags: ["HTML", "CSS", "JS", "C++"],
    category: "web",
    github: "https://github.com/SHINIGAMI1122/micro-project-1",
    demo: "https://shinigami1122.github.io/micro-project-1",
    features: [
      "Interactive particle system reacting to mouse",
      "C++ logic running live in the browser",
      "Typewriter + glitch text animations",
      "Filterable project cards with modal popups",
      "Light / dark theme toggle with persistence"
    ]
  },
  {
    id: 3,
    title: "File Compression Tool",
    description: "CLI tool in C++ that compresses files using Huffman encoding — up to 60% size reduction.",
    longDesc: "A command-line file compression utility built in C++ using Huffman encoding. Reads any binary file, builds a frequency table, constructs the optimal prefix-free code tree, and outputs a compressed binary with an embedded decode table. Decompression is lossless.",
    emoji: "🗜️",
    tags: ["C++", "CLI", "Algorithms"],
    category: "cpp",
    github: "https://github.com/SHINIGAMI1122",
    demo: "#",
    features: [
      "Huffman encoding for lossless compression",
      "Handles any file type (binary safe)",
      "Up to 60% size reduction on text files",
      "Embedded decode table for self-contained output",
      "Fast: processes 10MB in under 200ms"
    ]
  },
  {
    id: 4,
    title: "Task Manager App",
    description: "Full-stack task management web app with drag-and-drop, priorities, and local storage.",
    longDesc: "A clean, responsive task manager built with vanilla JavaScript. Features drag-and-drop reordering, priority levels (high/medium/low), due dates, category tags, and full persistence via localStorage. No frameworks — pure DOM manipulation.",
    emoji: "✅",
    tags: ["JavaScript", "CSS", "Web"],
    category: "web",
    github: "https://github.com/SHINIGAMI1122",
    demo: "#",
    features: [
      "Drag-and-drop task reordering",
      "Priority levels with color coding",
      "Due date tracking with overdue alerts",
      "Filter by category, priority, status",
      "Persists across sessions via localStorage"
    ]
  },
  {
    id: 5,
    title: "System Monitor",
    description: "Real-time system resource monitor in C++ for Linux/macOS — tracks CPU, memory, processes.",
    longDesc: "A terminal-based system monitor written in C++ that reads /proc (Linux) and sysctl (macOS) to display real-time CPU usage per core, memory breakdown, top processes by CPU/memory, and network I/O — all in a clean ncurses TUI.",
    emoji: "📊",
    tags: ["C++", "Linux", "Systems"],
    category: "tools",
    github: "https://github.com/SHINIGAMI1122",
    demo: "#",
    features: [
      "Per-core CPU usage with history graph",
      "Memory: used / cached / available breakdown",
      "Top-10 processes sorted by CPU or RAM",
      "Network I/O in real time",
      "Refreshes every 500ms, minimal overhead"
    ]
  },
  {
    id: 6,
    title: "Mini Compiler",
    description: "A mini compiler for a custom expression language — lexer, parser, and code generator in C++.",
    longDesc: "A from-scratch compiler for a simple arithmetic expression language. Implements a hand-written recursive-descent parser, AST construction, semantic analysis, and a stack-based bytecode generator. Includes a small VM to execute the output.",
    emoji: "⚙️",
    tags: ["C++", "Compiler", "Tools"],
    category: "tools",
    github: "https://github.com/SHINIGAMI1122",
    demo: "#",
    features: [
      "Hand-written lexer and recursive-descent parser",
      "AST construction and pretty-printer",
      "Semantic analysis with type checking",
      "Stack-based bytecode generation",
      "Tiny VM to execute compiled output"
    ]
  }
];
