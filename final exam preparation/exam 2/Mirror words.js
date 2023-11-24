function mirrorWords([input]) {
    let pattern = /([@|#])(?<firstWord>[a-z]{3,})\1\1(?<secondWord>[a-z]{3,})\1/gi;
    let validPairs = pattern.exec(input);
    let validPairsCount = 0;
    let mirrorWords = [];
    while (validPairs != null) {
        validPairsCount++;
        let { firstWord, secondWord } = validPairs.groups;
        let reversedWord = firstWord.split("").reverse().join("");
        if (secondWord == reversedWord) {
            mirrorWords.push(`${firstWord} <=> ${secondWord}`);
        }
        validPairs = pattern.exec(input);
    }
    if (validPairsCount == 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${validPairsCount} word pairs found!`);
    }
    if (mirrorWords.length == 0) {
        console.log("No mirror words!");
    } else {
        console.log(`The mirror words are: \n${mirrorWords.join(", ")}`);
    }
}
mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);