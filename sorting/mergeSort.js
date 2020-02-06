const {merge} = require('./merge');


//a function to merge two sorted arrays with O(n+m) time and space complexity

const mergeSort = (arr) => {

    const sort = (arr) => {
        if (arr.length === 1){
            return arr[0];
        }
        for (let i = 0; i < arr.length - 1; i++) {
            let str = merge(arr[i], arr[i+1]);
            arr.splice(i, 2, str);
        }
        return sort(arr);
    }
    return sort(arr.map(el => [el]));
}

mergeSort([3, 2, 1, 4, 1]);

module.exports.mergeSort = mergeSort;