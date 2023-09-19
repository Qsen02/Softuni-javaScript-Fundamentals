function sum(startNum, endNum) {
    let sum = 0;
    let line = "";
    for (let i = startNum; i <= endNum; i++) {
        line += `${i} `;
        sum += i;
    }
    console.log(line);
    console.log(`Sum: ${sum}`);
}
sum(5, 10);