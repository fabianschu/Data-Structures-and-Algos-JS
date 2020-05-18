const crypto = require('crypto');

const hash = (data) => {
    return data != null 
        ? crypto
            .createHash("sha256")
            .update(data.toString())
            .digest("hex")
        : "";
}

// class TransactionList {
//     constructor() {
//         this.list = [];
//     }
//     add(transaction) {
//         this.list.push(transaction);
//     }
// }

class MerkleTree {
    constructor() {
        this.root = [];
    }
    createTree(transactionList) {
        //add leafes
        this.root.unshift(transactionList);
        //add hashes of leafes
        this.root.unshift(transactionList.map(t => hash(t)));
    
        while (this.root[0].length > 1) {
            let temp = [];
            for (let idx = 0; idx < this.root[0].length; idx += 2) {
                if (idx < this.root[0].length - 1 && idx % 2 === 0) {
                    
                }
            }
        }
    }
}

const transactions1 = ["A", "B", "C", "D"];
const transactions2 = ["E", "F", "G"];

// const txList = new TransactionList;
// transactions1.forEach(el => txList.add(el));

const merkleTree = new MerkleTree();
merkleTree.createTree(transactions1);
console.log(merkleTree.root);
