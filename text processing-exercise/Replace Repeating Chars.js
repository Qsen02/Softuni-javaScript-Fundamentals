function repeatingChars(str) {
    let notRepeatStr = " ";
    let previousStr = " ";
    for (let letter of str) {
        if (letter !== previousStr) {
            notRepeatStr += letter;
        }
        previousStr = letter;
    }
    console.log(notRepeatStr);
}
repeatingChars('aaaaabbbbbcdddeeeedssaa');