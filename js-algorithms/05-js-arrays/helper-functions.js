// -------------------------------------------------- 
// Helper Functions (processing)
// -------------------------------------------------- 

// -------------------------------------------------- 
// .slice(begin, end)
// Returns portion of array without modifying it.
// -------------------------------------------------- 

var array1 = [1,2,3,4];
array1.slice(1,2);  // 2
array1.slice(2,4);  // 3,4
array1.slice(1);    // 2,3,4
array1.slice(1,4);  // 2,3,4
array1.slice();     // returns copy

// NOTE: Arrays are referenced-based 
// Different variables will point to same array
// in memory.

var array2 = [1,2,3,4],
    array3 = array2;
array3[0] = 5;
console.log(array2);
console.log(array3);

// -------------------------------------------------- 
// .from() - Creates a new array in memory - O(n)
// -------------------------------------------------- 

var array4 = [1,2,3,4];
var array5 = Array.from(array4);
array5[0] = 5;
console.log(array4);
console.log(array5);

// -------------------------------------------------- 
// .splice(begin, size, element1, element2, ...)
// Returns and changes the contents of an array by 
// removing existing elements and/or adding new 
// elements. Worst case O(n)
// -------------------------------------------------- 

// New elements are added at the position specified 
// by the 1st parameter.
var array6 = [1,2,3,4];
array6.splice();     // []
array6.splice(1,2);  // returns 2,3, array is 1,4

array6 = [1,2,3,4];
array6.splice(1,2,5,6,7); // returns 2,3, array is 1,5,6,7,4

// Any object type can be added to the array.
var array7 = [1,2,3,4];
array7.splice(1,2, [5,6,7]);
array7 = [1,2,3,4];
array7.splice(1,2,{'ss':1});

// -------------------------------------------------- 
// .concat()
// Adds to elements at end of array and returns it.
// -------------------------------------------------- 

var array8 = [1,2,3,4];
array8.concat();        // array8=1,2,3,4  return=1,2,3,4
array8.concat([2,3,4]); // array8=1,2,3,4 return=1,2,3,4,2,3,4

// -------------------------------------------------- 
// .length Property
// -------------------------------------------------- 

// Can be used to lower size and delete elements.
var array9 = [1,2,3,4];
console.log(array9.length);
array9.length = 3; // array9=1,2,3

// -------------------------------------------------- 
// Spread Operator
// -------------------------------------------------- 

function addFourNumbers(a, b, c, d) {
  return a + b + c + d;
}

function addThreeNumbers(a, b, c) {
  return a + b + c;
}

var numbers = [1,2,3,4];
console.log(addFourNumbers(...numbers));
console.log(addThreeNumbers(...numbers));

