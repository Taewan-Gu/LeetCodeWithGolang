/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func getIntersectionNode(headA, headB *ListNode) *ListNode {
    var head *ListNode
    for headB != nil {
        head = headA
        for head != nil {
            if head == headB {
                return head
            }
            head = head.Next
        }
        headB = headB.Next
    }
    
    return nil
}