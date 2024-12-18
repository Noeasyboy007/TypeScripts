// typeScripts - Array

// TypeScript has a specific syntax for typing arrays.

const vararray: string[] = [];
vararray.push("Aritra1");
console.log(vararray);

vararray.push("Bera1");
console.log(vararray);

let vararray2: string[] = [];
vararray2.push("Aritra2");
console.log(vararray2);

vararray2.push("Bera2");
console.log(vararray2);

// const variables re-assign is not possible
// vararray = vararray2;

vararray2 = vararray;
console.log(vararray2);

// readonly Array
let readonlyArray: readonly number[] = [1, 2, 3, 4, 5];
console.log(readonlyArray);

// readonlyArray.push(6); // Error: Cannot push element into a readonly array
// console.log(readonlyArray);
