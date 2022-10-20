/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

func check(e *TreeNode) int {
    if e == nil {
        return 0
    }
    
    var ans int
    l := check(e.Left)
    r := check(e.Right)
    if l > r + 1 || r > l + 1 || r == -1 || l == -1 {
        return -1
    } else if l < r {
        ans = r + 1
    } else {
        ans = l + 1
    }
    
    return ans
}

func isBalanced(root *TreeNode) bool {
    return check(root) != -1
}