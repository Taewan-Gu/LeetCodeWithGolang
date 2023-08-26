function twoSum(numbers: number[], target: number): number[] {
    let [head, tail] = [0, numbers.length-1]
    while (head !== tail) {
        const sum = numbers[head] + numbers[tail]
        if (target === sum) {
            return [head+1, tail+1]
        }
        if (sum > target) {
            tail--
        } else {
            head++
        }
    }
};
