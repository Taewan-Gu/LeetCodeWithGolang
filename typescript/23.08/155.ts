class MinNode<T> {
    min: T
    val: T
    before: MinNode<T>
    constructor(min: T, val: T, before: MinNode<T>) {
        this.min = min
        this.val = val
        this.before = before
    }
}

class MinStack {
    node: MinNode<number>
    constructor() {
        this.node =null
    }

    push(val: number): void {
        if (this.node) {
            this.node = new MinNode<number>(this.node.min > val ? val : this.node.min, val, this.node)
        } else {
            this.node = new MinNode<number>(val, val, null)
        }
    }

    pop(): void {
        if (this.node) {
            this.node = this.node.before
        }
    }

    top(): number {
        if (this.node) {
            return this.node.val
        }
    }

    getMin(): number {
        if (this.node) {
            return this.node.min
        }
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
