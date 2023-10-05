function myMath(num, pow) {
    let result = 1;
    for (let i = 1; i <= pow; i++) {
        result = multiplyTwoNumbers(result, num);
    }

    function multiplyTwoNumbers(a, b) {
        return a * b;
    }
    console.log(result);
}
myMath(2, 8);