function arrayManipulation(manipulationArray, commandArray) {
    for (let i = 0; i < commandArray.length; i++) {
        let curCommand = commandArray[i];
        let command = curCommand.split(" ");
        let commandName = command[0];
        if (commandName == "add") {
            let index = Number(command[1]);
            let value = Number(command[2]);
            manipulationArray.splice(index, 0, value);
        } else if (commandName == "addMany") {
            let index = Number(command[1]);
            for (let j = 2; j < command.length; j++) {
                let curElement = Number(command[j]);
                manipulationArray.splice(index, 0, curElement);
                index++;
            }
        } else if (commandName == "contains") {
            let number = Number(command[1]);
            let index = manipulationArray.indexOf(number);
            console.log(index);
        } else if (commandName == "remove") {
            let index = Number(command[1]);
            manipulationArray.splice(index, 1);
        } else if (commandName == "shift") {
            let rotations = Number(command[1]);
            for (let j = 1; j <= rotations; j++) {
                let firstNum = manipulationArray.shift();
                manipulationArray.push(firstNum);
            }
        } else if (commandName == "sumPairs") {
            let sumArr = [];
            for (let j = 0; j < manipulationArray.length; j += 2) {
                let sum = 0;
                if (manipulationArray[j + 1] != undefined) {
                    sum += manipulationArray[j] + manipulationArray[j + 1];
                    sumArr.push(sum);
                } else {
                    sumArr.push(manipulationArray[j]);
                }
            }
            manipulationArray = sumArr;
        } else if (commandName == "print") {
            console.log(`[ ${manipulationArray.join(", ")} ]`);
        }
    }
}
arrayManipulation([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);