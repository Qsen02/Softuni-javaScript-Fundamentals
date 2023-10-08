function modificateNumber(num) {
    let numAvg = average(num);
    if (numAvg > 5) {
        console.log(num);
        return;
    } else {
        let modifyNumber = modificate(num);
        console.log(modifyNumber);
    }
}

function average(n) {
    let nAsStr = String(n);
    let sum = 0;
    let count = 0;
    for (let i = 0; i < nAsStr.length; i++) {
        let curDigit = Number(nAsStr[i]);
        sum += curDigit;
        count++;
    }
    let average = sum / count;
    return average;
}

function modificate(n) {
    let avgNum = average(n);
    let nAsStr = String(n);
    while (avgNum < 5) {
        nAsStr += "9";
        n = Number(nAsStr);
        avgNum = average(n);
    }

    let number = Number(nAsStr);
    return number;
}
modificateNumber(101);