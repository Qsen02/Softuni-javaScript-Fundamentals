function cooking(inputArray) {
    let budget = Number(inputArray[0]);
    let students = Number(inputArray[1]);
    let flourPackagePrice = Number(inputArray[2]);
    let singleEggPrice = Number(inputArray[3]);
    let singleApronPrice = Number(inputArray[4]);
    let apronPrice = singleApronPrice * (students + Math.ceil(students * 0.20));
    let eggPrice = singleEggPrice * 10 * students;
    let freePackegase = 0;
    for (let i = 1; i <= students; i++) {
        if (i % 5 == 0) {
            freePackegase++;
        }
    }
    let flourPrice = flourPackagePrice * (students - freePackegase);
    let totalPrice = apronPrice + eggPrice + flourPrice;
    if (budget >= totalPrice) {
        console.log(`Items purchased for ${totalPrice.toFixed(2)}$.`);
    } else {
        console.log(`${(totalPrice-budget).toFixed(2)}$ more needed.`);
    }
}
cooking(["946", "20", "12.05", "0.42", "27.89"]);