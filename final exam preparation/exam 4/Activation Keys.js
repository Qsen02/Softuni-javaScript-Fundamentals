function activationKeys(inputArray) {
    let key = inputArray.shift();
    let command = inputArray.shift();
    while (command != "Generate") {
        let token = command.split(">>>");
        let action = token[0];
        if (action == "Contains") {
            let substring = token[1];
            if (key.includes(substring)) {
                console.log(`${key} contains ${substring}`);
            } else {
                console.log("Substring not found!");
            }
        } else if (action == "Flip") {
            let curCase = token[1];
            let startIndex = Number(token[2]);
            let endIndex = Number(token[3]);
            if (curCase == "Upper") {
                let replacement = key.slice(startIndex, endIndex).toUpperCase();
                key = key.replace(key.slice(startIndex, endIndex), replacement);
                console.log(key);
            } else if (curCase == "Lower") {
                let replacement = key.slice(startIndex, endIndex).toLowerCase();
                key = key.replace(key.slice(startIndex, endIndex), replacement);
                console.log(key);
            }
        } else if (action == "Slice") {
            let startIndex = Number(token[1]);
            let endIndex = Number(token[2]);
            let substring = key.slice(startIndex, endIndex);
            key = key.replace(substring, "");
            console.log(key);
        }
        command = inputArray.shift();
    }
    console.log(`Your activation key is: ${key}`);
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
]);