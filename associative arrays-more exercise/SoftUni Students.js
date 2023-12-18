function students(inputArray) {
    let courseCapacity = {};
    let courses = {};
    for (let command of inputArray) {
        if (command.includes(":")) {
            let [courseName, capacity] = command.split(": ");
            capacity = Number(capacity);
            if (!(courseName in courses)) {
                courses[courseName] = [];
                courseCapacity[courseName] = capacity;
            } else {
                courseCapacity[courseName] += capacity;
            }
        } else {
            let token = command.split(" with email ");
            let studentNameCredit = token.shift();
            let [email, courseName] = token[0].split(" joins ");
            let [studentName, credtisAsStr] = studentNameCredit.split("[");
            let credits = credtisAsStr.replace("]", "");
            credits = Number(credits);
            let student = { credits, email, studentName };
            if (courseName in courses) {
                if (courseCapacity[courseName] > 0) {
                    courses[courseName].push(student);
                    courseCapacity[courseName] -= 1;
                }
            }
        }
    }
    let sortedArrary = Object.entries(courses).sort((a, b) => b[1].length - a[1].length);
    let sortedCourses = Object.fromEntries(sortedArrary);
    for (let course in sortedCourses) {
        console.log(`${course}: ${courseCapacity[course]} places left`);
        let sortedStudents = sortedCourses[course].sort((a, b) => b.credits - a.credits);
        for (let student of sortedStudents) {
            console.log(`--- ${student.credits}: ${student.studentName}, ${student.email}`);
        }
    }
}
students(['JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore'
]);