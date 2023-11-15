function serializeString(inputArray) {
    let str = inputArray.shift();
    let stringList = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (!(char in stringList)) {
            stringList[char] = [i];
        } else {
            stringList[char].push(i);
        }
    }
    for (let string in stringList) {
        console.log(`${string}:${stringList[string].join("/")}`);
    }
}
serializeString(["avjavamsdmcalsdm"]);