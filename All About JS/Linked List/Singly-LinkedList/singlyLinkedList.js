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

    displayList(){
        let node = this.Head;
        var str = ""
        while (node) {
            str += node.data + " -> ";
            node = node.next;
        }
        str += "NULL"
        console.log(str);  
      }
    
      insertAt(index, newNode){
        let node = this.Head;
        if(index==0) {
            newNode.next = node;
            this.head = newNode;
            return;
        }
        while(--index){
            if(node.next!==null)
                node = node.next;
            else
                throw Error("Index Out of Bound");
        }
        let tempVal = node.next;
        node.next = newNode;
        newNode.next = tempVal;
        }
    
        get_node(index){
            let node = this.Head;
            if(index==0) {
                return this.Head;
            }
            while(index--){
                if(node.next!==null)
                    node = node.next;
                else
                    throw Error("Index Out of Bound");
            }
            return node;
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
console.log("The Lists items");
numList.displayList();

console.log("Insert 4 at index position 1:")
numList.insertAt(1, new Node(4));
console.log("List items after inserting number 4 at the index 1");
numList.displayList();
// console.log("Insert 5 at index position 3:")
// numList.insertAt(3, new Node(5));
// numList.displayList();
// console.log("Insert 6 at index position 6:")
// numList.insertAt(6, new Node(6));
// numList.displayList();

console.log("Node details at index 4:")
console.log(" ");
console.log(numList.get_node(4));




