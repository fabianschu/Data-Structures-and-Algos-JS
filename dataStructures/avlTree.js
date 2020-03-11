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

    findNode(val){
        let currentNode = this.root;
        while (currentNode) {
            if(currentNode.val === val) {
                return currentNode;
            }
            if(val < currentNode.val) {
                currentNode = currentNode.left;
            }
            if(val > currentNode.val) {
                currentNode = currentNode.right;
            }
        }
        return undefined;
    }

    //rotation utils

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
        node.right = null; 
    
        return newParent; 
    }

    rightRotation(node){
        const newParent = node.left;
        const grandparent = node.parent;
        
        this.swapParentChild(node, newParent, grandparent);

        newParent.right = node;
        node.left = null;
    
        return newParent;
    }

    leftRightRotation(node) {
        this.leftRotation(node.left);
        return this.rightRotation(node);
    }

    rightLeftRotation(node) {
        this.rightRotation(node.right);
        return this.leftRotation(node);
    }

    // balance(node) {
    //     if (node.balanceFactor > 1) {
    //         // left subtree is higher than right subtree
    //         if (node.left.balanceFactor > 0) {
    //             rightRotation(node);
    //         } else if (node.left.balanceFactor < 0) {
    //             leftRightRotation(node);
    //         }
    //     } else if (node.balanceFactor < -1) {
    //         // right subtree is higher than left subtree
    //         if (node.right.balanceFactor < 0) {
    //             leftRotation(node);
    //         } else if (node.right.balanceFactor > 0) {
    //             rightLeftRotation(node);
    //         }
    //     }
    // }
}


const numberOfNodes = 5;

const tree = new AvlTree();

// for (let i = 4; i > 0; i--) {
//     tree.insert(i);
// }

tree.insert(3);
tree.insert(1);
tree.insert(2);

let x = tree.findNode(3);