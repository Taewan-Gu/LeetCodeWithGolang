# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:
        ans = 0
        nodes = [(root, False)]
        while nodes:
            node, ch = nodes.pop()
            if node.left:
                nodes.append((node.left, True))
            if node.right:
                nodes.append((node.right, False))
            
            if node.left == None and node.right == None and ch:
                ans += node.val

        return ans
