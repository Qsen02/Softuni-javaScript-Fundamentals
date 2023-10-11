function negativeAndPositive(array) {
    let newArray = [];
    for (let n of array) {
        if (n < 0) {
            newArray.unshift(n);
        } else {
            newArray.push(n);
        }
    }
    console.log(newArray.join("\n"));
}
negativeAndPositive(['7', '-2', '8', '9']);