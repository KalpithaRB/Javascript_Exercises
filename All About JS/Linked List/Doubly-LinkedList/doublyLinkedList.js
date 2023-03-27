class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.previous = null;
	}
}

class DoublyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
			previous: null
		};
		this.length = 0;
		this.tail = this.head;
	}

	// Insert node at end of the list
	add(newNode) {
		this.tail.next = newNode;
		newNode.previous = this.tail;
		this.tail = newNode;
		this.length++;
	}

    printList() {
		let current = this.head;
		let result = [];
		while (current !== null) {
			result.push(current.value);
			current = current.next;
		}
		console.log(result.join(' '));
		return this;
	}

	size() {
		return this.length;
	}

  is_Empty(){
      return this.length === 0;
	  
    };


	

}

let numList = new DoublyLinkedList();
numList.add(new Node(2));
numList.add(new Node(3));
numList.add(new Node(4));
numList.add(new Node(5));
numList.add(new Node(6));
numList.add(new Node(7));
console.log("  ");
console.log("Node in the Linked-List");
numList.printList();
//numList.printList(size());
// console.log(is_Empty(numList));
console.log("Check if the list empty or not");
console.log(numList.is_Empty());
