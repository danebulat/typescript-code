// -------------------------------------------------- 
// Map
// -------------------------------------------------- 

[1,2,3,4,5,6,7].map(function (value) {
  return value*10;
});

// -------------------------------------------------- 
// Filter
// -------------------------------------------------- 

[100,2003,10,203,333,12].filter(function (value) {
  return value > 100;
});

// -------------------------------------------------- 
// Reduce (fold)
// -------------------------------------------------- 
// Combines all elements in the array into one value 
// using a passed transformation function parameter.

var sum = [0,1,2,3,4].reduce(function (prevVal, currentVal, index, array) {
  return prevVal + currentVal;
});
console.log(sum);

// Providing an initial value
sum = [0,1,2,3,4].reduce(function(prevVal, currentVal, index, array) {
  return prevVal + currentVal;
}, 1);
console.log(sum);


// -------------------------------------------------- 
// Multidimensional Arrays
// -------------------------------------------------- 

// A "jagged" array is an array whose elements are arrays.
// The elements on a jagged array can be of different 
// dimensions and sizes.

// Helper function to create a jagged array
function Matrix(rows, columns) {
  var jaggedarray = new Array(rows);
  for (var i=0; i<columns; i++) {
    jaggedarray[i] = new Array(rows);
  }
  return jaggedarray;
}

console.log(Matrix(3,3));

// Accessing elements in jagged arrays
var matrix3by3 = [[1,2,3], [4,5,6], [7,8,9]];
matrix3by3[0];    // [1,2,3]
matrix3by3[1];    // [4,5,6]
matrix3by3[2];    // [7,8,9]

matrix3by3[0][0]; // 1
matrix3by3[0][1]; // 2
matrix3by3[0][2]; // 3

