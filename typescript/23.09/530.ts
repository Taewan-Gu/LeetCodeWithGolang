function getMinimumDifference(root: TreeNode | null): number {
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
    let ans = Infinity
    for (let i=0; i<arr.length-1; i++) {
        ans = Math.min(ans, arr[i+1] - arr[i])
    }

    return ans
};
