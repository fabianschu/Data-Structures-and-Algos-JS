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

    BFS(){
        let q = [];
        let values = [];
        let currentNode = this.root;
        q.push(this.root);

        while(q.length > 0){
            currentNode = q.shift();
            values.push(currentNode.val);
            if (currentNode.left) q.push(currentNode.left);
            if (currentNode.right) q.push(currentNode.right);
        }
        return values;
    }

    DFSPre(){
        let values = [];

        const traverse = (node) => {
            values.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }

        traverse(this.root);
        return values;
    }

    DFSPost(){
        let values = [];

        const traverse = (node) => {
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            values.push(node.val);
        }

        traverse(this.root);
        return values;
    }

    DFSIn(){
        let values = [];

        const traverse = (node) => {
            if(node.left) traverse(node.left);
            values.push(node.val);
            if(node.right) traverse(node.right);
        }

        traverse(this.root);
        return values;
    }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(7);
tree.insert(90);
tree.insert(1200);
tree.insert(80);
tree.insert(1020202);
console.log(tree.DFSPre());
console.log(tree.DFSPost());
console.log(tree.DFSIn());
