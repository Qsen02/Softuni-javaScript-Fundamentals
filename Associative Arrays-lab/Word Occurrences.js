function words(inputArray) {
    let wordList = {};
    for (let curWord of inputArray) {
        let times = 0;
        if (curWord in wordList) {
            continue;
        }
        for (let word of inputArray) {
            if (curWord == word) {
                times++;
            }
        }
        wordList[curWord] = times;
    }
    let sortedArray = Object.entries(wordList);
    let entries = sortedArray.sort((a, b) => b[1] - a[1]);
    for (let [key, value] of entries) {
        console.log(`${key} -> ${value} times`);
    }
}
words(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"
]);