# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        ans = []
        def exploreRoute(node, route):
            if route and sum(route) == targetSum and not node.right and not node.left:
                ans.append(route[:])
                return

            if node.right:
                route.append(node.right.val)
                exploreRoute(node.right, route)
                route.pop()
            if node.left:
                route.append(node.left.val)
                exploreRoute(node.left, route)
                route.pop()
        if root:
            exploreRoute(root, [root.val])

        return ans
