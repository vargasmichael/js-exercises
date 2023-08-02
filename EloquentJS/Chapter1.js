function factoral(n) {
  if (n == 0) {
    return 1;
  } else {
    return factoral(n - 1) * n;
  }
}
//console.log(factoral(8));
//you need to make sure that you are running the console.log after the function has been able to run completely.

//Values - These are the values that comprise values like Booleans, Strings, numbers, objects, functions, and undefined values.

//template literals are literals delimited with backtick (`) characters, allowing for multi-line strings,
//string interpolation with embedded expressions, and special constructs called tagged templates.

// console.log(typeof 4.5);
// console.log(typeof "x");

//Unary operator examples

console.log(-(10 - 2));

const x = 1;
const y = -1;

console.log(-x);
console.log(+y);

console.log(1 + 1 == 2 && 10 * 10 > 50);

// Terms that I need to be familiar with. Values, numbers, special numbers, strings, unary operators, boolean values (comparison, logical operators),
//empty values, empty values, automatic type conversion

console.log(null || "user");
console.log("User" || "Agnes");
