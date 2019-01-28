// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const strlen = str.length
  let record = {}
  let max = 0
  let char = ''

  for (let char of str) {
    if (!record[char]) {
      record[char] = 1
    } else {
      record[char]++
    }
  }

  for (const key in record) {
    if (record[key] > max) {
      max = record[key]
      char = key
    }
  }

  return char
}

module.exports = maxChar;
