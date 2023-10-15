function wallBuilding(inputArray) {
    let array = inputArray.sort((a, b) => a - b);
    let cubics = 0;
    let pesos = 0;
    let cubicArray = [];
    while (array[0] != 30) {
        let foots = 0;
        for (let n of array) {
            if (n < 30) {
                foots++;
            }
        }
        cubics = 195 * foots;
        cubicArray.push(cubics);
        pesos += cubics * 1900;
        let incrementation = array.map(el => el + 1);
        array = incrementation;
    }
    console.log(cubicArray.join(", "));
    console.log(`${pesos} pesos`);
}
wallBuilding([21, 25, 28]);