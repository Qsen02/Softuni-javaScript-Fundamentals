function inventory(inputArray) {
    let inventory = inputArray.shift().split(", ");
    let command = inputArray.shift();
    while (command != "Craft!") {
        let token = command.split(" - ");
        let action = token.shift();
        let item = token.shift();
        if (action == "Collect") {
            if (!inventory.includes(item)) {
                inventory.push(item);
            } else {
                command = inputArray.shift();
                continue;
            }
        } else if (action == "Drop") {
            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                inventory.splice(index, 1);
            } else {
                command = inputArray.shift();
                continue;
            }
        } else if (action == "Combine Items") {
            let items = item.split(":");
            let oldItem = items.shift();
            let newItem = items.shift();
            if (inventory.includes(oldItem)) {
                inventory.splice(inventory.indexOf(oldItem) + 1, 0, newItem);
            } else {
                command = inputArray.shift();
                continue;
            }
        } else if (action == "Renew") {
            if (inventory.includes(item)) {
                let renewIem = inventory.splice(inventory.indexOf(item), 1);
                inventory.push(renewIem);
            } else {
                command = inputArray.shift();
                continue;
            }
        }
        command = inputArray.shift();
    }
    console.log(inventory.join(", "));
}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]);