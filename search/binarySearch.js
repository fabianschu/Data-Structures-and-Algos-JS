const binarySearch = (inputArr, val) => {
    let leftIndex = 0;
    let rightIndex = inputArr.length - 1;
    let arr = [...inputArr];
    
    while (leftIndex < rightIndex) {

        let middleIndex = leftIndex + Math.ceil((rightIndex-leftIndex)/2);
        let middleValue = arr[leftIndex + Math.ceil((rightIndex-leftIndex)/2)];
        let leftValue = arr[leftIndex];
        let rightValue = arr[rightIndex];

        console.log('leftValue middleValue rightValue: ', leftValue, middleValue, rightValue, ' | ', 'leftIndex middleIndex rightIndex: ', leftIndex, middleIndex, rightIndex);
        //check if middle of array is larger smaller or equal to val
        if (middleValue > val) {
            rightIndex = middleIndex;
        }

        if (middleValue < val) {
            leftIndex = middleIndex;
        }

        if (middleValue === val) {
            console.log(middleIndex);
            return middleIndex;
        }
    }
    
    return -1;

}

//let arr = [5,6,10,13,14,18,30,34,35,37,40,44,64,79,84,86,95,96,98,99];
//let val = 1331;
let arr = [1,2,3,4,5];
let val = 5;
binarySearch(arr,val);