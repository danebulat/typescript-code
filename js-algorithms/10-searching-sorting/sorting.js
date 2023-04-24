// -------------------------------------------------- 
// Bubble Sort
// -------------------------------------------------- 

// Helper function
function swap(array, index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function bubbleSort(array) {
  for (var i=0, arrayLength = array.length; i<arrayLength; i++) {
    for (var j=0; j<i; j++) {
      if (array[i] < array[j]) {
        swap(array, i, j);
      }
    }
  }
  return array;
}

console.log(bubbleSort([6,1,2,3,4,5]));

// -------------------------------------------------- 
// Selection Sort
// -------------------------------------------------- 

// There is one for loop to iterate through the array 
// and one nested for loop to scan to get the minimum 
// element.

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function selectionSort(items) {
  var len = items.length;
  var min;

  for (var i=0; i<len; i++) {
    // set minimum to this position
    min = i;

    // check the rest of the array to see if anything is smaller
    for (var j=i+1; j<len; j++) {
      if (items[j] < items[min]) {
        min = j;
      }
    }

    // if the minimum isn't in the position, swap it
    if (i != min) {
      swap(items, i, min);
    }
  }
  return items;
}

console.log(selectionSort([6,1,23,4,2,3]));

// -------------------------------------------------- 
// Insertion Sort
// -------------------------------------------------- 

// The outer for loop iterates over the array indices,
// and the inner for loop moves the unsorted items into 
// the sorted sublist on the left side of the array

// Time Complexity: O(n^2)
// Space Complexity: O(1)

function insertionSort(items) {
  var len = items.length,  // number of items in the array
      value,               // the value currently being compared
      i,                   // index into unsorted selection 
      j;                   // index into sorted selection

  for (i=0; i<len; i++) {
    // store the current value because it may shift later
    value = items[i];

    // Whenever the value in the sorted selection is greater that the value 
    // in the unsorted selection, shift all items in the sorted selection 
    // over by one. This creates space in which to insert the value.

    for (j=i-1; j > -1 && items[j] > value; j--) {
      items[j+1] = items[j];
    }
    items[j+1] = value;
  }
  return items;
}

console.log(insertionSort([6,1,23,4,2,3]));

// -------------------------------------------------- 
// Quicksort
// -------------------------------------------------- 
// TODO

// -------------------------------------------------- 
// QUickselect
// -------------------------------------------------- 
// TODO

// -------------------------------------------------- 
// Mergesort
// -------------------------------------------------- 
// TODO

// -------------------------------------------------- 
// Count Sort
// -------------------------------------------------- 
// TODO

// -------------------------------------------------- 
// JavaScript's Built-in Sort
// -------------------------------------------------- 

var array1 = [12,3,4,2,1,34,23];

// By default, items are converted to strings and 
// sorted according to alphabet
console.log(array1.sort());

// With comparator function
var array1 = [12,3,4,2,1,32,23];

function comparatorNumber(a,b) {
  return a-b;  // ascending
}

console.log(array1.sort(comparatorNumber));

function comparatorNumberB(a,b) {
  return b-a;  // descending 
}

console.log(array1.sort(comparatorNumberB));
