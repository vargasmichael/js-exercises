//Program Structure
// A fragment of code that produces a value is called an Expression.

let ten = 10;
//console.log(ten * 10);

// console.log(Math.min(ten * 100, 100 * 100));

// if (1 + 2 == 2) console.log("It's true!");
// else console.log("Get outta here with that noise");

//log all even numbers from 0-100
let number = 0;
while (number <= 100) {
  //console.log(number);
  number = number + 2;
}

//calculate and show the value of 2^10.
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
//console.log(result);

for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    //console.log(current);
    break;
  }
}
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

for (let string = "#"; string <= "#######"; string = string += "#") {
  //console.log(string);
}
// //refactor

for (let string = "#"; string.length < 8; string += "#") {
  //console.log(string);
}
//using string.length is more efficient than fully writing out the desired length

//Fizz Buzz

for (let i = 0; i <= 100; i++) {
  if (i === 7) {
    //console.log(i);
  } else if (i % 3 === 0 && i % 5 === 0) {
    //console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    //console.log("Fizz");
  } else if (i % 5 === 0) {
    //console.log("Buzz");
  } else {
    //console.log(i);
  }
}
//this version of code is more explicit and uses branching to handle each case.
//refactored

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  //   console.log(output || n);
}
//this refactor is using string concatenation and takes advantage of JS's truthy and falsy values to simplify output

//Chessboard

let size = 8;

let board = "";

//The 'size' is set to 8, which means the board will have 8 rows and 8 columns. The 'board' variable is initialized as an empty string,
//which will be used to store the constructed board pattern.

for (let i = 0; i < size; i++) {
  //The outer loop will create each row of the board. The loop runs 'size' times. Which means if 'size' is 8, the loop will run 8 times.
  for (let n = 0; n < size; n++) {
    //The inner loop runs inside the outer loop and is responsible for creating the columns of each row.
    //It also runs 'size' times. Within this loop, the program decides whether to add a space or a '#' based on the current values of 'i' and 'n'.
    if ((i + n) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  //The logic: if the sum of 'i' (current row index) and 'n' (current column index) is even (% 2 == 0), a space is added to the 'board' string.
  //If the sum is odd, a '#' is added.
  //This ensures that the characters alternate as you move vertically and horizontally.
  board += "\n";
}
//After finishing a row(the inner loop completes), a newline character '\n' is added to the 'board' string. This moves to the next line, ensuring the next row starts on a new line.
//console.log(board);
//Once the loops are done and the board pattern has been constructed, the entire pattern is logged to the console using 'console.log'

for (let i = 0; i <= 100; i++) {
  if (i === 7) {
    console.log(i);
  } else if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
