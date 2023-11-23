function destinations(str) {
    let destinationPattern = /([=\/])(?<destinations>[A-Z][A-Za-z]{2,})\1/g;
    let stops = str.match(destinationPattern);
    if (stops != null) {
        let destinations = stops.map(el => el.slice(1, el.length - 1));
        let points = 0;
        for (let destination of destinations) {
            points += destination.length;
        }
        console.log(`Destinations: ${destinations.join(", ")}`);
        console.log(`Travel Points: ${points}`);
    } else {
        console.log(`Destinations: `);
        console.log(`Travel Points: 0`);
    }
}
destinations("=Invalid/invalid==i5valid=/I5valid/=i=");