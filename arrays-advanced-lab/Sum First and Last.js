function sum(array) {
    let firstElement = Number(array.shift());
    let lastElement = Number(array.pop());
    let sum = firstElement + lastElement;
    console.log(sum);
}
sum(['20', '30', '40']);