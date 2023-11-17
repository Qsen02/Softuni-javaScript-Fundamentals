function race(inputArray) {
    let names = inputArray.shift().split(", ");
    let racers = {};
    for (let name of names) {
        racers[name] = 0;
    }
    let letterPattern = /[A-Za-z]/g;
    let digitPattern = /\d/g;
    let command = inputArray.shift();
    while (command != 'end of race') {
        let match = command.match(letterPattern);
        let name = match.join("");
        let digit = command.match(digitPattern);
        let distance = digit.map(Number).reduce((acc, value) => acc + value);
        if (name in racers) {
            racers[name] += distance;
        }
        command = inputArray.shift();
    }
    let sortedRacers = Object.entries(racers).sort((a, b) => b[1] - a[1]);
    console.log(`1st place: ${sortedRacers[0][0]}`);
    console.log(`2nd place: ${sortedRacers[1][0]}`);
    console.log(`3rd place: ${sortedRacers[2][0]}`);
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);