// Type any

// any is a type that disables type checking effectively allow all types tobe used

var anyvar: any = true;
console.log("value " + anyvar);
console.log("typeof " + typeof anyvar);

anyvar = "Hello, World!";
console.log("value " + anyvar);
console.log("typeof " + typeof anyvar);

anyvar = 123;
console.log("value " + anyvar);
console.log("typeof " + typeof anyvar);
