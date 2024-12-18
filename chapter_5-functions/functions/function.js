// type script has a specific  syntax for typing function parameters and return values.
// Exercises 1 - Return Type - The type of the value returned by the function can be explicitly define
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
// Exercise 2 - void Return type the type void can be used to indicate a
function getTimeVoid() {
    console.log("Void Function");
}
;
console.log(getTimeVoid());
// Exercise 3 - Function Parameters - The type of the parameters passed to a function can be explicitly defined
function multiply(a, b) {
    return a * b;
}
console.log("multiply Function:- " + multiply(5, 8));
// if no parameters type is defined, typeScript will default to using any 
function sum(a, b) {
    return a + b;
}
console.log("sum Function:- " + sum(5, 8));
console.log(typeof sum(5, 8));
// Exercise 4 - Optional Parameters - Optional parameters are denoted by using the '?' syntax after the parameter name
function sumoptionTest(a, b, c) {
    return a + b + (c || 0);
}
console.log("sumOption Function:- " + sumoptionTest(5, 8));
console.log("sumOption Function:- " + sumoptionTest(5, 8, 10));
// Exercise 5 - Default Parameters - Default parameters are initialized with a default value if no value is provided
// TypeScripts can also infer the type of the default value.
function sumDefaultTest(a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
}
console.log("sumDefault Function:- " + sumDefaultTest(5, 8));
console.log("sumDefault Function:- " + sumDefaultTest(5));
// Exercise 6 - Named Parameters - Named parameters typing named parameters follows the same 
function namedParametersTest(_a) {
    var a = _a.a, b = _a.b;
    return a / b;
}
console.log(namedParametersTest({ a: 20, b: 20 }));
// Exercise 6 - Rest Parameters - Rest parameters are denoted by using the '...' syntax before the parameter name
function addRestParameters(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.length;
}
console.log(addRestParameters(10, 10, 10, 10));
