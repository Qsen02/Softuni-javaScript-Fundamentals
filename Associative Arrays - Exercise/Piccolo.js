function parking(inputArray) {
    let cars = [];
    for (let id of inputArray) {
        let token = id.split(", ");
        let isInParking = token[0];
        let carId = token[1];
        if (isInParking == "IN") {
            if (!cars.includes(carId)) {
                cars.push(carId);
            } else {
                continue;
            }
        } else if (isInParking == "OUT") {
            if (cars.includes(carId)) {
                let index = cars.indexOf(carId);
                cars.splice(index, 1);
            }
        }
    }
    let sortedArray = cars.sort((a, b) => a.localeCompare(b));
    if (sortedArray.length == 0) {
        console.log("Parking Lot is Empty");
    } else {
        console.log(sortedArray.join("\n"));
    }
}
parking(['IN, BA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, BA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);