function employeesInfo(employeesList) {
    class Employees {
        constructor(name, personalNumber) {
            this.name = name;
            this.personalNumber = personalNumber;
        }
        printPersonal() {
            console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`);
        }
    }
    for (let str of employeesList) {
        let employee = new Employees(str, str.length);
        employee.printPersonal();
    }
}
employeesInfo([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);