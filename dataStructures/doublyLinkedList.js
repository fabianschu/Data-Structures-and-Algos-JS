class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode;
        this.length++;
        return this;
    }
    pop(){
        if (this.length === 0) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.pev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if (this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(idx){
        if (this.length === 0 || idx > this.length - 1 || idx < 0) return undefined;
        let currentIdx = 0;
        let currentNode;
        if (idx > Math.ceil(this.length / 2) - 1) {
            currentNode = this.tail;
            currentIdx = this.length -1;
            while(currentIdx != idx) {
                currentNode = currentNode.prev;
                currentIdx--;
            }
        } else {
            currentNode = this.head;
            while(currentIdx != idx) {
                currentNode = currentNode.next;
                currentIdx++;
            }
        }
        return currentNode;
    }
    set(val, idx){
        let currentNode = this.get(idx);
        if (currentNode){
            currentNode.val = val;
            return true;
        }
        return false
    }
    insert(val, idx){
        if (idx > this.length - 1 || idx < 0) return false;
        if (idx === 0) {
            this.unshift(idx);
        } else if (idx === this.length - 1) {
            this.push(idx);
        } else {
            let oldNode = this.get(idx);
            let beforeNode = oldNode.prev;
            let newNode = new Node(val);
            beforeNode.next = newNode;
            newNode.next = oldNode;
            oldNode.prev = newNode;
            newNode.prev = beforeNode;
        }
        return true;
    }
    remove(idx){
        if (idx > this.length - 1 || idx < 0) return undefined;
        if (idx === 0) return this.shift();
        if (idx === this.length - 1) return this.pop();
        let removedNode = this.get(idx);
        let beforeNode = removedNode.prev;
        let afterNode = removedNode.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        removedNode.next = null;
        removedNode.prev = null;
        
        this.length--;
        return removedNode;
    }
}

let list = new DoublyLinkedList();
list.push('Teckel Head');
console.log(list);