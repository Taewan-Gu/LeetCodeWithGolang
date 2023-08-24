function candy(ratings: number[]): number {
    const valley = []
    for (let i=0; i<ratings.length; i++) {
        if ((i+1 === ratings.length || ratings[i+1] >= ratings[i]) && (ratings[i] <= ratings[i-1] || i-1 === -1)) {
            valley.push(i)
        }
    }
    const candy = Array.from(Array(ratings.length), x => 1)

    for (const s of valley) {
        let i = s
        while (ratings[i+1] > ratings[i]) {
            if (candy[i+1] > 1) {
                candy[i+1] = Math.max(candy[i+1], candy[i]+1)
            } else {
                candy[i+1] = candy[i] + 1
            }
            i++
        }

        i = s
        while (ratings[i-1] > ratings[i]) {
            if (candy[i-1] > 1) {
                candy[i-1] = Math.max(candy[i-1], candy[i]+1)
            } else {
                candy[i-1] = candy[i] + 1
            }
            i--
        }
    }
    return candy.reduce((cur, x) => cur + x, 0)
};
