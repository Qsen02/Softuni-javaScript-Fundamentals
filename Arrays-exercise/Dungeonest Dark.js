function dungeon(inputArray) {
    let health = 100;
    let coins = 0;
    let roomsInfo = inputArray[0];
    let rooms = roomsInfo.split("|");
    let bestRoom = 1;
    for (let room of rooms) {
        let curRoom = room.split(" ");
        let name = curRoom[0];
        let value = Number(curRoom[1]);
        if (name == "potion") {
            let healthHP = 0;
            if ((health + value) <= 100) {
                healthHP = value;
            } else {
                healthHP = 100 - health;
            }
            health += healthHP;
            console.log(`You healed for ${healthHP} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (name == "chest") {
            coins += value;
            console.log(`You found ${value} coins.`);
        } else {
            health -= value;
            if (health > 0) {
                console.log(`You slayed ${name}.`);
            } else {
                console.log(`You died! Killed by ${name}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }
        }
        bestRoom++;
    }
    if (health > 0) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);