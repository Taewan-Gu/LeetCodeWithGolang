const dxy = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]]
const findAroundCells = (i: number, j: number, board: number[][]): number => {
    let ch = 0
    for (const [dx, dy] of dxy) {
        if (i+dx < 0 || i+dx >= board.length || j+dy < 0 || j+dy >= board[i].length) {
            continue
        }
        if (board[i+dx][j+dy] === 1){
            ch++
        }
    }
    return ch
}
function gameOfLife(board: number[][]): void {
    const convert = []
    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board[i].length; j++) {
            if (board[i][j] === 1) {
                const ch = findAroundCells(i, j, board)
                if (ch < 2 || ch > 3) {
                    convert.push([i,j])
                }
                
            } else {
                const ch = findAroundCells(i, j, board)
                if (ch === 3) {
                    convert.push([i,j])
                }
            }
        }
    }
    while (convert.length > 0) {
        const [x,y] = convert.pop()
        board[x][y] ^= 1
    }
};
