function bitcoin(input) {
    let singleBitcoin = 11949.16;
    let gramOfGold = 67.51;
    let allMoneyCollected = 0;
    let bitcoinBought = 0;
    let day = 0;
    let dayOfCoin = [];
    for (let i = 0; i < input.length; i++) {
        let goldForShift = input[i];
        day = i + 1;
        if (day % 3 == 0) {
            goldForShift *= 0.70;
        }
        let currentMoney = goldForShift * gramOfGold;
        allMoneyCollected += currentMoney;
        if (allMoneyCollected >= singleBitcoin) {
            while (allMoneyCollected >= singleBitcoin) {
                allMoneyCollected -= singleBitcoin;
                bitcoinBought++;
            }
        }
        if (bitcoinBought != 0) {
            dayOfCoin.push(day);
        }
    }
    console.log(`Bought bitcoins: ${bitcoinBought}`);
    if (dayOfCoin != 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfCoin[0]}`);
    }
    console.log(`Left money: ${allMoneyCollected.toFixed(2)} lv.`);
}
bitcoin([3124.15,
    504.212,
    2511.124
]);