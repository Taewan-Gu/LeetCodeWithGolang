/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function generateTrees(n: number): Array<TreeNode | null> {
    const find = (nodes) => {
        if (nodes.length === 0) {
            return [null]
        }
        const res = []
        for (let i=0; i<nodes.length; i++) {
            for (const x of find(nodes.slice(0,i))) {
                for (const y of find(nodes.slice(i+1,))) {
                    res.push(new TreeNode(nodes[i], x, y))
                }
            }
        }

        return res
    }

    return find(Array.from({length: n}, (_, i) => i + 1))
};
