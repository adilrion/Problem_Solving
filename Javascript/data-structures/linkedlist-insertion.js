class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFront(value) {
        console.log("Inserting " + value);

        // Step 1: Create a new Node
      const newNode = new Node(value);
      console.log(this.head);

        // Step 2: Set next of newNode to the current head
      newNode.next = this.head;

        // Step 3: Set newNode as the head
        this.head = newNode;
    }

    getHeadValue() {
        if (this.head === null) {
            return -1;
        } else {
            return this.head.value;
        }
    }
}

const list = new LinkedList();
list.insertFront(3);
console.log("The value at the head is: " + list.getHeadValue());

list.insertFront(2);
console.log("The value at the head is: " + list.getHeadValue());