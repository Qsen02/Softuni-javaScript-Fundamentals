function sorting(inputArray) {
    let sortedArray = inputArray.sort((a, b) => a - b);
    let resultArray = [];
    while (sortedArray.length > 0) {
        let maxNum = sortedArray.pop();
        let minNum = sortedArray.shift();
        resultArray.push(maxNum, minNum);
    }
    console.log(resultArray.join(" "));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);