function travelTime(inputArray) {
    let destinations = {};
    for (let destination of inputArray) {
        let token = destination.split(" > ");
        let country = token[0];
        let town = token[1];
        let cost = Number(token[2]);
        if (country in destinations) {
            if (town in destinations[country]) {
                if (cost < destinations[country][town]) {
                    destinations[country][town] = cost;
                }
            } else {
                destinations[country][town] = cost;
            }
        } else {
            destinations[country] = {
                [town]: cost
            };
        }
    }
    let sortedArray = Object.entries(destinations).sort((a, b) => a[0].localeCompare(b[0]));
    let sortedDestinations = Object.fromEntries(sortedArray);
    for (let country in sortedDestinations) {
        let line = `${country} -> `;
        let sortedArray = Object.entries(sortedDestinations[country]).sort((a, b) => a[1] - b[1]);
        let sortedTowns = Object.fromEntries(sortedArray);
        for (let town in sortedTowns) {
            line += `${town} -> ${sortedTowns[town]} `;
        }
        console.log(line);
    }
}
travelTime([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
]);