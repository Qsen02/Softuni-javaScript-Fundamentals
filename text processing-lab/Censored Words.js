function censoredWord(str, censoredStr) {
    let censor = "*".repeat(censoredStr.length);
    let result = str;
    while (result.includes(censoredStr)) {
        result = result.replace(censoredStr, censor);
    }
    console.log(result);
}
censoredWord('A small sentence with some words', 'small');