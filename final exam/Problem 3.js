function solve(inputArray) {
    let definitionsOfWords = inputArray.shift().split(" | ");
    let words = {};
    for (let wordDefinition of definitionsOfWords) {
        let [word, definition] = wordDefinition.split(": ");
        if (!(word in words)) {
            words[word] = [definition];
        } else {
            words[word].push(definition);
        }
    }
    let testWords = inputArray.shift().split(" | ");
    let command = inputArray.shift();
    if (command == "Test") {
        for (let word of testWords) {
            if (word in words) {
                console.log(`${word}:`)
                for (let definition of words[word]) {
                    console.log(` -${definition}`);
                }
            }
        }
    } else {
        let line = " ";
        for (let word in words) {
            line += `${word} `;
        }
        console.log(line);
    }
}
solve(["programmer: an animal, which turns coffee into code | developer: a magician",

    "fish | domino",

    "Hand Over"
]);