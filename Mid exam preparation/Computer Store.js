function computerStore(inputArray) {
    let finalPrice = 0;
    let special = inputArray.pop();

    for (let command of inputArray) {
        let price = Number(command);
        if (price <= 0) {
            console.log("Invalid price!");
            continue;
        }
        finalPrice += price;
    }
    let taks = finalPrice * 0.20;
    if (finalPrice == 0) {
        console.log("Invalid order!");
    } else {
        let finalPriceWithTaks = finalPrice + taks;
        if (special == "special") {
            finalPriceWithTaks -= finalPriceWithTaks * 0.10;
        }
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${finalPrice.toFixed(2)}$`);
        console.log(`Taxes: ${taks.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${finalPriceWithTaks.toFixed(2)}$`);
    }
}
computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
]);