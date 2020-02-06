const {pivot} = require('./helpers');

const quickSort = (arr, left = 0, right = arr.length -1) => {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right); //pivotIndex is middle
        //left
        quickSort(arr, left, pivotIndex - 1);
        //right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

module.exports.quickSort = quickSort;