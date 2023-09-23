function binary(binaryNum) {
    let decimalNum = 0;
    for (let i = binaryNum.length - 1; i >= 0; i--) {
        let curDigit = Number(binaryNum[i]);
        decimalNum += curDigit * Math.pow(2, Math.abs(i - (binaryNum.length - 1)));
    }
    console.log(decimalNum);
}
binary("11110000");