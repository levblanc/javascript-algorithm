// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// function vowels(str) {
//   const found = str.match(/[aeiouAEIOU]/gi)
//   return found ? found.length : 0
// }

function vowels(str) {
  let count = 0
  const targets = ['a', 'e', 'i', 'o', 'u']

  for (let char of str.toLowerCase()) {
    if (targets.indexOf(char) !== -1) {
      count++
    }

    // Array.prototype.includes() determines whether an array includes a certain value among its entries, returning true or false as appropriate.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
    // if (targets.includes(char)) {
    //   count++      
    // }
  }

  return count
}

module.exports = vowels;
