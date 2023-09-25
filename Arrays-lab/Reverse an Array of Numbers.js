function reverse(n, array) {
    let newArray = [];
    for (let i = n - 1; i >= 0; i--) {
        let curElement = array[i];
        newArray.push(curElement);
    }
    let output = " ";
    for (let i = 0; i < newArray.length; i++) {
        let curElement = String(newArray[i]);
        output += curElement + " ";
    }
    console.log(output);
}
reverse(3, [10, 20, 30, 40, 50]);