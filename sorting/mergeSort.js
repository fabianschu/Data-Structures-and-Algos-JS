const {merge} = require('./helpers');


//a function to merge two sorted arrays with O(n+m) time and space complexity

const mergeSort1 = (arr) => {

    const sort = (arr) => {
        console.log(arr)
        if (arr.length === 1){
            return arr[0];
        }
        for (let i = 0; i < arr.length - 1; i++) {
            let str = merge(arr[i], arr[i+1]);
            arr.splice(i, 2, str);
        }
        console.log(arr);
        return sort(arr);
    }
    return sort(arr.map(el => [el]));
}

//alternative

const mergeSort = (arr) => {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

mergeSort([3, 5, 1, 7]);

module.exports.mergeSort = mergeSort;