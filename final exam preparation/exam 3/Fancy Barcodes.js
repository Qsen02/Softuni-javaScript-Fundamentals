function fancyBarcodes(inputArray) {
    let barcodeCount = inputArray.shift();
    let validation = /(@#+)([A-Z][A-Za-z\d]{4,}[A-Z])(@#+)/;
    for (let i = 0; i < barcodeCount; i++) {
        let barCode = inputArray[i];
        if (validation.test(barCode)) {
            let nums = "";
            for (let char of barCode) {
                if (/[\d]/.test(char)) {
                    nums += char;
                }
            }
            if (nums.length > 0) {
                console.log(`Product group: ${nums}`);
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log("Invalid barcode");
        }
    }
}
fancyBarcodes(["3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"
]);