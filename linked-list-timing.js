const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
// Define the number of iterations for the test
const iterations = 50000;

// Initialize the linked lists
let linkedList = new LinkedList();
let doublyLinkedList = new DoublyLinkedList();

// Function to calculate the average time taken for a specific operation
function calculateAverageTime(operation, list) {
    let startTime = Date.now();
    for (let i = 0; i < iterations; i++) {
        operation(list, i);
    }
    let endTime = Date.now();
    return (endTime - startTime) / iterations;
}

// Define the operations to be tested
let operations = [
    { name: 'addToHead', func: (list, value) => list.addToHead(value) },
    { name: 'addToTail', func: (list, value) => list.addToTail(value) }
];

// Test each operation on both types of linked lists
for (let operation of operations) {
    let linkedListTime = calculateAverageTime(operation.func, linkedList);
    console.log(`LinkedList ${operation.name} took an average of ${linkedListTime} ms over ${iterations} iterations`);

    let doublyLinkedListTime = calculateAverageTime(operation.func, doublyLinkedList);
    console.log(`DoublyLinkedList ${operation.name} took an average of ${doublyLinkedListTime} ms over ${iterations} iterations`);
}
