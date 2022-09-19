/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func maxDepth(root *TreeNode) int {
    return check(root, 0)
}

func check(root *TreeNode, ans int) int {
    if root == nil {
        return ans
    }
    n1 := check(root.Left, ans + 1)
    n2 := check(root.Right, ans + 1)
    if n1 > n2 {
        return n1
    } else {
        return n2
    }
}