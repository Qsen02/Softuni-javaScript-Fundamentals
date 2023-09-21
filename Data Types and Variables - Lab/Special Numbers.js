function specNums(num) {
    for (let i = 1; i <= num; i++) {
        let sum = 0;
        let isSpecial = "False";
        let currentNumber = String(i);
        for (let j = 0; j < currentNumber.length; j++) {
            let currentDigit = Number(currentNumber[j]);
            sum += currentDigit;
        }
        if (sum == 5 || sum == 7 || sum == 11) {
            isSpecial = "True";
        }
        console.log(`${i} -> ${isSpecial}`);
    }
}
specNums(15);