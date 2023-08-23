class RandomizedSet {
    private data: Object
    private seed: number
    constructor() {
        this.data = {}
        this.seed = 0
    }

    insert(val: number): boolean {
        if (this.data[val] !== undefined) {
            return false
        }
        this.data[val] = val
        return true
        
    }

    remove(val: number): boolean {
        if (this.data[val] !== undefined) {
            delete this.data[val]
            return true
        }
        return false
    }

    getRandom(): number {
        const keys = Object.keys(this.data)
        
        return Number(keys[Math.floor(Math.random() * keys.length)])
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
