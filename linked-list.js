class LinkedListNode {
  constructor(val, next = null) { // add next, was originallally only val
    this.value = val;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    // Your code here
    this.head = head;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    this.head = new LinkedListNode(val, this.head);
    this.length++;
  }

  addToTail(val) {
    // Your code here
    let newNode = new LinkedListNode(val, null);
    this.length++;
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }


  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}
let linkedList = new LinkedList();
linkedList.addToHead(1);
// linkedList.addToHead(2);
// linkedList.addToHead(3);

// linkedList.addToTail(1);
// linkedList.addToTail(2);
linkedList.addToTail(3);

// console.log(linkedList.head.next)
// console.log(linkedList.head)
linkedList.print()
module.exports = LinkedList;
