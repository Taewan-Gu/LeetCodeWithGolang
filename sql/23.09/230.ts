function kthSmallest(root: TreeNode | null, k: number): number {
    const arr = []
    const cal = (node) => {
        arr.push(node.val)
        if (node.right) {
            cal(node.right)
        }
        if (node.left) {
            cal(node.left)
        }
    }
    cal(root)
    arr.sort((a,b) => a - b)
    return arr[k-1]
};
