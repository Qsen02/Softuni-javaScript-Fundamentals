function equalSum(inputArray) {
    let result = 'no';
    for (let i = 0; i < inputArray.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = 0; j < i; j++) {
            leftSum += inputArray[j];
        }

        for (let j = i + 1; j < inputArray.length; j++) {
            rightSum += inputArray[j];
        }

        if (leftSum === rightSum) {
            result = i;
            break;
        }
    }
    console.log(result);
}
equalSum([1, 2, 3, 3]);