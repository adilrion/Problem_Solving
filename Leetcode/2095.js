// Definition for singly-linked list node
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Function to delete the middle node
var deleteMiddle = function (head) {
    if (!head || !head.next) return null; 
    let slow = head,
        fast = head,
        prev = null;

    // Use the slow and fast pointer approach to find the middle node
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // Remove the middle node by adjusting the `next` pointer of `prev`
    prev.next = slow.next;

    return head; // Return the modified head of the list
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
const head1 = createLinkedList([1, 3, 4, 7, 1, 2, 6]); // Example 1


printList(deleteMiddle(head1));
