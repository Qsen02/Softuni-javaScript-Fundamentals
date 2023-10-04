function steamAccount(inputArray) {
    let games = inputArray[0].split(" ");
    let index = 1;
    let command = inputArray[index];
    while (command != "Play!") {
        let token = command.split(" ");
        let curCommand = token[0];
        let game = token[1];
        switch (curCommand) {
            case "Install":
                let isInstalled = games.includes(game);
                if (!isInstalled) {
                    games.push(game);
                }
                break;
            case "Uninstall":
                for (let i = 0; i < games.length; i++) {
                    curGame = games[i];
                    if (curGame == game) {
                        games.splice(i, 1);
                        break;
                    }
                }
                break;
            case "Update":
                for (let i = 0; i < games.length; i++) {
                    curGame = games[i];
                    if (curGame == game) {
                        games.splice(i, 1);
                        games.push(game);
                        break;
                    }
                }
                break;
            case "Expansion":
                let gameSplited = game.split("-");
                for (let i = 0; i < games.length; i++) {
                    curGame = games[i];
                    if (gameSplited[0] == curGame) {
                        games.splice(i + 1, 0, gameSplited.join(":"));
                        break;
                    }
                }
                break;
        }
        index++;
        command = inputArray[index];
    }
    console.log(games.join(" "));
}
steamAccount(['CS WoW Diablo LoL',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!'
]);