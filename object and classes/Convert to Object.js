function convertingToObject(json) {
    let object = JSON.parse(json);
    for (let keys in object) {
        console.log(`${keys}: ${object[keys]}`);
    }
}
convertingToObject('{"name": "George", "age": 40, "town": "Sofia"}');