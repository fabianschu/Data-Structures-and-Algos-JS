const {swap} = require('../sorting/helpers');

class MaxBinaryHeap {
    
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        let currentIdx = this.values.length - 1;

        while(this.values[currentIdx] > this.values[Math.floor((currentIdx-1)/2)]) {
            swap(this.values ,currentIdx, Math.floor((currentIdx-1)/2));
            currentIdx = Math.floor((currentIdx-1)/2);
        }

        return this.values;
    }

    extractMax() {
        //remove first element and exchange it with the last array element 
        let max = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values.pop();

        if (this.values.length != 0) {
            let currentIdx = 0;
            let length = this.values.length;
            while (true) {
                let currentEl = this.values[currentIdx];
                let leftChildIdx = 2 * currentIdx + 1;
                let rightChildIdx = 2 * currentIdx + 2;
                let leftChild, rightChild;
                let swapIdx = -Infinity;
                if(leftChildIdx < length) {
                    leftChild = this.values[leftChildIdx];
                    if(leftChild > currentEl) {
                        swapIdx = leftChildIdx;
                    }
                }
                if(rightChildIdx < length) {
                    rightChild = this.values[rightChildIdx];
                    if(rightChild > currentEl && rightChild > leftChild) {
                        swapIdx = rightChildIdx;
                    }
                }
                if(swapIdx === -Infinity) break;
                swap(this.values, currentIdx, swapIdx);
                currentIdx = swapIdx;
            }
        }
        return max;
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
//console.log(heap);
// heap.extractMax();
// console.log(heap);
heap.extractMax();
console.log(heap);