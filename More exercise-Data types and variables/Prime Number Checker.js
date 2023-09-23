function primeNumber(num) {
    let isPrime = true;
    if (num == 0 || num == 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
            }
        }
    }
    console.log(isPrime);
}
primeNumber(10);