# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if k == 0 or not head:
            return head
        
        first = head
        node = head
        arr = []
        while node:
            arr.append(node)
            last = node
            node = node.next

        for i in range(2, k%len(arr) + 2):
            last.next = first
            first = last
            arr[-i].next = None
            last = arr[-i]
        
        return first
