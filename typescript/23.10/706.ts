class MyHashMap {
    private size: number;
    private data: number[];
    private keys: number[];
    private loadFactor: number;
    private currentCount: number;
    constructor(size:number = 50001) {
        this.size = size;
        this.currentCount = 0;
        this.data = Array(size);
        this.keys = Array(size);
        this.loadFactor = 0.5;
    }

    private resize() {
        const size = this.size * 2 - 1;
        const data = Array(size);
        const keys = Array(size);
        for (const key of this.keys) {
            if (key === undefined) continue;
            let tmpKey = key
            while (keys[tmpKey] !== undefined && keys[tmpKey] !== tmpKey) {
                tmpKey++;
                tmpKey %= size;
            }
            data[key] = this.get(key);
            keys[key] = key;
        }
        this.size = size;
        this.data = data;
        this.keys = keys;
    }

    get(key: number): number {
        while (this.keys[key] !== key) {
            if (this.keys[key] === undefined) {
                return -1
            }
            key++;
            key %= this.size;
        }
        return this.data[key];
    }

    put(key: number, value: number): void {
        if (this.currentCount / this.size > this.loadFactor) {
            this.resize();
        }

        while (this.keys[key] !== undefined && this.keys[key] !== key) {
            key++;
            key %= this.size;
        }
        this.data[key] = value;
        this.keys[key] = key;
        this.currentCount++;
    }
    remove(key: number): void {
        this.data[key] = undefined
        this.keys[key] = undefined
    }
}
