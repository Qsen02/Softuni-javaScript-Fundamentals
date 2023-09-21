function rightPlace(stringWithoutChar, char, string) {
    let result = stringWithoutChar.replace("_", char);
    if (result == string) {
        console.log("Matched")
    } else {
        console.log("Not Matched");
    }
}
rightPlace('Str_ng', 'I', 'Strong');