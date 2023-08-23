function reorganizeString(s: string): string {
    const visit = {}
    for (const x of s) {
        if (!visit[x]) {
            visit[x] = 0
        }
        visit[x]++
    }

    let ans = ""
    let pick = ""
    for (const _ of s) {
        let cnt = 0
        let before = pick
        pick = ""
        for (const key of Object.keys(visit)) {
            if (before !== key && visit[key] > cnt) {
                cnt = visit[key]
                pick = key
            }
        }

        if (pick) {
            visit[pick]--
            ans += pick
        } else {
            return ""
        }
    }

    return ans
};
