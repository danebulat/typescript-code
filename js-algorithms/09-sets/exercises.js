// -------------------------------------------------- 
// USING SETS TO CHECK FOR DUPLICATES IN AN ARRAY
// -------------------------------------------------- 

// By converting the array into a set, the size of 
// the set can be compared with the length of the array 
// to check for duplicates easily.

// Time Complexity: O(n)
// Space Complexity: O(n)

function checkDuplicates(arr) {
  var mySet = new Set(arr);
  return mySet.size < arr.length;
}

console.log(checkDuplicates([1,2,3,4,5]));
console.log(checkDuplicates([1, 1, 2,3,4,5]));

// -------------------------------------------------- 
// RETURNING ALL UNIQUE VALUES FROM SEPARATE ARRAYS
// -------------------------------------------------- 

// Time Complexity: O(n + m)
// Space Complexity: O(n + m)

function uniqueList(arr1, arr2) {
  var mySet = new Set(arr1.concat(arr2));
  return Array.from(mySet);
}

console.log(uniqueList([1,1,2,2],[2,3,4,5]));
console.log(uniqueList([1,2],[3,4,5]));
console.log(uniqueList([],[2,2,3,4,5]));

