// -------------------------------------------------- 
// Base Case
// -------------------------------------------------- 

function countDownToZero(n) {
  if (n < 0) {
    return;
  } else {
    console.log(n);
    countDownToZero(n-1);
  }
}
countDownToZero(4);

// -------------------------------------------------- 
// Fibonacci Sequence
// -------------------------------------------------- 

// Iterative Solution
function getNthFibo(n) {
  if (n <= 1) return n;
  var sum = 0,
      last = 1,
      lastlast = 0;

  for (var i=1; i<n; n++) {
    sum = last + lastlast;
    lastlast = last;
    last = sum;
  }
  return sum;
}

// Recursive Solution O(n^n)
function getNthFiboB(n) {
  if (n <= 1) {
    return n;
  } else {
    return getNthFiboB(n-1) + getNthFiboB(n-2);
  }
}

// Tail Recursion O(n)
function getNthFiboC(n, lastlast, last) {
  if (n == 0) {
    return lastlast;
  }
  if (n == 1) {
    return last;
  }
  return getNthFiboC(n-1, last, lastlast + last)
}
