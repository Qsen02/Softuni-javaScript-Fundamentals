function equalNeighbors(matrixArray) {
    let equalsCount = 0;
    for (let i = 0; i < matrixArray.length; i++) {
        let curArr = matrixArray[i];
        for (let j = 0; j < curArr.length; j++) {
            let curEl = curArr[j];
            let nextEl = curArr[j + 1];
            if (nextEl == undefined) {
                break;
            }
            if (curEl == nextEl) {
                equalsCount++;
            }
        }
    }
    for (let i = 0; i < matrixArray.length; i++) {
        let curArr = matrixArray[i];
        let nextArr = matrixArray[i + 1];
        if (nextArr == undefined) {
            break;
        }
        for (let j = 0; j < curArr.length; j++) {
            let curEl = curArr[j];
            let neighborEl = nextArr[j];
            if (curEl == neighborEl) {
                equalsCount++;
            }
        }
    }
    console.log(equalsCount);
}
equalNeighbors([
    ['test', 'yo', 'yo',
        'ho'
    ],
    ['well', 'done', 'no',
        '6'
    ],
    ['not', 'done', 'yet',
        '5'
    ]
]);