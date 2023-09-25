function equalArrays(array1, array2) {
    let arraySum = 0;
    let isIdentical = true;
    for (let i = 0; i < array1.length; i++) {
        array1[i] = Number(array1[i]);
        array2[i] = Number(array2[i]);
        if (array1[i] != array2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isIdentical = false;
            break;
        } else {
            arraySum += array1[i];
        }
    }
    if (isIdentical == true) {
        console.log(`Arrays are identical. Sum: ${arraySum}`);
    }
}
equalArrays(['10', '50', '30'], ['10', '20', '30']);