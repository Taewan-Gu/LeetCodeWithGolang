function hasCycle(head: ListNode | null): boolean {
    let fast = head
    while(head) {
        if (fast && fast.next) {
            head = head.next
            fast = fast.next.next
            if (fast === head) return true
        } else {
            break
        }
    }

    return false
};
