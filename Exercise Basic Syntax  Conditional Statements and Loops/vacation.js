function calculatePrice(peoplesInGroup, groupType, day) {
    let singlePrice = 0;
    switch (day) {
        case "Friday":
            if (groupType === "Students") {
                singlePrice = 8.45;
            } else if (groupType === "Business") {
                singlePrice = 10.90;
            } else if (groupType === "Regular") {
                singlePrice = 15;
            }
            break;
        case "Saturday":
            if (groupType === "Students") {
                singlePrice = 9.80;
            } else if (groupType === "Business") {
                singlePrice = 15.60;
            } else if (groupType === "Regular") {
                singlePrice = 20;
            }
            break;
        case "Sunday":
            if (groupType === "Students") {
                singlePrice = 10.46;
            } else if (groupType === "Business") {
                singlePrice = 16;
            } else if (groupType === "Regular") {
                singlePrice = 22.50;
            }
            break;
    }
    let price = singlePrice * peoplesInGroup;
    if (groupType === "Students" && peoplesInGroup >= 30) {
        price *= 0.85;
    } else if (groupType === "Business" && peoplesInGroup >= 100) {
        price -= 10 * singlePrice;
    } else if (groupType === "Regular" && (peoplesInGroup >= 10 && peoplesInGroup <= 20)) {
        price *= 0.95;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
calculatePrice(30, "Students", "Sunday");