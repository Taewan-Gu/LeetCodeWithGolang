/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
    let node = head
    let cnt = 0
    while (node) {
        cnt++
        node = node.next
    }

    let mod = cnt%k
    const amt = Math.floor(cnt/k)
    const ans = []
    for (let i=0; i<k; i++) {
        ans.push(head)
        let cn = 1
        while (cn < amt + (mod > 0 ? 1 : 0)) {
            head = head.next
            cn++
        }
        if (head) {
            const tmp = head.next
            head.next = null
            head = tmp
        }
        mod--
        cn++
    }

    return ans
};
