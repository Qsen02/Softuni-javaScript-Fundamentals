function diagonalAttack(inputArray) {
    let matrix = inputArray.map(el => el.split(" ").map(Number));
    let sumFirsDiagonal = 0;
    let sumSecondDiagonal = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix.length; j++) {
            let curNum = matrix[i][j];
            if (i == j) {
                sumFirsDiagonal += curNum;
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = (matrix.length - 1) - i; j >= 0; j--) {
            let curNum = matrix[i][j];
            if (j == (matrix.length - 1) - i) {
                sumSecondDiagonal += curNum;
            }
        }
    }
    if (sumFirsDiagonal == sumSecondDiagonal) {
        for (let i = 0; i < matrix.length; i++) {
            let line = " ";
            for (let j = 0; j < matrix.length; j++) {
                let curNum = matrix[i][j];
                if ((j == (matrix.length - 1) - i) || i == j) {
                    line += `${curNum} `;
                } else {
                    curNum = sumFirsDiagonal;
                    line += `${curNum} `;
                }
            }
            console.log(line);
        }
    } else {
        for (let i = 0; i < matrix.length; i++) {
            let curLine = matrix[i].join(" ");
            console.log(curLine);
        }
    }
}
diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0'
]);