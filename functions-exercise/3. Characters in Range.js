function charsInRange(char1, char2) {
    let code1 = char1.charCodeAt();
    let code2 = char2.charCodeAt();

    let minCode = Math.min(code1, code2);
    let maxCode = Math.max(code1, code2);
    let finalResult = selection(minCode, maxCode);

    console.log(finalResult);
}

function selection(startCode, endCode) {
    let result = " ";
    for (let i = startCode + 1; i < endCode; i++) {
        let curChar = String.fromCharCode(i);
        result += curChar + " ";
    }
    return result;
}
charsInRange('a', 'd');