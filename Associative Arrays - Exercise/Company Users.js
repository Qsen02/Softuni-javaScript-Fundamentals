function company(inputArray) {
    let companyEmployeeList = {};
    for (let companyEmployee of inputArray) {
        let token = companyEmployee.split(" -> ");
        let companyName = token[0];
        let employeeId = token[1];
        if (!(companyName in companyEmployeeList)) {
            companyEmployeeList[companyName] = [employeeId];
        } else {
            if (!companyEmployeeList[companyName].includes(employeeId)) {
                companyEmployeeList[companyName].push(employeeId);
            }
        }
    }
    let sortedArray = Object.entries(companyEmployeeList).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [company, employees] of sortedArray) {
        console.log(company);
        employees.forEach(i => console.log(`-- ${i}`));
    }
}
company(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);