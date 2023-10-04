function nonDecreasing(inputArray) {
    let reuslt = [];
    let biggestOne = 0;
    for (let i = 0; i < inputArray.length; i++) {
        let curNum = inputArray[i];
        if (i == 0) {
            biggestOne = curNum
            reuslt.push(biggestOne);
        } else if (biggestOne <= curNum) {
            biggestOne = curNum;
            reuslt.push(biggestOne);
        }
    }
    console.log(reuslt.join(" "));
}
nonDecreasing([20, 3, 2, 15, 6, 1]);