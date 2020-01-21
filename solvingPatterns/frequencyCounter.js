//Solve these problems with O(n) time complexity (and avoid nested loops)

//TASK1
//check if str1 is a valid anagram of str2 (time: O(n))

const validAnagram = (str1, str2) => {
    let counter1 = {};
    let counter2 = {};
  
    if (str1.length != str2.length) {
      return false;
    }
    
    //iterate over chars of str1 
    for (let char of str1) {
        //check if char already exists in counter object, if not add it and initialize with 1
        if (!counter1[char]) {
            counter1[char] = 1;
        }
        //if char already exists, increment counter
        else {
            counter1[char]++;
        }
    }
  
    for (let char of str2) {
        if (!counter2[char]) {
            counter2[char] = 1;
        }
        else {
            counter2[char]++;
        }
    }
    
    //check for each char if it exists in counter1 and counter2 and if the number is the same
    for (let char in counter1) {
        if (!(counter2[char]) || (counter1[char] != counter2[char])) {
            return false;
        }
    }
  
    return true;
} 

//validAnagram('', '');
//validAnagram('aaz', 'zza');
validAnagram('anagram', 'nagaras');
  

//TASK 2
//check if two numbers consist of the same digits which occur with the same frequency

const sameFrequency = (n, m) => {
    let string1 = String(n);
    let string2 = String(m);
    
    if (string1.length != string2.length) {
        return false;
    }
  
    let counter = {};
    
    //iterate over each digit of n(string1) and count occurences of each digit
    for (let digit of string1) {
      let key = digit;
      if (counter[key]) {
        counter[key]++;
      }
      if (!counter[key]) {
        counter[key] = 1;
      }
    }
    
    //iterate over each digit of n(string1) and if a digit was not included in n(string1) return false, else decrement counter for digits
    for (let digit of string2) {
      let key = digit;
      if (!counter[key]) {
        return false
      }
      if (counter[key]) {
        counter[key]--;
      }
    }
    
    //check if counter for each digit is zero => true
    for (let key in counter){
      if(counter[key] != 0) {
        return false
      };
    }
  
    return true;
  }
sameFrequency(2133,123);
sameFrequency(23, 32);
sameFrequency(214, 5)


//TASK 3
//count unique occurences of array elements (SORTED array)

const countUniqueValues = (array) => {
    if (array.length === 0) {
        return 0;
    }
    
    let counter = 0;
  
    for (let i = 0; i < array.length - 1; i++) {
        if (i === 0) {
            counter++;
        }
        if (array[i] != array[i - 1]) {
            counter++;
        }
    }
    return counter;
  }
  
  countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);


//TASK 4
//check if a SORTED array contains duplicates

const areThereDuplicates = (...args) => {
    let counter = {};

    for (let element of args) {
        if (!counter[element]) {
            counter[element] = 1;
        }
        else {
            return true;
        }
    }

    return false;
}

areThereDuplicates(1,2,2);