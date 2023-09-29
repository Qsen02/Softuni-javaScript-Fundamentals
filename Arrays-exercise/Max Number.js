function topNumber(inputArray) {
    let resultArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        let curNum = inputArray[i];
        let isTop = true;
        for (let j = i + 1; j < inputArray.length; j++) {
            let rightNum = inputArray[j];
            if (rightNum >= curNum) {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            resultArray.push(curNum);
        }
    }
    console.log(resultArray.join(" "));
}
topNumber([27, 19, 42, 2, 13, 45, 48]);