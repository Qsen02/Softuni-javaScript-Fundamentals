function passwordValidator(str) {
    let isValidPasswordLength = checkPasswordLength(str);
    let isOnlyLettersAndDigits = checkLettersAndDigits(str);
    let isThereTwoDigits = checkForTwoDigits(str);
    if (isOnlyLettersAndDigits == true && isValidPasswordLength == true && isThereTwoDigits == true) {
        console.log("Password is valid");
    }
}

function checkPasswordLength(str) {
    if (str.length >= 6 && str.length <= 10) {
        return true;
    } else {
        console.log("Password must be between 6 and 10 characters");
        return false;
    }
}

function checkLettersAndDigits(str) {
    for (let i of str) {
        if (!((i.charCodeAt() >= 48 && i.charCodeAt() <= 57) ||
                (i.charCodeAt() >= 65 && i.charCodeAt() <= 90) ||
                (i.charCodeAt() >= 97 && i.charCodeAt() <= 122))) {
            console.log("Password must consist only of letters and digits");
            return false;
            break;
        }
    }
    return true;
}

function checkForTwoDigits(str) {
    let digitCount = 0;
    for (let i of str) {
        if (i.charCodeAt() >= 48 && i.charCodeAt() <= 57) {
            digitCount++;
        }
    }
    if (digitCount >= 2) {
        return true;
    } else {
        console.log("Password must have at least 2 digits");
        return false;
    }
}
passwordValidator('Pa$s$s');