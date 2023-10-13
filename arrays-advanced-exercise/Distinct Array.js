function arrayDistinction(array) {
    let distinctedArray = [];
    for (let n of array) {
        if (!distinctedArray.includes(n)) {
            distinctedArray.push(n);
        }
    }
    console.log(distinctedArray.join(" "));
}
arrayDistinction([7, 8, 9, 7, 2, 3, 4, 1, 2]);