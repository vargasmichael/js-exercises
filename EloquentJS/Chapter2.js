//Program Structure
// A fragment of code that produces a value is called an Expression.

// let ten = 10;
// console.log(ten * 10);

// console.log(Math.min(ten * 100, 100 * 100));

// if (1 + 2 == 2) console.log("It's true!");
// else console.log("Get outta here with that noise");

//log all even numbers from 0-100
// let number = 0;
// while (number <= 100) {
//   console.log(number);
//   number = number + 2;
// }

//calculate and show the value of 2^10.
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
