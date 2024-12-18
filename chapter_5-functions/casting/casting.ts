// There are times when working with types where it's necessary to ovverride the type of a variable ,such as when incorrect types are provide by a library
// casting is the process of overring a type.

// Exercises-casring with as 
let x: unknown = "this is casting test"
console.log(x as string);
console.log((x as string).length);

// exercises-2
let myvar: unknown = 4;
console.log((myvar as string).length);

// exercises-3
let variablehello: unknown = "hello";
console.log(<string>variablehello);
console.log((<string>variablehello).length);




