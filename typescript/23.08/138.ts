function copyRandomList(head: Node | null): Node | null {
    if (!head) {
        return null
    }

    const tmpHead = head
    const copiedHead = new Node(head.val, null, null)
    let node = copiedHead
    while (head) {
        head = head.next
        if (head) {
            node.next = new Node(head.val, null, null)
        } else {
            node.next = null
        }
        node = node.next
    }

    head = tmpHead
    let copiedTmpHead = copiedHead
    while (head) {
        let randomNode = head.random
        let startHead = tmpHead
        let startCopiedHead = copiedHead
        while (startHead !== randomNode) {
            startHead = startHead.next
            startCopiedHead = startCopiedHead.next
        }
        copiedTmpHead.random = startCopiedHead
        copiedTmpHead = copiedTmpHead.next
        head = head.next
    }
    return copiedHead
};
