function matchDates([inputArray]) {
    let pattern = /(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})/gm;
    let dates = pattern.exec(inputArray);
    while (dates != null) {
        let { day, month, year } = dates.groups;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        dates = pattern.exec(inputArray);
    }
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973,1/Feb/2016']);