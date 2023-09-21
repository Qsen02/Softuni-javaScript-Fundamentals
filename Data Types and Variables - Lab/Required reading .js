function reading(pages, pagesPerHour, requiredDays) {
    let totalTime = pages / pagesPerHour;
    let requiredTime = totalTime / requiredDays;
    console.log(requiredTime);
}
reading(212,
    20,
    2);