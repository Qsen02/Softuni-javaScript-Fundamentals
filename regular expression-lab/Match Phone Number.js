function matchPhoneNumbers([inputArray]) {
    let pattern = /\+359([ -])2\1\d{3}\1\d{4}/gm;
    let validPhoneNumbers = inputArray.match(pattern);
    console.log(validPhoneNumbers.join(", "));
}
matchPhoneNumbers(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-2222, +359-2-222-2222']);