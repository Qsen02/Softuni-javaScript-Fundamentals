function dictionary(dictionary) {
    let token = {};
    for (let term of dictionary) {
        let tokenFromDictionary = JSON.parse(term);
        let terms = Object.keys(tokenFromDictionary)[0];
        let definition = Object.values(tokenFromDictionary)[0];
        token[terms] = definition;
    }
    let keys = Object.keys(token);
    keys.sort((a, b) => a.localeCompare(b));
    let sortedToken = {};
    for (let key of keys) {
        sortedToken[key] = token[key];
    }
    for (let key in sortedToken) {
        console.log(`Term: ${key} => Definition: ${token[key]}`);
    }
}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified,transmitted, or recorded."}'
])