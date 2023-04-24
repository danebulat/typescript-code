// -------------------------------------------------- 
// Introducing Arrays
// -------------------------------------------------- 

// For any data structure, developers are interested 
// in time and space complexity associated with the 
// four fundamental operations: access, insertion,
// deletion, and search.

// -------------------------------------------------- 
// Insertion
// -------------------------------------------------- 

// .push(element)
// Add element to end of array. O(1)
var array1 = [1,2,3,4];
array1.push(5);
array1.push(7);
array1.push(2);

// -------------------------------------------------- 
// Deletion
// -------------------------------------------------- 

// .pop()
// Remove last-added element of the array.
// Returns removed element. O(1)
var array2 = [1,2,3,4];
array2.pop();
array2.pop();

// .shift()
// Remove first element and return it.
array2 = [1,2,3,4];
array2.shift();
array2.shift();

// -------------------------------------------------- 
// Access
// -------------------------------------------------- 

// O(1)
var array3 = [1,2,3,4];
array3[0];
array3[1];

// -------------------------------------------------- 
// Iteration O(n)
// -------------------------------------------------- 

// for (Variables; Condition; Modification) ---------
for (var i=0, len=array1.length; i<len; i++) {
  console.log(array1[i]);
}

var counter = 0;
while (counter < array.length) {
  console.log(array1[counter]);
  counter++;
}

// for (in) -----------------------------------------
array1 = ['all','cows','are','big'];

for (var index in array1) {
  console.log(index);
}

for (var index in array1) {
  console.log(array1[index]);
}

// for (of) -----------------------------------------
for (var element of array1) {
  console.log(element);
}

// forEach() ----------------------------------------
// Cannot break out of the iteration or skip certain 
// elements in the array.

array1.forEach(function(element, index) {
  console.log(element);
});

array1.forEach(function(element, index) {
  console.log(array1[index]);
});

