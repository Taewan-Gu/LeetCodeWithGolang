/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function a(node, idx, arr) {
    if (arr.length <= idx) {
        arr[idx] = [node.val]
    } else {
        arr[idx].push(node.val)
    }

    if (node.left) {
        a(node.left, idx+1, arr)
    }
    if (node.right) {
        a(node.right, idx+1, arr)
    }
    
}

var averageOfLevels = function(root) {
    arr = []
    ans = []
    a(root, 0, arr)

    for (x of arr) {
        ans.push(x.reduce((a, b) => a + b, 0) / x.length)
    }
    return ans
};
