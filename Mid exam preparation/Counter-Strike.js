function counterStrike(inputArray) {
    let energy = Number(inputArray.shift());
    let battleWons = 0;
    let command = inputArray.shift();
    while (command != "End of battle") {
        let distance = Number(command);
        if (energy >= distance) {
            energy -= distance;
            battleWons++;
        } else {
            console.log(`Not enough energy! Game ends with ${battleWons} won battles and ${energy} energy`);
            return;
        }
        if (battleWons % 3 == 0) {
            energy += battleWons;
        }
        command = inputArray.shift();
    }
    console.log(`Won battles: ${battleWons}. Energy left: ${energy}`);
}
counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"
]);