function palindrome(inputArray) {
    for (let n of inputArray) {
        let isPalindrome = palindromeCheker(n);
        console.log(isPalindrome);
    }
}

function palindromeCheker(num) {
    let numAsStr = String(num);
    let reversedStr = " ";
    for (let i = numAsStr.length - 1; i >= 0; i--) {
        let curDigit = numAsStr[i];
        reversedStr += curDigit;
    }
    reversedStr = Number(reversedStr);
    if (num == reversedStr) {
        return true;
    } else {
        return false;
    }
}
palindrome([123, 323, 421, 121]);