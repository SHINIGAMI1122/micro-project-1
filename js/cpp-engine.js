// ===== C++ ENGINE (JavaScript simulation of C++ logic) =====
// This simulates C++ backend computation in the browser.
// In a full deployment, this would be compiled C++ via WebAssembly (Emscripten).

const CppEngine = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
  div: (a, b) => b !== 0 ? (a / b).toFixed(4) : 'Error: Division by zero',
  pow: (a, b) => Math.pow(a, b),
  fib: (n) => {
    // C++ style iterative Fibonacci
    n = Math.abs(Math.floor(n));
    if (n > 40) return 'Input too large (max 40)';
    if (n <= 0) return 0;
    if (n === 1) return 1;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
};

function runCppCompute() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const op = document.getElementById('operation').value;
  const output = document.getElementById('cpp-output');

  output.innerHTML = '<span style="color:#febc2e">// Computing...</span>';

  setTimeout(() => {
    let result;
    let expression;

    switch (op) {
      case 'add':
        result = CppEngine.add(num1, num2);
        expression = `${num1} + ${num2}`;
        break;
      case 'sub':
        result = CppEngine.sub(num1, num2);
        expression = `${num1} - ${num2}`;
        break;
      case 'mul':
        result = CppEngine.mul(num1, num2);
        expression = `${num1} × ${num2}`;
        break;
      case 'div':
        result = CppEngine.div(num1, num2);
        expression = `${num1} ÷ ${num2}`;
        break;
      case 'pow':
        result = CppEngine.pow(num1, num2);
        expression = `${num1} ^ ${num2}`;
        break;
      case 'fib':
        result = CppEngine.fib(num1);
        expression = `fibonacci(${Math.floor(num1)})`;
        break;
    }

    output.innerHTML = `
<span style="color:#94a3b8">// C++ Engine Result</span>
<span style="color:#7c3aed">std::cout</span> <span style="color:#f1f5f9">&lt;&lt;</span> <span style="color:#28c840">"${expression} = ${result}"</span> <span style="color:#f1f5f9">&lt;&lt; std::endl;</span>

<span style="color:#06b6d4">➜ Output:</span> <span style="color:#f1f5f9; font-size:1.2rem; font-weight:bold;">${result}</span>
    `;
  }, 400);
}
