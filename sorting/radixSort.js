const {mostDigits, digitCount, getDigit} = require('./helpers');

const radixSort = arr => {
    let numberOfIterations = mostDigits(arr);
    
    for (let i = 0; i < numberOfIterations; i++){
        //create an array of ten empty arrays;
        let digitBuckets = Array.from({length: 10}, () => []);
        console.log(digitBuckets);
        for (let j = 0; i < arr.length; j++) {
            console.log(arr[j]);
            console.log(i)
            let digit = getDigit(arr[j], i);
            console.log(digit);
            console.log(digitBuckets)
            digitBuckets[digit].push(arr[j]);
        }
        //arr = [].concat(...digitBuckets);
    }
    console.log(arr);
    return arr;
}

radixSort([4, 67, 13, 244, 57959, 9, 24, 880834]);

module.exports.radixSort = radixSort;