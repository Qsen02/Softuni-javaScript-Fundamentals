function heroesOfCodeAndLogic(inputArray) {
    let heroCount = inputArray.shift();
    let heroes = {};
    for (let i = 0; i < heroCount; i++) {
        let token = inputArray[i];
        let [heroName, hp, mp] = token.split(" ");
        hp = Number(hp);
        mp = Number(mp);
        heroes[heroName] = {
            ["hp"]: hp,
            ["mp"]: mp
        };
    }
    let command = inputArray.shift();
    while (command != "End") {
        let token = command.split(" - ");
        let action = token[0];
        if (action == "CastSpell") {
            let heroName = token[1];
            let mpNeeded = Number(token[2]);
            let spellName = token[3];
            if (heroes[heroName]["mp"] >= mpNeeded) {
                heroes[heroName]["mp"] -= mpNeeded;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName]["mp"]} MP!`);
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
            }
        } else if (action == "TakeDamage") {
            let heroName = token[1];
            let damage = Number(token[2]);
            let attacker = token[3];
            heroes[heroName]["hp"] -= damage;
            if (heroes[heroName]["hp"] > 0) {
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName]["hp"]} HP left!`);
            } else {
                delete heroes[heroName];
                console.log(`${heroName} has been killed by ${attacker}!`)
            }
        } else if (action == "Recharge") {
            let heroName = token[1];
            let amount = Number(token[2]);
            if (heroes[heroName]["mp"] + amount > 200) {
                amount = 200 - heroes[heroName]["mp"];
                heroes[heroName]["mp"] += amount;
                console.log(`${heroName} recharged for ${amount} MP!`);
            } else {
                heroes[heroName]["mp"] += amount;
                console.log(`${heroName} recharged for ${amount} MP!`);
            }
        } else if (action == "Heal") {
            let heroName = token[1];
            let amount = Number(token[2]);
            if (heroes[heroName]["hp"] + amount > 100) {
                amount = 100 - heroes[heroName]["hp"];
                heroes[heroName]["hp"] += amount;
                console.log(`${heroName} healed for ${amount} HP!`);
            } else {
                heroes[heroName]["hp"] += amount;
                console.log(`${heroName} healed for ${amount} HP!`);
            }
        }
        command = inputArray.shift();
    }
    for (let hero in heroes) {
        console.log(`${hero}`);
        console.log(`HP: ${heroes[hero]["hp"]}`);
        console.log(`MP: ${heroes[hero]["mp"]}`);
    }
}
heroesOfCodeAndLogic([
    "4",
    "Adela 90 150",
    "SirMullich 70 40",
    "Ivor 1 111",
    "Tyris 94 61",
    "Heal - SirMullich - 50",
    "Recharge - Adela - 100",
    "CastSpell - Tyris - 1000 - Fireball",
    "TakeDamage - Tyris - 99 - Fireball",
    "TakeDamage - Ivor - 3 - Mosquito",
    "End"
]);