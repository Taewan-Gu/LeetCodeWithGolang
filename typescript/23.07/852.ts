function peakIndexInMountainArray(arr: number[]): number {
    let [s, e] = [1, arr.length-1]
    let m = Math.floor((s + e)/ 2)

    while (arr[m-1] > arr[m] || arr[m+1] > arr[m]) {
        if (arr[m-1] < arr[m] && arr[m+1] > arr[m]) {
            s = m + 1
        } else {
            e = m
        }
        m = Math.floor((s + e)/ 2)
    }

    return m
};
