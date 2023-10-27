function printTown(towns) {
    for (let town of towns) {
        let curTown = town.split(" | ");
        let name = curTown[0];
        let latitude = Number(curTown[1]);
        let longitude = Number(curTown[2]);
        let fixedLatitude = latitude.toFixed(2);
        let fixedLongtitude = longitude.toFixed(2);
        let objectTown = {
            town: name,
            latitude: fixedLatitude,
            longitude: fixedLongtitude
        }
        console.log(objectTown);
    }
}
printTown(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);