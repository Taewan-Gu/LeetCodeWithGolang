# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        for i in range(200):
            before = None
            node = head
            ch, b_ch = None, None
            while node:
                if node.val >= x:
                    ch = node
                    b_ch = before
                    break
                before = node
                node = node.next
            if ch:
                before = ch
                node = ch.next
            while node:
                if node.val < x:
                    comp = node
                    b_comp = before
                    break
                before = node
                node = node.next
            else:
                return head
            if b_ch:
                b_ch.next = comp
                b_comp.next = comp.next
                comp.next = ch
            else:
                b_comp.next = comp.next
                comp.next = ch
                head = comp
        return head
