// Definition for singly-linked list node
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Function to reverse the linked list
var reverseList = function (head) {

    let prev = null; // Initialize previous pointer as null
    let current = head; // Start with the head of the list

    while (current) {
      let next = current.next; // Save the next node
        current.next = prev; // Reverse the current node's next pointer
        prev = current; // Move the previous pointer forward
        current = next; // Move the current pointer forward
    }

    return prev; // Return the new head of the reversed list
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }

    return dummy.next;
}

// Helper function to print a linked list
function printList(head) {
    let current = head;
    const result = [];

    while (current) {
        result.push(current.val);
        current = current.next;
    }

    console.log(result);
}

// Test Cases
const head1 = createLinkedList([1, 2, 3, 4, 5]); // Example 1
const head2 = createLinkedList([1, 2]); // Example 2

console.log("Original List 1:");
printList(head1);
console.log("Reversed List 1:");
printList(reverseList(head1));

console.log("\nOriginal List 2:");
printList(head2);
console.log("Reversed List 2:");
printList(reverseList(head2));
