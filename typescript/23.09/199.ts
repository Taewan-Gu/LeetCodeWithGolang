function rightSideView(root: TreeNode | null): number[] {
    const s = []
    if (root) s.push(root)
    const ans = []
    let target = 0
    while (s.length > 0) {
        const len = s.length
        for (let i=0; i<len; i++) {
            const node = s.shift()
            target = node.val
            if (node.left) s.push(node.left)
            if (node.right) s.push(node.right)
        }
        ans.push(target)
    }
    return ans
};
