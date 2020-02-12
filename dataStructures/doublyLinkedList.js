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

    }
    shift(){

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