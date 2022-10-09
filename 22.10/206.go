/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseList(head *ListNode) *ListNode {
    if head == nil {
        return head
    }
    
    node := head.Next
    head.Next = nil
    
    for node != nil {
        tmp := node.Next
        node.Next = head
        head = node
        node = tmp
    }
    
    return head
}