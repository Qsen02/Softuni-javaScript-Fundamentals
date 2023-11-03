function words(inputArray) {
    let searchingWords = inputArray.shift();
    let arrOfSearchingWords = searchingWords.split(" ");
    let wordList = {};
    for (let word of arrOfSearchingWords) {
        let count = 0;
        for (let searchWord of inputArray) {
            if (word == searchWord) {
                count++;
            }
        }
        wordList[word] = count;
    }
    let objectAsArray = Object.entries(wordList);
    let sortedArray = objectAsArray.sort((a, b) => b[1] - a[1]);
    for (let [word, count] of sortedArray) {
        console.log(`${word} - ${count}`);
    }
}
words([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence'
]);