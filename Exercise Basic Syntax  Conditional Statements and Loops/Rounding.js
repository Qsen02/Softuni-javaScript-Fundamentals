function rounding(roundingNumber, number) {
    if (number > 15) {
        number = 15;
    }
    let fixedNumber = roundingNumber.toFixed(number);
    console.log(parseFloat(fixedNumber));
}
rounding(7.45, 4);