// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// Array.prototype.slice() returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
function chunk(array, size) {
  let index = 0
  let chunked = []

  while (index < array.length) {
    chunked.push(array.slice(index, index + size))

    index += size
  }

  return chunked
}

// function chunk(array, size) {
//   let chunked = []

//   for (let ele of array) {
//     const lastChunk = chunked[chunked.length - 1]

//     if (!lastChunk || lastChunk.length === size) {
//       chunked.push([ele])
//     } else {
//       lastChunk.push(ele)
//     }
//   }

//   return chunked
// }

module.exports = chunk;
