function findCriticalAndPseudoCriticalEdges(n: number, edges: number[][]): number[][] {
    edges.forEach((x, i) => x.push(i))
    edges.sort((a, b) => a[2] - b[2])
    const ans = [[], []]

    const find = (mem, sn) => {
        if (sn !== mem[sn]) {
            mem[sn] = find(mem, mem[sn])
        }
        return mem[sn]
    }

    const combine = (mem, sn1, sn2) => {
        const [rn1, rn2] = [find(mem, sn1), find(mem, sn2)]
        mem[rn1] = rn2
    }

    const mst = (block, need: any = null) => {
        let weight = 0
        const mem = Array.from(Array(n), (_,i) => i)

        if (need) {
            weight += need[2]
            combine(mem, need[0], need[1])
        }

        for (const [s, e, w, i] of edges) {
            if (i === block || find(mem, s) === find(mem, e)) {
                continue
            }
            combine(mem, s, e)
            weight += w
        }

        for (let i=0; i<n; i++) {
            if (find(mem, i) !== find(mem, 0)) {
                return 10**9
            }
        }

        return weight
    }

    const min_w = mst(-1)
    for (const x of edges) {
        if (min_w < mst(x[3])) {
            ans[0].push(x[3])
        } else if (min_w === mst(-1, x)) {
            ans[1].push(x[3])
        }
    }

    return ans
};
