//This function is designed to return the square of any given number.
//Defining functions.

const square = function (x) {
  return x * x;
};
//console.log(square(12));

const makeNoise = function () {
  //console.log("Pling!");
};
makeNoise();

const power = function (base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
//console.log(power(2, 10));

//BINDINGS AND SCOPE
//Think about where you are calling things and how that will impact the output or return. Think about how your code will have access to bindings(variables)

let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  //console.log(x + y + z);
}
//y is not visible here. WHY???
//var automatically becomes a global scope when decalared.
//console.log(x + z);

const halve = function (n) {
  return n / 2;
};

let n = 10;
// console.log(halve(100));
// console.log(n);

//NESTED SCOPE
//Think functions inside of functions

const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    // console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
hummus(2);

// Outer scope: Within the 'hummus' function, you have access to:
// 1. Factor argument - This is the argument passed to the 'hummus' function, which multiplies the base amount of ingredients.
// 2. Ingredient function - This function is defined inside 'hummus', making it available only withine the scope of the 'hummus' function.
// You can think of it as a 'helper' function, only accessable and used by the 'hummus' function.

// Inner scope: inside the ingredient function, you have access to:
// 1. amount, time, name. These are arguments passed to the ingredient function.
// 2. ingredientAmount - this is a variable defined within the ingredient function that calculates the amount of an ingredient based on the factor.
// 3. factor - from the outer hummus scope. This is becuase the inner function has access to variables from it's containing (outer) function.
// When an inner function has access has access to the variable and parameters of an outer function it's called closure.

// Declaration notation
// Shorter way to create a function binding. When the function keyword is used at the start of a statement, it works differently.
// This is a function delcaration. The statement defines the binding square and points it at the given function.

function squares(x) {
  return x * x;
}
// console.log(square(2));

//console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}

// This code works, even though the function is defined BELOW the code that uses it. Function declarations are not part of the regular top-to-bottom flow of control.
// The functions are automatically moved to the top of the scope so they can be used by all the code in that scope.

// ARROW FUNCTIONS
// Instead of the function keyword, it uses an arrow.

const powers = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
//console.log(powers(2, 3));

// The arrow comes after the list of parameters and is followed by the functions body.
// It expresses something like "this input (parameters) produces this result (body)"
// If the body is a single expression you don't need the parantheses.

const square1 = (x) => {
  return x * x;
};
const square2 = (x) => x * x;

// console.log(square1(2));
// console.log(square2(2));

// These two definitions of square do the same thing.

//When there are no parameters it's just an empty set of parantheses

const horn = () => {
  //console.log("Toot");
};
horn();

//THE CALL STACK

function greet(who) {
  console.log("Hello " + who);
}
//greet("Harry");
//console.log("Bye");

//Flow of control will go something like this
// not in function
//    in greet
//       in console.log
//    in greet
// not in function
//    in console.log
// not in function

// Here we can understand how the call stack works. No matter where the function is called it will always go back to the function and go down from there.
// It's important to understand how big the program is that is under the function because you could 'blow the stack'

function chicken() {
  return egg();
}
function egg() {
  return chicken();
}
//console.log(chicken() + " came first.");

//RangeError: Maximum call stack size exceeded

//OPTIONAL ARGUMENTS
// If you attempt to call more parameters than are expected JavaScript will ignore the extras and just pass the number that are required.
// If you attempt to call less then it will return undefined.

function square3(x) {
  return x * x;
}
//console.log(square3(4, "hedgehog", true));

// It will only pay attention to the first index. If you pass in true first it will return 1 and hedgehog will return NaN.

function minus(a, b) {
  if (b === undefined) return -a;
  else return a - b;
}
// console.log(minus(10));
// console.log(minus(10, 5));

// This is a way to have the function return something defined if there is not a second parameter given.
// If you write an = operator after a parameter, followed by an expression, the value of that expression
// will replace the argument when it is not given.
// This next function make it so that it's second argument is optional.

function power4(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power4(4));
console.log(power4(2, 6));
