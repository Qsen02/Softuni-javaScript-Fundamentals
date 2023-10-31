function addressBook(inputArray) {
    let addressList = {};
    for (let addresses of inputArray) {
        let token = addresses.split(":");
        let name = token[0];
        let address = token[1];
        addressList[name] = address;
    }
    let sortedArray = Object.entries(addressList);
    let entries = sortedArray.sort((a, b) => a[0].localeCompare(b[0]));
    for (let addresses of entries) {
        let name = addresses[0];
        let address = addresses[1];
        console.log(`${name} -> ${address}`);
    }
}
addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);