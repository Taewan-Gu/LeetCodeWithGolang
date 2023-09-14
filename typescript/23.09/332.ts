function findItinerary(tickets: string[][]): string[] {
    const travelMaxCnt = tickets.length + 1
    let ans = []
    const move = {}
    let visit = {}
    for (const [x, y] of tickets) {
        if (!move[x]) move[x] = []
        move[x].push(y)
        if (!visit[x+y]) visit[x+y]=0
        visit[x+y]++
    }

    for (const key of Object.keys(move)) {
        move[key].sort()
    }
    
    const travel = ["JFK"]
    const dfs = (start) => {
        if (ans.length > 0) {
            return
        }
        if (travel.length === travelMaxCnt) {
            ans.push(travel.slice(0,))
        }
        if (!move[start]) {
            return
        }
        for (const next of move[start]) {
            if (visit[start+next] === 0) continue
            travel.push(next)
            visit[start+next]--
            dfs(next)
            visit[start+next]++
            travel.pop()
        }
    }
    dfs("JFK")
    return ans[0]
};
