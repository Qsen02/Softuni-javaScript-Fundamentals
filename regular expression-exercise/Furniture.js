function furniture(inputArray) {
    let furnitures = inputArray.shift();
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/;
    let sum = 0;
    let output = [];
    while (furnitures != "Purchase") {
        let match = furnitures.match(pattern);
        if (match) {
            let { name, price, quantity } = match.groups;
            output.push(name);
            sum += price * quantity;
        }
        furnitures = inputArray.shift();
    }
    if (output.length == 0) {
        console.log("Bought furniture:");
        console.log(`Total money spend: ${sum.toFixed(2)}`);
    } else {
        console.log(`Bought furniture: \n${output.join("\n")}`);
        console.log(`Total money spend: ${sum.toFixed(2)}`);
    }
}
furniture(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase'
]);