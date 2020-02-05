const {swap} = require('./swap')

const bubbleSort = (arr) => {
    let tmp = [...arr];
    let lastIndex = tmp.length - 1;
    let iterationCounter = 0;
    let noSwap;

    for (let i = 0; i < (arr.length/2) + 1; i++) {

        for (let j = 0; j < lastIndex; j++) {
            noSwap = true;
            iterationCounter++;
            if (tmp[j] > tmp[j + 1]) {
                swap(tmp, j, (j+1));
                noSwap = false;
            }
            //console.log(tmp)
        }
        if (noSwap) {
            break;
        }
        //console.log('full pass through')
        lastIndex--;
    }
    console.log(iterationCounter);
    console.log(tmp);
    return tmp;
}

//alternative solution from the course
const bubbleSort2 = (arr) => {
    let iterationCounter = 0;
    let noSwap;
    for (let i = arr.length; i > 0; i--) {
        noSwap = true;
        for (let j = 0; j < i-1; j++) {
            iterationCounter++;
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, (j+1));
                noSwap = false
            }
        }
        if (noSwap) {
            break;
        }
    }
    console.log(iterationCounter);
    console.log(arr);
    return arr;
}

bubbleSort([1, 3, 2, 4, 5, 6, 7, 8]);
bubbleSort2([1, 3, 2, 4, 5, 6, 7, 8]);
module.exports.bubbleSort = bubbleSort;