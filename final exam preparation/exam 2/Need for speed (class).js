function needForSpeed(inputArray) {
    let carsCount = inputArray.shift();
    let cars = {};
    class Car {
        constructor(mileage, fuel) {
            this.mileage = mileage;
            this.fuel = fuel;
        }
        Drive(carName, distance, needFuel) {
            if (needFuel > cars[carName]["fuel"]) {
                console.log("Not enough fuel to make that ride");
            } else {
                cars[carName]["fuel"] -= needFuel;
                cars[carName]["mileage"] += distance;
                console.log(`${carName} driven for ${distance} kilometers. ${needFuel} liters of fuel consumed.`);
                if (cars[carName]["mileage"] >= 100000) {
                    delete cars[carName];
                    console.log(`Time to sell the ${carName}!`);
                }
            }
        }
        Refuel(carName, refuel) {
            if (cars[carName]["fuel"] + refuel > 75) {
                refuel = 75 - cars[carName]["fuel"];
                cars[carName]["fuel"] += refuel;
                console.log(`${carName} refueled with ${refuel} liters`);
            } else {
                cars[carName]["fuel"] += refuel;
                console.log(`${carName} refueled with ${refuel} liters`);
            }
        }
        Revert(carName, kilometers) {
            cars[carName]["mileage"] -= kilometers;
            if (cars[carName]["mileage"] < 10000) {
                cars[carName]["mileage"] = 10000;
            } else {
                console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
            }
        }
    }
    for (let i = 0; i < carsCount; i++) {
        let curCar = inputArray[i];
        let [carName, mileage, fuel] = curCar.split("|");
        mileage = Number(mileage);
        fuel = Number(fuel);
        let car = new Car(mileage, fuel);
        cars[carName] = car;
    }
    let command = inputArray.shift();
    while (command != "Stop") {
        let token = command.split(" : ");
        let action = token[0];
        if (action == "Drive") {
            let carName = token[1];
            let distance = Number(token[2]);
            let needFuel = Number(token[3]);
            cars[carName].Drive(carName, distance, needFuel);
        } else if (action == "Refuel") {
            let carName = token[1];
            let refuel = Number(token[2]);
            cars[carName].Refuel(carName, refuel);
        } else if (action == "Revert") {
            let carName = token[1];
            let kilometers = Number(token[2]);
            cars[carName].Revert(carName, kilometers);

        }
        command = inputArray.shift();
    }
    for (let car in cars) {
        console.log(`${car} -> Mileage: ${cars[car]["mileage"]} kms, Fuel in the tank: ${cars[car]["fuel"]} lt.`);
    }
}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);