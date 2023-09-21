function centriesToMinutes(centries) {
    let years = centries * 100;
    let days = Math.trunc(365.2422 * years);
    let hours = days * 24;
    let minutes = hours * 60;
    console.log(`${centries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}
centriesToMinutes(100);