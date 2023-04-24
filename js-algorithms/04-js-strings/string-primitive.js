// -------------------------------------------------- 
// String Access
// -------------------------------------------------- 

// .charAt() - Access characters
console.log( "dog".charAt(1) );

// .substring(startIndex, endIndex) - Access string
console.log( "YouTube".substring(1,2) );
console.log( "YouTube".substring(3,7) );
console.log( "YouTube".substring(1) );

// -------------------------------------------------- 
// String Comparison
// -------------------------------------------------- 

var a = 'a';
var b = 'b';
console.log(a < b);

var c = 'add';
var d = 'b';
console.log(c < d); // true

var e = 'add';
var f = 'ab';
console.log(e < f); // false
console.log('add' < 'ab' == 'ad' < 'ab'); // true

// -------------------------------------------------- 
// String Search
// -------------------------------------------------- 

// .indexOf(searchValue[, fromIndex]) 
// Search for substring
// Returns position of matching string, or -1

'Red Dragon'.indexOf('Red');       // returns 0
'Red Dragon'.indexOf('RedScale');  // returns -1
'Red Dragon'.indexOf('Dragon', 0); // returns 4
'Red Dragon'.indexOf('Dragon', 4); // returns 4
'Red Dragon'.indexOf('', 9);       // returns 9

function existsInString(stringValue, search) {
  stringValue.indexOf(search) !== -1;
}

console.log(existsInString('red', 'r'));
console.log(existsInString('red', 'b'));

// Example: Counting occurences of certain letters
function exampleAlg() {
  var str   = "He's my king from this day until his last day";
  var count = 0;
  var pos   = str.indexOf('a');
  
  while (pos !== -1) {
    count++;
    pos = str.indexOf('a', pos + 1);
  }
}

// .startsWith | .endsWith 
// Returns true if string starts/ends with specified input.
'Red Dragon'.startsWith('Red');
'Red Dragon'.endsWith('Dragon');
'Red Dragon'.startsWith('Dragon');
'Red Dragon'.endsWith('Red');

// -------------------------------------------------- 
// String Decomposition
// -------------------------------------------------- 

// .split(separator) - Creates an array of substrings
var test1 = 'chicken,noodle,soup,broth';
test1.split(",");

// Passing an empty string will create an array of all 
// the characters.
test1.split("");

// -------------------------------------------------- 
// String Replace
// -------------------------------------------------- 

// .replace(string, replaceString)
console.log(
  "Wizard of Oz".replace("Wizard", "Witch")
  );

