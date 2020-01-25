// TASK 1
// Write a function that accepts a base and an exponent and that returns the pwoer of the base to the exponent.

const power = (a,b) => {
    
    if(b === 0) {
        return 1;
    }
    
    let result = a;
    
    const helper = (helperInput) => {
        if (helperInput === 1) {
            return;
        }
        result *= a;

        return helper(helperInput - 1)
    }
    
    helper(b);
    
    return result;
}


//TASK2
//Write a function that returns the factorial of an integer
const factorial = (a) => {
   
    if (a === 0 || a === 1) {
        return 1;
    }
    
    let result = a;
    
    const helper = (helperInput) => {
        if(helperInput === 1) {
            return;
        }
        result *= helperInput
        
        return helper(helperInput - 1);
        
    }
    
    helper(a-1);
    
    return result;
}


//TASK 3
//Write a function that calculates the product of each element of an array

const productOfArray = (arr) => {
    let result = 1;
    
    const helper = (helperInput) => {
        if(helperInput < 0) {
            return;
        }
        result *= arr[helperInput];
        return helper(helperInput - 1);
    }
    
    helper(arr.length - 1);
    
    return result;
}


//TASK 4
//write a function that takes in an integer n and that returns the sum of all the integers between 0 and n
const recursiveRange = (n) => {
    let result = 0;
    
    const helper = (helperInput) => {
        if(helperInput < 0) {
            return;
        }
        
        result += helperInput;
        
        return helper(helperInput - 1);
    }
    
    helper(n);
    
    return result;
}

//TASK 5
//write a function that takes in a number n and returns the nth fibonacci number

const fib = n => {
    let result = 1;
    let prev = 0;
    
    const helper = (helperInput) => {

        if (helperInput === n){
            return;
        }
        
        let tmp = result;
        
        result += prev;
        
        prev = tmp;
        
        return helper (helperInput + 1);
    }
    
    helper(result);
    
    return result;
};

//TASK 5
//write a function that takes in a string and that returns a string in the reverse order
const reverse = (str) => {
    // add whatever parameters you deem necessary - good luck!
    let result = '';
    
    const helper = (helperInput) => {
        if (helperInput < 0) {
            return;
        }
        result += str[helperInput];
        
        return helper(helperInput - 1);
    }
    
    helper(str.length - 1);
    
    return result;
}

//TASK 6
//write a function that checks if a string is a palindrome
const isPalindrome = (str) => {
    let result = true;
    let left = 0;
    //let right = str.length - 1;
    const helper = (right) => {
        if (left >= right) {
            return;
        }
        
        if (str[left] !== str[right]) {
            result = false;
        }
        
        left++;
        return helper(right - 1);
    }
    
    helper(str.length - 1);
    
    return result;
}

//TASK 7
//write a function that takes in an array and a callback function and that returns true if the callback function returns true for at least one of the array elements
const someRecursive = (arr, callback) => {
    let result = false;
    
    const helper = (helperInput) => {
        if(helperInput < 0) {
            return;
        }
        if(callback(arr[helperInput]) === true) {
            result = true;
        }
        helper (helperInput - 1);
    }
    
    helper(arr.length - 1);
    
    return result;
}

//TASK 8
//flatten an array
const flatten = array => {
    let result = [];
  
    const helper = array => {
      let tmp = [...array];
      
        if(tmp.length === 0) {
            return;
        }

      //console.log(...array[array.length - 1])
      const lastIndex = tmp.length - 1;
      const lastElement = tmp[lastIndex];
  
    //   console.log();
    //   console.log('############# new iteration');
    //   console.log('input: ', tmp);
    //   console.log('result store: ', result);
    //   console.log('lastElement: : ', lastElement);
    //   console.log(`type of last element: ${typeof(tmp[lastIndex])}`);
  
      if (typeof(lastElement) !== 'object') {
        console.log('element is number')
        result.push(lastElement);
        tmp.pop();
        helper(tmp);
      }
  
      //const tempStor = [...lastElement];
      tmp.pop();
      console.log('popped array: ', tmp);
      console.log('last Element: ', lastElement);

      if (typeof(lastElement) !== 'object') {
        tmp = [...tmp, lastElement];
        return;
      } 
      tmp = [...tmp, ...lastElement];
      returnhelper(tmp);
    }
  
    helper(array);

    return result.reverse();
  }
  
  flatten([1, 2, [3,  [4] ], 5]);