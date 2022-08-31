/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func check(p *TreeNode, q *TreeNode) bool {
    if p == nil && q == nil {
        return true
    }
    
    if p == nil || q == nil {
        return false
    }
    
    return check(p.Left, q.Left) && check(p.Right, q.Right) && p.Val == q.Val
}

func isSameTree(p *TreeNode, q *TreeNode) bool {
    return check(p, q)
}