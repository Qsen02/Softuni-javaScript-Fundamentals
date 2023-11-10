function extractFile(filePath) {
    let filePathArray = filePath.split("\\");
    let file = filePathArray[filePathArray.length - 1];
    let lastDotIndex = file.lastIndexOf(".");

    let fileName = file.slice(0, lastDotIndex);
    let extension = file.slice(lastDotIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Projects\\Data-Structures\\LinkedList.exe.cs');