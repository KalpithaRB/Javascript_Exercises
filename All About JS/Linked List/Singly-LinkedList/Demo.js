import SinglyLinkedList from singlyLinkedList.js;

// a set of data.
let sampleData = [10, 41, 14, 55, 38, 90, 39];

// a snippet to search for that particular data.
let numList = new SinglyLinkedList();
numList.add(new Node(2));
numList.add(new Node(3));
numList.add(new Node(4));
numList.add(new Node(5));
numList.add(new Node(6));
numList.add(new Node(7));
numList.displayList();

console.log("Insert 4 at index position 1:")
numList.insertAt(1, new Node(4));
numList.displayList();
console.log("Insert 5 at index position 3:")
numList.insertAt(3, new Node(5));
numList.displayList();
console.log("Insert 6 at index position 6:")
numList.insertAt(6, new Node(6));
numList.displayList();

console.log("Node details at index 2:")
console.log(numList.get_node(2));

console.log("Check if the list empty or not");
console.log(numList.is_Empty());

console.log("Work is on Progress");