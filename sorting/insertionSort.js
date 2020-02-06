const {swap} = require('./swap');

const insertionSort = arr => {

for (let i = 1; i < arr.length; i++) {

    for(let j = i - 1; j >= 0; j--) {
        if(arr[i]< arr[j] && (arr[i] >= arr[j-1] || j === 0)) {
            //insert before arr[j]
            let tmp = arr[i];
            arr.splice(i, 1)
            arr.splice(j, 0, tmp)
        }   
    }

}
    return arr;
}

module.exports.insertionSort = insertionSort;