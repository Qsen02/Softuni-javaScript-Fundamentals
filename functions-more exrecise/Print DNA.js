function printDNA(num) {
    printsCount = 0;
    for (let i = 1; i < num + 1; i++) {
        let curLine = printLetters(i);
        let curLetter = curLine.split(" ");
        let firstLetter = curLetter[0];
        let secondLetter = curLetter[1];
        if (i % 2 == 0) {
            console.log(`*${firstLetter}--${secondLetter}*`);
        } else {
            printsCount++;
            if (printsCount % 2 != 0) {
                console.log(`**${firstLetter}${secondLetter}**`);
            } else {
                console.log(`${firstLetter}----${secondLetter}`);
            }
        }
    }
}

function printLetters(num) {
    let letters = ["A T", "C G", "T T", "A G", "G G"];
    let length = letters.length;
    return letters[(num - 1) % length];
}
printDNA(50);