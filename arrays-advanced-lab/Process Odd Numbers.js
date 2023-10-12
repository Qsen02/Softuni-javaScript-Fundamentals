function oddIndexes(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let curElement = array[i];
        if (i % 2 != 0) {
            newArray.push(curElement);
        }
    }
    let result = newArray.map(x => x * 2)
        .reverse()
        .join(" ");
    console.log(result);
}
oddIndexes([10, 15, 20, 25])