
// The LFU (Less Frequently Used) cache uses a doubly 
// linked list to remove elements in O(1) time. The 
// doubly linked node in LFUs also has the freqCount 
// property, which represents how frequently it has 
// been accessed/set after being inserted for the first 
// time.

function LFUNode(key, value) {
  this.prev = null;
  this.next = null;

  this.key = key;
  this.data = value;
  this.freqCount = 1;
}

// The LFU cache has two hash tables: keys and freq. 
// freq has keys of frequency (1 to n, where n is the 
// top frequency for element access).
// Keys store each doubly linked list node for O(1) 
// retrieval. 

// Doubly linked list
function LFUDoublyLinkedList() {
  this.head = new LFUNode('buffer head', null);
  this.tail = new LFUNode('buffer tail', null);

  this.head.next = this.tail;
  this.tail.prev = this.head;
  this.size = 0;
}

// LFU cache
function LFUCache(capacity) {
  this.keys = {};   // stores LFUNode 
  this.freq = {};   // stores LFUDoublyLinkedList 

  this.capacity = capacity;
  this.minFreq = 0;
  this.size = 0;
}

// LFUDoublyLinkedList requires the doubly linked list 
// implementation for insertion and removal. However, only 
// the insertion at the head and the removal at the tail 
// is needed. 

LFUDoublyLinkedList.prototype.insertAtHead = function(node) {
  node.next = this.head.next;
  this.head.next.prev = node;
  this.head.next = node;
  node.prev = this.head;
  this.size++;
}

LFUDoublyLinkedList.prototype.removeAtTail = function() {
  var oldTail = this.tail.prev;
  var prev = this.tail.prev;
  prev.prev.next = this.tail;
  this.tail.prev = prev.prev;
  this.size--;
  return oldTail;
}

LFUDoublyLinkedList.prototype.removeNode = function(node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
  this.size--;
}

// When inserting a new item, a new node is created. If the 
// cache is not full, it can be inserted into the freq's 
// doubly linked list of frequency 1. If the capacity is full,
// the tail item in the doubly linked list of frequency is 
// deleted, and then the new node is inserted.

// If the element already exists and needs to be replaced, the 
// node is brought to the head of its corresponding frequency 
// doubly linked list.

// The minimum frequency variable, minFreq, is incremented 
// according to compute which items should be evicted in the 
// future.

LFUCache.prototype.set = function(key, value) {
  var node = this.keys[key];

  if (node == undefined) {
    node = new LFUNode(key, value);

    this.keys[key] = node;

    if (this.size != this.capacity) {
      // insert without deleting
      if (this.freq[1] === undefined) {
        this.freq[1] = new LFUDoublyLinkedList();
      }
      this.freq[1].insertAtHead(node);
      this.size++;
    } else {
      // delete and insert 
      var oldTail = this.freq[this.minFreq].removeAtTail();
      delete this.keys[oldTail.key];

      if (this.freq[1] === undefined) {
        this.freq[1] = new LFUDoublyLinkedList();
      }

      this.freq[1].insertAtHead(node);
    }
    this.minFreq = 1;
  } else {
    var oldFreqCount = node.freqCount;
    node.data = value;
    node.freqCount++;

    this.freq[oldFreqCount].removeNode(node);

    if (this.freq[node.freqCount] === undefined) {
      this.freq[node.freqCount] = new LFUDoublyLinkedList();
    }

    this.freq[node.freqCount].insertAtHead(node);
    
    if (oldFreqCount == this.minFreq && 
        Object.keys(this.freq[oldFreqCount]).size == 0) {
        this.minFreq++;
    }
  }
}

// To implement get, the cache needs to return existing nodes in 
// O(1) time and increment the counter for accessing. If the 
// element does not exist in the cache, it is forced to return a 
// null element. Otherwise, the frequency for the element is 
// increased, the item is brought to the head of the double linked 
// list, and the minimum frequency variable, minFreq, is adjusted 
// accordingly.

LFUCache.prototype.get = function(key) {
  var node = this.keys[key];

  if (node == undefined) {
    return null;
  } else {
    var oldFreqCount = node.freqCount;
    node.freqCount++;

    this.freq[oldFreqCount].removeNode(node);

    if (this.freq[node.freqCount] == undefined) {
      this.freq[node.freqCount] = new LFUDoublyLinkedList();
    }

    this.freq[node.freqCount].insertAtHead(node);

    if (oldFreqCount == this.minFreq &&
        Object.keys(this.freq[oldFreqCount]).length == 0) {
      this.minFreq++;
    }

    return node.data;
  }
}

var myLFU = new LFUCache(5);
myLFU.set(1, 1);   // freq: {1: 1}
myLFU.set(2, 2);   // freq: {1: 2<->1}
myLFU.set(3, 3);   // freq: {1: 3<->2<->1}
myLFU.set(4, 4);   // freq: {1: 4<->3<->2<->1}
myLFU.set(5, 5);   // freq: {1: 5<->4<->3<->2<->1}
myLFU.get(1);      // freq: {1: 5<->4<->3<->2, 2: 1}
myLFU.get(1);      // freq: {1: 5<->4<->3<->2, 3: 1}
myLFU.get(1);      // freq: {1: 5<->4<->3<->2, 4: 1}
myLFU.set(6, 6);   // freq: {1: 6<->5<->4<->3<->2, 4: 1}
myLFU.get(6);      // freq: {1: 5<->4<->3<->2, 4: 1, 2: 6 }

