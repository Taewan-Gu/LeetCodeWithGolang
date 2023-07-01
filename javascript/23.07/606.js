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
 * @return {string}
 */

function findNode(node) {
    if (node.left !== null && node.right !== null) {
        return String(node.val) + "(" + findNode(node.left) + ")(" + findNode(node.right) + ")"
    } else if (node.left !== null) {
        return String(node.val) + "(" + findNode(node.left) + ")"
    } else if (node.right !== null) {
        return String(node.val) + "()(" + findNode(node.right) + ")"
    } else {
        return String(node.val)
    }
    
}

var tree2str = function(root) {
    if (root !== null) {
        return findNode(root)
    }
    return ""
};
