// -------------------------------------------------- 
// JavaScript Object Property
// -------------------------------------------------- 

// Creating objects and adding properties
var javaScriptObject = {};  // new Object();
var testArray = [1,2,3,4]

javaScriptObject.array = testArray;
console.log(javaScriptObject);

javaScriptObject.title = 'Algorithms';
console.log(javaScriptObject);

// -------------------------------------------------- 
// Prototypal Inheritance
// -------------------------------------------------- 

// Works by adding new functions to a JavaScript 
// class via .prototype.

// Class example ------------------------------------
function ExampleClass() {
  this.name = "JavaScript";
  this.sayName = function() {
    console.log(this.name);
  }
}

// New object
var example1= new ExampleClass();
example1.sayName();


// .prototype Example -------------------------------
function ExampleClassB() {
  this.array = [1,2,3,4,5];
  this.name = "JavaScript";
}

// New object
var example2 = new ExampleClassB();

ExampleClassB.prototype.sayName = function() {
  console.log(this.name);
}

example2.sayName();

// -------------------------------------------------- 
// Constructor and Variables
// -------------------------------------------------- 


// this.propertyName variables are public -----------
function ExampleClassC(name, size) {
  this.name = name;
  this.size = size;
}

var example3 = new ExampleClassC("Public", 5);
console.log(example3);

// accessing public variables
console.log(example3.name);
console.log(example3.size);


// Mimic private variables with getter/setter -------
function ExampleClassD(name, size) {
  var privateName = name;
  var privateSize = size;

  this.getName = function() { return privateName; }
  this.setName = function(name) { privateName = name; }

  this.getSize = function() { return privateSize; };
  this.setSize = function(size) { privateSize.size; };
}

var example4 = new ExampleClassD("Dane", 3);
example4.setSize(12);
console.log(example4.privateName);  // undefined
console.log(example4.getName());    // "Dane" 
console.log(example4.privateSize);  // undefined
console.log(example4.getSize());    // 12 
