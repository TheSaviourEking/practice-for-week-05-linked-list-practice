class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    let newNode = new DoublyLinkedListNode(val);
    newNode.next = this.head;
    if (!this.head) {
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
    }
    this.head = newNode;
    this.length++;
  }

  addToTail(val) {
    // Your code here
    let newNode = new DoublyLinkedListNode(val);
    newNode.prev = this.tail;
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode
    }
    this.tail = newNode
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
