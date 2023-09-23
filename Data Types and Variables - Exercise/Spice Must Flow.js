function spiceCollecting(startingYield) {
    let spice = 0;
    let days = 0;
    while (startingYield >= 100) {
        days++;
        spice += startingYield;
        spice -= 26;
        startingYield -= 10;
    }
    if (spice >= 26) {
        spice -= 26;
    }
    console.log(days);
    console.log(spice);
}
spiceCollecting(450);