function secretChat(inputArray) {
    let message = inputArray.shift();
    let command = inputArray.shift();
    while (command != "Reveal") {
        let token = command.split(":|:");
        let action = token[0];
        if (action == "InsertSpace") {
            let index = Number(token[1]);
            let arrMsg = message.split("");
            arrMsg.splice(index, 0, " ");
            message = arrMsg.join("");
            console.log(message);
        } else if (action == "Reverse") {
            let substring = token[1];
            if (message.includes(substring)) {
                let newMessage = message.replace(substring, "");
                let reversedSubStr = substring.split("").reverse().join("");
                message = newMessage + reversedSubStr;
                console.log(message);
            } else {
                console.log("error");
            }
        } else if (action == "ChangeAll") {
            let substring = token[1];
            let replacement = token[2];
            while (message.includes(substring)) {
                message = message.replace(substring, replacement);
            }
            console.log(message);
        }
        command = inputArray.shift();
    }
    console.log(`You have a new text message: ${message}`);
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);