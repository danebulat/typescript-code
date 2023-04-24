// -------------------------------------------------- 
// Equality and Types
// -------------------------------------------------- 

// `undefined` 
// A primitive value that is assigned to a variable 
// that has just been declared.

// `typeof`
// Primitive operator used to return the type of a 
// variable.

var is20 = false; // boolean 
typeof is20;      // boolean

var age = 19;
typeof age;       // number

var lastName = "Bae";
typeof lastName;  // string

var fruits = ["Apple", "Banana", "Kiwi"];
typeof fruits;    // object

var me = {firstName: "Dane", lastName: "Bulat"};
typeof me;        // object

var nullVar = null;
typeof nullVar;   // object

var function1 = function() {
  console.log(1);
}
typeof function1; // function

var blank;
typeof blank;     // undefined

// -------------------------------------------------- 
// Truthy/Falsey Check
// -------------------------------------------------- 

// false = empty/null/undefined variables
// Ie. false, 0, '', "", NaN, undefined, null

var printIfTrue = '';

if (printIfTrue) {
  console.log('truthy');
} else {
  console.log('falsey');
}

// -------------------------------------------------- 
// === vs ==
// -------------------------------------------------- 

// NOTE: Can only be used on strings and numbers. 
// Functions and objects have unique memory addresses.

// Variables are not assigned a type during declaration.
// Instead, types are interpreted as the code runs.

// === checks both the type and value.
// "5" == 5    // returns true 
// "5" === 5   // returns false

// -------------------------------------------------- 
// Objects
// -------------------------------------------------- 

var o1 = {};
var o2 = {};

// Variables have different addresses in memory
console.log(o1 == o2);   // returns false 
console.log(o1 === o2);  // returns false

// lodash or underscore libraries have isEqual(object1, object2)
// to check two objects or values strictly.

// Example: Accurate object equality 
function isEquivalent(a, b) {
  // arrays of property names 
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  // If there property lengths are different, they're different 
  // objects
  if (aProps.length != bProps.length) {
    return false;
  }

  for (var i=0; i < aProps.length; i++) {
    var propName = aProps[i];

    // If the values of the property are different, not equal
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  // If everything matched, correct
  return true;
}

// Returns true
console.log(
  isEquivalent({'hi': 12}, {'hi': 12})
  ); 

// Returns false (different memory address)
var obj1 = { 'prop1': 'test', 'prop2': function(){} };
var obj2 = { 'prop1': 'test', 'prop2': function(){} };
console.log(
  isEquivalent(obj1, obj2)
  );

// Returns false (different memory address)
var func1 = function(){console.log(2)};
var func2 = function(){console.log(2)};
console.log(
  isEquivalent(func1, func2)
  );

