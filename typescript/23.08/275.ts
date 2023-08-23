function hIndex(citations: number[]): number {
    for (let i=citations.length-1; i>-1; i--) {
        if (citations[i] <= citations.length - i - 1) {
            return citations.length - i - 1
        }
    }
    return citations.length
};
