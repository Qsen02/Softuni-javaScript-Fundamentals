function integerOrFloat(a, b, c) {
    let sum = a + b + c;
    let sumAsSrting = String(sum);
    let isFloat = false;
    for (let i = 0; i < sumAsSrting.length; i++) {
        if (sumAsSrting[i] == ".") {
            isFloat = true;
        }
    }
    console.log(`${sum} - ${isFloat ? "Float" : "Integer"}`);
}
integerOrFloat(9, 100, 1.1);