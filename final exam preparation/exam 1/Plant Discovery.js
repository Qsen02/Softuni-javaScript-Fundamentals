function plantDiscovery(inputArray) {
    let plantCount = Number(inputArray.shift());
    let plants = {};
    let plantsRateCount = {};
    for (let i = 0; i < plantCount; i++) {
        let command = inputArray[i];
        let [plantName, rarity] = command.split("<->");
        plants[plantName] = {
            ["rarity"]: rarity
        };
        if (plantName in plants) {
            plantsRateCount[plantName] = {
                ["rateCount"]: 0
            };
        }
    }
    let index = plantCount;
    let command = inputArray[index];
    while (command != "Exhibition") {
        let token = command.split(": ");
        let action = token.shift();
        if (action == "Rate") {
            let newCommand = token[0].split(" - ");
            let plantName = newCommand[0];
            let rating = Number(newCommand[1]);
            if (plantName in plants) {
                if ("rating" in plants[plantName]) {
                    plants[plantName]["rating"] += rating;
                    plantsRateCount[plantName]["rateCount"] += 1;
                } else {
                    plants[plantName]["rating"] = rating;
                    plantsRateCount[plantName]["rateCount"] += 1;
                }
            } else {
                console.log("error");
            }
        } else if (action == "Update") {
            let [plantName, rarity] = token[0].split(" - ");
            if (plantName in plants) {
                plants[plantName]["rarity"] = rarity;
            } else {
                console.log("error");
            }
        } else if (action == "Reset") {
            let plantName = token[0];
            if (plantName in plants) {
                plants[plantName]["rating"] = 0;
                plantsRateCount[plantName]["rateCount"] = 0;
            } else {
                console.log("error");
            }
        }
        index++;
        command = inputArray[index];
    }
    console.log("Plants for the exhibition:");
    for (let plantNames in plants) {
        let avgRate = 0;
        if (plants[plantNames]["rating"] != 0 && "rating" in plants[plantNames]) {
            avgRate = plants[plantNames]["rating"] / plantsRateCount[plantNames]["rateCount"];
            console.log(`- ${plantNames}; Rarity: ${plants[plantNames]["rarity"]}; Rating: ${avgRate.toFixed(2)}`);
        } else if (!("rating" in plants[plantNames])) {
            console.log(`- ${plantNames}; Rarity: ${plants[plantNames]["rarity"]}; Rating: 0.00`);
        } else {
            console.log(`- ${plantNames}; Rarity: ${plants[plantNames]["rarity"]}; Rating: ${avgRate.toFixed(2)}`);
        }
    }
}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]);