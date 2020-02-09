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
        console.log(requestedNode.val);
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
}

let list = new SinglyLinkedList();
list.push('a');
list.push('b');
list.push('c');

module.exports.SinglyLinkedList = SinglyLinkedList;