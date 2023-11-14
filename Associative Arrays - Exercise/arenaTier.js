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
            if (name in gladiators) {
                if (skillName in gladiators[name]) {
                    if (skillPower > gladiators[name][skillName]) {
                        gladiatorsPower[name] += skillPower - gladiators[name][skillName];
                        gladiators[name][skillName] = skillPower;
                    }
                } else {
                    gladiators[name][skillName] = skillPower;
                    gladiatorsPower[name] += skillPower;
                }
            } else {
                gladiators[name] = {
                    [skillName]: skillPower
                };
                gladiatorsPower[name] = skillPower;
            }
        } else if (command.includes("vs")) {
            let token = command.split(" vs ");
            let gladiator1 = token[0];
            let gladiator2 = token[1];
            let gladiator1Techniques = [];
            let gladiator2Techniques = [];
            for (let gladiator in gladiators) {
                if (gladiator == gladiator1) {
                    for (let technique in gladiators[gladiator]) {
                        gladiator1Techniques.push(technique);
                    }
                }
            }
            for (let gladiator in gladiators) {
                if (gladiator == gladiator2) {
                    for (let technique in gladiators[gladiator]) {
                        gladiator2Techniques.push(technique);
                    }
                }
            }
            for (let technique of gladiator1Techniques) {
                if (gladiator2Techniques.includes(technique)) {
                    if (gladiators[gladiator1][technique] > gladiators[gladiator2][technique]) {
                        delete gladiators[gladiator2];
                        delete gladiatorsPower[gladiator2];
                    } else {
                        delete gladiators[gladiator1];
                        delete gladiatorsPower[gladiator1];
                    }
                }
            }
        }
        command = inputArray.shift();
    }
    let sortedArray = Object.entries(gladiatorsPower).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    let sortedGladiators = Object.fromEntries(sortedArray);
    for (let gladiator in sortedGladiators) {
        console.log(`${gladiator}: ${sortedGladiators[gladiator]} skill`);
        let sortedArray = Object.entries(gladiators[gladiator]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        let sortedTechniques = Object.fromEntries(sortedArray);
        for (let technique in sortedTechniques) {
            console.log(`- ${technique} <!> ${sortedTechniques[technique]}`);
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