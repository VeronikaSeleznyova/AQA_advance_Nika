const car1 = {
    brand: "Porsh",
    model: "X5",
    year: 2010
}

const car2 = {
    brand: "BMW",
    model: "X10",
    owner: "Anna"
}

const car3 = { ...car1, ...car2 };
console.log(car3);