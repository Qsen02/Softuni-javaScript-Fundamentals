function convertingToJson(firstName, lastName, hairColor) {
    let person = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }
    let json = JSON.stringify(person);
    console.log(json);
}
convertingToJson('George', 'Jones', 'Brown');