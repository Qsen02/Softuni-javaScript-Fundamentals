function revealWords(words, sentance) {
    let searchingWords = words.split(", ");
    let splitedSentance = sentance.split(" ");
    for (let word of searchingWords) {
        for (let curWord of splitedSentance) {
            if (curWord.startsWith("*")) {
                if (curWord.length == word.length) {
                    let index = splitedSentance.indexOf(curWord);
                    splitedSentance.splice(index, 1, word);
                }
            }
        }
    }
    console.log(splitedSentance.join(" "));
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages');