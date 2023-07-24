function distributeCandies(candies: number, num_people: number): number[] {
    const ans: number[] = Array(num_people).fill(0)
    let i = 0
    while (candies > 0) {
        if (candies - i - 1 >= 0) {
            ans[i%num_people] += i+1
        } else {
            ans[i%num_people] += candies
        }
        candies -= i+1
        i += 1
    }

    return ans
};
