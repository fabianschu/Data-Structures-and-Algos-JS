const {bubbleSort} = require('../sorting/bubbleSort.js');
const {selectionSort} = require('../sorting/selectionSort');
const {insertionSort} = require('../sorting/insertionSort');
const {mergeSort} = require('../sorting/mergeSort');
const {merge} = require('../sorting/merge');
const {swap} = require('../sorting/swap');

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