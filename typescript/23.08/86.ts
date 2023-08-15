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

function partition(head: ListNode | null, x: number): ListNode | null {
    if (!head) {
        return head
    }

    let ans1 = null, ans2 = null, tail1 = null, tail2 = null
    while(head) {
        if (head.val < x) {
            if (tail1) {
                tail1.next = new ListNode(head.val, null)
                tail1 = tail1.next
            } else {
                ans1 = new ListNode(head.val, null)
                tail1 = ans1
            }
        } else {
            if (tail2) {
                tail2.next = new ListNode(head.val, null)
                tail2 = tail2.next
            } else {
                ans2 = new ListNode(head.val, null)
                tail2 = ans2
            }
        }
        head = head.next
    }

    if (tail1) {
        tail1.next = ans2
        return ans1
    }
    
    return ans2
};
