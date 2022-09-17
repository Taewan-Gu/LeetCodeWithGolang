/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSymmetric(root *TreeNode) bool {
    if root == nil {
        return true
    }
    
    left := root.Left;
    right := root.Right;
    
    return isGood(left, right)
}

func isGood(left *TreeNode, right *TreeNode) bool {
    if left == nil && right == nil {
        return true
    } else if left == nil {
        return false
    } else if right == nil {
        return false
    }
    
    return left.Val == right.Val && isGood(left.Right, right.Left) && isGood(left.Left, right.Right)
}