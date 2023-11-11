function cutAndReverse(str) {
    let middle = str.length / 2;
    let firtsWord = str.slice(0, middle).split("").reverse().join("");
    let secondWord = str.slice(middle).split("").reverse().join("");
    console.log(firtsWord);
    console.log(secondWord);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');