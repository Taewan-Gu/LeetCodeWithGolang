# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        node = head
        if node and node.next:
            tmp = node.next
            tmp2 = node.next.next
            node.next = tmp2
            tmp.next = node
            head = tmp
            tmp3 = node
            node = tmp2
        
        while node:
            if node.next:
                tmp = node.next
                tmp2 = node.next.next
                node.next = tmp2
                tmp.next = node
                tmp3.next = tmp
                tmp3 = node
                node = tmp2
            else:
                break

        return head
