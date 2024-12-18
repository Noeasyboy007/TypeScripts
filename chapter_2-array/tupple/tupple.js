// A tupple is a typed array with a pre-defined length and types for each index.
var tuppleArray;
tuppleArray = [1, true, "this is string1"];
console.log(tuppleArray);
console.log(typeof tuppleArray);
// Trying to assign different types to different indexes will throw an error
// tuppleArray = [true, "this is string", 1];
tuppleArray.push("this is string2");
// tuppleArray.push(false);
console.log(tuppleArray);
// To prevent from adding more items in typearray so make it readonly
var readonlyTuppleArray;
readonlyTuppleArray = [2, true, "this is string3"];
console.log(readonlyTuppleArray);
// readonlyTuppleArray.push("this is string3"); // Error: Cannot push element into a readonly array
