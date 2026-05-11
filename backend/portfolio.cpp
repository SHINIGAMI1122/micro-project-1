/**
 * portfolio.cpp — C++ Backend Engine
 * Author: Aman Gaur (SHINIGAMI1122)
 *
 * This is the C++ source that powers the computation engine.
 * Compile to WebAssembly with Emscripten:
 *   em++ portfolio.cpp -o portfolio.js -s EXPORTED_FUNCTIONS='["_compute","_fibonacci","_isPrime"]' -s EXPORTED_RUNTIME_METHODS='["ccall","cwrap"]'
 *
 * Or run natively:
 *   g++ -std=c++17 -O2 portfolio.cpp -o portfolio
 */

#include <iostream>
#include <string>
#include <cmath>
#include <vector>
#include <sstream>

// ===== MATH ENGINE =====

double compute(double a, double b, char op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return (b != 0) ? a / b : 0;
        case '^': return std::pow(a, b);
        default:  return 0;
    }
}

long long fibonacci(int n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    long long a = 0, b = 1;
    for (int i = 2; i <= n; i++) {
        long long c = a + b;
        a = b;
        b = c;
    }
    return b;
}

bool isPrime(int n) {
    if (n < 2) return false;
    if (n == 2) return true;
    if (n % 2 == 0) return false;
    for (int i = 3; i <= std::sqrt(n); i += 2) {
        if (n % i == 0) return false;
    }
    return true;
}

std::vector<int> sieve(int limit) {
    std::vector<bool> is_prime(limit + 1, true);
    std::vector<int> primes;
    is_prime[0] = is_prime[1] = false;
    for (int i = 2; i <= limit; i++) {
        if (is_prime[i]) {
            primes.push_back(i);
            for (int j = i * 2; j <= limit; j += i)
                is_prime[j] = false;
        }
    }
    return primes;
}

// ===== DEVELOPER INFO =====

struct Developer {
    std::string name    = "Aman Gaur";
    std::string alias   = "SHINIGAMI1122";
    std::string role    = "Full Stack Developer";
    std::string email   = "aman1234gaur@gmail.com";
    std::string github  = "https://github.com/SHINIGAMI1122";
    bool        passionate = true;

    void introduce() const {
        std::cout << "============================\n";
        std::cout << "  Hi, I'm " << name << " (" << alias << ")\n";
        std::cout << "  Role   : " << role << "\n";
        std::cout << "  Email  : " << email << "\n";
        std::cout << "  GitHub : " << github << "\n";
        std::cout << "  Status : " << (passionate ? "Always building!" : "Taking a break") << "\n";
        std::cout << "============================\n";
    }

    void build() const {
        std::cout << "Building portfolio...\n";
        while (passionate) {
            std::cout << "Creating amazing things with C++!\n";
            break; // just one iteration for demo
        }
    }
};

// ===== MAIN =====

int main() {
    Developer dev;
    dev.introduce();
    dev.build();

    std::cout << "\n--- Math Engine Demo ---\n";
    std::cout << "42 + 8 = " << compute(42, 8, '+') << "\n";
    std::cout << "2 ^ 10 = " << compute(2, 10, '^') << "\n";
    std::cout << "fibonacci(10) = " << fibonacci(10) << "\n";
    std::cout << "isPrime(97) = " << (isPrime(97) ? "true" : "false") << "\n";

    std::cout << "\nFirst 10 primes: ";
    auto primes = sieve(30);
    for (int p : primes) std::cout << p << " ";
    std::cout << "\n";

    return 0;
}
