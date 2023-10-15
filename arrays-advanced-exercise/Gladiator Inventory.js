function inventory(inputArray) {
    let inventoryNow = inputArray[0].split(" ");
    for (let i = 1; i < inputArray.length; i++) {
        let command = inputArray[i];
        let tokens = command.split(" ");
        let action = tokens[0];
        let item = tokens[1];
        if (action == "Buy") {
            if (!inventoryNow.includes(item)) {
                inventoryNow.push(item);
            }
        } else if (action == "Trash") {
            if (inventoryNow.includes(item)) {
                for (let j = 0; j < inventoryNow.length; j++) {
                    let curItem = inventoryNow[j];
                    if (curItem == item) {
                        inventoryNow.splice(j, 1);
                    }
                }
            }
        } else if (action == "Repair") {
            if (inventoryNow.includes(item)) {
                let index = inventoryNow.indexOf(item);
                inventoryNow.push(item);
                inventoryNow.splice(index, 1);
            }
        } else if (action == "Upgrade") {
            let uprgade = item.split("-");
            let uprgadedItem = uprgade[0];
            let ingredient = uprgade[1];
            if (inventoryNow.includes(uprgadedItem)) {
                let index = inventoryNow.indexOf(uprgadedItem);
                let upgration = `${uprgadedItem}:${ingredient}`;
                inventoryNow.splice(index + 1, 0, upgration);
            }
        }
    }
    console.log(inventoryNow.join(" "));
}
inventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel'])