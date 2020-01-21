//TASK 1
//Given an array of integers and a number, write a function which finds the maximum sum of a subarray with the length of the number passed to the function

const maxSubarraySum = (arr, num) => {
    if (num > arr.length) {
        return null;
    }

    let temp = 0;

    //iterate over first subarray and save sum in a variable (max)
    for (let i = 0; i < num; i++) {
        temp += arr[i];
    }

    let max = temp;

    //iterate over remaining array elements
    //one by one add the value of the next element, and subtract the value of the previously included element
    for (let i = num; i < arr.length; i++) {
        temp = temp + arr[i] - arr[i - num];
        if (temp > max) {
            max = temp;
        }
    }

    return max;
}

//TASK 2
//Write a function which accepts two parameters - an array of pos. integers and a pos. integer. It should return the minimal length of a contiguous subarray of which the sum is greater or equal to the integer passed to the function
//time: O(n)
//space: O(1)

const minSubArrayLen = (nums, sum) => { 
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        // if current window doesn't add up to the given sum then 
        // move the window to right
        if(total < sum && end < nums.length){
            total += nums[end];
            end++;
        }
        // if current window adds up to at least the sum given then
        // we can shrink the window 
        else if(total >= sum){
            minLen = Math.min(minLen, end-start);
            total -= nums[start];
            start++;
        } 
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
        else {
            break;
        }
        console.log('total: ', total)
        console.log('start: ', start)
        console.log('end: ', end)
        console.log('minLen: ', minLen)
        console.log()
    }

    return minLen === Infinity ? 0 : minLen;
}

minSubArrayLen([2,3,1,2,4,3], 7);

//TASK 3
//Write a function that accepts a string and returns the length of the longest substring with all distinct characters

const findLongestSubstring = (str) => {
    let longest = 0;
    let seen= {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        //check if char has been seen already, if so increment start of the window
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        //if window size larger than 'longest' set 'longest to window size'
        longest = Math.max(longest, i - start + 1);

        //note down 'index + 1' of char so that it can be used as starting point for nexrt window
        seen[char] = i + 1;
    }
    return longest;
}

findLongestSubstring('thisisawesome');