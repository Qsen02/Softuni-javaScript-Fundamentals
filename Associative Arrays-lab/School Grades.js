function studentGrades(inputArray) {
    let gradeList = {};
    for (let grade of inputArray) {
        let token = grade.split(" ");
        let studentName = token.shift();
        let stringToken = token.join(" ");
        if (!(studentName in gradeList)) {
            gradeList[studentName] = stringToken;
        } else {
            gradeList[studentName] += ` ${stringToken}`;
        }
    }
    for (let [key, value] of Object.entries(gradeList)) {
        let token = value.split(" ");
        let sum = 0;
        let count = 0;
        let valueOfNumbers = token.map(Number);
        for (let n of valueOfNumbers) {
            count++;
            sum += n;
        }
        let avgGrade = sum / count;
        gradeList[key] = avgGrade;
    }
    let sortedArray = Object.entries(gradeList);
    let entries = sortedArray.sort((a, b) => a[0].localeCompare(b[0]));
    for (let [key, value] of entries) {
        console.log(`${key}: ${value.toFixed(2)}`);
    }
}
studentGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);