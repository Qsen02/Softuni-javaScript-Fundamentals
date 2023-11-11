function hardWord(inputArray) {
    let [letter, words] = inputArray;
    let letterAsArray = letter.split(" ");
    let missedWords = letterAsArray.filter(word => word.includes("_"));
    for (let missedWord of missedWords) {
        let curMissedWord = missedWord
        if (!(missedWord.endsWith("_"))) {
            curMissedWord = missedWord.slice(0, missedWord.length - 1);
        }
        for (let word of words) {
            if (curMissedWord.length == word.length) {
                letter = letter.replace(curMissedWord, word);
            }
        }
    }
    console.log(letter);
}
hardWord(["Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.", ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);