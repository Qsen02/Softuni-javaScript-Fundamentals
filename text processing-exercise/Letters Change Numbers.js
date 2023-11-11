function fromLettersToNumbers(bigStr) {
    let array = bigStr.split(" ");
    let filteredArray = array.filter(el => el != "");
    let result = 0;
    for (let str of filteredArray) {
        let trimedStr = str.trim();
        let number = Number(trimedStr.slice(1, trimedStr.length - 1));
        let firstLetter = trimedStr[0];
        let lastLetter = trimedStr[trimedStr.length - 1];
        if (/[A-Z]/.test(firstLetter)) {
            let partNumber = firstLetter.toUpperCase().charCodeAt(0) - "A".charCodeAt(0) + 1;
            number /= partNumber;
        } else if (/[a-z]/.test(firstLetter)) {
            let partNumber = firstLetter.toUpperCase().charCodeAt(0) - "A".charCodeAt(0) + 1;
            number *= partNumber;
        }
        if (/[A-Z]/.test(lastLetter)) {
            let partNumber = lastLetter.toUpperCase().charCodeAt(0) - "A".charCodeAt(0) + 1;
            number -= partNumber;
        } else if (/[a-z]/.test(lastLetter)) {
            let partNumber = lastLetter.toUpperCase().charCodeAt(0) - "A".charCodeAt(0) + 1;
            number += partNumber;
        }
        result += number;
    }
    console.log(result.toFixed(2));
}
//fromLettersToNumbers('A12b s17G');
fromLettersToNumbers('P34562Z q2576f   H456z');