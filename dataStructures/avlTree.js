class Node {
    constructor(val) {
        this.val = val;
        this.parent = null;
        this.left = null;
        this.right = null;
    }
}

class AvlTree {

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
                    newNode.parent = currentNode;
                    currentNode.left = newNode;
                    return this;
                }
                currentNode = currentNode.left;
            } else if (val > currentNode.val) {
                if (!currentNode.right) {
                    newNode.parent = currentNode;
                    currentNode.right = newNode;
                    return this;
                }
                currentNode = currentNode.right;
            }
        }
    }

    swapParentChild(oldChild, newChild, parent) {
        if (!parent) {
            newChild.parent = null;
            return;
        }
        if (oldChild === parent.left) parent.left = newChild;
        if (oldChild === parent.right) parent.right = newChild;
        newChild.parent = parent;
        oldChild.parent = newChild;
    }
    
    leftRotation(node){
        const newParent = node.right; 
        const grandparent = node.parent;
    
        this.swapParentChild(node, newParent, grandparent);
    
        newParent.left = node; 
        node.right = undefined; 
        node.max = node.range[1];
    
        return newParent; 
    }
}


const numberOfNodes = 5;

const tree = new AvlTree();

for (let i = 1; i < numberOfNodes; i++) {
    tree.insert(i);
}
