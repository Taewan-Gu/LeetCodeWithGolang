function mostCommonWord(paragraph: string, banned: string[]): string {
    const dic = {}
    banned.push("")
    for (const x of paragraph.split(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"\s]/g)) {
        if (dic[x.toLowerCase()]) {
            dic[x.toLowerCase()] += 1
        } else {
            dic[x.toLowerCase()] = 1
        }
    }

    let cnt = 0
    let ans = ""
    for (const x in dic) {
        if (dic[x] > cnt && !banned.includes(x)) {
            ans = x
            cnt = dic[x]
        }
    }

    return ans
};
