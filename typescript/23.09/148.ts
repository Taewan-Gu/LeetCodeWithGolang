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

function sortList(head: ListNode | null): ListNode | null {
    if (!head) {
        return head
    }
    const tmp = []
    while(head) {
        tmp.push(head.val)
        head = head.next
    }

    tmp.sort((a,b) => a-b)
    let ans = new ListNode(tmp.pop(), null)
    while (tmp.length !== 0) {
        ans = new ListNode(tmp.pop(), ans)
    }

    return ans
};
