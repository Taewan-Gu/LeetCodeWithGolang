# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def levelOrderBottom(self, root: Optional[TreeNode]) -> List[List[int]]:
        ans = []

        def appendValueInLevel(node, level):
            if len(ans) == level:
                ans.append([])
            ans[level].append(node.val)

            if node.left:
                appendValueInLevel(node.left, level+1)
            if node.right:
                appendValueInLevel(node.right, level+1)
        
        if root:
            appendValueInLevel(root, 0)
        
        ans.reverse()

        return ans
