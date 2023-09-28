function arraysModification(inputArray) {
    let inputArraySum = 0;
    let newArray = [];
    let newArraySum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        let curElement = inputArray[i];
        inputArraySum += curElement;
        if (curElement % 2 == 0) {
            newArray.push(curElement + i);
        } else {
            newArray.push(curElement - i);
        }
    }
    for (let n of newArray) {
        newArraySum += n;
    }
    console.log(newArray);
    console.log(inputArraySum);
    console.log(newArraySum);
}
arraysModification([5, 15, 23, 56, 35])