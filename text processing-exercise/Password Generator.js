function passwordGenerator(inputArray) {
    let [str1, str2, word] = inputArray;
    let concatStr = str1 + str2;
    let index = 0;
    for (let letter of concatStr) {
        if (/[iaoue]/.test(letter)) {
            concatStr = concatStr.replace(letter, word[index].toUpperCase());
            index++;
        }
        if (index > word.length - 1) {
            index = 0;
        }
    }
    let password = concatStr.split("").reverse().join("");
    console.log(`Your generated password is ${password}`);
}
passwordGenerator([
    'ilovepizza',
    'ihatevegetables',
    'orange'
]);