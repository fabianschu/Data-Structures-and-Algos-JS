const {BinarySearchTree} = require('../dataStructures/binarySearchTree');
const {AvlTree} = require('../benchmarking/altAvl');

//large array

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let n = 10000000;
let max = 10000000;
let largeArray = [];

for(let i = 0; i < n; i++){
    let x = getRndInteger(0, max);
    largeArray.push(x);
}
largeArray.push(max/2);


let bst = new BinarySearchTree();

let startInsertBst = Date.now();
largeArray.forEach(el => bst.insert(el));
let endInsertBst = Date.now();
let totalInsertBst = (endInsertBst - startInsertBst) / 1000;

let startFindBst = Date.now();
console.log(bst.find(max/2));
let endFindBst = Date.now();
let totalFindBst = (endFindBst - startFindBst) / 1000;

let avl = new AvlTree();

let startInsertAvl = Date.now();
largeArray.forEach(el => avl.insert(el));
let endInsertAvl = Date.now();
let totalInsertAvl = (endInsertAvl - startInsertAvl) / 1000;

let startFindAvl = Date.now();
console.log(avl.findNode(max/2));
let endFindAvl = Date.now();
let totalFindAvl = (endFindAvl - startFindAvl) / 1000;

console.log('totalInsertBst: ', totalInsertBst);
console.log('totalInsertAvl: ', totalInsertAvl);
console.log();
console.log('heightAvl: ', avl.root.height());
console.log();
console.log('totalFindBst: ', totalFindBst);
console.log('totalFindAvl: ', totalFindAvl);

