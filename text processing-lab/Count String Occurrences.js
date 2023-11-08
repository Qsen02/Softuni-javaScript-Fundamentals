function stringOccurrences(str, searchingStr) {
    let sentance = str.split(" ");
    let count = 0;
    for (let word of sentance) {
        if (word == searchingStr) {
            count++;
        }
    }
    console.log(count);
}
stringOccurrences('This is a word and it also is a sentence', 'is');