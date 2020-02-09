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
    it('returns the correct node if the length is larger than one', function(){
        let list = new SinglyLinkedList();
        list.push('a');
        list.push('b');
        list.push('c');
        expect(list.get(1).val).toEqual('b');
    });
    it('returns the correct node if the length is larger than one', function(){
        let list = new SinglyLinkedList();
        list.push('a');
        expect(list.get(0).val).toEqual('a');
    });
    it('returns null if the requested index is less than zero', function(){
        let list = new SinglyLinkedList();
        list.push('a');
        expect(list.get(-1)).toEqual(null);
    });
})

describe('set() method', function(){
    let list = new SinglyLinkedList();
    it('accepts two inputs', function(){
        expect(list.set.length).toEqual(2);
    });
    it('accepts two inputs', function(){
        expect(list.set.length).toEqual(2);
    });
    it('returns false if the requested index doesnt exist', function(){
        list.push('a');
        list.push('b');
        expect(list.set(10, 'hi')).toEqual(false);
    })
    it('returns true if the value has been changed', function(){
        list.push('a');
        list.push('b');
        expect(list.set(1, 'hi')).toEqual(true);
    })
})

describe('insert() method', function(){
    let list = new SinglyLinkedList();
    it('accepts two inputs', function(){
        expect(list.insert.length).toEqual(2);
    });
    it('returns true if a node has been inserted somewhere in the middle of the list', function(){
        list.push('a');
        list.push('b');
        expect(list.insert(1, 'new value')).toEqual(true);
    });
    it('returns true if a node has been inserted at the end of the list', function(){
        list.push('a');
        list.push('b');
        expect(list.insert(2, 'new value')).toEqual(true);
    });
    it('returns true if a node has been inserted at the beginning of the list', function(){
        list.push('a');
        list.push('b');
        expect(list.insert(0, 'new value')).toEqual(true);
    });
})

describe('remove() method', function(){
    it('accepts one input', function(){
        let list = new SinglyLinkedList();
        expect(list.remove.length).toEqual(1);
    });
    it('returns true, if a node has been deleted succesfully in the middle', function(){
        let list = new SinglyLinkedList();
        list.push('a');
        list.push('b');
        list.push('c');
        expect(list.remove(1).val).toEqual('b');
    })
    it('returns true, if a node has been deleted succesfully at the beginning', function(){
        let list = new SinglyLinkedList();
        list.push('a');
        list.push('b');
        list.push('c');
        expect(list.remove(0).val).toEqual('a');
    })
    it('returns true, if a node has been deleted succesfully at the end', function(){   
        let list = new SinglyLinkedList();
        list.push('a');
        list.push('b');
        list.push('c');
        expect(list.remove(2).val).toEqual('c');
    })
    it('returns false, if an index is not valid', function(){
        let list = new SinglyLinkedList();
        list.push('a');
        list.push('b');
        list.push('c');
        expect(list.remove(20)).toEqual(undefined);
    })
})

describe('reverse() method', function(){
    it('reverses a list of three elements', function(){
        let list = new SinglyLinkedList();
        list.push('a');
        list.push('b');
        list.push('c');
        list.reverse();
        expect(list.head.val).toEqual('c');
        expect(list.tail.val).toEqual('a');
        expect(list.head.next.val).toEqual('b');
    });
})