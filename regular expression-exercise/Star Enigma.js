function starEnigma(inputArray) {
    let commandCount = Number(inputArray.shift());
    let pattern = /[star]/gi;
    let decryptedMsg = [];
    let destroyedPlanets = [];
    let attackedPlanets = [];
    for (let i = 0; i < commandCount; i++) {
        let command = inputArray[i];
        let match = command.match(pattern);
        let decrypt = " ";
        if (match) {
            let count = match.length;
            for (let char of command) {
                let code = char.charCodeAt();
                code -= count;
                let newChar = String.fromCharCode(code);
                decrypt += newChar;
            }
        } else {
            decrypt = command;
        }
        decryptedMsg.push(decrypt);
    }
    let validating = /@(?<name>[A-Za-z]+)[^-@!:>]*:(?<popualtion>\d+)[^-@!:>]*!(?<attackType>[AD])![^-@!:>]*->(?<soldiers>\d+)/;
    for (let msg of decryptedMsg) {
        let newMatch = msg.match(validating);
        if (newMatch) {
            let { name, attackType } = newMatch.groups;
            if (attackType == "A") {
                attackedPlanets.push(name);
            } else if (attackType == "D") {
                destroyedPlanets.push(name);
            }
        }
    }
    destroyedPlanets.sort((a, b) => a.localeCompare(b));
    attackedPlanets.sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(el => console.log(`-> ${el}`));
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(el => console.log(`-> ${el}`));
}
starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'
]);