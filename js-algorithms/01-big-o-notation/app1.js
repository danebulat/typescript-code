// ---------------------------------------------------------------------- 
// 'n' represents the number of inputs
// f(n) represents the number of operations
// ---------------------------------------------------------------------- 

// ---------------------------------------------------------------------- 
// O(n) example
// Printing numbers from 0 to n-1
// ---------------------------------------------------------------------- 

function exampleLinear(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
  }
}

//exampleLinear(10);

// ---------------------------------------------------------------------- 
// O(n^2) = Quadratic time
// O(n^3) = Cubic time
// ---------------------------------------------------------------------- 

function exampleQuadratic(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
    for (var j = i; j < n; j++) {
      console.log(j);
    }
  }
}

function exampleCubic(n) {
  for (var i = 0; i < n; i++) {
    console.log(i);
    for (var j = i; j < n; j++) {
      console.log(j);
      for (var k = j; j < n; j++) {
        console.log(k);
      }
    }
  }
}

//exampleCubic(10);

// ---------------------------------------------------------------------- 
// O(log n) = Power of 2 between 2 and n
// Logarithmic time complexity
// ---------------------------------------------------------------------- 

function exampleLogarithmic(n) {
  for (var i = 2; i <= n; i = i*2) {
    console.log(i);
  }
}

//exampleLogarithmic(10000);

// ---------------------------------------------------------------------- 
// Coefficient Rule
// If f(n) is O(g(n)), then kf(n) is O(g(n)), for any constant k>0
// ---------------------------------------------------------------------- 

// O(n) complexity - f(n) = n
function a(n) {
  var count = 0;
  for (var i=0; i<n; i++) {
    count += 1;
  }
  return count;
}

// O(n) complexity - f(n) = 5n
function b(n) {
  var count = 0;
  for (var i=0; i<5*n; i++) {
    count += 1;
  }
  return count;
}

console.log(a(20));
console.log(b(20));

// O(n) complexity - f(n) = n+1
function c(n) {
  var count = 0;
  for (var i=0; i<n; i++) {
    count += 1;
  }
  count += 3;
  return count
}

console.log(c(20));

// ---------------------------------------------------------------------- 
// Sum Rule: "Add Big-Os Up"
// If a master algorithm involves two other algorithms,
// the Big-O notation of that master algorithm is 
// simply the sum of the other two Big-O notations.
//
// f(n) = O(h(n)) and g(n) = O(p(n)), then 
// f(n) + g(n) = O(h(n)+p(n))
// ---------------------------------------------------------------------- 

// Function with two main loops whose time complexities 
// must be considered independently and then summed.

function d(n) {
  var count = 0;
  for (var i=0; i<n; i++) {
    // f(n) = n
    count += 1;
  }
  for (var i=0; i<5*n; i++) {
    // f(n) = 5n
    count += 1;
  }
  // results in (n + 5n) = 6n = O(n)
  return count;
}

// ---------------------------------------------------------------------- 
// Product Rule: "Multiple Big-Os"
// If f(n) is O(h(n)) and g(n) is O(p(n))
// Then f(n)g(n) is O(h(n)p(n))
// ---------------------------------------------------------------------- 

// Function with two nested for loops for which the 
// product rule is applied.

function e(n) {
  var count = 0;
  for (var i=0; i<n; i++) {
    count += 1;
    for (var i=0; i<5*n; i++) {
      count += 1;
    }
  }
  // f(n) = 5n*n = 5n^2 
  // Applying coefficient rule O(n) = n^2
  return count;
}

// ---------------------------------------------------------------------- 
// Polynomial Rule: "Big-O to the Power of k"
// Polynomial time complexities have a Big-O notation of the 
// same polynomial degree.
// 
// If f(n) is a polynomial of degree k, 
// Then f(n) is O(n^k)
// ---------------------------------------------------------------------- 

// Function has one for loop with quadratic time complexity.
// f(n) = n^2 

function f(n) {
  var count = 0;
  for (var i=0; i<n*n; i++) {
    count += 1;
  }
  return count;
}

