function reverseString(str) {
    let reverseString = " ";
    for (let i = str.length - 1; i >= 0; i--) {
        let currentLetter = str[i];
        reverseString += currentLetter;
    }
    console.log(reverseString);
}
reverseString("If you are 555 then I am 666");