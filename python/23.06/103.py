# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        ans = []

        def searchTreeAndCheckLevel(node, idx):
            if len(ans) == idx:
                ans.append([])
            ans[idx].append(node.val)
            if node.left:
                searchTreeAndCheckLevel(node.left, idx+1)
            if node.right:
                searchTreeAndCheckLevel(node.right, idx+1)
        
        if root:
            searchTreeAndCheckLevel(root, 0)

        for i in range(1, len(ans), 2):
            ans[i].reverse()

        return ans
