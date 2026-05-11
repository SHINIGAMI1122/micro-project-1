// ===== C++ ENGINE =====
// Mirrors the logic in backend/portfolio.cpp — runs in the browser.
// In production this would be compiled C++ via Emscripten → WebAssembly.

const CppEngine = {
  add:   (a, b) => a + b,
  sub:   (a, b) => a - b,
  mul:   (a, b) => a * b,
  div:   (a, b) => b !== 0 ? parseFloat((a / b).toFixed(6)) : 'Error: Division by zero',
  pow:   (a, b) => Math.pow(a, b),
  fib: (n) => {
    n = Math.abs(Math.floor(n));
    if (n > 50) return 'Input too large (max 50)';
    if (n <= 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) { let c = a + b; a = b; b = c; }
    return b;
  },
  isPrime: (n) => {
    n = Math.abs(Math.floor(n));
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(n); i += 2) if (n % i === 0) return false;
    return true;
  }
};

function runCppCompute() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const op   = document.getElementById('operation').value;
  const out  = document.getElementById('cpp-output');

  out.innerHTML = '<span style="color:#febc2e">// Computing...</span>';

  setTimeout(() => {
    let result, expression, opSymbol;

    switch (op) {
      case 'add':     result = CppEngine.add(num1, num2);     expression = `${num1} + ${num2}`;          opSymbol = '+';  break;
      case 'sub':     result = CppEngine.sub(num1, num2);     expression = `${num1} - ${num2}`;          opSymbol = '-';  break;
      case 'mul':     result = CppEngine.mul(num1, num2);     expression = `${num1} × ${num2}`;          opSymbol = '*';  break;
      case 'div':     result = CppEngine.div(num1, num2);     expression = `${num1} ÷ ${num2}`;          opSymbol = '/';  break;
      case 'pow':     result = CppEngine.pow(num1, num2);     expression = `${num1} ^ ${num2}`;          opSymbol = '^';  break;
      case 'fib':     result = CppEngine.fib(num1);           expression = `fibonacci(${Math.floor(num1)})`;  opSymbol = 'fib'; break;
      case 'prime':   result = CppEngine.isPrime(num1) ? 'true ✓' : 'false ✗'; expression = `isPrime(${Math.floor(num1)})`; opSymbol = '?'; break;
    }

    out.innerHTML = `<span style="color:#94a3b8">// C++ Engine — portfolio.cpp</span>
<span style="color:#7c3aed">std::cout</span> <span style="color:#f1f5f9">&lt;&lt;</span> <span style="color:#28c840">"${expression} = ${result}"</span> <span style="color:#f1f5f9">&lt;&lt; std::endl;</span>

<span style="color:#06b6d4">➜  Result:</span>  <span style="color:#f1f5f9; font-size:1.3rem; font-weight:900;">${result}</span>`;
  }, 350);
}
