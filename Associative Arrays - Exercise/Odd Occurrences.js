function oddOccurrences(str) {
    let strAsArr = str.split(" ");
    let result = []
    for (let curStr of strAsArr) {
        let count = 0
        let newStr = curStr.toLowerCase();
        for (let str of strAsArr) {
            let newCurStr = str.toLowerCase();
            if (newStr == newCurStr) {
                count++;
            }
        }
        if (count % 2 != 0) {
            if (!result.includes(newStr)) {
                result.push(newStr);
            }
        }
    }
    console.log(result.join(" "));
}
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');