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
        return this;
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
    get(val){
        //if list is empty or the requested index val does not exist return undefined
        if(val >= this.length || val < 0){
            return null;
        }
        let index = 0;
        let current = this.head;
        while(index != val){
            current = current.next;
            index++;
        }
        return current.val;
    }
}

module.exports.SinglyLinkedList = SinglyLinkedList;