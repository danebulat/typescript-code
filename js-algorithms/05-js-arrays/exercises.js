// -------------------------------------------------- 
// 1. Find two array elements in an array that add 
// up to each other. Return 2 indices of the array 
// that add up to weight, or -1.
// -------------------------------------------------- 

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function findSum(arr, weight) {
  for (var i=0, arrLen=arr.length; i<arrLen; i++) {
    for (var j=i+1; j<arrLen; j++) {
      if (arr[i] + arr[j] === weight) {
        return [i,j];
      }
    }
  }
  return -1;
}

console.log(findSum([1,2,3,4,5], 9));

// NOTE: Storing into and retrieving a JavaScript object 
// property is O(1) time.

// Time Complexity: O(n)
// Space Complexity: O(n)

function findSumBetter(arr, weight) {
  var hashtable = {};

  for (var i=0, arrLength=arr.length; i<arrLength; i++) {
    var currentElement = arr[i],
        difference = weight - currentElement;

    // check the right one already exists
    if (hashtable[currentElement] != undefined) {
      return [i, hashtable[weight-currentElement]];
    } else {
      // store index 
      hashtable[difference] = i;
    }
  }
  return -1;
}

console.log(findSumBetter([1,2,3,4,5], 9));

// -------------------------------------------------- 
// 2. Implement Array.slice() function from scratch
// -------------------------------------------------- 

// Takes 2 arguments: startIndex, lastIndex
// Returns portion of array without modifying it.

// Time Complexity: O(n)
// Space Complexity: O(n)

function arraySlice(array, beginIndex, endIndex) {
  // if no parameters passed, return the array
  if (! beginIndex && ! endIndex) {
    return array;
  }

  // if only beginning index is found, set endIndex to 
  // size
  if (! endIndex) {
    var endIndex = array.length;
  }
  
  var partArray = [];

  // if both begin and end index specified, return the 
  // part of the array
  for (var i = beginIndex; i < endIndex; i++) {
    partArray.push(array[i]);
  }
  return partArray;
}

console.log(arraySlice([1,2,3,4], 1, 2));
console.log(arraySlice([1,2,3,4], 2, 4));

// -------------------------------------------------- 
// 3. Find mediam of two sorted arrays of same size
// -------------------------------------------------- 

// Median in an even number of a set is the average 
// of the two middle numbers.
// [1,2,3,4] median = (2+3)/2=2.5

function medianOfArray(array) {
  var length = array.length;
  // Odd 
  if (length % 2 != 0) {
    return array[Math.floor(length/2)];
  } else {
    // Even 
    return (array[length/2] + array[length/2 - 1])/2;
  }
}
