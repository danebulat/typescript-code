// -------------------------------------------------- 
// Linear Search
// -------------------------------------------------- 

// Time Complexity: O(n)

// iterate through the array and find
function linearSearch(array, n) {
  for (var i=0; i<array.length; i++) {
    if (array[i] == n) {
      return true;
    }
  }
  return false;
}

console.log(linearSearch([1,2,3,4,5,6,7,8,9], 6));  // true
console.log(linearSearch([1,2,3,4,5,6,7,8,9], 10)); // false 

// -------------------------------------------------- 
// Binary Search
// -------------------------------------------------- 

// Binary searches can check the middle value to see 
// whether the desired value is greater or smaller than 
// it. If the desired value is smaller, this algorithm 
// can search through the smaller parts, or the bigger 
// parts if the desired value is bigger.

function binarySearch(arr, x) {
  let start = 0;
  let end = arr.length-1;

  while (start !== end) {
    let mid = Math.floor(start+end / 2);

    if (arr[mid] === x) {
      return true;
    } else if (arr[mid] > x) {
      end = mid;
    } else {
      start = mid;
    }
  }
  return -1;
}

console.log(binarySearch([1,2,3,4], 4));
console.log(binarySearch([1,2,3,4], 5));

let recursiveFunction = function (arr, x, start, end) {
    // Base Condition
    if (start > end) return false;
    
    // Find the middle index
    let mid=Math.floor((start + end)/2);
    
    // Compare mid with given key x
    if (arr[mid]===x) return true;
     
    // If element at mid is greater than x,
    // search in the left half of mid
    if(arr[mid] > x)
        return recursiveFunction(arr, x, start, mid-1);
    else
        // If element at mid is smaller than x,
        // search in the right half of mid
        return recursiveFunction(arr, x, mid+1, end);
}

