function bonusScores(inputArray) {
    inputArray.shift();
    let lectureCount = Number(inputArray.shift());
    let additionalBouns = Number(inputArray.shift());
    let maxBonus = 0;
    let highestAttenadnces = 0;
    for (let n of inputArray) {
        let studentAttendances = Number(n);
        let totalBonus = studentAttendances / lectureCount * (5 + additionalBouns);
        if (maxBonus < totalBonus) {
            highestAttenadnces = studentAttendances;
            maxBonus = totalBonus;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${highestAttenadnces} lectures.`);
}
bonusScores([
    '10', '30', '14', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]);