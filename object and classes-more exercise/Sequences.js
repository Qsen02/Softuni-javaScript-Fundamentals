function sequences(inputArray) {
    let uniqueArrays = [];
    for (let i = 0; i < inputArray.length; i++) {
        let array = inputArray[i];
        let strAsArray = array.slice(1, array.length - 1).split(", ").map(Number).sort((a, b) => b - a);
        let isUnique = true;
        for (let j = i + 1; j < inputArray.length; j++) {
            let curArray = inputArray[j];
            let curStrAsArray = curArray.slice(1, curArray.length - 1).split(", ").map(Number).sort((a, b) => b - a);
            let count = 0;
            for (let number of strAsArray) {
                if (curStrAsArray.includes(number)) {
                    count++;
                }
            }
            if (count == strAsArray.length) {
                isUnique = false;
            }
        }
        if (isUnique) {
            uniqueArrays.push(strAsArray);
        }
    }
    uniqueArrays.sort((a, b) => a.length - b.length);
    for (let array of uniqueArrays) {
        console.log(`[${array.join(", ")}]`);
    }
}
sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
]);