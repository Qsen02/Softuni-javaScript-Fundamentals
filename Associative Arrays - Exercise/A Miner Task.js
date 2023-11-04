function minerTask(inputArray) {
    let resourses = {};
    for (let i = 0; i < inputArray.length; i += 2) {
        let resourse = inputArray[i];
        let quantity = Number(inputArray[i + 1]);
        if (!(resourse in resourses)) {
            resourses[resourse] = quantity;
        } else {
            resourses[resourse] += quantity;
        }
    }
    for (let key in resourses) {
        console.log(`${key} -> ${resourses[key]}`);
    }
}
minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);