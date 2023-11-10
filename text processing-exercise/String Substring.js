function stringSubstring(word, sentance) {
    let newSentance = sentance.toLowerCase().split(" ");
    if (newSentance.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}
stringSubstring('javascript',
    'JavaScript is the best programming language');