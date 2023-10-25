function cats(array) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let el of array) {
        let curCat = el.split(" ");
        let name = curCat[0];
        let age = curCat[1];
        let cat = new Cat(name, age);
        cat.meow();
    }
}
cats(['Mellow 2', 'Tom 5']);