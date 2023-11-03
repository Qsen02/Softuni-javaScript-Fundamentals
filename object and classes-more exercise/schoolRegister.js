function schoolRegister(inputArray) {
    let studentInfo = {}
    for (let student of inputArray) {
        let token = student.split(", ");
        let studentName = token[0];
        let grades = token[1]
        let avgScore = token[2];
        let name = studentName.split("Student name: ")[1];
        let grade = grades.split("Grade: ")[1];
        Number(grade);
        grade++;
        let score = avgScore.split("Graduated with an average score: ")[1];
        if (!(grade in studentInfo)) {
            if (score < 3) {
                continue;
            }
            studentInfo[grade] = [];
            studentInfo[grade].push(name);
            studentInfo[grade].push(score);
        } else {
            if (score < 3) {
                continue;
            }
            studentInfo[grade].push(name);
            studentInfo[grade].push(score);
        }
    }
    for (let key in studentInfo) {
        console.log(`${key} Grade`);
        let count = 0;
        let sum = 0;
        let names = [];
        let students = studentInfo[key];
        for (let i = 0; i < students.length; i += 2) {
            let name = students[i];
            let score = Number(students[i + 1]);
            names.push(name);
            count++;
            sum += score;
        }
        let avgGrade = sum / count;
        console.log(`List of students: ${names.join(", ")}`);
        console.log(`Average annual score from last year: ${avgGrade.toFixed(2)}`);
        console.log(" ");
    }
}
schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
]);