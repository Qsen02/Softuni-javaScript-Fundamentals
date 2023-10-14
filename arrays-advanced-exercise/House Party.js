function partyList(inputArray) {
    let guests = [];
    for (let i = 0; i < inputArray.length; i++) {
        let command = inputArray[i];
        let token = command.split(" ");
        let name = token[0];
        if (token.includes("not")) {
            if (!guests.includes(name)) {
                console.log(`${name} is not in the list!`);
            } else {
                let removeIndex = guests.indexOf(name);
                guests.splice(removeIndex, 1);
            }
        } else {
            if (guests.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                guests.push(name);
            }
        }
    }
    console.log(guests.join("\n"));
}
partyList(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
]);