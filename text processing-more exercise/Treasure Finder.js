function foundTreasure(inputArray) {
    let keys = inputArray.shift().split(" ").map(Number);
    let command = inputArray.shift();
    while (command != "find") {
        let i = 0;
        for (let j = 0; j < command.length; j++) {
            let char = command[j];
            if (keys.length - 1 < i) {
                i = 0;
            }
            let curKey = keys[i];
            let code = char.charCodeAt();
            code -= curKey;
            let newChar = String.fromCharCode(code);
            command = command.split("");
            command.splice(j, 1, newChar)
            command = command.join("");
            i++;
        }
        let token = command.split("&");
        let type = token[1];
        let arrCoordinates = token[2].split("<");
        let coordinates = arrCoordinates[1].replace(">", "");
        console.log(`Found ${type} at ${coordinates}`);
        command = inputArray.shift();
    }
}
foundTreasure(["1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"
]);