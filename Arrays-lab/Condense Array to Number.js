function arrays(inputArray) {
    if (inputArray.length == 1) {
        console.log(inputArray[0]);
    } else {
        let condense = [];
        while (inputArray.length != 1) {
            for (let i = 0; i < inputArray.length - 1; i++) {
                let curElement = inputArray[i] + inputArray[i + 1];
                condense.push(curElement);
            }
            inputArray = condense;
            condense = [];
        }
        console.log(inputArray.join());
    }
}
arrays([5, 0, 4, 1, 2]);