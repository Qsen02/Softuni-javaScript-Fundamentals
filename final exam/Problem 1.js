function solve(inputArray) {
    let str = inputArray.shift();
    let command = inputArray.shift();
    while (command != "Done") {
        let token = command.split(" ");
        let action = token[0];
        if (action == "Change") {
            let substring = token[1];
            let replacement = token[2];
            while (str.includes(substring)) {
                str = str.replace(substring, replacement);
            }
            console.log(str);
        } else if (action == "Includes") {
            let substring = token[1];
            if (str.includes(substring)) {
                console.log("True");
            } else {
                console.log("False");
            }
        } else if (action == "End") {
            let substring = token[1];
            if (str.endsWith(substring)) {
                console.log("True");
            } else {
                console.log("False");
            }
        } else if (action == "Uppercase") {
            str = str.toUpperCase();
            console.log(str);
        } else if (action == "FindIndex") {
            let char = token[1];
            let index = str.indexOf(char);
            console.log(index);
        } else {
            let startIndex = Number(token[1]);
            let count = Number(token[2]);
            let cut = str.slice(startIndex, startIndex + count);
            console.log(cut);
        }
        command = inputArray.shift();
    }
}
solve(["*S0ftUni is the B3St Plac3**",
    "Change 2 o",
    "Includes best",
    "End is",
    "Uppercase",
    "FindIndex P",
    "Cut 3 7",
    "Done"
]);