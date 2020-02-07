const {bubbleSort} = require('../sorting/bubbleSort.js');
const {selectionSort} = require('../sorting/selectionSort');
const {insertionSort} = require('../sorting/insertionSort');
const {mergeSort} = require('../sorting/mergeSort');
const {quickSort} = require('../sorting/quickSort');
const {merge, swap, getDigit, digitCount, mostDigits} = require('../sorting/helpers');


describe('the swap function', function() { 
    it("should be a function", function() {
        expect(typeof swap).toBe("function");
    });
    it("should take three inputs", function() {
        expect(swap.length).toEqual(3);
    });
    it("should return an object", function(){
        expect(typeof swap([3,5], 0, 1)).toBe('object');
    });
    it("should swap two array elements", function(){
        expect(swap([3, 5, 6, 12], 0, 1)).toEqual([5, 3, 6, 12]);
    });
})

describe('the bubbleSort function', function() { 
    it("should be a function", function() {
        expect(typeof bubbleSort).toBe("function");
    });
    it("should return an array", function() {
        expect(typeof bubbleSort([4, 2])).toBe("object");
    });
    it("should return array with sorted elements", function() {
        expect(bubbleSort([4, 2])).toEqual([2, 4]);
    });
    it("should return array with sorted elements for array with uneven number of elements", function() {
        expect(bubbleSort([1934, 357, 4, 46, 2])).toEqual([2, 4, 46, 357, 1934]);
    });
    it("should return array with sorted elements for array with even number of elements", function() {
        expect(bubbleSort([357, 4, 46, 2])).toEqual([2, 4, 46, 357]);
    });
    it("should return array with sorted elements for array duplicates", function() {
        expect(bubbleSort([357, 4, 4, 2])).toEqual([2, 4, 4, 357]);
    });
})

describe('the selectionSort function', function() { 
    it("should be a function", function() {
        expect(typeof selectionSort).toBe("function");
    });
    it("should return an array", function() {
        expect(typeof selectionSort([4, 2])).toBe("object");
    });
    it("should return array with sorted elements", function() {
        expect(selectionSort([4, 2])).toEqual([2, 4]);
    });
    it("should return array with sorted elements for array with uneven number of elements", function() {
        expect(selectionSort([1934, 357, 4, 46, 2])).toEqual([2, 4, 46, 357, 1934]);
    });
    it("should return array with sorted elements for array with even number of elements", function() {
        expect(selectionSort([357, 4, 46, 2])).toEqual([2, 4, 46, 357]);
    });
    it("should return array with sorted elements for array duplicates", function() {
        expect(selectionSort([357, 4, 4, 2])).toEqual([2, 4, 4, 357]);
    });
})

describe('the selectionSort function', function() { 
    it("should be a function", function() {
        expect(typeof insertionSort).toBe("function");
    });
    it("should return an array", function() {
        expect(typeof insertionSort([4, 2])).toBe("object");
    });
    it("should return array with sorted elements", function() {
        expect(insertionSort([4, 2])).toEqual([2, 4]);
    });
    it("should return array with sorted elements for array with uneven number of elements", function() {
        expect(insertionSort([1934, 357, 4, 46, 2])).toEqual([2, 4, 46, 357, 1934]);
    });
    it("should return array with sorted elements for array with even number of elements", function() {
        expect(insertionSort([357, 4, 46, 2])).toEqual([2, 4, 46, 357]);
    });
    it("should return array with sorted elements for array duplicates", function() {
        expect(insertionSort([357, 4, 4, 2])).toEqual([2, 4, 4, 357]);
    });
})

