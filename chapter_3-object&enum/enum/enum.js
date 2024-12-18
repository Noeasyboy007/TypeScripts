// An Enum is a special "class" that represents a group of constants (e.g unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.
// By default, Enum will initialize the first value to 0 add 1 to each additional value.
// Example-1 Numeric enum................................................................................
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
console.log(color);
console.log(color.Green);
var rgbColor = color.Red;
console.log(rgbColor);
// throw error as yellow is not a valid enum
// rgbColor = "yellow"; // Error : "yellow" is not assignable to type 'color'.
// Example-2 you can set the value of the first numeric enum and have it a value of............................
// Auto increment
var days;
(function (days) {
    days[days["Sunday"] = 1] = "Sunday";
    days[days["Monday"] = 2] = "Monday";
    days[days["Tuesday"] = 3] = "Tuesday";
    days[days["Wednesday"] = 4] = "Wednesday";
    days[days["Thursday"] = 5] = "Thursday";
    days[days["Friday"] = 6] = "Friday";
    days[days["Saturday"] = 7] = "Saturday";
})(days || (days = {}));
console.log(days);
console.log(days.Friday);
// Example-3 Numeric Enums -Fully initialized.................................................................
// You can assign unique numbers values for each enum value.
var statusCode;
(function (statusCode) {
    statusCode[statusCode["NOTFOUND"] = 404] = "NOTFOUND";
    statusCode[statusCode["SUCCESS"] = 200] = "SUCCESS";
    statusCode[statusCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    statusCode[statusCode["FORBIDDEN"] = 403] = "FORBIDDEN";
    statusCode[statusCode["SERVER_ERROR"] = 500] = "SERVER_ERROR";
})(statusCode || (statusCode = {}));
console.log(statusCode);
console.log(statusCode.NOTFOUND);
// Example-4 String Enum.............................................................
// Enum can also contain strings. this is more common than numeric enums.
var directions;
(function (directions) {
    directions["North"] = "North";
    directions["East"] = "East";
    directions["South"] = "South";
    directions["West"] = "West";
})(directions || (directions = {}));
console.log(directions);
console.log(directions.North);
