function cards(inputArray) {
    let deck = inputArray.shift().split(", ");
    let number = Number(inputArray.shift());
    for (let i = 0; i < number; i++) {
        let command = inputArray[i];
        let token = command.split(", ");
        let action = token.shift();
        if (action == "Add") {
            let cardName = token.shift();
            if (deck.includes(cardName)) {
                console.log("Card is already in the deck");
                continue;
            } else {
                deck.push(cardName);
                console.log("Card successfully added");
            }
        } else if (action == "Remove") {
            let cardName = token.shift();
            if (deck.includes(cardName)) {
                let indexOfCard = deck.indexOf(cardName);
                deck.splice(indexOfCard, 1);
                console.log("Card successfully removed");
            } else {
                console.log("Card not found");
                continue;
            }
        } else if (action == "Remove At") {
            let index = token.shift();
            if (deck[index] != undefined) {
                deck.splice(index, 1);
                console.log("Card successfully removed");
            } else {
                console.log("Index out of range");
                continue;
            }
        } else if (action == "Insert") {
            let index = token.shift();
            let cardName = token.shift();
            if (deck[index] == undefined) {
                console.log("Index out of range");
                continue;
            } else if (deck.includes(cardName)) {
                console.log("Card is already added");
                continue;
            } else {
                deck.splice(index, 0, cardName);
                console.log("Card successfully added");
            }
        }
    }
    console.log(deck.join(", "));
}
cards(["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts", "2", "Add, Two of Clubs", "Remove, Five of Hearts"]);