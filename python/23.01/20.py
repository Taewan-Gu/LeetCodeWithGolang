# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        cnt = 0
        ans = head
        b_t = head
        target = head
        while head:
            if cnt == n:
                b_t = target
                target = target.next
            cnt = min(cnt+1, n)
            head = head.next
        
        b_t.next = target.next
        if b_t == target:
            return ans.next

        return ans
            
