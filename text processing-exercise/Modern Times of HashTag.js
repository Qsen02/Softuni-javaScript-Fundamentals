function wordsWithHashTag(senctence) {
    let splitedSentance = senctence.split(" ");
    let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (let word of splitedSentance) {
        let isSpecial = true;
        if (word.startsWith("#") && word.length >= 2) {
            for (let letter of word) {
                if (numbers.includes(letter)) {
                    isSpecial = false;
                }
            }
            if (isSpecial) {
                let newWord = word.slice(1);
                console.log(newWord);
            }
        }
    }
}
wordsWithHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');