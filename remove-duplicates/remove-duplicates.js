/*
Remove Duplicates
Please follow the below instructions exactly and carefully.

Deliverables:

Write a working function, in Javascript, that means all requirements.
Beware the time limit set on this exercise.
Requirements:

Write a function called removeDuplicates that takes a single string as input.
The function removes duplicate characters, case insensitively, so that every character appears only once.
Always keep the first occurrence of a character, regardless of case.
The function must at least pass the provided test cases but note there may be other similar test cases that will be run against the function.
The application may not terminate due to exceptions or errors, including any additional test cases that may be run.
Example input string: "AbraCadABraAlakAzam"

Example output from the input above: "AbrCdlkzm"

*/

const removeDuplicates = str => {
  const stringArray = str.split("");
  let charReference = {};
  let filteredString = "";

  stringArray.map(char => {
    if (!charReference[char.toLowerCase()]) {
      filteredString += char;
      charReference[char.toLowerCase()] = true;
    }
  });

  return filteredString;
};

removeDuplicates("AbraCadABraAlakAzam");
