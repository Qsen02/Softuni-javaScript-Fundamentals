function garage(inputArray) {
    let garages = {};
    for (let garage of inputArray) {
        let curGarage = garage.split(" - ");
        let garageKey = curGarage.shift();
        let carInfo = curGarage[0].split(", ");
        let curCar = {};
        for (let car of carInfo) {
            let token = car.split(": ");
            let key = token[0];
            let value = token[1];
            curCar[key] = value;
        }
        if (!(garageKey in garages)) {
            garages[garageKey] = [curCar];
        } else {
            garages[garageKey].push(curCar);
        }
    }
    for (let garage in garages) {
        console.log(`Garage № ${garage}`);
        for (let carInfo of garages[garage]) {
            let line = " ";
            let count = 0;
            for (let key in carInfo) {
                count++;
                if (count < Object.keys(carInfo).length) {
                    line += `${key} - ${carInfo[key]}, `;
                } else if (count == Object.keys(carInfo).length) {
                    line += `${key} - ${carInfo[key]}`;
                }
            }
            console.log(`---${line}`);
        }
    }
}
garage(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi', '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);