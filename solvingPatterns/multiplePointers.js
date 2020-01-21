//Multiple Pointers: can be used in certain contexts to avoid nested loops to achieve O(n) time complexity instead of O(n^2)
//Solve these problems with O(n) time complexity (and avoid nested loops)

// TASK 1
// count the number of unique elements of a SORTED array (time: O(n))

const countUniqueValues = (array) => {
    
    if (array.length === 0) {
        return 0;
    }
    
    let counter = 0;
    
    //check if the element at position i differs from the element of the next position and if so increment the counter
    for (let i = 0; i < array.length - 1; i++) {
        if (i === 0) {
            counter++;
        }
        
        if (array[i] != array[i - 1]) {
            counter++;
        }
    }
    console.log(counter);
    return counter;
}

countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);

//TASK 2
//check if in the input array, there are duplicates (time: O(n))

const areThereDuplicates = (...args) => {
    let inputs = args;
    
    //sort input array
    inputs.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        if (a === b) {
            return 0;
        }
    });

    //same as in TASK 1, check if element matches the element of the adjacent index
    for (let i = 0; i < inputs.length; i++) {
        if (i > 0) {
            if (inputs[i] === inputs[i - 1]) {
                return true
            }
        }
    }

    return false;

}

areThereDuplicates('a', 'b', 'c', 'a');

//TASK 3
//in a SORTED array, check if any two elements together have a certain average avg

const averagePair = (inputArr, avg) => {

    //place a pointer to the right and left ends of the array
    let right = inputArr.length - 1;
    let left = 0;

    while (left < right) {
        //calculate the average of the associated values and return true if it matches
        if ((inputArr[left] + inputArr[right]) / 2 === avg) {
            console.log('true');
            return true;
        } 
        //if their average is larger than avg decrement the right pointer (to get the next smaller value) 
        if ((inputArr[left] + inputArr[right]) / 2 > avg) {
            right--;
        } 
        //if the average is smaller than avg increment the left pointer (to get next higher value)
        if ((inputArr[left] + inputArr[right]) / 2 < avg) {
            left++;
        }
    }
    console.log('false');
    return false;
}

averagePair([1,2,3], 2.5);

//TASK 4
//check if str1 contains all chars of str2 in the same order

const isSubsequence = (str1, str2) => {

    if (str1.length > str2.length) {
        return false;
    }

    let i = 0;
    let counter = 0;

    for (let j = 0; j < str2.length; j++) {
        console.log('i, str[i]: ', i, str1[i]);
        console.log('j, str[j]: ', j, str2[j]);
        console.log(counter);
        //the pointer i for str1 'lags behing' and is only incremented when a letter is found in str2
        if (str1[i] === str2[j]) {
            counter++;
            i++;
        }
    }

    if (counter === str1.length) {
        return true;
    }

    return false;
}

isSubsequence('sing', 'sting')