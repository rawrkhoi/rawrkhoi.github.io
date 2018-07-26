// Exercise 1

// Each exercise starts with a problem description. Read this description and try to solve the exercise.
// If you run into problems, consider reading the hints after the exercise.
// Full solutions to the exercises are not included in this book, but you can find them online at
// https://eloquentjavascript.net/code.

// **Looping a triangle

// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######

// Create a loop and prints a '#'

var numSign = '#';

console.log(numSign);

for (var i = 0; i < 6; i++){
    console.log(numSign += '#');
};


// **FizzBuzz

// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5
// (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
// (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates.
// So if you solved it, your labor market value just went up.)

for (var i = 1; i <= 100; i++){
    
    if (i % 5 === 0 && i % 3 === 0){
        console.log('FizzBuzz');
    } else if (i % 3 === 0){
        console.log('Fizz');
    } else if (i % 5 === 0){
        console.log('Buzz');
    } else {
        console.log(i);
    }
}


// **Chessboard

// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a binding size = 8
// Change the program so that it works for any size, outputting a grid of the given width and height.


// Create a function to define binding size

// function chesssBoard(height, width){
//   var chess = ' ';
//   for (var x = 0; x < width - 1; x++) {
//     if (chess.charAt(x) === ' '){
//       chess = chess + '#';
//     } else if (chess.length === width) {
//       console.log('\n');
//     } else {
//       chess = chess + ' ';
//     } 
//   } console.log(chess);
//   for (var y = 0; y < height - 1; y++){
//         console.log(chess);
//     }
// }


function chessBoard(height, width) {
  var chess = ' ';
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < (width); x++) {
      //if previous character is space, add hashtag
      if (chess.charAt(chess.length - 1) === ' ') {
          chess += '#';
      }
      //if previous character is hashtag, add space
      else if (chess.charAt(chess.length - 1) === "#") {
           chess += " ";
      }
      //if previous character is newline, and before that is space, add space
      else if (chess.charAt(chess.length - 1) === "\n" && chess.charAt(chess.length - 2) === " " ) {
        chess += " ";
        } else {
          chess += "#";
        }
    }
    if (y === 0){
      chess = chess.slice(0, chess.length - 1);
    }
    chess += "\n";
  }
  console.log(chess.slice(0, chess.length - 1));
}