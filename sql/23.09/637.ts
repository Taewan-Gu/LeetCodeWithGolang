function averageOfLevels(root: TreeNode | null): number[] {
    const s = [root]
    const ans = []
    while (s.length > 0) {
        const len = s.length
        let sum = 0
        for (let i=0; i<len; i++) {
            const node = s.shift()
            sum += node.val
            if (node.left) s.push(node.left)
            if (node.right) s.push(node.right)
        }
        ans.push(sum/len)
        console.log(s)
    }
    return ans
};
