function resetPassword(inputArray) {
    let password = inputArray.shift();
    let command = inputArray.shift();
    while (command != "Done") {
        let token = command.split(" ");
        let action = token[0];
        if (action == "TakeOdd") {
            let newPassword = "";
            for (let i = 0; i < password.length; i++) {
                let char = password[i];
                if (i % 2 != 0) {
                    newPassword += char;
                }
            }
            password = newPassword;
            console.log(password);
        } else if (action == "Cut") {
            let index = Number(token[1]);
            let length = Number(token[2]);
            let substring = password.slice(index, index + length);
            password = password.replace(substring, "");
            console.log(password);
        } else if (action == "Substitute") {
            let substring = token[1];
            let replacement = token[2];
            if (password.includes(substring)) {
                while (password.includes(substring)) {
                    password = password.replace(substring, replacement);
                }
                console.log(password)
            } else {
                console.log("Nothing to replace!");
            }
        }
        command = inputArray.shift();
    }
    console.log(`Your password is: ${password}`);
}
resetPassword(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
]);