function needForSpeed(inputArray) {
    let carCount = inputArray.shift();
    let cars = {};
    for (let i = 0; i < carCount; i++) {
        let command = inputArray[i];
        let token = command.split("|");
        let carName = token[0];
        let mileage = Number(token[1]);
        let fuel = Number(token[2]);
        cars[carName] = {
            ["mileage"]: mileage,
            ["fuel"]: fuel
        };
    }
    let index = carCount;
    let command = inputArray[index];
    while (command != "Stop") {
        let token = command.split(" : ");
        let action = token[0];
        if (action == "Drive") {
            let carName = token[1];
            let mileageToGo = Number(token[2]);
            let needFuel = Number(token[3]);
            if (cars[carName]["fuel"] >= needFuel) {
                cars[carName]["fuel"] -= needFuel;
                cars[carName]["mileage"] += mileageToGo;
                console.log(`${carName} driven for ${mileageToGo} kilometers. ${needFuel} liters of fuel consumed.`)
                if (cars[carName]["mileage"] >= 100000) {
                    delete cars[carName];
                    console.log(`Time to sell the ${carName}!`);
                }
            } else {
                console.log("Not enough fuel to make that ride");
            }
        } else if (action == "Revert") {
            let carName = token[1];
            let kilometers = Number(token[2]);
            cars[carName]["mileage"] -= kilometers;
            if (cars[carName]["mileage"] < 10000) {
                cars[carName]["mileage"] = 10000;
            } else {
                console.log(`${carName} mileage decreased by ${kilometers} kilometers`);
            }
        } else if (action == "Refuel") {
            let carName = token[1];
            let refuel = Number(token[2]);
            if (cars[carName]["fuel"] + refuel > 75) {
                refuel = 75 - cars[carName]["fuel"];
                cars[carName]["fuel"] += refuel;
                console.log(`${carName} refueled with ${refuel} liters`);
            } else {
                cars[carName]["fuel"] += refuel;
                console.log(`${carName} refueled with ${refuel} liters`);
            }
        }
        index++;
        command = inputArray[index];
    }
    for (let car in cars) {
        console.log(`${car} -> Mileage: ${cars[car]["mileage"]} kms, Fuel in the tank: ${cars[car]["fuel"]} lt.`);
    }
}
needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);