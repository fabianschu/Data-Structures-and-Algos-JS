const {SinglyLinkedList} = require('../dataStructures/singlyLinkedList');

describe('the SinglyLinkedList class', function(){
    let list = new SinglyLinkedList();
    list.push('a');
    list.push('b');
    list.push('c');
    it('is a function', function(){
        expect(typeof SinglyLinkedList).toBe('function');
    });
    it('has a property "head"', function(){
        expect(list.head).toBeTruthy();
    });
    it('has a property "tail"', function(){
        expect(list.tail).toBeTruthy();
    });
    it('has a property "tail"', function(){
        expect(list.length).toBeTruthy();
    });
})

describe('the get() method', function(){
    it('returns null if there is no element in the list', function(){
        let list = new SinglyLinkedList();
        expect(list.get(3)).toEqual(null);
    });
    it('returns null if the requested index does not exist', function(){
        let list = new SinglyLinkedList();
        list.push('a');
        list.push('b');
        expect(list.get(2)).toEqual(null);
    });
    it('returns the correct value if the length is larger than one', function(){
        let list = new SinglyLinkedList();
        list.push('a');
        list.push('b');
        list.push('c');
        expect(list.get(1)).toEqual('b');
    });
    it('returns the correct value if the length is larger than one', function(){
        let list = new SinglyLinkedList();
        list.push('a');
        expect(list.get(0)).toEqual('a');
    });
    it('returns null if the requested index is less than zero', function(){
        let list = new SinglyLinkedList();
        list.push('a');
        expect(list.get(-1)).toEqual(null);
    });
})