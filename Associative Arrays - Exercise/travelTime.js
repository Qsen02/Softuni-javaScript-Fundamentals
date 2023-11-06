function travelTime(inputArray) {
    let destinations = {};
    for (let destination of inputArray) {
        let token = destination.split(" > ");
        let country = token[0];
        let town = token[1];
        let cost = Number(token[2]);
        let towns = {};
        if (!(country in destinations)) {
            towns[town] = cost;
            destinations[country] = [towns];
        } else {
            for (let curTowns of destinations[country]) {
                if (town in curTowns) {
                    if (cost <= Number(curTowns[town])) {
                        towns[town] = cost;
                        destinations[country].shift();
                        destinations[country].push(towns);
                        break;
                    }
                }
                if (!(town in curTowns)) {
                    towns[town] = cost
                    destinations[country].push(towns);
                    break;
                }
                break;
            }
        }
    }
    let sortedArray = Object.entries(destinations).sort((a, b) => a[0].localeCompare(b[0]));
    let sortedObject = Object.fromEntries(sortedArray);
    for (let key in sortedObject) {
        sortedObject[key].sort(lowestTravelCost);
    }

    function lowestTravelCost(a, b) {
        let valueA = Object.values(a)[0];
        let valueB = Object.values(b)[0];
        return valueA - valueB;
    }
    for (let countries in sortedObject) {
        let line = `${countries} ->`;
        for (let curTown of sortedObject[countries]) {
            for (let town in curTown) {
                line += ` ${town} -> ${curTown[town]}`;
            }
        }
        console.log(line);
    }
}
travelTime([
    "Bulgaria > Sofia > 25000",
    "aaa > Sofia > 1",
    "aa > Orgrimar > 0",
    "Albania > Tirana > 25000",
    "zz > Aarna > 25010",
    "Bulgaria > Lukovit > 10"
]);