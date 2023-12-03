function solve(inputArray) {
    let strCount = inputArray.shift();
    let pattern = /!([A-Z][a-z]{2,})!:\[([[A-Za-z]{8,})\]/;
    let asciiCodes = [];
    for (let i = 0; i < strCount; i++) {
        let command = inputArray[i];
        if (pattern.test(command)) {
            let [commandName, string] = command.split(":");
            commandName = commandName.slice(1, commandName.length - 1);
            string = string.slice(1, string.length - 1);
            for (let char of string) {
                let code = char.charCodeAt();
                asciiCodes.push(code);
            }
            console.log(`${commandName}: ${asciiCodes.join(" ")}`);
        } else {
            console.log("The message is invalid");
        }
    }
}
solve(["2",

    "!Send!:[IvanisHere]",

    "*Time@:[Itis5amAlready"
]);