function friendList(inputArray) {
    let friends = inputArray.shift().split(", ");
    let blackListedNames = 0;
    let lostNames = 0;
    let command = inputArray.shift();
    while (command != "Report") {
        let token = command.split(" ");
        let action = token.shift();
        if (action == "Blacklist") {
            let name = token.shift();
            if (friends.includes(name)) {
                blackListedNames++;
                let indexOfName = friends.indexOf(name);
                console.log(`${name} was blacklisted.`);
                friends[indexOfName] = "Blacklisted";
            } else {
                console.log(`${name} was not found.`);
            }
        } else if (action == "Error") {
            let index = token.shift();
            if (friends[index] != undefined && friends[index] != "Blacklisted" && friends[index] != "Lost") {
                lostNames++;
                console.log(`${friends[index]} was lost due to an error.`);
                friends[index] = "Lost";
            } else {
                command = inputArray.shift();
                continue;
            }
        } else if (action == "Change") {
            let index = token.shift();
            let newName = token.shift();
            if (friends[index] != undefined) {
                console.log(`${friends[index]} changed his username to ${newName}.`);
                friends.splice(index, 1, newName);
            } else {
                command = inputArray.shift();
                continue;
            }
        }
        command = inputArray.shift();
    }
    console.log(`Blacklisted names: ${blackListedNames}`);
    console.log(`Lost names: ${lostNames}`);
    console.log(friends.join(" "));
}
friendList(["Mike, John, Eddie, William", "Error 3", "Error 3", "Change 0 Mike123", "Report"]);