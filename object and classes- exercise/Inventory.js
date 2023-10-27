function inventory(heroeList) {
    let heroes = []
    for (let hero of heroeList) {
        let token = hero.split(" / ");
        let heroName = token[0];
        let level = Number(token[1]);
        let items = token[2].split(",");
        let heroInfo = {
            hero: heroName,
            level: level,
            items: items
        }
        heroes.push(heroInfo);
    }
    let sortedHeroes = heroes.sort((a, b) => a.level - b.level);
    for (let hero of sortedHeroes) {
        console.log(`Hero: ${hero.hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(",")}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);