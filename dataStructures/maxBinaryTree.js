const {swap} = require('../sorting/helpers');

class MaxBinaryHeap {
    
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        let currentIndex = this.values.length - 1;

        while(this.values[currentIndex] > this.values[Math.floor((currentIndex-1)/2)]) {
            swap(this.values ,currentIndex, Math.floor((currentIndex-1)/2));
            currentIndex = Math.floor((currentIndex-1)/2);
        }

        return this.values;
    }
}

let heap = new MaxBinaryHeap;
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
heap.insert(199);
console.log(heap);
