function evenAndOdd(inputArray) {
    let evenSum = 0;
    let oddSum = 0;
    let diference = 0;
    for (let num of inputArray) {
        if (num % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }
    diference = evenSum - oddSum;
    console.log(diference);
}
evenAndOdd([1, 2, 3, 4, 5, 6]);