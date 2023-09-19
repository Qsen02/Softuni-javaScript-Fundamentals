function getNextDay(year, month, day) {
    const currentDate = new Date(year, month - 1, day);
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + 1);

    const nextYear = nextDate.getFullYear();
    const nextMonth = nextDate.getMonth() + 1;
    const nextDay = nextDate.getDate();

    console.log(`${nextYear}-${String(nextMonth).padStart(1)}-${String(nextDay).padStart(1)}`);
}
getNextDay(2016, 9, 25);