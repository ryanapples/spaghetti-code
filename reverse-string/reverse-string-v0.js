// --- Directions
// Given a string, return a new string with the reversed
// order of characters

// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*
Solution Steps
- Turn 'str' into an array
- Call 'reverse' method on the array
- Join the array back into a string
- Return the result
*/

const reverse = str => {
  return str
    .split("")
    .reverse()
    .join("");
};

reverse("apple"); // === 'elppa'
reverse("hello"); // === 'olleh'
reverse("Greetings!"); // === '!sgniteerG'
