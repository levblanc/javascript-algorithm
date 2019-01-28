// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  function getCharArr(string) {
    return string.replace(/[^\w]/g, '').toLowerCase().split('')
  }

  function getCharMap(charArr) {
    let map = {}

    for (let char of charArr) {
      if (!map[char]) {
        map[char] = 1
      } else {
        map[char]++
      }
    }

    return map
  }

  arrA = getCharArr(stringA)
  arrB = getCharArr(stringB)

  if (arrA.length !== arrB.length) {
    return false
  }

  mapA = getCharMap(arrA)
  mapB = getCharMap(arrB)

  for (let key in mapA) {
    if (mapA[key] !== mapB[key]) {
      return false
    }
  }

  return true
}

// function anagrams(stringA, stringB) {
//   function sortChars(string) {
//     return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
//   }

//   return sortChars(stringA) === sortChars(stringB)
// }

module.exports = anagrams;
