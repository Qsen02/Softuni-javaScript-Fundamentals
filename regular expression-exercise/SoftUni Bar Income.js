function softuniBar(inputArray) {
    let pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.\d*]*(?<price>\d+\.?\d*)\$/;
    let command = inputArray.shift();
    let totalPrice = 0;
    while (command != 'end of shift') {
        let match = command.match(pattern);
        if (match != null) {
            let { customer, product, count, price } = match.groups;
            let curPrice = Number(price) * Number(count);
            console.log(`${customer}: ${product} - ${curPrice.toFixed(2)}`);
            totalPrice += curPrice;
        }
        command = inputArray.shift();
    }
    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}
softuniBar(['%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
]);