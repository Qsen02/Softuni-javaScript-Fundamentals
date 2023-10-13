function train(inputArray) {
    let wagons = inputArray[0].split(" ").map(Number);
    let capacity = Number(inputArray[1]);
    for (let i = 2; i < inputArray.length; i++) {
        let command = inputArray[i];
        let tokens = command.split(" ");
        if (tokens[0] == "Add") {
            let passengers = tokens[1];
            wagons.push(passengers);
        } else {
            let passengers = Number(tokens[0]);
            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + passengers <= capacity) {
                    wagons[j] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(" "));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
])