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
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function(root, voyage) {
    const ans = []
    const s = []
    if (root) {
        s.push(root)
    }
    let i = 0
    while (s.length > 0) {
        let node = s.pop()
        if (node.val !== voyage[i]) {
            return [-1]
        }
        i += 1

        if (node.right !== null && node.right.val === voyage[i]) {
            if (node.left !== null) {
                s.push(node.left)
                ans.push(node.val)
            }
            s.push(node.right)
        } else {
            if (node.right !== null) {
                s.push(node.right)
            }
            if (node.left !== null) {
                s.push(node.left)
            }
        }
    }
    
    return ans
};
