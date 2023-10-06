function sumOddAndEvenDigits(num) {
    let [oddSumOfDigits, evenSumOfDigits] = printOddAndEvenSum(num);
    console.log(`Odd sum = ${oddSumOfDigits}, Even sum = ${evenSumOfDigits}`);
}

function printOddAndEvenSum(num) {
    let evenSum = 0;
    let oddSum = 0;
    let numAsStr = String(num);
    for (let i = 0; i < numAsStr.length; i++) {
        let curNum = Number(numAsStr[i]);
        if (curNum % 2 == 0) {
            evenSum += curNum;
        } else {
            oddSum += curNum;
        }
    }
    return [oddSum, evenSum];
}
sumOddAndEvenDigits(1000435);