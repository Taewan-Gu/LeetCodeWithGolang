/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
import "sort"
import "fmt"

func sortedArrayToBST(nums []int) *TreeNode {
    sort.Slice(nums, func(i, j int) bool {
		return nums[i] > nums[j]
	})
    
    s := 0
    e := len(nums)
    root := new(TreeNode)
    root.Val = nums[(s + e) / 2]
    
    a(s, (s + e) / 2, root, nums)
    b((s + e) / 2 + 1, e, root, nums)
    
    return root
}

func a(s int, e int, root *TreeNode, nums []int) {
    if s >= e {
        return
    }
    root.Right = new(TreeNode)
    root.Right.Val = nums[(s + e) / 2]
    a(s, (s + e) / 2, root.Right, nums)
    b((s + e) / 2 + 1, e, root.Right, nums)
}

func b(s int, e int, root *TreeNode, nums []int) {
    if s >= e {
        return
    }
    root.Left = new(TreeNode)
    root.Left.Val = nums[(s + e) / 2]
    a(s, (s + e) / 2, root.Left, nums)
    b((s + e) / 2 + 1, e, root.Left, nums)
}