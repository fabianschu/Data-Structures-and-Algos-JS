const {mostDigits, digitCount, getDigit} = require('./helpers');

const radixSort = arr => {
    let numberOfIterations = mostDigits(arr);
    
    for (let i = 0; i < numberOfIterations; i++){
        //create an array of ten empty arrays;
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i);
            digitBuckets[digit].push(arr[j]);
        }
        arr = [].concat(...digitBuckets);
    }
    return arr;
}

module.exports.radixSort = radixSort;