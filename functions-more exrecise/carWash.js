function carWashing(inputArray) {
    let value = 0;
    for (let i = 0; i < inputArray.length; i++) {
        let curElement = inputArray[i];
        switch (curElement) {
            case "soap":
                value += 10;
                break;
            case "mud":
                value -= value * 0.10;
                break;
            case "water":
                value += value * 0.20;
                break;
            case "vacuum cleaner":
                value += value * 0.25;
                break;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`);
}
carWashing(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);