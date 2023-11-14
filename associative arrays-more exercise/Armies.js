function armies(inputArray) {
    let leadersPower = {};
    let leaders = {};
    for (let command of inputArray) {
        if (command.includes("arrives")) {
            let newLeader = command.split(" arrives");
            let name = newLeader[0];
            leaders[name] = {};
            leadersPower[name] = 0;
        } else if (command.includes("defeated")) {
            let leader = command.split(" defeated");
            let name = leader.shift();
            delete leaders[name];
            delete leadersPower[name];
        } else if (command.includes("+")) {
            let army = command.split(" + ");
            let armyType = army[0];
            let count = Number(army[1]);
            for (let leader in leaders) {
                for (let army in leaders[leader]) {
                    if (armyType == army) {
                        leaders[leader][armyType] += count;
                        leadersPower[leader] += count;
                    }
                }
            }
        } else {
            let token = command.split(": ");
            let leaderName = token.shift();
            let army = token[0];
            let armyInfo = army.split(", ");
            let armyType = armyInfo[0];
            let count = Number(armyInfo[1]);
            if (leaderName in leaders) {
                if (armyType in leaders[leaderName]) {
                    leaders[leaderName][armyType] += count;
                    leadersPower[leaderName] += count;
                } else {
                    leaders[leaderName][armyType] = count;
                    leadersPower[leaderName] += count;
                }
            }
        }
    }
    let sortedArray = Object.entries(leadersPower).sort((a, b) => b[1] - a[1]);
    let sortedLeaders = Object.fromEntries(sortedArray);
    for (let leader in sortedLeaders) {
        console.log(`${leader}: ${sortedLeaders[leader]}`);
        let sortedArray = Object.entries(leaders[leader]).sort((a, b) => b[1] - a[1]);
        let sortedArmy = Object.fromEntries(sortedArray);
        for (let armyType in sortedArmy) {
            console.log(`>>> ${armyType} - ${sortedArmy[armyType]}`);
        }
    }
}
armies(['Rick Burr arrives', 'Findlay arrives',
    'Rick Burr: Juard, 1500', 'Wexamp arrives',
    'Findlay: Wexamp, 34540', 'Wexamp + 340',
    'Wexamp: Britox, 1155', 'Wexamp: Juard, 43423'
]);