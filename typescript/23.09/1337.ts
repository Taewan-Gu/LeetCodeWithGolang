function kWeakestRows(mat: number[][], k: number): number[] {
    mat = mat.map((x, i) => [i, x.reduce((y, cur) => y + cur, 0)])
    mat.sort((a,b) => a[1]-b[1])
    return mat.slice(0,k).map(x => x[0])
};
