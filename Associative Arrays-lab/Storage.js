function storage(inputArray) {
    let map = new Map();
    for (let products of inputArray) {
        let token = products.split(" ");
        let name = token[0];
        let quantity = Number(token[1]);
        if (!map.has(name)) {
            map.set(name, quantity);
        } else {
            let curQuantity = map.get(name);
            let newQuantiy = curQuantity + quantity;
            map.set(name, newQuantiy);
        }
    }
    for (let kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);