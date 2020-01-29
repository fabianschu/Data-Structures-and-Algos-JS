const binarySearch = (inputArr, val) => {
    let leftIndex = 0;
    let rightIndex = inputArr.length - 1;
    let arr = [...inputArr];
    
    while (leftIndex <= rightIndex) {

        let middleIndex = Math.ceil((rightIndex-leftIndex)/2);
        let middleValue = arr[Math.ceil((rightIndex-leftIndex)/2)];
        let leftValue = arr[leftIndex];
        let rightValue = arr[rightIndex];

        console.log('leftValue middleValue rightValue: ', leftValue, middleValue, rightValue);
        //check if middle of array is larger smaller or equal to val
        if (middleValue > val) {
            rightIndex = middleIndex;
        }

        if (middleValue < val) {
            leftIndex = middleIndex;
        }

        if (middleValue === val) {
            return true;
        }
    }
    return false;

}

let arr = ['a', 'b', 'c', 'd', 'e'];
let val = 'b';
binarySearch(arr,val);