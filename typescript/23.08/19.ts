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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let cnt = 0
    const ans = head

    while (head) {
        head = head.next
        cnt++
    }

    cnt = cnt - n
    if (cnt == 0) {
        return ans.next
    }
    head = ans
    while (cnt > 1) {
        head = head.next
        cnt--
    }

    head.next = head.next.next

    return ans
};
