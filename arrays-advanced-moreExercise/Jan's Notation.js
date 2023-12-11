function janNotation(inputArray) {
    let operands = 0;
    let operators = 0;
    for (let el of inputArray) {
        if (/\d+/.test(el)) {
            operands++;
        } else {
            operators++;
        }
    }
    if (operands < 2 || operands == operators) {
        console.log("Error: not enough operands!");
    } else if (operands - operators > 1) {
        console.log("Error: too many operands!");
    } else {
        while (inputArray.length != 1) {
            for (let i = inputArray.length - 1; i >= 0; i--) {
                let curEl = inputArray[i];
                let nextEl = inputArray[i + 1];
                if ((curEl == "+" || nextEl == "+") || (curEl == "-" || nextEl == "-") || (curEl == "*" || nextEl == "*") || (curEl == "/" || nextEl == "/")) {
                    continue;
                }
                let count = 0;
                for (let j = 0; j < inputArray.length; j++) {
                    let el = inputArray[j];
                    if (el == "+") {
                        count++;
                        if (count > 1) {
                            break;
                        }
                        let result = curEl + nextEl;
                        inputArray.splice(i, 2, result);
                        inputArray.splice(j - 1, 1);
                    } else if (el == "-") {
                        count++;
                        if (count > 1) {
                            break;
                        }
                        let result = curEl - nextEl;
                        inputArray.splice(i, 2, result);
                        inputArray.splice(j - 1, 1);
                    } else if (el == "*") {
                        count++;
                        if (count > 1) {
                            break;
                        }
                        let result = curEl * nextEl;
                        inputArray.splice(i, 2, result);
                        inputArray.splice(j - 1, 1);
                    } else if (el == "/") {
                        count++;
                        if (count > 1) {
                            break;
                        }
                        let result = curEl / nextEl;
                        inputArray.splice(i, 2, result);
                        inputArray.splice(j - 1, 1);
                    }
                }
            }
        }
        console.log(inputArray.join(" "));
    }
}
janNotation([5, 10, 15, "*", "-"]);