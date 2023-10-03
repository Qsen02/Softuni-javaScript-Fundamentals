function printElements(inputArray) {
    let step = Number(inputArray[inputArray.length - 1]);
    inputArray.pop(inputArray.length - 1);
    let line = []
    for (let i = 0; i < inputArray.length; i += step) {
        line.push(inputArray[i]);
    }
    console.log(line.join(" "));
}
printElements(['5', '20', '31', '4', '20', '2']);