describe('the merge helper function', function() { 
    it("should be a function", function() {
        expect(typeof merge).toBe("function");
    });
    it("should take two inputs", function() {
        expect(merge.length).toEqual(2);
    });
    it("should return an array", function() {
        expect(typeof merge([2, 4], [3, 7])).toBe("object");
    });
    it("should merge two sorted arrays and keep the sorting", function() {
        expect(merge([2, 4, 7, 13, 190], [3, 7, 92, 188])).toEqual([2,3,4,7,7,13,92,188,190]);
    });
    it("should return ignore an empty array", function() {
        expect(merge([], [3, 7])).toEqual([3,7]);
    });
})

describe('the mergeSort function', function() { 
    it("should be a function", function() {
        expect(typeof mergeSort).toBe("function");
    });
    it("should return an array", function() {
        expect(typeof mergeSort([4, 2])).toBe("object");
    });
    it("should return array with sorted elements", function() {
        expect(mergeSort([4, 2])).toEqual([2, 4]);
    });
    it("should return array with sorted elements for array with uneven number of elements", function() {
        expect(mergeSort([1934, 357, 4, 46, 2])).toEqual([2, 4, 46, 357, 1934]);
    });
    it("should return array with sorted elements for array with even number of elements", function() {
        expect(mergeSort([357, 4, 46, 2])).toEqual([2, 4, 46, 357]);
    });
    it("should return array with sorted elements for array duplicates", function() {
        expect(mergeSort([357, 4, 4, 2])).toEqual([2, 4, 4, 357]);
    });
})

describe('the quickSort function', function() { 
    it("should be a function", function() {
        expect(typeof quickSort).toBe("function");
    });
    it("should return an array", function() {
        expect(typeof quickSort([4, 2])).toBe("object");
    });
    it("should return array with sorted elements", function() {
        expect(quickSort([4, 2])).toEqual([2, 4]);
    });
    it("should return array with sorted elements for array with uneven number of elements", function() {
        expect(quickSort([1934, 357, 4, 46, 2])).toEqual([2, 4, 46, 357, 1934]);
    });
    it("should return array with sorted elements for array with even number of elements", function() {
        expect(quickSort([357, 4, 46, 2])).toEqual([2, 4, 46, 357]);
    });
    it("should return array with sorted elements for array duplicates", function() {
        expect(quickSort([357, 4, 4, 2])).toEqual([2, 4, 4, 357]);
    });
})

describe('the getDigit helper function', function(){
    it('is a function', function(){
        expect(typeof getDigit).toBe('function');
    });
    it('returns a number', function(){
        expect(typeof getDigit(32)).toBe('number');
    });
    it('returns the correct number', function(){
        expect(getDigit(32, 1)).toBe(3);
    });
    it('returns the correct number', function(){
        expect(getDigit(31312, 4)).toBe(3);
    });
    it('returns the correct number', function(){
        expect(getDigit(7, 0)).toBe(7);
    });
    it('returns the correct number', function(){
        expect(getDigit(1934791345, 4)).toBe(9);
    });
});

describe('the digitCount helper function', function(){
    it('is a function', function(){
        expect(typeof digitCount).toBe('function');
    })
    it('takes in one argument', function(){
        expect(digitCount.length).toEqual(1);
    })
    it('returns the correct amount of digits for 25', function(){
        expect(digitCount(25)).toEqual(2);
    })
    it('returns the correct amount of digits for 1', function(){
        expect(digitCount(1)).toEqual(1);
    })
    it('returns the correct amount of digits for 00267', function(){
        expect(digitCount(00267)).toEqual(3);
    })
    it('returns the correct amount of digits for 0', function(){
        expect(digitCount(0)).toEqual(1);
    })
})

describe('the mostDigits helper function', function(){
    it('is a function', function(){
        expect(typeof digitCount).toBe('function');
    })
    it('takes in one argument', function(){
        expect(mostDigits.length).toEqual(1);
    })
    it('returns the correct amount of digits for [3, 46, 135135, 45]', function(){
        expect(mostDigits([3, 46, 135135, 45])).toEqual(6);
    })
    it('returns the correct amount of digits for an array with one element 1', function(){
        expect(mostDigits([1])).toEqual(1);
    })

})