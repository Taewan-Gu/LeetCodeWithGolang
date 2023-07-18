/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    const q = []
    if (root !== null) {
        q.push(root)
    }
    let depth = 0
    while (q.length !== 0) {
        const len = q.length
        for (let i=0; i < len; i++) {
            let node = q.shift()
            for (x of node.children) {
                q.push(x)
            }
        }
        depth += 1
    }

    return depth
};
