// The typeScript object type represents all values that are not in primitive types.
// We can define object in 2 ways:
// Example-1 Object type.........................................................................
var car = {
    type: "SUV",
    model: "Toyota",
    year: 2021,
};
console.log(car);
console.log(car.type + " | " + car.model + " | " + car.year);
car.model = "fortuner";
console.log(car);
// example-2 define object type and initialize with valuesss..........................................
var fruit;
fruit = { name: "Apple", color: "Red" };
console.log(fruit);
// fruit.name = "Orange";
// example-3 define object type with properties.............................................................
var animal;
animal = {
    name: "Lion",
    age: 10,
};
console.log(animal.name);
console.log(animal);
animal.age = 12;
console.log(animal);
// Example-4 optional properties.........................................................................
var book;
book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
};
console.log(book.title);
console.log(book);
book.publicationYear = 1925;
console.log(book);