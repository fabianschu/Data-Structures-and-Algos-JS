const {swap} = require('./swap');

const selectionSort = (arr) => {

    for(let i = 0; i < arr.length; i++) {
        let min = arr[i];
        let index = i;

        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < min){
                min = arr[j];
                index = j;
            }
        }
        swap(arr, i, index);
    }
    return arr;
}

module.exports.selectionSort = selectionSort;