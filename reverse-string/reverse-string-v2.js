// --- Directions
// Given a string, return a new string with the reversed
// order of characters

// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*
Solution Steps
- Turn string into array
- Utilized reduce array helper
*/

const reverse = str => {
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, "");
};

reverse("apple"); // === 'elppa'
reverse("hello"); // === 'olleh'
reverse("Greetings!"); // === '!sgniteerG'
