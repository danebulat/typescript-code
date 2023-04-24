// -------------------------------------------------- 
// Random Number Generation
// -------------------------------------------------- 

// Math.random() - returns a float between 0 and 1

// Float between 0 and 100
console.log(Math.random() * 100);

// Float between 5 and 30
console.log(Math.random() * 25 + 5);

// Float between -100 and -90
console.log(Math.random() * 10 - 100);


// To get random integers, use:
// Math.floor(), Math.round(), or Math.ceil()

// Integer between 0 and 99
console.log(Math.floor(Math.random() * 100));

// Integer between 5 and 30
console.log(Math.round(Math.random() * 25 + 5));

// Integer between -100 and -90
console.log(Math.ceil(Math.random() * 10 - 100));

// -------------------------------------------------- 
// Exercises
// -------------------------------------------------- 

// 1. Given three numbers x, y and p, compute 
// (x^y) % p (modular exponentiation)
//
// x is the base, y is exponent, p is modulus
// Used in public key encryption algorithms

function modularExponentiation(base, exponent, modulus) {
  return Math.pow(base, exponent) % modulus;
}

// Mathematical properties:
//
// For arbitrary a and b,
// c % m = (a b) % m
// c % m = [(a % m) (b % m)] % m 

// You can iterate 1 to the exponent, recalculating each 
// time by multiplying the current modulus value with 
// the last.
//
// Pseudocode:
// 1. Set value = 1, current exponent = 0 
// 2. Increment current exponent by 1 
// 3. Set value = (base value) mod modulus until current 
//    exponent is reached component.
//
// Example: Base 4, Exponent 3, Modulus 5
// 4^3 % 5 = 64 % 5 = 4
// value = (lastValue * base) % modulus 
// value = (1 * 4) % 5 = 4 % 5 = 4
// value = (4 * 4) % 5 = 16 % 5 = 1 
// value = (1 * 4) % 5 = 4 % 5 = 4

// Time Complexity: O(n)
// Where n is equal to the exponent value.

function modularExponentiationB(base, exponent, modulus) {
  if (modulus == 1) return 0;

  var value = 1;

  for (var i=0; i<exponent; i++) {
    value = (value * base) % modulus;
  }

  return value;
}

// -------------------------------------------------- 
// 2. Print all primes less than n.
// -------------------------------------------------- 

function allPrimesLessThanN(n) {
  for (var i=0; i<n; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

// Time Complexity: O(sqrt(n))
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  // This is checked so that we can skip 
  // middle five numbers in below loop
  if (n%2 == 0 || n%3 == 0) return false;

  for (var i=5; i*i<=n; i=i+6) {
    if (n%i == 0 || n%(i+2) == 0) {
      return false;
    }
  }

  return true;
}

// Prints 2, 3, 5, 7, 11, 13
allPrimesLessThanN(15);

// -------------------------------------------------- 
// 3. Check for a set of prime factors
// -------------------------------------------------- 

// Ugly numbers: Prime factors are 2, 3 or 5
// The first 11 ugly numbers:
// 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15

// - Divide the number by divisors (2, 3, 5) until 
//   it cannot be divided without a remainder.
//
// - If the number can be divided by all the divisors,
//   it should be 1 after dividing everything.

function maxDivide(number, divisor) {
  while (number % divisor == 0) {
    number /= divisor;
  }
  return number;
}

function isUgly(number) {
  number = maxDivide(number, 2);
  number = maxDivide(number, 3);
  number = maxDivide(number, 5);
  return number === 1;
}

function arrayUglyNumbers(n) {
  var counter = 0, currentNumber = 1, uglyNumbers = [];

  while (counter != n) {
    if (isUgly(currentNumber)) {
      counter++;
      uglyNumbers.push(currentNumber);
    }

    currentNumber++;
  }

  return uglyNumbers;
}
