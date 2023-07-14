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
var findMode = function(root) {
    if (root === null) {
        return []
    }
    const q = [root]
    const count = {}
    while (q.length) {
        const node = q.pop()
        if (node) {
            node.left != null ? q.push(node.left) : null
            node.right != null ? q.push(node.right) : null
            if (count[node.val]) {
                count[node.val] += 1
            } else {
                count[node.val] = 1
            }
        }
    }

    let ans = []
    let check = 0
    for (key in count) {
        if (count[key] > check) {
            ans = ans.splice(0,0)
            ans.push(key)
            check = count[key]
        } else if (count[key] === check) {
            ans.push(key)
        }
    }
    return ans
};
