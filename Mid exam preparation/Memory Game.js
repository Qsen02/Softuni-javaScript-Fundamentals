function memoryGame(inputArray) {
    let numbers = inputArray.shift().split(" ");
    let moves = 0;
    let command = inputArray.shift();
    while (command != "end") {
        let token = command.split(" ");
        let index1 = Number(token.shift());
        let index2 = Number(token.shift());
        moves++;
        if (numbers[index1] == numbers[index2]) {
            console.log(`Congrats! You have found matching elements - ${numbers[index1]}!`);
            numbers.splice(index1, 1);
            if (index2 == 0) {
                numbers.splice(0, 1);
            } else {
                numbers.splice(index2 - 1, 1);
            }
        } else if (numbers[index1] == undefined || numbers[index2] == undefined) {
            numbers.splice(Math.floor(numbers.length / 2), 0, `-${moves}a`, `-${moves}a`);
            console.log("Invalid input! Adding additional elements to the board");
        } else if (numbers[index1] != numbers[index2]) {
            console.log("Try again!");
        }
        if (numbers.length == 0) {
            break;
        }
        command = inputArray.shift();
    }
    if (numbers.length == 0) {
        console.log(`You have won in ${moves} turns!`);
    } else {
        console.log("Sorry you lose :(");
        console.log(` ${numbers.join(" ")}`);
    }
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"
]);