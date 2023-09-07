function kthSmallest(root: TreeNode | null, k: number): number {
    let [cnt, ans] = [0, null]
    const cal = (node: TreeNode) => {
        if (ans !== null) return
        if (node.left) cal(node.left)
        if (++cnt == k) return ans = node.val
        if (node.right) cal(node.right)
    }
    cal(root)

    return ans
};
