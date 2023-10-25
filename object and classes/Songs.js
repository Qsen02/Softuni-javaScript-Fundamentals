function playlist(inputArray) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
        printSongName() {
            console.log(this.name);
        }
    }
    let typeList = inputArray.pop();
    let songCount = inputArray.shift();
    for (let i = 1; i <= songCount; i++) {
        let curSong = inputArray[i - 1];
        let token = curSong.split("_");
        let curTypeList = token[0];
        let name = token[1];
        let time = token[2];
        if (typeList == "all" || typeList == curTypeList) {
            let song = new Song(curTypeList, name, time);
            song.printSongName();
        }
    }
}
playlist([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'
]);