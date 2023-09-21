function amazing(num) {
    let numAsString = String(num);
    let sum = 0;
    for (let i = 0; i < numAsString.length; i++) {
        let curDigit = Number(numAsString[i]);
        sum += curDigit;
    }
    let sumAsString = String(sum);
    let isAmazing = false;
    for (let i = 0; i < sumAsString.length; i++) {
        if (sumAsString[i] == "9") {
            isAmazing = true;
        }
    }
    console.log(`${num} Amazing? ${isAmazing==true ? "True" : "False"}`);
}
amazing(999);