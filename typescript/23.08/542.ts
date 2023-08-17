function updateMatrix(mat: number[][]): number[][] {
    const ans = Array.from(Array(mat.length), () => Array(mat[0].length))

    for(let i=0; i<mat.length; i++) {
        for(let j=0; j<mat[i].length; j++) {
            if (mat[i][j] === 0) {
                ans[i][j] = 0
            }
        }
    }

    let ch = true
    let cnt = 0
    while (ch) {
        cnt++
        ch = false
        const tmp = []
        for(let i=0; i<mat.length; i++) {
            for(let j=0; j<mat[i].length; j++) {
                if (ans[i][j] !== undefined) {
                    if (i+1 < mat.length) {
                        if (ans[i+1][j] === undefined) {
                            tmp.push([i+1, j])
                        }
                    }
                    if (j+1 < mat[0].length) {
                        if (ans[i][j+1] === undefined) {
                            tmp.push([i, j+1])
                        }
                    }
                    if (0 <= i-1) {
                        if (ans[i-1][j] === undefined) {
                            tmp.push([i-1, j])
                        }
                    }
                    if (0 <= j-1) {
                        if (ans[i][j-1] === undefined) {
                            tmp.push([i, j-1])
                        }
                    }
                } else {
                    ch = true
                }
            }
        }

        for (const [x,y] of tmp) {
            ans[x][y] = cnt
        }
    }

    return ans
};
