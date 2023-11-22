function worldTour(inputArray) {
    let stops = inputArray.shift();
    let command = inputArray.shift();
    let modifiedStops = " ";
    while (command != "Travel") {
        let token = command.split(":");
        let action = token.shift();
        if (action.includes("Add")) {
            let index = Number(token[0]);
            let destination = token[1];
            let char = stops.charAt(index);
            if (char != " ") {
                let arr = stops.split("");
                arr.splice(index, 0, destination);
                modifiedStops = arr.join("");
                console.log(modifiedStops);
            }
        } else if (action.includes("Remove")) {
            let startIndex = Number(token[0]);
            let endIndex = Number(token[1]);
            let char1 = stops.charAt(startIndex);
            let char2 = stops.charAt(endIndex);
            if ((char1 && char2) != " ") {
                modifiedStops = stops.slice(0, startIndex) + stops.slice(endIndex + 1);
                console.log(modifiedStops);
            }
        } else if (action.includes("Switch")) {
            let oldStr = token[0];
            let newStr = token[1].trim();
            modifiedStops = stops;
            while (modifiedStops.includes(oldStr)) {
                modifiedStops = modifiedStops.replace(oldStr, newStr);
            }
            console.log(modifiedStops);
        }
        stops = modifiedStops;
        command = inputArray.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"
]);