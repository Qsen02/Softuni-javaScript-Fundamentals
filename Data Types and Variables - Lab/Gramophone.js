function gramophone(band, album, song) {
    let resultInSeconds = (album.length * band.length) * song.length / 2;
    let finalResult = resultInSeconds / 2.5;
    console.log(`The plate was rotated ${Math.ceil(finalResult)} times.`);
}
gramophone("Arch enemy", "Deceivers", "House of mirrors");