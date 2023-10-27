function store(localStore, deliveryProducts) {
    let products = {};
    for (let i = 0; i < localStore.length; i += 2) {
        let productName = localStore[i];
        let quantity = Number(localStore[i + 1]);
        products[productName] = quantity;
    }
    for (let i = 0; i < deliveryProducts.length; i += 2) {
        let productName = deliveryProducts[i];
        let quantity = Number(deliveryProducts[i + 1]);
        if (productName in products) {
            products[productName] += quantity;
        } else {
            products[productName] = quantity;
        }
    }
    for (let keys in products) {
        console.log(`${keys} -> ${products[keys]}`);
    }
}
store([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
], [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
]);