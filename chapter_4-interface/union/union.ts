// Union types are used when a value can be more than single type. such as when a property would be string or boolean
// Union | OR

function printStatusCode(code: string | number) {
    console.log(code);
}

printStatusCode("404 Resurce Not Found");
printStatusCode(404);