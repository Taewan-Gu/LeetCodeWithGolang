# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseKGroup(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        a = []
        node = head
        before = None
        tmpt = ListNode(val=1)
        cnt = 1
        while node:
            a.append(node)
            if cnt == k:
                cnt = 1
                if not before:
                    before = a.pop()
                    ans = before
                elif a:
                    tmpt = a.pop()
                    before.next = tmpt
                    before = before.next
                after = tmpt.next or before.next
                while a:
                    before.next = a.pop()
                    before = before.next
                before.next = after
                node = after
                continue
            node = node.next
            cnt += 1
        
        return ans
