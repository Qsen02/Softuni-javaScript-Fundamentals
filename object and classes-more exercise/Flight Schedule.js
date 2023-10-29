function flightShedule(inputArray) {
    let flights = inputArray[0];
    let cancelledFlights = inputArray[1];
    let status = inputArray[2];
    let cancelledIdFlights = [];
    for (let flights of cancelledFlights) {
        let cancelledId = flights.split(" ").shift();
        cancelledIdFlights.push(cancelledId);
    }
    if (status[0] == "Cancelled") {
        for (let flight of flights) {
            let token = flight.split(" ");
            let id = token.shift();
            if (cancelledIdFlights.includes(id)) {
                let destination = token.join(" ");
                let flightObject = {
                    Destination: destination,
                    Status: "Cancelled"
                }
                console.log(flightObject);
            }
        }
    } else {
        for (let flight of flights) {
            let token = flight.split(" ");
            let id = token.shift();
            if (!(cancelledIdFlights.includes(id))) {
                let destination = token.join(" ");
                let flightObject = {
                    Destination: destination,
                    Status: 'Ready to fly'
                }
                console.log(flightObject);
            }
        }
    }
}
flightShedule([
    ['WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama', 'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania'
    ],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK330 Cancelled'
    ],
    ['Ready to fly']
])