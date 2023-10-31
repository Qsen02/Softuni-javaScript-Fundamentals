function meeting(inputArray) {
    let meetingsList = {};
    for (let meetings of inputArray) {
        let token = meetings.split(" ");
        let day = token[0];
        let name = token[1];
        if (!(day in meetingsList)) {
            meetingsList[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }
    for (let key in meetingsList) {
        console.log(`${key} -> ${meetingsList[key]}`);
    }
}
meeting(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);