// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution #1
// function reverse(str) {
//   let tmp = []
//   const strlen = str.length

//   for (let i = 0; i < strlen; i ++) {
//     tmp.unshift(str[i])  
//   }

//   return tmp.join('')
// }

// Solution #2
// function reverse(str) {
//   let tmp = ''
//   const strlen = str.length

//   for(let i = strlen - 1; i >= 0; i--) {
//     tmp += str[i]
//   }

//   return tmp
// }

// Solution #3
// function reverse(str) {
//   const strlen = str.length
//   let tmp = ''

//   for(let i = strlen; i >= 0; i--) {
//     tmp += str.slice(i - 1, i)
//   }

//   return tmp
// }

// Solution #4
function reverse(str) {
  return str.split('').reverse().join('')
}

// Solution #5
// function reverse(str) {
//   let reversed = ''

//   for (let char of str) {
//     reversed = char + reversed
//   }

//   return reversed
// }

// Solution #6
// function reverse(str) {
//   return str.split('').reduce((rev, char) => char + rev, '')
// }

module.exports = reverse;
