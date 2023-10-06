function addAndSubtract(num1, num2, num3) {
    let resultOfSum = sum(num1, num2);
    let finalResult = subtract(resultOfSum, num3);

    function sum(n1, n2) {
        return n1 + n2;
    }

    function subtract(a, b) {
        return a - b;
    }
    console.log(finalResult);
}
addAndSubtract(10, 10, 10)