function productList(array) {
    let sortedProducts = array.sort();
    for (let i = 0; i < sortedProducts.length; i++) {
        let cuProduct = sortedProducts[i];
        console.log(`${i+1}.${cuProduct}`);
    }
}
productList(["ябълка", "круша", "банан", "портокал"]);