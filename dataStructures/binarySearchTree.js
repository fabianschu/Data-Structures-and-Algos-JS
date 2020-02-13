class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val);

        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;

        while(true){
            if (val === currentNode.val) return undefined;
            if (val < currentNode.val) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else if (val > currentNode.val) {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }

    find(val){
        if (!this.root) return undefined;
        let currentNode = this.root;
        while(true){
            if (val === currentNode.val) return currentNode;
            if (val < currentNode.val) {
                if (!currentNode.left) {
                    return undefined;
                }
                currentNode = currentNode.left;
            } else if (val > currentNode.val) {
                if (!currentNode.right) {
                    return undefined
                }
                currentNode = currentNode.right;
            }
        }
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(7);
tree.insert(90);
tree.insert(1200);
tree.insert(80);
console.log(tree);
console.log(tree.find(9));
console.log(tree.find(15));