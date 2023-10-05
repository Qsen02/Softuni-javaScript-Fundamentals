function signCheck(num1, num2, num3) {
    let result = calculation(num1, num2, num3);
    if (result > 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }

    function calculation(a, b, c) {
        return a * b * c;
    }
}
signCheck(5, 12, 0);