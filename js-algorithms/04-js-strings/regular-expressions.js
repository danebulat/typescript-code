// -------------------------------------------------- 
// RegExp Object
// -------------------------------------------------- 

// i   Perform case-insensitive matching 
// g   Perform a global match 
//     (find all matches rather than stopping after 1st match)
// m   Perform multiline matching

// search()  Tests for matches in a string. Returns index of match 
// match()   Tests for matches. Returns all matches


// String object regex-related functions:
// exec()    Tests for matches in a string. Returns 1st match.
// test()    Tests for matches in a string. Returns true or false. 

// -------------------------------------------------- 
// Basic Regex
// -------------------------------------------------- 

// ^      Indicates the start of a string/line 
// \d     Finds any digit 
// [abc]  Finds any character between the brackets
// [^abc] Finds any character not between the brackets
// [0-9]  Finds any digit between the brackets
// [^0-9] Finds any digit not between the brackets
// (x|y)  Finds any of the alternatives specified

var str = "JavaScript DataStructures";
var n = str.search(/DataStructures/);
console.log(n); // 11

// -------------------------------------------------- 
// Commonly Used Regexes
// -------------------------------------------------- 

// Any Numeric Characters
// /\d+/
var reg = /\d+/;
reg.test("123");     // true
reg.test("33asd");   // true
reg.test("5asdasd"); // true
reg.test("asdasd");  // false

// Floating Numeric Characters
// /^[0-9]*.[0-9]*[1-9]+$/
reg = /^[0-9]*.[0-9]*[1-9]+$/;
reg.test("12");    // false
reg.test("12.2");  // true

// Only Alphanumeric Characters
// /[a-zA-Z0-9]/
reg = /[a-zA-Z0-9]/;
reg.test("somethingELSE");  // true
reg.test("hello");          // true
reg.test("112a");           // true
reg.test("112");            // true
reg.test("^");              // false 

// Query String
// /([^?=&]+)(=([^&]*))/
// 
// Ie. http://your.domain/product.aspx?category=4 
//     &product_id=2140&query=1cd+tv

var uri = 'http://your.domain/product.aspx?category=4&product_id=2140&query=1cd+tv';
var queryString = {};
uri.replace(
  new RegExp ("([^?=&]+)(=([^&]*))?", "g"),
  function ($0, $1, $2, $3) { queryString[$1] = $3; }
);
console.log('ID: ' + queryString['product_id']);     // ID: 2140
console.log('Name: ' + queryString['product_name']); // Name: undefined
console.log('Category ' + queryString['category']); // Category: 4

