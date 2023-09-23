function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let damagedHelmetCount = 0;
    let damagedSwordCount = 0;
    let damagedShieldCount = 0;
    let damagedArmorCount = 0;
    if (lostFights >= 2) {
        damagedHelmetCount = Math.floor(lostFights / 2);
    }
    if (lostFights >= 3) {
        damagedSwordCount = Math.floor(lostFights / 3);
    }
    if (lostFights >= 6) {
        damagedShieldCount = Math.floor(lostFights / 6);
    }
    if (lostFights >= 12) {
        damagedArmorCount = Math.floor(lostFights / 12);
    }
    let allHelmetPrice = helmetPrice * damagedHelmetCount;
    let allSwordPrice = swordPrice * damagedSwordCount;
    let allShieldPrice = shieldPrice * damagedShieldCount;
    let allArmorPrice = armorPrice * damagedArmorCount;
    let result = allHelmetPrice + allSwordPrice + allShieldPrice + allArmorPrice;
    console.log(`Gladiator expenses: ${result.toFixed(2)} aureus`);
}
gladiator(24,
    12.50,
    21.50,
    40,
    200
);