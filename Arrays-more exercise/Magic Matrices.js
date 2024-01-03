function magicMatrix(matrix) {
    let magicNum = 0;
    let isMagic = true;
    for (let i = 0; i < matrix.length; i++) {
        let arr = matrix[i];
        let sum = arr.reduce((acc, val) => acc + val);
        if (i == 0) {
            magicNum = sum;
        } else {
            if (magicNum != sum) {
                isMagic = false;
                console.log(isMagic);
                return;
            }
        }
    }
    for (let i = 0; i < matrix.length; i++) {
        let sumCol = 0;
        for (let j = 0; j < matrix.length; j++) {
            let num = matrix[j][i];
            sumCol += num;
        }
        if (sumCol != magicNum) {
            isMagic = false;
            console.log(isMagic);
            return;
        }
    }
    console.log(isMagic);
}
magicMatrix([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
])