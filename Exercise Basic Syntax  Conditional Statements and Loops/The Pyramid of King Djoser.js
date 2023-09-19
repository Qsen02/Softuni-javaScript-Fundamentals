function pyramid(width, length) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let totalHight = 0;
    let stepArea = 0;
    let stepLength = 0;
    let stepWidth = 0;
    for (let i = width; i >= 3; i -= 2) {
        totalHight++;
        stepArea = i * i;
        stepLength = i;
        stepWidth = i - 2;
        if (totalHight % 5 == 0) {
            lapisLazuli += ((stepLength + stepWidth) * 2) * length;
        } else {
            marble += ((stepLength + stepWidth) * 2) * length;
        }
        stone += (stepArea - ((stepLength + stepWidth) * 2)) * length;
    }
    if (width % 2 == 0) {
        gold = 4 * length;
    } else {
        gold = 1 * length;
    }
    totalHight++;
    totalHight *= length;
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(totalHight)}`);
}
pyramid(21, 1);