function rotation(inputArray, numOfRotations) {
    for (let i = 1; i <= numOfRotations; i++) {
        let curElement = inputArray.shift();
        inputArray.push(curElement);
    }
    console.log(inputArray.join(" "));
}
rotation([51, 47, 32, 61, 21], 2);