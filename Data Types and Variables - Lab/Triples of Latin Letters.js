function latinLetters(n) {
    let nAsNum = Number(n);
    for (let i = 1; i <= nAsNum; i++) {
        let letterFromI = String.fromCharCode(96 + i);
        for (let j = 1; j <= nAsNum; j++) {
            let letterFromJ = String.fromCharCode(96 + j);
            for (let k = 1; k <= nAsNum; k++) {
                let letterFromK = String.fromCharCode(96 + k);
                console.log(`${letterFromI}${letterFromJ}${letterFromK}`);
            }
        }
    }
}
latinLetters("3");