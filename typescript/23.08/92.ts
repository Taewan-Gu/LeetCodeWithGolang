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

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    const ans = head
    const s: ListNode[] = []
    let cnt = 1
    while (cnt < left) {
        cnt++
        head = head.next
    }

    right = right - left + 1
    left = 0
    cnt = Math.floor((left + right)/2)
    const last = -cnt
    while (cnt > last) {
        if (cnt > 0) {
            const tmp = head
            s.push(tmp)
            if (cnt === 1 && right % 2 > 0) {
                head = head.next
            }
        } else {
            const node = s.pop()
            const tmpNodeValue = head.val
            head.val = node.val
            node.val = tmpNodeValue
        }
        head = head.next
        cnt--
    }

    return ans
};
