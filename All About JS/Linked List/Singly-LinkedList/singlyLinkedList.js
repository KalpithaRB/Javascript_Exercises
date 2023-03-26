class Node {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}

class SinglyLinkedList {
    constructor(Head = null) {
        this.Head = Head
    }

    add(newNode){
        let node = this.Head;
        if(node==null){
            this.Head = newNode;
            return;
        }
        while (node.next) {
            node = node.next;
        }
        node.next = newNode;
    }
 

    is_Empty(){
        return (this.Head==null)
    } 

}

let numList = new SinglyLinkedList();
numList.add(new Node(2));
numList.add(new Node(3));
numList.add(new Node(4));
numList.add(new Node(5));
numList.add(new Node(6));
numList.add(new Node(7));


console.log("Check if the list empty or not");
console.log(numList.is_Empty());




