// -------------------------------------------------- 
// Set Operations
// -------------------------------------------------- 

// Native Set object has only one property: size
var exampleSet = new Set();

// Insertion ----------------------------------------

// Time Complexity: O(1)
exampleSet.add(1)
exampleSet.add(1);
exampleSet.add(2);
console.log(exampleSet);

// Deletion -----------------------------------------

// Time Complexity: O(1)
exampleSet = new Set();
exampleSet.add(1);
exampleSet.delete(1);  // returns boolean
exampleSet.add(2);
console.log(exampleSet);

// Contains -----------------------------------------

// Time Complexity: O(1)
exampleSet = new Set();
exampleSet.add(1);
console.log(exampleSet.has(1)); // true
console.log(exampleSet.has(2)); // false 
exampleSet.add(2);
console.log(exampleSet.has(2)); // true

// -------------------------------------------------- 
// Other Utility Functions
// -------------------------------------------------- 

// Intersection ------------------------------------

function intersectSets(setA, setB) {
  var intersection = new Set();
  for (var elem of setB) {
    if (setA.has(elem)) {
      intersection.add(elem);
    }
  }
  return intersection;
}

var setA = new Set([1,2,3,4]),
    setB = new Set([2,3]);

console.log(intersectSets(setA, setB));

// isSuperSet ---------------------------------------

// Check if all elements in subset are in setA
function isSuperset(setA, subset) {
  for (var elem of subset) {
    if (!setA.has(elem)) {
      return false;
    }
  }
  return true;
}

var setA = new Set([1,2,3,4]),
    setB = new Set([2,3]),
    setC = new Set([5]);

console.log(isSuperset(setA, setB)); // true
console.log(isSuperset(setA, setC)); // false 

// Union --------------------------------------------

// Combine elements of both sets.
function unionSet(setA, setB) {
  var union = new Set(setA);
  for (var elem of setB) {
    union.add(elem);
  }
  return union;
}

var setA = new Set([1,2,3,4]),
    setB = new Set([2,3]),
    setC = new Set([5]);

console.log(unionSet(setA, setB));
console.log(unionSet(setA, setC));

// Difference ---------------------------------------

// All elements in setA that are not in setB
function differenceSet(setA, setB) {
  var difference = new Set(setA);
  for (var elem of setB) {
    difference.delete(elem);
  }
  return difference;
}

var setA = new Set([1,2,3,4]),
    setB = new Set([2,3]);

console.log(differenceSet(setA, setB));
