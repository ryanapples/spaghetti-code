/*
  Write a function that takes a string as argument and 
  returns the number of vowels contained in that string.

  The vowels are 'a', 'e', 'i', 'o', 'u'.
*/

const findVowels = str => {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

console.log(findVowels("hello")); // 2
console.log(findVowels("why")); // 0
