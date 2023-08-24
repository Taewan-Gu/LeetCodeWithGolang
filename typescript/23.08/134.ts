function canCompleteCircuit(gas: number[], cost: number[]): number {
    let [fuel, s, totalGas, totalCost] = [0, 0, 0, 0]
    for (let i=0; i<gas.length; i++) {
        totalGas += gas[i]
        totalCost += cost[i]
        fuel += gas[i] - cost[i]
        if (fuel < 0) {
            fuel = 0
            s = i+1
        }
    }

    if (s === gas.length || totalGas < totalCost) {
        return -1
    }
    return s
};
