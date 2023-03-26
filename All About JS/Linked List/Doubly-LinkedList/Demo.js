import doublyLinkedList from doublyLinkedList.js;

// a set of data.


// a snippet to search for that particular data.

let numList = new DoublyLinkedList();
numList.add(new Node(2));
numList.add(new Node(3));
numList.add(new Node(5));
numList.add(new Node(6));
numList.add(new Node(8));
console.log("Original Doubly Linked Lists:")
numList.printList();
let linkedlist_empty = numList.is_Empty();
console.log("Check the said Doubly Linked lists is empty or not! "+linkedlist_empty);
new_numList = new DoublyLinkedList();
new_numList.printList();
linkedlist_empty = new_numList.is_Empty();
console.log("Check the said Doubly Linked lists is empty or not! "+linkedlist_empty);
numList.insertAt(0, 12);
numList.printList();
console.log("Insert at 6th position and value = 14");
numList.insertAt(6, 12);
numList.printList();