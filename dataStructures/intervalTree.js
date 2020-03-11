class Node {
    constructor(range) {
        this.range = range;
        this.parent = null;
        this.max = null;
        this.left = null;
        this.right = null;
    }
}


class IntervalTree {
    
    constructor() {
        this.root = null;
    }
    
    insert(range){
        let newNode = new Node(range);
        newNode.max = range[1];

        if (!this.root) {
            this.root = newNode;
            return this;
        }
        
        let currentNode = this.root;
        
        while(true){
            if (range[0] <= currentNode.range[0]) {
                if (!currentNode.left) {
                    newNode.parent = currentNode;
                    currentNode.left = newNode;
                    break;
                }
                currentNode = currentNode.left;
            } else if (range[0] > currentNode.range[0]) {
                if (!currentNode.right) {
                    newNode.parent = currentNode;
                    currentNode.right = newNode;
                    break;
                }
                currentNode = currentNode.right;
            }
        }

        while(true){
            if (currentNode.max <= newNode.max) {
                currentNode.max = newNode.max;
            }
            if(currentNode === this.root) break;
            currentNode = currentNode.parent;
        }
    }

    getAllIntersections(range){
        let result = [];

        const recursive = (range, currentNode) => {
            if (!currentNode) return;
            if (this.isIntersection(range, currentNode.range)) {
                result.push(currentNode.range);
                recursive(range, currentNode.left);
                recursive(range, currentNode.right);
            } else if (!currentNode.left) {
                recursive(range, currentNode.right);
            } else if (currentNode.left.max <= range[0]) {
                recursive(range, currentNode.left);
                recursive(range, currentNode.right);
            } else {
                recursive(range, currentNode.right);
            }
        }

        recursive(range, this.root);
        return result;
    }

    getOneIntersection(range){
        
        let currentNode = this.root;
        while(currentNode){
            if (this.isIntersection(range, currentNode.range)) {
                return currentNode.range;
            } else if (!currentNode.left) {
                currentNode = currentNode.right;
            } else if (currentNode.left.max <= range[0]) {
                currentNode = currentNode.right;
            } else {
                currentNode = currentNode.left;
            }
        }
    }

    isIntersection(range1, range2) {
        if(range1[0] >= range2[0] && range1[0] < range2[1]) return true
        if(range1[1] <= range2[1] && range1[1] > range2[0]) return true
        if(range1[0] >= range2[0] && range1[1] <= range2[1]) return true
        if(range1[0] <= range2[0] && range1[1] >= range2[1]) return true

        return false
    }
}

//test array:
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let largeArray = [];
let numberElements = 10;
for(let i = 0; i < numberElements; i++){
    let x = getRndInteger(0, 10);
    let y = getRndInteger(x + 1, 15);
    largeArray.push([x,y]);
}

let it = new IntervalTree();
largeArray.forEach(el => it.insert(el));
console.log('input array: ', largeArray);
console.log(it.getAllIntersections([4, 6]));