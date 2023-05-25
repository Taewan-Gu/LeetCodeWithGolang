# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        node = head
        if node:
            before = node
            before2 = None
            node = node.next
        ch = False
        while node:
            if before.val == node.val:
                before.next = node.next
                ch = True
            elif ch:
                if before2:
                    before2.next = node
                else:
                    head = node
                before = node
                ch = False
            else:
                before2 = before
                before = node
            node = node.next
        if ch:
            if before2:
                before2.next = None
            else:
                head = None
        
        return head
