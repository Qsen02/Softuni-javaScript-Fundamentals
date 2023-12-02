function emojiDetector(input) {
    let str = input.shift();
    let pattern = /(\*{2}|:{2})([A-Z][a-z]{2,})\1/g;
    let emojiCount = 0;
    let coolEmojes = [];
    let treshold = str.match(/\d/g).map(Number).reduce((a, b) => a * b);
    let validEmojes = str.match(pattern);
    if (validEmojes != null) {
        emojiCount = validEmojes.length;
        for (let emoji of validEmojes) {
            let coolnest = 0;
            for (let char of emoji) {
                if (/[A-Za-z]/.test(char)) {
                    let code = char.charCodeAt();
                    coolnest += code;
                }
            }
            if (treshold < coolnest) {
                coolEmojes.push(emoji);
            }
        }
    } else {
        emojiCount = 0;
    }
    console.log(`Cool threshold: ${treshold}`);
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    console.log(coolEmojes.join("\n"));
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);