/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func invertTree(root *TreeNode) *TreeNode {
    if root != nil {
        invert(root)
    }
    
    return root
}

func invert(node *TreeNode) {
    node.Left, node.Right = node.Right, node.Left
    
    if node.Left != nil {
        invert(node.Left)
    }
    
    if node.Right != nil {
        invert(node.Right)
    }
}