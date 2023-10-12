function smallestTwoNumber(array) {
    let sortedArray = array.sort((a, b) => a - b);
    let smallestNums = sortedArray.slice(0, 2);
    console.log(smallestNums.join(" "));
}
smallestTwoNumber([30, 15, 50, 5]);