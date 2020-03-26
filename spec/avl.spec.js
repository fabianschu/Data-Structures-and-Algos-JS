const {Node, AvlTree} = require('../dataStructures/avlTree');

describe('the leftRotation function', function() { 
    it("should be a function", function() {
        let tree = new AvlTree();
        expect(typeof tree.leftRotation).toBe("function");
    });
    it("should rotate a root correctly ", function() {
        let tree = new AvlTree();
        tree.insert(1);
        tree.insert(2);
        tree.insert(3);
        tree.leftRotation(tree.root);
        expect(tree.root.val).toEqual(2);
        expect(tree.root.parent).toEqual(null);

        expect(tree.root.left.parent).toEqual(tree.root);
        expect(tree.root.left.val).toEqual(1);
        expect(tree.root.left.left).toEqual(null);
        expect(tree.root.left.right).toEqual(null);

        expect(tree.root.right.parent).toEqual(tree.root);
        expect(tree.root.right.val).toEqual(3);
        expect(tree.root.right.left).toEqual(null);
        expect(tree.root.right.right).toEqual(null);
    });
    it("should rotate a in-between correctly ", function() {
        let tree = new AvlTree();
        tree.insert(1);
        tree.insert(2);
        tree.insert(3);
        tree.insert(4);
        let node2 = tree.root.right;
        let node3 = tree.root.right.right;
        let node4 = tree.root.right.right.right;
        tree.leftRotation(node2);

        expect(tree.root.right).toEqual(node3);
        expect(tree.root.left).toEqual(null);
        expect(tree.root.parent).toEqual(null);

        expect(node3.val).toEqual(3);
        expect(node3.parent).toEqual(tree.root);
        expect(node3.left).toEqual(node2);
        expect(node3.right).toEqual(node4);

        expect(node2.val).toEqual(2);
        expect(node2.parent).toEqual(node3);
        expect(node2.left).toEqual(null);
        expect(node2.right).toEqual(null);

        expect(node4.val).toEqual(4);
        expect(node4.parent).toEqual(node3);
        expect(node4.left).toEqual(null);
        expect(node4.right).toEqual(null);
    });
    it("should rotate a end correctly ", function() {
        let tree = new AvlTree();
        tree.insert(1);
        tree.insert(2);
        tree.insert(3);
        tree.insert(4);
        let node2 = tree.root.right;
        let node3 = tree.root.right.right;
        let node4 = tree.root.right.right.right;
        tree.leftRotation(node3);

        expect(tree.root.right).toEqual(node2);
        expect(tree.root.left).toEqual(null);
        expect(tree.root.parent).toEqual(null);

        expect(node2.parent).toEqual(tree.root);
        expect(node2.left).toEqual(null);
        expect(node2.right).toEqual(node4);

        expect(node4.parent).toEqual(node2);
        expect(node4.left).toEqual(node3);
        expect(node4.right).toEqual(null);

        expect(node3.parent).toEqual(node4);
        expect(node3.left).toEqual(null);
        expect(node3.right).toEqual(null);
    });
})

describe('the leftRotation function', function() { 
    it("should be a function", function() {
        let tree = new AvlTree();
        expect(typeof tree.leftRotation).toBe("function");
    });
    it("should rotate a root correctly ", function() {
        let tree = new AvlTree();
        tree.insert(3);
        tree.insert(2);
        tree.insert(1);
        let node3 = tree.root;
        let node2 = tree.root.left;
        let node1 = tree.root.left.left;
        tree.rightRotation(node3);

        expect(tree.root.val).toEqual(2);
        expect(tree.root.parent).toEqual(null);

        expect(tree.root.left).toEqual(node1);
        expect(tree.root.left.parent).toEqual(node2);
        expect(tree.root.left.val).toEqual(1);
        expect(tree.root.left.left).toEqual(null);
        expect(tree.root.left.right).toEqual(null);

        expect(tree.root.right.parent).toEqual(tree.root);
        expect(tree.root.right.val).toEqual(3);
        expect(tree.root.right.left).toEqual(null);
        expect(tree.root.right.right).toEqual(null);
    });
    it("should rotate a non-root correctly ", function() {
        let tree = new AvlTree();
        tree.insert(4);
        tree.insert(3);
        tree.insert(2);
        tree.insert(1);
        let node4 = tree.root;
        let node3 = tree.root.left;
        let node2 = tree.root.left.left;
        let node1 = tree.root.left.left.left;
        tree.rightRotation(node3);

        expect(tree.root).toEqual(node4);
        expect(tree.root.right).toEqual(null);
        expect(tree.root.left).toEqual(node2);
        expect(tree.root.parent).toEqual(null);

        expect(node2.parent).toEqual(tree.root);
        expect(node2.left).toEqual(node1);
        expect(node2.right).toEqual(node3);

        expect(node1.parent).toEqual(node2);
        expect(node1.left).toEqual(null);
        expect(node1.right).toEqual(null);

        expect(node3.parent).toEqual(node2);
        expect(node3.left).toEqual(null);
        expect(node3.right).toEqual(null);
    });
})

describe('the leftRightRotation function', function() { 
    it("should be a function", function() {
        let tree = new AvlTree();
        expect(typeof tree.leftRightRotation).toBe("function");
    });
    it("should work correctly on a root", function() {
        let tree = new AvlTree();
        tree.insert(3);
        tree.insert(1);
        tree.insert(2);
        let node3 = tree.root;
        let node1 = tree.root.left;
        let node2 = tree.root.left.right;
        tree.leftRightRotation(node3);

        expect(tree.root).toEqual(node2);
        expect(node2.parent).toEqual(null);
        expect(node2.left).toEqual(node1);
        expect(node2.right).toEqual(node3);

        expect(node1.parent).toEqual(node2);
        expect(node1.left).toEqual(null);
        expect(node1.right).toEqual(null);

        expect(node3.parent).toEqual(node2);
        expect(node3.left).toEqual(null);
        expect(node3.right).toEqual(null);
    });
});

describe('the balanceFactor function', function() { 
    it("should be a function", function() {
        let node = new Node();
        expect(typeof node.balanceFactor).toBe("function");
    });
    it("1. should return the correct balance factor", function() {
        let tree = new AvlTree();
        tree.insert(1);

        expect(tree.root.balanceFactor()).toEqual(0);
    });
    it("2. should return the correct balance factor", function() {
        let tree = new AvlTree();
        tree.insert(1);
        tree.insert(2);
        expect(tree.root.balanceFactor()).toEqual(-1);
    });
    it("3. should return the correct balance factor", function() {
        let tree = new AvlTree();
        tree.insert(1);
        tree.insert(2);
        tree.insert(3);
        expect(tree.root.balanceFactor()).toEqual(-2);
    });
    it("4. should return the correct balance factor", function() {
        let tree = new AvlTree();
        tree.insert(3);
        tree.insert(2);
        expect(tree.root.balanceFactor()).toEqual(1);
    });
    it("5. should return the correct balance factor", function() {
        let tree = new AvlTree();
        tree.insert(3);
        tree.insert(2);
        tree.insert(1);
        expect(tree.root.balanceFactor()).toEqual(2);
    });
})