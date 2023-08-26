function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let [s1, s2] = ["", ""]
    while(l1) {
        s1 = l1.val + s1
        l1 = l1.next
    }
    while(l2) {
        s2 = l2.val + s2
        l2 = l2.next
    }

    let after = null
    for (const x of String(BigInt(s1) + BigInt(s2))) {
        const node = new ListNode(Number(x), after)
        after = node
    }
    return after
};
