// In TypeScript, interface fill the  role of naming these type, and are a powerfull way to defining 

// Interface................................................................................................
interface car {
    name: string,
    color: string,
    milage: number
}

let myCar: car = {
    name: "Toyota",
    color: "Red",
    milage: 10000
}

function printCar(carObject: car) {
    console.log(carObject.name + " | " + carObject.color + " | " + carObject.milage);
    console.log(carObject);
    console.log(typeof carObject);
}

printCar(myCar);

let myCarToyota: car = {
    name: "Maruti",
    color: "Black",
    milage: 20000
}

printCar(myCarToyota);

// Additional properties
let myCar2: car = {
    name: "Toyota",
    color: "Red",
    milage: 10000,
    // unknownProperty: "This property is not defined in the interface"
}

printCar(myCar2);

// Fruit Interface..................................................................................
interface Fruit {
    name: string,
    color: string,
    quantity?: number  // optional property
}

function printFruit(fruitObject: Fruit) {
    console.log(fruitObject);
}

let myFruit: Fruit = {
    name: "Apple",
    color: "Red"
}

printFruit(myFruit);    // here print apple without optional property

let myFruit2 = {
    name: "Orange",
    color: "Orange",
    quantity: 10
}

console.log(myFruit2);
