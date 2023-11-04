function farming(inputStr) {
    let legendaryMaterials = { shards: 0, fragments: 0, motes: 0 }
    let legendary = { shards: "Shadowmourne", fragments: "Valanyr", motes: "Dragonwrath" };
    let junk = {};
    let array = inputStr.split(" ");
    for (let i = 0; i < array.length; i += 2) {
        let quantity = Number(array[i]);
        let resourse = array[i + 1].toLowerCase();
        if (resourse in legendaryMaterials) {
            legendaryMaterials[resourse] += quantity;
            if (legendaryMaterials[resourse] >= 250) {
                console.log(`${legendary[resourse]} obtained!`);
                legendaryMaterials[resourse] -= 250;
                break;
            }
        } else {
            if (!(resourse in junk)) {
                junk[resourse] = quantity;
            } else {
                junk[resourse] += quantity;
            }
        }
    }
    let legendaryArray = Object.entries(legendaryMaterials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    for (let [resourse, quantity] of legendaryArray) {
        console.log(`${resourse}: ${quantity}`)
    }
    let sortedArray = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [resourse, quantity] of sortedArray) {
        console.log(`${resourse}: ${quantity}`);
    }
}
farming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');