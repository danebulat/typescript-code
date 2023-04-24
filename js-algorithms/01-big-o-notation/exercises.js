// ---------------------------------------------------------------------- 
// Exercise 1
// ---------------------------------------------------------------------- 

function someFunction1(n) {
  // f(n) = 1000n
  for (var i=0; i<n*1000; i++) {
    // f(n) = 20n
    for (var j=0; j<n*20; j++) {
      console.log(i+j);
    }
  }
}

// 1000n*20n 
// (take away coefficients) = n*n = O(n^2)
// There are two nested loops. Ignore the constants in front of `n`.


// ---------------------------------------------------------------------- 
// Exercise 2
// ---------------------------------------------------------------------- 

function someFunction2(n) {
  // f(n) = n
  for (var i=0; i<n; i++) {
    // f(n) = n
    for (var j=0; j<n; j++) {
      // f(n) = n
      for (var k=0; k<n; k++) {
        // Runs only until 10, negligable
        for (var l=0; l<10; l++) {
          console.log(i+j+k+l);
        }
      }
    }
  }
}

// 3 nested loops = O(n^3)
// There are four nested loops, but the last loop runs only until 10.

// ---------------------------------------------------------------------- 
// Exercise 3
// ---------------------------------------------------------------------- 

function someFunction3(n) {
  for (var i=0; i<1000; i++) {
    console.log("hi");
  }
}

// f(n) = O(1)
// Complexity is always the same regardless of the input.
// Constant complexity. Does not depend on `n`.

// ---------------------------------------------------------------------- 
// Exercise 4
// ---------------------------------------------------------------------- 

function someFunction4(n) {
  for (var i=0; i<n*10; i++) {
    console.log(n);
  }
}

// f(n) = 10n = O(n)
// Linear complexity (remove coefficient rule)
// Linear complexity. The function runs from 0 to 10n. Constants are 
// ignored in Big-O.

// ---------------------------------------------------------------------- 
// Exercise 5
// ---------------------------------------------------------------------- 

function someFunction5(n) {
  // f(n) = log2n
  for (var i=0; i<n; i*2) {
    console.log(n);
  }
}

// f(n) = log2n = O(log2n)
// Logarithmic complexity. For a given n, this will operate 
// only log2n times because `i` is incremented by multiplying 2.

// ---------------------------------------------------------------------- 
// Exercise 6
// ---------------------------------------------------------------------- 

function someFunction6(n) {
  while (true) {
    console.log(n);
  }
}

// f(n) = infinity
// Infinite complexity. Function will not end.
