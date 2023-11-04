function cardGame(inputArray) {
    let powers = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14 }
    let types = { S: 4, H: 3, D: 2, C: 1 };
    let players = {};
    for (let player of inputArray) {
        let token = player.split(": ");
        let playerName = token[0];
        let deck = token[1];
        let deckOfCards = deck.split(", ");
        if (playerName in players) {
            players[playerName].push(...deckOfCards);
        } else {
            players[playerName] = deckOfCards;
        }
    }
    let playerDecks = Object.entries(players);
    let output = {};
    for (let [name, deck] of playerDecks) {
        let uniqueDeck = new Set(deck);
        let deckPower = 0;
        for (cards of uniqueDeck) {
            let power = cards.slice(0, cards.length - 1);
            console.log(power);
            let type = cards[cards.length - 1];
            deckPower += powers[power] * types[type];
        }
        output[name] = deckPower;
    }
    for (let key in output) {
        console.log(`${key}: ${output[key]}`);
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);