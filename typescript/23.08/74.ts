function searchMatrix(matrix: number[][], target: number): boolean {
    const bisect = (arr: number[], tar: number) => {
        let [low, mid, top] = [0, 0, arr.length]
        while (low < top) {
            mid = Math.floor((low+top)/2)
            if (arr[mid] == tar) {
                return mid + 1
            }
            if (arr[mid] < tar) {
                low = mid + 1
            } else {
                top = mid
            }
        }
        return low
    }

    const idx = bisect(matrix.filter(x => x).map(x => x[0]), target)
    if (idx <= 0) return false
    return matrix[idx-1][bisect(matrix[idx-1], target) - 1] === target ? true : false
};
