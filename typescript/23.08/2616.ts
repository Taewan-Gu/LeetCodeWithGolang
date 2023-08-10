function minimizeMax(nums: number[], p: number): number {
  if (p === 0) return 0
  const mem = []
  nums.sort((a,b) => a-b)
  for (let i=0; i<nums.length-1; i++) {
    mem.push(nums[i+1] - nums[i])
  }
  mem.sort((a,b) => a - b)
  let [l, r] = [0, mem.length]
  let ans = 0
  while (l <= r) {
    let m = Math.floor((l+r)/2)
    let [cnt, i] = [0, 0]

    while (i < nums.length-1) {
      if ((nums[i+1] - nums[i]) <= mem[m]) {
        cnt++
        i += 2
      } else i++

      if (cnt === p) break
    }

    if (cnt === p) {
      r = m -1
      ans = mem[m]
    } else l = m + 1
  }

  return ans
};
