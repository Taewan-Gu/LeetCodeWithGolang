function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const visit = Array.from(Array(obstacleGrid.length), () => Array(obstacleGrid[0].length))
    let ch = false
    for (let i=0; i<obstacleGrid.length; i++) {
        if (obstacleGrid[i][0] === 0 && !ch) {
            visit[i][0] = 1
        } else {
            visit[i][0] = 0
            ch = true
        }
    }
    ch = false
    for (let i=0; i<obstacleGrid[0].length; i++) {
        if (obstacleGrid[0][i] === 0 && !ch) {
            visit[0][i] = 1
        } else {
            ch = true
            visit[0][i] = 0
        }
    }
    for (let i=1; i<visit.length; i++) {
        for (let j=1; j<visit[0].length; j++) {
            if (obstacleGrid[i][j] === 0) {
                visit[i][j] = visit[i-1][j] + visit[i][j-1]
            } else {
                visit[i][j] = 0
            }
        }
    }

    return visit[visit.length-1][visit[0].length-1]
};
