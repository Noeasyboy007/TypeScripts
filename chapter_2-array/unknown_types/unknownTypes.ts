// Type unknown

// unknown is a similar , but safer alternative to any

var unknownvar: unknown = "Aritra Bera";
console.log("value: " + unknownvar);
console.log("typeof: " + typeof unknownvar);

unknownvar = 32;
console.log("value: " + unknownvar);
console.log("typeof :" + typeof unknownvar);

var value: unknown;
console.log(value);

value = true;
console.log(value);

value = "Hello, World!";
console.log(value);

value = [1, 2, 3, 4, 5];
console.log(value);

value = { name: "Aritra", age: 25 };
console.log(value);

value = Math.random();
console.log(value);

value=null;
console.log(value);

value = undefined;
console.log(value);
