const {swap} = require('../sorting/helpers');

class Node {
    constructor(val, prio) {
        this.val = val;
        this.prio = prio;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, prio) {
        let newNode = new Node(val, prio);
        this.values.push(newNode);

        let currentIdx = this.values.length - 1;

        while(currentIdx > 0){
            const currentPrio = this.values[currentIdx].prio;

            const parentIdx = Math.floor((currentIdx - 1)/2);
            let parentPrio = this.values[parentIdx].prio;

            if(currentPrio >= parentPrio) break;

            swap(this.values ,currentIdx, parentIdx);
            currentIdx = parentIdx;
        }
        
        return this.values;
    }

    dequeue() {
        let topPrio = this.values[0];
        this.values[0] = this.values[this.values.length - 1];
        this.values.pop();

        if (this.values.length !== 0) {
            let currentIdx = 0;
            let length = this.values.length;

            while (true) {
                let currentNode = this.values[currentIdx];
                let leftChildIdx = 2 * currentIdx + 1;
                let rightChildIdx = 2 * currentIdx + 2;
                let leftChild, rightChild;
                let swapIdx = -Infinity;
                
                if(leftChildIdx < length) {
                    leftChild = this.values[leftChildIdx];
                    if(leftChild.prio < currentNode.prio) {
                        swapIdx = leftChildIdx;
                    }
                }
                if(rightChildIdx < length) {
                    rightChild = this.values[rightChildIdx];
                    if(rightChild.prio < currentNode.prio && rightChild.prio < leftChild.prio) {
                        swapIdx = rightChildIdx;
                    }
                }
                if(swapIdx === -Infinity) break;
                swap(this.values, currentIdx, swapIdx);
                currentIdx = swapIdx;
            }
        }
        return topPrio;
    }

}

// let ER = new PriorityQueue();
// ER.enqueue("common cold",5)
// ER.enqueue("gunshot wound", 1)
// ER.enqueue("high fever",4)
// ER.enqueue("broken arm",2)
// ER.enqueue("glass in foot",3)
// console.log(ER);

module.exports.PriorityQueue = PriorityQueue;
module.exports.Node = Node;