const merge = (n, m) => {
    let tmp = [];
    let i = 0;
    let j = 0;

    while(i < n.length || j < m.length){
        if (n[i] < m[j]) {
            tmp.push(n[i]);
            i++;
        }
        else if (n[i] > m[j]) {
            tmp.push(m[j]);
            j++;
        }
        else {
            if(n[i]) {
                tmp.push(n[i]);
                i++;
            }
            if(m[j]) {
                tmp.push(m[j]);
                j++;
            }
        }
    }

    return tmp;
}

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

//returns the digit at a certain position
const getDigit = (num, digit) => {  
    num /= Math.pow(10, digit);
    num = Math.floor(num);
    num %= 10;
    return num;
}

const digitCount = (num) => {
    let tmp = 0;

    const helper = num => {
        tmp++;
        num /= 10;
        if(num < 1) {
            return;
        }
        return helper(num);
    }

    helper(num)
    return tmp;
}

const mostDigits = arr => {
    let tmp = 0;

    for (let i = 0; i < arr.length; i++) {
        let numberOfDigits = digitCount(arr[i])
        if(numberOfDigits > tmp) {
            tmp = numberOfDigits;
        }
    }
    return tmp;
}
mostDigits([3, 46, 135135, 45])

//swaps two elements in an array
const swap = (arr, index1, index2) => {
    let tmp = arr[index2];
    arr[index2] = arr[index1];
    arr[index1] = tmp;
    return arr;
}

module.exports.swap = swap;
module.exports.pivot = pivot;
module.exports.getDigit = getDigit;
module.exports.merge = merge;
module.exports.digitCount = digitCount;
module.exports.mostDigits = mostDigits;