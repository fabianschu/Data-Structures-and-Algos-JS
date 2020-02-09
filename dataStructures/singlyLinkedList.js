class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val){
        //create a new instance of a node
        let newNode = new Node(val);
        //if list has been empty so far, the pushed item is the first and last list item at the same time
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        //if there is already one or more items in the list
        } else {
            //take the item that currently is the last item and let it point to the new item
            this.tail.next = newNode;
            //then, set the last item of the list to be the new item
            this.tail = newNode;
        }
        //increment the length of the list and return the new list
        this.length++;
        return this;
    }
    pop(){
        if(this.length === 0){
            return undefined;
        }
        //traverse to the second-last list element
        let current = this.head;
        while(current.next !== this.tail){
            current = current.next;
        }
        let removedNode = current.next;
        //set previously second-to last item to be the new last item
        this.tail = current;
        //let the new last item point to null
        this.tail.next = null;
        //adjust the length of the list
        this.length--
        //edge case: only one item in the list
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        //return the new list
        return removedNode;
    }
    shift(){
        if(this.length === 0){
            return undefined;
        }
        //save value of current first node in a variable
        let removedVal = this.head;
        //set first value to be the second value and decrement length
        this.head = this.head.next;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        //return value of removed node
        return removedVal;
    }
    unshift(val){
        let newNode = new Node(val);
        //set new head and let it point to previously first node
        if(this.length === 0){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    //gets value of node with specified index in linked list
    get(requIdx){
        //if list is empty or the requested index val does not exist return null
        if(requIdx >= this.length || requIdx < 0){
            return null;
        }
        let index = 0;
        let current = this.head;
        while(index != requIdx){
            current = current.next;
            index++;
        }
        return current;
    }
    //set the value of a node with a specified index to a specified value
    set(requIdx, val){
        let requestedNode = this.get(requIdx);
        if (!requestedNode) return false;
        requestedNode.val = val;
        return true;
    }
    //insert a node at a specified position
    insert(requIdx, val){
        //edge cases: invalid index, beginning and end of list
        if(requIdx < 0 || requIdx > this.length) return false;
        // double !! 
        if(requIdx === 0) return !!this.unshift(val);
        if(requIdx === this.length) return !!this.push(val);

        //create a new node with the specified value
        let newNode = new Node(val);
        //iterate over list until you are at the node after which you want to insert the new node (here: prevNode)
        let current = this.head;
        while(current.next != this.get(requIdx)){
            current = current.next;
        }
        let prevNode = current;
        //save the node which is meant to come after the new node in a variable
        let nextNode = prevNode.next;
        //let the previous node point to the new node and the new node to the next node
        prevNode.next = newNode;
        newNode.next = nextNode;
        this.length++;
        return true;
    }
    //remove a node at a specified positiion
    remove(requIdx){
        if(requIdx < 0 || requIdx > this.length) return undefined;
        if(requIdx === 0) return this.shift();
        if(requIdx === this.length - 1) return this.pop();

        let current = this.head;
        while(current.next != this.get(requIdx)){
            current = current.next;
        }
        let prevNode = current;
        let deleteNode = prevNode.next;
        prevNode.next = deleteNode.next;
        this.length--;
        return deleteNode;
    }
    //reverse the order of the nodes without creating a copy
    reverse(){
        //change head and tail and create storage variable for current variable
        let current = this.head;

        this.head = this.tail;
        this.tail = current;
        
        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++){
            //save the node that comes next in a variable so that we can use it next
            next = current.next;
            //let the node we are currently look at to point at the previous node (initially null)
            current.next = prev;
            //now: our current node is going to be what we said 'next' to be and previous ('prev') is going to be what our current node was
            prev = current;
            current = next;
        }

        return this;

    }
}

// let list = new SinglyLinkedList();
// list.push('a');
// list.push('b');
// list.push('c');
// list.reverse();
module.exports.SinglyLinkedList = SinglyLinkedList;