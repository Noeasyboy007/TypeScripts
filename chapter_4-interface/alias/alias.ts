// type Aliases allow defining types with a custom name (an alias)
// type Aliases can be used for primitive like string or more complex types such as objects an arrays

type carYear = number;
type carType = string;
type carModel = string;

type Car = {
    year: carYear;
    type: carType;
    model: carModel;
};

let myCar: Car = {
    year: 2021,
    type: "SUV",
    model: "Toyota",
};

console.log(typeof myCar);
console.log(myCar);
console.log(typeof myCar.year + " | " + typeof myCar.type + " | " + typeof myCar.model);


