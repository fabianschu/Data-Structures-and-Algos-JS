const swap = (arr, index1, index2) => {
    let tmp = arr[index2];
    arr[index2] = arr[index1];
    arr[index1] = tmp;
    return arr;
}

module.exports.swap = swap;