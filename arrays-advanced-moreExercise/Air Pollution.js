function airPollution(map, commands) {
    let modifiedMap = map.map(arr => arr.split(" ").map(Number));
    for (let command of commands) {
        let token = command.split(" ");
        let action = token[0];
        if (action == "breeze") {
            let row = Number(token[1]);
            let newRow = modifiedMap[row].map(el => el - 15);
            modifiedMap.splice(row, 1, newRow);
            for (let i = 0; i < modifiedMap[row].length; i++) {
                if (modifiedMap[row][i] < 0) {
                    modifiedMap[row][i] = 0;
                }
            }
        } else if (action == "gale") {
            let col = Number(token[1]);
            for (let arr of modifiedMap) {
                arr[col] -= 20;
            }
            for (let i = 0; i < modifiedMap; i++) {
                for (let j = 0; j < modifiedMap[i]; j++) {
                    if (modifiedMap[i][j] < 0) {
                        modifiedMap[i][j] = 0;
                    }
                }
            }
        } else {
            let value = Number(token[1]);
            for (let i = 0; i < modifiedMap.length; i++) {
                let newArr = modifiedMap[i].map(el => el + value);
                modifiedMap.splice(i, 1, newArr);
            }
        }
    }
    let result = `Polluted areas: `;
    let count = 0;
    for (let i = 0; i < modifiedMap.length; i++) {
        for (let j = 0; j < modifiedMap[i].length; j++) {
            let area = modifiedMap[i][j];
            if (area >= 50) {
                count++;
                if (count == 1) {
                    result += `[${i}-${j}]`;
                } else {
                    result += `, [${i}-${j}]`;
                }
            }
        }
    }
    if (count == 0) {
        result = "No polluted areas";
    }
    console.log(result);
}
airPollution(['5 7 72 14 4',
    '1 1 1 1 1',
    '23 16 27 42 12',
    '2 20 28 39 14',
    '16 34 31 10 24'
], ['breeze 1', 'gale 2', 'smog 25']);