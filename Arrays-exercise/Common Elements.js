function commonElements(inputArray1, inputArray2) {
    for (let i of inputArray1) {
        for (let j of inputArray2) {
            if (i === j) {
                console.log(i);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2']);