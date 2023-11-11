function pascalCase(str) {
    let strAsArray = str.split("");
    let firstLetter = strAsArray.shift();
    let word = firstLetter;
    let output = [];
    for (let letter of strAsArray) {
        if (!(/[a-z]/.test(letter))) {
            output.push(word);
            word = " ";
        }
        word += letter;
    }
    output.push(word);
    console.log(output.join(","));
}
pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');