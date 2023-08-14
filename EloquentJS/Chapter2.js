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
// let result = 1;
// let counter = 0;
// while (counter < 10) {
//   result = result * 2;
//   counter = counter + 1;
// }
// console.log(result);

// for (let current = 20; ; current = current + 1) {
//   if (current % 7 == 0) {
//     console.log(current);
//     break;
//   }
// }
//What is with the two ;;?  The part before the ; initializes the loop and the second part of the expression check whether the loop must continue.

//EXCERCISES

//Write a loop that makes seven calls to console.log to output the following triangle
//#
//##
//###
//####
//#####
//######
//#######

// for (let string = "#"; string <= "#######"; string = string += "#") {
//   console.log(string);
// }
// //refactor

// for (let string = "#"; string.length < 8; string += "#") {
//   console.log(string);
// }
//using string.length is more efficient than fully writing out the desired length

//Fizz Buzz

for (let i = 0; i <= 100; i++) {
  if (i === 7) {
    console.log(i);
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
//refactored

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
