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
    unshift(){

    }
    get(){

    }
    set(){

    }
    insert(){
        
    }
    remove(){

    }
}

let list = new DoublyLinkedList();
list.push('Teckel Head');
console.log(list);