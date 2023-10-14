function bomb(inputArray, power) {
    let sum = 0;
    let bomb = power[0];
    let powerOfBomb = power[1];
    while (inputArray.includes(bomb)) {
        let index = inputArray.indexOf(bomb);
        inputArray.splice(Math.max(0, index - powerOfBomb), powerOfBomb * 2 + 1);
    }
    for (let n of inputArray) {
        sum += n;
    }
    console.log(sum);
}
bomb([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);