function pirates(inputArray) {
    let command = inputArray.shift();
    let cities = {};
    while (command != "Sail") {
        let [city, population, gold] = command.split("||");
        population = Number(population);
        gold = Number(gold);
        if (!(city in cities)) {
            cities[city] = {
                ["population"]: population,
                ["gold"]: gold
            };
        } else {
            cities[city]["population"] += population;
            cities[city]["gold"] += gold;
        }
        command = inputArray.shift();
    }
    let newCommand = inputArray.shift();
    while (newCommand != "End") {
        let token = newCommand.split("=>");
        let action = token[0];
        if (action == "Plunder") {
            let city = token[1];
            let people = Number(token[2]);
            let gold = Number(token[3]);
            cities[city]["population"] -= people;
            cities[city]["gold"] -= gold;
            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            if (cities[city]["population"] <= 0 || cities[city]["gold"] <= 0) {
                delete cities[city];
                console.log(`${city} has been wiped off the map!`);
            }
        } else {
            let city = token[1];
            let gold = Number(token[2]);
            if (gold < 0) {
                console.log("Gold added cannot be a negative number!");
                newCommand = inputArray.shift();
                continue;
            } else {
                cities[city]["gold"] += gold;
                console.log(`${gold} gold added to the city treasury. ${city} now has ${cities[city]["gold"]} gold.`);
            }
        }
        newCommand = inputArray.shift();
    }
    if (Object.keys(cities).length > 0) {
        console.log(`Ahoy, Captain! There are ${Object.keys(cities).length} wealthy settlements to go to:`);
        for (let city in cities) {
            console.log(`${city} -> Population: ${cities[city]["population"]} citizens, Gold: ${cities[city]["gold"]} kg`);
        }
    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}
pirates(["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"
]);