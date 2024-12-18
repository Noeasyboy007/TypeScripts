// type Scripts adds types and visibility modifiers to javascript classes
// Member: Types - The member of a class (properties & methods) are typed using type annotations, sim
// Excrise - 1 ...........................................................................................
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
person.name = 'Aritra';
console.log(person.name);
