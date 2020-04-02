class Node {
    constructor(val) {
        this.val = val;
        this.parent = null;
        this.left = null;
        this.right = null;
        this.leftHeight = 0;
        this.rightHeight = 0;
    }

    height() {
        return Math.max(this.leftSubtreeHeight(), this.rightSubtreeHeight());
    } 

    leftSubtreeHeight() {
        return this.left ? this.left.height() + 1 : 0;
    }

    rightSubtreeHeight() {
        return this.right ? this.right.height() + 1 : 0;
    }

    balanceFactor() {
        return this.leftSubtreeHeight() - this.rightSubtreeHeight();
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
                    //this.balanceUpstream(newNode);
                    return this;
                }
                currentNode = currentNode.left;
            } else if (val > currentNode.val) {
                if (!currentNode.right) {
                    newNode.parent = currentNode;
                    currentNode.right = newNode;
                    //this.balanceUpstream(newNode);
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

    swapParentChild(node, newParent, grandparent) {
        if (grandparent && node === grandparent.left) grandparent.left = newParent;
        if (grandparent && node === grandparent.right) grandparent.right = newParent;
        if (!grandparent) this.root = newParent;
        newParent.parent = grandparent;
        node.parent = newParent;
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

    balance(node) {
        if (node.balanceFactor() > 1) {
            // left subtree is higher than right subtree
            if (node.left.balanceFactor() > 0) {
                this.rightRotation(node);
            } else if (node.left.balanceFactor() < 0) {
                this.leftRightRotation(node);
            }
        } else if (node.balanceFactor() < -1) {
            // right subtree is higher than left subtree
            if (node.right.balanceFactor() < 0) {
                this.leftRotation(node);
            } else if (node.right.balanceFactor() > 0) {
                this.rightLeftRotation(node);
            }
        }
    }

    balanceUpstream(node) {
        let current = node;
        while (current) {
            this.balance(current);
            current = current.parent;
        }
    }
}



// for (let i = 4; i > 0; i--) {
//     tree.insert(i);
// }
let tree = new AvlTree();
tree.insert(3);
tree.insert(2);
tree.insert(1);
console.log(tree);
// tree.insert(4);
// console.log(tree);

//let x = tree.findNode(3);

module.exports.AvlTree = AvlTree;
module.exports.Node = Node;