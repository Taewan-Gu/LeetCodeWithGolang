/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func deleteDuplicates(head *ListNode) *ListNode {
    ans := head
    var b int
    var bHead *ListNode
    if head != nil {
        b = head.Val
        bHead = head
        head = head.Next
    }
    
    for head != nil {
        if head.Val == b {
            bHead.Next = head.Next
        } else {
            bHead = head
        }
        
        b = head.Val
        head = head.Next
    }
    
    return ans
}