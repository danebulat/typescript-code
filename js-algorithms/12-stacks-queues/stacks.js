// -------------------------------------------------- 
// Stacks
// -------------------------------------------------- 

function Stack(array) {
  this.array = [];
  if (array) 
    this.array = array;
}

Stack.prototype.getBuffer = function() {
  return this.array.slice();
}

Stack.prototype.isEmpty = function() {
  return this.array.length == 0;
}

// instance of the stack class
var stack1 = new Stack();
console.log(stack1); 

// -------------------------------------------------- 
// Insertion O(1)
// -------------------------------------------------- 

Stack.prototype.push = function(value) {
  this.array.push(value);
}

stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log(stack1);

// -------------------------------------------------- 
// Peek O(1)
// -------------------------------------------------- 

// Return the last-added element without removing it 
// from the data structure.

Stack.prototype.peek = function() {
  return this.array[this.array.length-1];
}

stack1.push(10);
console.log(stack1.peek());  // 10
stack1.push(5);
console.log(stack1.peek());  // 5

// -------------------------------------------------- 
// Deletion O(1)
// -------------------------------------------------- 

Stack.prototype.pop = function() {
  return this.array.pop();
}

stack1.pop();
stack1.pop();
stack1.pop();
console.log(stack1);

// -------------------------------------------------- 
// Access O(n)
// -------------------------------------------------- 

function stackAccessNthTopNode(stack, n) {

  // Cache stack array in variable
  var bufferArray = stack.getBuffer();

  // Error if nth node less than zero
  if (n<=0) throw 'error';

  // Initialise new Stack with original copied array
  var bufferStack = new Stack(bufferArray);

  // Remove elements until Nth element can be popped
  while (--n != 0) {
    bufferStack.pop();
  }

  // Return Nth element
  return bufferStack.pop();
}

var stack2 = new Stack();
stack2.push(1);
stack2.push(2);
stack2.push(3);
console.log(stackAccessNthTopNode(stack2, 2));

// -------------------------------------------------- 
// Search O(n)
// -------------------------------------------------- 

// First create a buffer stack so that pop can be called
// on that buffer stack. This way, the original stack is 
// not mutated, and nothing is removed from it.

function stackSearch(stack, element) {
  var bufferArray = stack.getBuffer();

  // Copy into buffer
  var bufferStack = new Stack(bufferArray); 

  while (!bufferStack.isEmpty()) {
    if (bufferStack.pop() === element) {
      return true;
    }
  }
  return false;
}
