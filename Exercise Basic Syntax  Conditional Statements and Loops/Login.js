function login(input) {
    let username = input[0];
    let correctPassord = "";
    for (let i = username.length - 1; i >= 0; i--) {
        let currentStr = username[i];
        correctPassord += currentStr;
    }

    let guessPassword = input[1];
    let i = 2;
    let guessAttempts = 0;
    while (guessPassword != correctPassord) {
        guessAttempts++;
        if (guessAttempts == 4) {
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log("Incorrect password. Try again.");
        guessPassword = input[i];
        i++;
    }
    console.log(`User ${username} logged in.`);
}
login(['Acer', 'login', 'go', 'let me in', 'recA']);