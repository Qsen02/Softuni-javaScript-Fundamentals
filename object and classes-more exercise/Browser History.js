function browserHistory(inputObject, inputArray) {
    for (let command of inputArray) {
        if (command.includes("Open") || command.includes("Close")) {
            let token = command.split(" ");
            let action = token[0];
            if (action == "Open") {
                let tab = token[1];
                inputObject["Open Tabs"].push(tab);
                inputObject["Browser Logs"].push(`${action} ${tab}`);
            } else if (action == "Close") {
                let tab = token[1];
                if (inputObject["Open Tabs"].includes(tab)) {
                    let index = inputObject["Open Tabs"].indexOf(tab);
                    inputObject["Open Tabs"].splice(index, 1);
                    inputObject["Recently Closed"].push(tab);
                    inputObject["Browser Logs"].push(`${action} ${tab}`);
                } else {
                    continue;
                }
            }
        } else if (command == "Clear History and Cache") {
            for (let key in inputObject) {
                if (key == "Browser Name") {
                    continue;
                } else {
                    while (inputObject[key].length != 0) {
                        inputObject[key].shift();
                    }
                }
            }
        }
    }
    console.log(inputObject["Browser Name"]);
    console.log(`Open Tabs: ${inputObject["Open Tabs"].join(", ")}`);
    console.log(`Recently Closed: ${inputObject["Recently Closed"].join(", ")}`);
    console.log(`Browser Logs: ${inputObject["Browser Logs"].join(", ")}`);
}
browserHistory({
    "Browser Name": "Mozilla Firefox",
    "Open Tabs": ["YouTube"],
    "Recently Closed": ["Gmail", "Dropbox"],
    "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]
}, ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]);