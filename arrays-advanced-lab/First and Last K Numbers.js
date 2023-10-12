function firstAndLastKNum(inputArray) {
    let k = inputArray.shift();
    let firstSequance = inputArray.slice(0, k);
    let secondSequance = inputArray.slice(-k);
    console.log(firstSequance.join(" "));
    console.log(secondSequance.join(" "));
}
firstAndLastKNum([3, 6, 7, 8, 9])