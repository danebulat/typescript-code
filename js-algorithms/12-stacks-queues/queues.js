function Queue(array) {
  this.array = [];
  if (array) {
    this.array = array;
  }
}

Queue.prototype.getBuffer = function() {
  return this.array.slice();
}

Queue.prototype.isEmpty = function() {
  return this.array.length == 0;
}

// instance of the queue class 
var queue1 = new Queue();
console.log(queue1);

// -------------------------------------------------- 
// Peek
// -------------------------------------------------- 

Queue.prototype.peek = function() {
  return this.array[0];
}

// -------------------------------------------------- 
// Insertion
// -------------------------------------------------- 

Queue.prototype.enqueue = function(value) {
  this.array.push(value);
}

// -------------------------------------------------- 
// Deletion
// -------------------------------------------------- 

Queue.prototype.dequeue = function() {
  return this.array.shift();
}

queue1.enqueue(1);
queue1.enqueue(2);
queue1.enqueue(3);
console.log(queue1);

queue1.dequeue();
console.log(queue1);

queue1.dequeue();
console.log(queue1);

// -------------------------------------------------- 
// Access O(n)
// -------------------------------------------------- 

// A buffer is needed to prevent modification to the 
// original queue.

function queueAccessNthTopNode(queue, n) {
  var bufferArray = queue.getBuffer();

  if (n <= 0) {
    throw 'error';
  }

  // Copy into new buffer
  var bufferQueue = new Queue(bufferArray);

  while (--n !== 0) {
    bufferQueue.dequeue();
  }
  return bufferQueue.dequeue();
}

// -------------------------------------------------- 
// Search O(n)
// -------------------------------------------------- 

// Again involves creating a buffer queue first to avoid 
// modifications to the original queue.

function queueSearch(queue, element) {
  var bufferArray = queue.getBuffer();

  var bufferQueue = new Queue(bufferArray);

  while (!bufferQueue.isEmpty()) {
    if (bufferQueue.dequeue() === element) {
      return true;
    }
  }
  return false;
}

