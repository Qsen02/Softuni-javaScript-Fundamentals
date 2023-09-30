function magicSum(inputArray, magicNum) {
    for (let i = 0; i < inputArray.length; i++) {
        let curElement = inputArray[i];
        for (let j = i + 1; j < inputArray.length; j++) {
            let sum = 0;
            let nextElement = inputArray[j]
            sum = curElement + nextElement;
            if (sum == magicNum) {
                console.log(curElement, nextElement);
            }
        }
    }
}
magicSum([14, 20, 60, 13, 7, 19, 8], 27);