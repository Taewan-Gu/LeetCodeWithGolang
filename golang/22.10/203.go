/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeElements(head *ListNode, val int) *ListNode {
    if head == nil {
        return head
    }
    
    node := head.Next
    before := head
    
    if head.Val == val {
        before = nil
        head = head.Next
    }
    
    for node != nil {
        if node.Val == val {
            if before == nil {
                head = node.Next
            } else {
                before.Next = node.Next 
            }
            node = node.Next
        } else {
            before = node 
            node = node.Next
        }
    }
    
    return head
}