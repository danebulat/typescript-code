// -------------------------------------------------- 
// Primality Test
// -------------------------------------------------- 

// O(n) complexity
function isPrimeA(n) {
  if (n <= 1) {
    return false;
  }

  // check from 2 to n-1
  for (var i=2; i<n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

// Property 1:
// All primes are of the form 6k+-1
// With the exception of 2 and 3
// Where k is some integer

// Property 2:
// If square root of n is not a prime 
// number, n is not a prime number.

// O(sqrt(n))
function isPrimeB(n) {
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

console.log(isPrimeB(18));

// -------------------------------------------------- 
// Prime Factorization
// -------------------------------------------------- 

// The process of determining which prime numbers 
// multiply to a given number.

// Time Complexity: O(sqrt(n))
// This algorithm works by printing any number that is 
// divisible by i without a remainder. In the case that 
// a prime number is passed to this function, it would 
// be handled by printing whether n is greater than 2.

function primeFactors(n) {
  // Print the number of 2s that divide n
  while (n%2 == 0) {
    console.log(2);
    n = n/2;
  }

  // n must be odd at this point. So we can skip one 
  // element (Note i = i + 2)
  for (var i = 3; i*i <= n; i = i+2) {
    // While i divides n, print i and divide n 
    while (n%i == 0) {
      console.log(i);
      n = n/i;
    }
  }

  // This condition is to handle the case when n is a
  // prime number greater than 2 
  if (n > 2) {
    console.log(n);
  }
}

primeFactors(24); // prints `5` and `2`

