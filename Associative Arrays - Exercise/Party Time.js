function party(inputArray) {
    let guestList = [];
    let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let index = 0;
    let command = inputArray.shift();
    while (command != "PARTY") {
        guestList.push(command);
        index++;
        command = inputArray.shift();
    }
    for (let guest of inputArray) {
        if (guestList.includes(guest)) {
            let index = guestList.indexOf(guest);
            guestList.splice(index, 1);
        }
    }
    console.log(guestList.length);
    for (let guest of guestList) {
        if (digits.includes(guest[0])) {
            console.log(guest);
        }
    }
    for (let guest of guestList) {
        if (!digits.includes(guest[0])) {
            console.log(guest);
        }
    }
}
party(['7IK9Yo0h',
    '9NoBUajQ', 'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'SVQXQCbc'
]);