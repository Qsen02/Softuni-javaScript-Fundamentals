function netherRealm(input) {
    let healthPattern = /[^0-9+\-*\/.]/g;
    let sumPattern = /\+?-?\d+\.?\d*/g;
    let damagePattern = /[\*\/]/g;
    let demons = {};
    let demonNames = input.split(/[, ]+/);
    for (let demon of demonNames) {
        let health = 0;
        let damage = 0;
        let sum = 0;
        let healthMatch = demon.match(healthPattern);
        if (healthMatch) {
            for (let letter of healthMatch) {
                let code = letter.charCodeAt();
                health += code;
            }
        }
        demons[demon] = {
            ["health"]: health
        };
        let sumMatch = demon.match(sumPattern);
        if (sumMatch) {
            let newSumMatch = sumMatch.map(Number);
            sum = newSumMatch.reduce((acc, val) => acc + val);
        }
        let damageMatch = demon.match(damagePattern);
        if (damageMatch) {
            for (let sign of damageMatch) {
                if (sign == "*") {
                    sum *= 2;
                } else {
                    sum /= 2;
                }
            }
            damage = sum;
        }
        if (damageMatch == null) {
            demons[demon]["damage"] = sum;
        } else {
            demons[demon]["damage"] = damage;
        }
    }
    let sortedArray = Object.entries(demons).sort((a, b) => a[0].localeCompare(b[0]));
    let sortedDemons = Object.fromEntries(sortedArray);
    for (let demon in sortedDemons) {
        console.log(`${demon} - ${sortedDemons[demon]["health"]} health, ${sortedDemons[demon]["damage"].toFixed(2)} damage`);
    }
}
netherRealm("M3ph-0.5s-0.5t0.0**");