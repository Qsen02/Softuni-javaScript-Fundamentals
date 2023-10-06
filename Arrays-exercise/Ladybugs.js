function ladybug(inputArray) {
    let fieldSize = inputArray[0];
    let ladybygsIndexes = inputArray[1];
    let ladyBugs = ladybygsIndexes.split(" ").map(Number);
    let field = [];
    for (let i = 0; i < fieldSize; i++) {
        if (ladyBugs.includes(i)) {
            field[i] = 1;
        } else {
            field[i] = 0;
        }
    }
    for (let i = 2; i < inputArray.length; i++) {
        let command = inputArray[i];
        let curCommand = command.split(" ");
        let startIndex = Number(curCommand[0]);
        let direction = curCommand[1];
        let moveIndex = Number(curCommand[2]);
        if (!field[startIndex]) {
            continue;
        }
        field[startIndex] = 0;
        if (direction == "right") {
            let nexIndex = startIndex + moveIndex;
            if (field[nexIndex] < field.length) {
                while (field[nexIndex] == 1) {
                    nexIndex += moveIndex;
                }
            }
            if (field[nexIndex] < field.length) {
                field[nexIndex] = 1;
            }
        } else if (direction == "left") {
            let newIndex = startIndex - moveIndex;
            if (field[newIndex] >= 0) {
                while (field[newIndex] == 1) {
                    newIndex -= moveIndex;
                }
            }
            if (field[newIndex] >= 0) {
                field[newIndex] = 1;
            }
        }
    }
    console.log(field.join(" "));
}
ladybug([3, '0 1 2',
    '0 right 1',
    '1 right 1',
    '2 right 1'
]);