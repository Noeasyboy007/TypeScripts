// In TypeScript, interface fill the  role of naming these type, and are a powerfull way to defining 
var myCar = {
    name: "Toyota",
    color: "Red",
    milage: 10000
};
function printCar(carObject) {
    console.log(carObject.name + " | " + carObject.color + " | " + carObject.milage);
    console.log(carObject);
    console.log(typeof carObject);
}
printCar(myCar);
var myCarToyota = {
    name: "Maruti",
    color: "Black",
    milage: 20000
};
printCar(myCarToyota);
// Additional properties
var myCar2 = {
    name: "Toyota",
    color: "Red",
    milage: 10000,
    // unknownProperty: "This property is not defined in the interface"
};
printCar(myCar2);
function printFruit(fruitObject) {
    console.log(fruitObject);
}
var myFruit = {
    name: "Apple",
    color: "Red"
};
printFruit(myFruit); // here print apple without optional property
var myFruit2 = {
    name: "Orange",
    color: "Orange",
    quantity: 10
};
console.log(myFruit2);
