// -------------------------------------------------- 
// Integer Rounding
// -------------------------------------------------- 

// Implementing integer division
// Math.floor - rounds down to nearest integer 
// Math.round - rounds to nearest integer 
// Math.ceil  - rounds up to nearest integer

console.log( Math.floor(0.9) );
console.log( Math.floor(1.1) );

console.log( Math.round(0.49) );
console.log( Math.round(0.5) );

console.log( Math.round(2.9) );
console.log( Math.ceil(0.1) );
console.log( Math.ceil(0.9) );
console.log( Math.ceil(21) );
console.log( Math.ceil(21.01) );

// -------------------------------------------------- 
// Number.EPSILON
// -------------------------------------------------- 

// Returns the smallest interval between two 
// representable numbers. Useful with floating-point 
// approximation.

function numberEquals(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}

console.log(numberEquals(0.1 + 0.2, 0.3)); // true

// -------------------------------------------------- 
// Maximums
// -------------------------------------------------- 

// Number.MAX_SAFE_INTEGER returns the largest integer
let a = Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2;
console.log(a);

// Doesn't work for floating-point values
let b = Number.MAX_SAFE_INTEGER + 1.111 === Number.MAX_SAFE_INTEGER + 2.022;
console.log(b);

// Number.MAX_VALUE returns largest floating-point number
// Uses double-precision floating-point representation.
let c = Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2;
console.log(c);

// -------------------------------------------------- 
// Minimums
// -------------------------------------------------- 

// Number.MIN_SAFE_INTEGER returns smallest integer
let d = Number.MIN_SAFE_INTEGER - 1 === Number.MIN_SAFE_INTEGER - 2;

// Doesn't work for floating-point values
let e = Number.MIN_SAFE_INTEGER - 1.111 === Number.MIN_SAFE_INTEGER - 2.022;

// Number.MIN_VALUE returns the smallest floating-point number
// Not a negative value.
let f = Number.MIN_VALUE - 1 == -1; // true

// -------------------------------------------------- 
// Infinity
// -------------------------------------------------- 

console.log( Infinity  > Number.MAX_SAFE_INTEGER); // true
console.log( -Infinity < Number.MAX_SAFE_INTEGER); // true
console.log( -Infinity -32323323 == -Infinity -1); // true

