function addAndRemove(inputArray) {
    let newArr = [];
    let element = 0;
    for (let i = 0; i < inputArray.length; i++) {
        element++;
        let command = inputArray[i];
        if (command == "add") {
            newArr.push(element);
        } else {
            newArr.pop(element - 1);
        }
    }
    if (newArr.length == 0) {
        console.log("Empty");
    } else {
        console.log(newArr.join(" "));
    }
}
addAndRemove(['add', 'add', 'remove', 'add', 'add']);