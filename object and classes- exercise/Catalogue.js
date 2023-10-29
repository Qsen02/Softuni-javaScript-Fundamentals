function catalogue(inputArray) {
    let sortedArray = inputArray.sort((a, b) => a.localeCompare(b));
    let groups = [];
    for (let product of sortedArray) {
        if (!groups.includes(product[0])) {
            groups.push(product[0]);
        }
    }
    for (let group of groups) {
        console.log(group);
        for (let products of sortedArray) {
            let token = products.split(" : ");
            let productName = token[0];
            let price = Number(token[1]);
            let product = {};
            if (group == productName[0]) {
                product[productName] = price;
                for (let key in product) {
                    console.log(`  ${key}: ${product[key]}`);
                }
            }
        }
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);