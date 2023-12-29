function asciiSumation(inputArray) {
    let startCode = inputArray[0].charCodeAt();;
    let endCode = inputArray[1].charCodeAt();
    let range = [startCode, endCode].sort((a, b) => a - b);
    let wholeStr = inputArray[2];
    let asciiSum = 0;
    for (let char of wholeStr) {
        let code = char.charCodeAt();
        if (code > range[0] && code < range[1]) {
            asciiSum += code;
        }
    }
    console.log(asciiSum);
}
asciiSumation(['a',
    '1',
    'jfe392$#@j24ui9ne#@$'
]);