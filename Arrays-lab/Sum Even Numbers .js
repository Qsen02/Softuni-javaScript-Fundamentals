function sumEven(inputArray) {
    let sum = 0;
    for (let i of inputArray) {
        let num = Number(i);
        if (num % 2 == 0) {
            sum += num;
        }
    }
    console.log(sum);
}
sumEven(['2', '4', '6', '8', '10'])