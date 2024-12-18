// An Enum is a special "class" that represents a group of constants (e.g unchangeable variables).
// Enums come in two flavors string and numeric. Lets start with numeric.
// By default, Enum will initialize the first value to 0 add 1 to each additional value.

// Example-1 Numeric enum................................................................................
enum color {
  Red,
  Green,
  Blue,
}
console.log(color);
console.log(color.Green);

let rgbColor = color.Red;
console.log(rgbColor);

// throw error as yellow is not a valid enum
// rgbColor = "yellow"; // Error : "yellow" is not assignable to type 'color'.

// Example-2 you can set the value of the first numeric enum and have it a value of............................
// Auto increment
enum days {
  Sunday = 1,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}
console.log(days);
console.log(days.Friday);

// Example-3 Numeric Enums -Fully initialized.................................................................
// You can assign unique numbers values for each enum value.

enum statusCode {
  NOTFOUND = 404,
  SUCCESS = 200,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  SERVER_ERROR = 500,
}
console.log(statusCode);
console.log(statusCode.NOTFOUND);

// Example-4 String Enum.............................................................
// Enum can also contain strings. this is more common than numeric enums.

enum directions {
  North = "North",
  East = "East",
  South = "South",
  West = "West",
}
console.log(directions);
console.log(directions.North);
