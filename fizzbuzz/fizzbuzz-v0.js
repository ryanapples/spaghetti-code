/*
  The FizzBuzz challenge goes something like this. Write a function that does the following:

  console logs the numbers from 1 to n, where n is the integer the function takes as its parameter
  logs fizz instead of the number for multiples of 3
  logs buzz instead of the number for multiples of 5
  logs fizzbuzz for numbers that are multiples of both 3 and 5
  */

const fizzBuzz = num => {
  for (let i = 1; i <= num; i++) {
    // check if the number is a multiple of 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } // check if the number is a multiple of 3
    else if (i % 3 === 0) {
      console.log("fizz");
    } // check if the number is a multiple of 5
    else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};

fizzBuzz(5);
// fizzBuzz(15);
