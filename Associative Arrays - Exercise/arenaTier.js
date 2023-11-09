function arenaTier(inputArray) {
    let gladiatorsPower = {};
    let gladiators = {};
    let command = inputArray.shift();
    while (command != 'Ave Cesar') {
        if (command.includes("->")) {
            let token = command.split(" -> ");
            let name = token[0];
            let skillName = token[1];
            let skillPower = Number(token[2]);
            let skill = {};
            if (!(name in gladiators)) {
                skill[skillName] = skillPower;
                gladiators[name] = [skill];
                gladiatorsPower[name] = skillPower;
            } else {
                for (let gladiator of gladiators[name]) {
                    if (skillName in gladiator) {
                        if (skillPower >= Number(gladiator[skillName])) {
                            skill[skillName] = skillPower;
                            let index = gladiators[name].indexOf(gladiator);
                            gladiators[name].splice(index, 1);
                            gladiators[name].push(skill);
                            break;
                        }
                    }
                    if (!(skill in gladiator)) {
                        skill[skillName] = skillPower;
                        gladiators[name].push(skill);
                        gladiatorsPower[name] += skillPower;
                        break;
                    }
                    break;
                }
            }
        } else if (command.includes("vs")) {
            let token = command.split(" vs ");
            let gladiator1 = token[0];
            let gladiator2 = token[1];
            if ((gladiator1 in gladiators) && (gladiator2 in gladiators)) {
                let gladiator1Skills = {};
                let gladiator2Skills = {};
                for (let skill of gladiators[gladiator1]) {
                    for (let key in skill) {
                        gladiator1Skills[key] = skill[key];
                    }
                }
                for (let skill of gladiators[gladiator2]) {
                    for (let key in skill) {
                        gladiator2Skills[key] = skill[key];
                    }
                }
                for (let key in gladiator1Skills) {
                    if (key in gladiator2Skills) {
                        if (gladiator1Skills[key] > gladiator2Skills[key]) {
                            delete gladiators[gladiator2];
                            delete gladiatorsPower[gladiator2];
                        } else {
                            delete gladiators[gladiator1];
                            delete gladiatorsPower[gladiator1];
                        }
                    }
                }
            }
        }
        command = inputArray.shift();
    }
    let sortedGladiatorsPower = Object.entries(gladiatorsPower).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let objectGladiatorsPower = Object.fromEntries(sortedGladiatorsPower);
    for (let key in gladiators) {
        gladiators[key].sort(compareDescendingThenAlphabetical);
    }

    function compareDescendingThenAlphabetical(a, b) {
        let valueA = Object.values(a)[0];
        let valueB = Object.values(b)[0];
        let keyA = Object.keys(a)[0];
        let keyB = Object.keys(b)[0];
        if (valueB !== valueA) {
            return valueB - valueA;
        }
        return keyA.localeCompare(keyB);
    }
    for (let gladiator in objectGladiatorsPower) {
        console.log(`${gladiator}: ${objectGladiatorsPower[gladiator]} skill`);
        for (let key in gladiators) {
            if (gladiator == key) {
                for (let skill of gladiators[key]) {
                    for (let technique in skill) {
                        console.log(`- ${technique} <!> ${skill[technique]}`);
                    }
                }
            }
        }
    }
}
arenaTier([
    'Peter -> Duck -> 400',
    'Peter -> Duck -> 500',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);