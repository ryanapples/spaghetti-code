/*
  Write a function that takes a string as argument and 
  returns the number of vowels contained in that string.

  The vowels are “a”, “e”, “i”, “o”, “u”.

*/

const findVowels = str => {
  const matched = str.match(/[aeiou]/gi);
  return matched ? matched.length : 0;
};

console.log(findVowels("hello")); // 2
console.log(findVowels("why")); // 0

/*
  The solution above revolves around the String’s .match() method. Its use in conjunction with a regular expression enables you to perform powerful searches. If the pattern of the regular expression you pass as argument to this method is found inside the specified string, the return value will be an array of the matched characters. In case no matches are found, .match() will return null.
*/
