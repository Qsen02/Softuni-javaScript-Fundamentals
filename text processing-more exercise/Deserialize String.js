function deserializeString(inputArray) {
    let index = 0;
    let command = inputArray[index];
    let result = [];
    while (command != "end") {
        let token = command.split(":");
        let char = token[0];
        let indexes = token[1].split("/");
        for (let index of indexes) {
            result.push(char);
        }
        index++;
        command = inputArray[index];
    }
    index = 0;
    command = inputArray[index];
    while (command != "end") {
        let token = command.split(":");
        let char = token[0];
        let indexes = token[1].split("/");
        for (let index of indexes) {
            result.splice(index, 1, char);
        }
        index++;
        command = inputArray[index];
    }
    console.log(result.join(""));
}
deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'
]);