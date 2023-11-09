function extractFile(filePath) {
    let filePathArray = filePath.split("\\");
    let file = filePathArray[filePathArray.length - 1];
    let count = 0;
    for (let letter of file) {
        if (letter == ".") {
            count++;
        }
    }
    if (count == 1) {
        let [fileName, fileExtension] = file.split(".");
        console.log(`File name: ${fileName}`);
        console.log(`File extension: ${fileExtension}`);
    } else {
        let [name, extension, fileExtension] = file.split(".");
        let fileName = [name, extension];
        console.log(`File name: ${fileName.join(".")}`);
        console.log(`File extension: ${fileExtension}`);
    }
}
extractFile('C:\\Projects\\Data-Structures\\LinkedList.exe.cs');