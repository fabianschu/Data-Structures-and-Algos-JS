const {swap} = require('./swap');

//returns the new index
const pivot = (arr, start = 0, end = arr.length + 1) => {
    let pivot = arr[start];
    let swapIdx = start; //keeps track of where we are going to swap the pivot to

    for (let i = start + 1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

pivot([4, 8, 2, 1, 5, 7, 6, 3]);

module.exports.pivot = pivot;