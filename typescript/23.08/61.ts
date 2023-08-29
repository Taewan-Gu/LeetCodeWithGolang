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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    let n = 0
    let first = head
    let last = null
    while(head) {
        if (!head.next) {
            last = head
        }
        head = head.next
        n++
    }

    let cnt = 0
    while (cnt < k % n) {
        last.next = first
        first = last
        let node = first
        let tmpCnt = 0
        while (tmpCnt < n-1) {
            node = node.next
            tmpCnt++
        }
        last = node
        node.next =null
        cnt++
    }

    return first
};
