function pointsValidator(inputArray) {
    let x1 = inputArray[0];
    let y1 = inputArray[1];
    let x2 = inputArray[2];
    let y2 = inputArray[3];
    let distanceBetweenPoints1 = distance(x1, y1, 0, 0);
    let distanceBetweenPoints2 = distance(x2, y2, 0, 0);
    let distanceBetweenPoints3 = distance(x1, y1, x2, y2);
    let isValid1 = check(distanceBetweenPoints1);
    let isValid2 = check(distanceBetweenPoints2);
    let isValid3 = check(distanceBetweenPoints3);
    if (isValid1) {
        console.log(`{${x1+", "+y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1+", "+y1}} to {0, 0} is invalid`);
    }
    if (isValid2) {
        console.log(`{${x2+", "+y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2+", "+y2}} to {0, 0} is invalid`);
    }
    if (isValid3) {
        console.log(`{${x1+", "+y1}} to {${x2+", "+y2}} is valid`);
    } else {
        console.log(`{${x1+", "+y1}} to {${x2+", "+y2}} is invalid`);
    }
}

function distance(x1, y1, x2, y2) {
    let result = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    return result;
}

function check(num) {
    let numAsStr = String(num);
    if (numAsStr.includes(".")) {
        return false;
    } else {
        return true;
    }
}
pointsValidator([3, 0, 0, 4]);