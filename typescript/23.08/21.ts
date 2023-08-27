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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let head = null, before
    while (list1 || list2) {
        let node
        if (list1 && list2) {
            if (list1.val > list2.val) {
                node = new ListNode(list2.val)
                list2 = list2.next
            } else {
                node = new ListNode(list1.val)
                list1 = list1.next
            }
        } else if (list1) {
            node = new ListNode(list1.val)
            list1 = list1.next
        } else {
            node = new ListNode(list2.val)
            list2 = list2.next
        }
        if (!head) {
            head = node
        }
        if (before) {
            before.next = node
        }
        before = node
    }
    return head
};
