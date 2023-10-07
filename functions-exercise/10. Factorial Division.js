function factorialDivision(num1, num2) {
    let resultFromNum1 = factoriel(num1);
    let resultFromNum2 = factoriel(num2);
    let finalResult = resultFromNum1 / resultFromNum2;
    console.log(finalResult.toFixed(2));
}

function factoriel(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}
factorialDivision(5, 2);