function rotation(inputArray) {
    let rotationCount = Number(inputArray[inputArray.length - 1]);
    inputArray.pop(inputArray.length - 1);
    for (let i = 1; i <= rotationCount; i++) {
        let lastElement = inputArray[inputArray.length - 1];
        inputArray.pop(inputArray.length - 1);
        inputArray.unshift(lastElement);
    }
    console.log(inputArray.join(" "));
}
rotation(['Banana', 'Orange', 'Coconut',
    'Apple', '15'
]);