function numberSearch(inputArray, searchingNums) {
    let takenElements = searchingNums[0];
    let deletingElements = searchingNums[1];
    let searchNum = searchingNums[2];
    let tooksNums = [];
    for (let i = 0; i < takenElements; i++) {
        let curElement = inputArray[i];
        tooksNums.push(curElement);
    }
    for (let i = 1; i <= deletingElements; i++) {
        tooksNums.shift();
    }
    let count = 0;
    for (let n of tooksNums) {
        if (n == searchNum) {
            count++;
        }
    }
    console.log(`Number ${searchNum} occurs ${count} times.`);
}
numberSearch([7, 1, 5, 8, 2, 7], [3, 1, 5]);