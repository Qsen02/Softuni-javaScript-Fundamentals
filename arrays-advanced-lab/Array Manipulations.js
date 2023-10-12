function manipulation(inputArray) {
    let array = inputArray[0].split(" ");
    let index = 1;
    let command = inputArray[index];
    while (index < inputArray.length) {
        let token = command.split(" ");
        let commandName = token[0];
        let number = Number(token[1]);
        let indexOfArray = Number(token[2]);
        switch (commandName) {
            case "Add":
                array.push(number);
                break;
            case "Remove":
                for (let i = 0; i < array.length; i++) {
                    let curEl = Number(array[i]);
                    if (curEl == number) {
                        array.splice(i, 1);
                    }
                }
                break;
            case "RemoveAt":
                array.splice(number, 1);
                break;
            case "Insert":
                array.splice(indexOfArray, 0, number);
                break;
        }
        index++;
        command = inputArray[index];
    }
    console.log(array.join(" "));
}
manipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]);