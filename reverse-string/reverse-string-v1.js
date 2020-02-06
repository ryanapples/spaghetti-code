// --- Directions
// Given a string, return a new string with the reversed
// order of characters

// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*
Solution Steps
- Create an empty string called 'reversed'
- For each character in the provided string
- Take the character and add it to the start of the 'reversed'
- Return the variable 'reversed'
*/

const reverse = str => {
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
};

reverse("apple"); // === 'elppa'
reverse("hello"); // === 'olleh'
reverse("Greetings!"); // === '!sgniteerG'
