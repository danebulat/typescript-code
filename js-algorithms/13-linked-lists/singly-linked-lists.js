// -------------------------------------------------- 
// Singly Linked Lists
// -------------------------------------------------- 

function SinglyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.size = 0;
}

SinglyLinkedList.prototype.isEmpty = function() {
  return this.size == 0;
}

// -------------------------------------------------- 
// Insertion
// -------------------------------------------------- 

// If the head of the linked list is empty, the head is 
// set to the new node. Otherwise, the old head is saved 
// in temp, and the new head becomes the newly added node.
// Finally, the new head's next points to the temp (old head)

SinglyLinkedList.prototype.insert = function(value) {
  if (this.head === null) {
    this.head = new SinglyLinkedListNode(value);
  } else {
    var temp = this.head;
    this.head = new SinglyLinkedListNode(value);
    this.head.next = temp;
  }
  this.size++;
}

var sll1 = new SinglyLinkedList();
sll1.insert(1);
sll1.insert(12);
sll1.insert(20);
console.log(sll1);

// -------------------------------------------------- 
// Deletion by Value
// -------------------------------------------------- 

SinglyLinkedList.prototype.remove = function(value) {
  var currentHead = this.head;

  if (currentHead.data == value) {
    // just shift the head over
    this.head = currentHead.next;
    this.size--;
  } else {
    var prev = currentHead;
    while (currentHead.next) {
      if (currentHead.data == value) {
        // remove by skipping 
        prev.next = currentHead.next;
        prev = currentHead;
        currentHead = currentHead.next;
        break; // break out of the loop
      }
      prev = currentHead;
      currentHead = currentHead.next;
    }
    // if it wasn't found in the middle or head, must be tail
    if (currentHead.data == value) {
      prev.next = null;
    }
    this.size--;
  }
}

var sll1 = new SinglyLinkedList();
sll1.insert(1);
sll1.insert(12);
sll1.insert(20);
sll1.insert(12);
sll1.insert(20);
console.log(sll1);

// -------------------------------------------------- 
// Deletion at the Head
// -------------------------------------------------- 

SinglyLinkedList.prototype.deleteAtHead = function() {
  var toReturn = null;

  if (this.head !== null) {
    toReturn = this.head.data;
    this.head = this.head.next;
  }

  this.size--;
  return toReturn;
}

var sll1 = new SinglyLinkedList();
sll1.insert(1);
sll1.insert(12);
sll1.insert(20);
console.log(sll1.deleteAtHead());
console.log(sll1);

// -------------------------------------------------- 
// Search O(n)
// -------------------------------------------------- 

SinglyLinkedList.prototype.find = function(value) {
  var currentHead = this.head;
  console.log(currentHead);

  if (currentHead == null) {
    return false;
  }

  while (currentHead) {
    if (currentHead.data == value) {
      return true;
    }
    currentHead = currentHead.next;
  }

  return false;
}

console.log(sll1.find(1));
