function maxSequance(inputArray) {
    let arrayOfArrays = [];
    for (let i = 0; i < inputArray.length; i++) {
        let elArray = [];
        let curElement = inputArray[i];
        let loop = 0;
        for (let j = i + 1; j < inputArray.length; j++) {
            loop++;
            let nextElement = inputArray[j];
            if (curElement == nextElement) {
                if (elArray.length == 0) {
                    elArray.push(curElement, nextElement);
                } else {
                    elArray.push(nextElement);
                }
            } else {
                i += loop - 1;
                break;
            }
        }
        arrayOfArrays.push(elArray);
    }
    let longestArr = 0;
    for (let i = 0; i < arrayOfArrays.length; i++) {
        let isLongest = true;
        let curArr = arrayOfArrays[i];
        if (arrayOfArrays.length == 1) {
            longestArr = curArr;
            break;
        }
        for (let j = i + 1; j < arrayOfArrays.length; j++) {
            let nextArr = arrayOfArrays[j];
            if (curArr.length < nextArr.length) {
                isLongest = false;
            }
        }
        if (isLongest) {
            longestArr = curArr;
            break;
        }
    }
    console.log(longestArr.join(" "));
}
maxSequance([4, 4, 6, 1, 1, 1, 5, 5, 7, 7, 1]);