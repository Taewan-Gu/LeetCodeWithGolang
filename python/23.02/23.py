# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        ans = None
        tail = None
        while True:
            idx = -1
            tmp = float('inf')

            for i in range(len(lists)):
                if lists[i] and lists[i].val < tmp:
                    tmp = lists[i].val
                    idx = i

            if idx > -1:
                if not ans:
                    ans = lists[idx]
                if tail:
                    tail.next = lists[idx]
                tail = lists[idx]
                lists[idx] = lists[idx].next
            else:
                break

        return ans
