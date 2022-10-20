/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
    if list1 == nil {
        return list2
    }
    
    if list2 == nil {
        return list1
    }
    
    if list1.Val > list2.Val {
        list1, list2 = list2, list1
    }
    
    ans := list1
    
    for list2 != nil {
        if list2.Val >= list1.Val {
            if list1.Next != nil && list1.Next.Val < list2.Val {
                list1 = list1.Next
                continue
            }
            tmp := list2.Next
            list1.Next, list2.Next = list2, list1.Next
            list1 = list1.Next
            list2 = tmp
        } else {
            if list1.Next != nil {
                list1.Next = list2
                break
            } else {
                list1 = list1.Next
            }
        }
    }
    
    return ans
}