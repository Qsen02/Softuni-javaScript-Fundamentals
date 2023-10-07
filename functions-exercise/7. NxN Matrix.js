function matrix(n) {
    for (let i = 1; i <= n; i++) {
        let nAsString = String(n) + " ";
        console.log(`${nAsString.repeat(n)}`);
    }
}
matrix(10);