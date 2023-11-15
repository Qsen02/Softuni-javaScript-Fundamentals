function stringValue(inputArray) {
    let str = inputArray[0];
    let cases = inputArray[1];
    let sum = 0;
    for (let char of str) {
        if (cases == 'LOWERCASE') {
            if (/[a-z]/.test(char)) {
                let asciiCode = char.charCodeAt();
                sum += asciiCode;
            }
        } else if (cases == 'UPPERCASE') {
            if (/[A-Z]/.test(char)) {
                let asciiCode = char.charCodeAt();
                sum += asciiCode;
            }
        }
    }
    console.log(`The total sum is: ${sum}`);
}
stringValue(['AC/DC',
    'UPPERCASE'
]);