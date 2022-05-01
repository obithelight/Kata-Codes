/*
Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.
*/

//Solution 1
function distinct(a) {
  let unique = [...new Set(a)]
  return unique
}

//Solution 2
const distinct = a => a.filter((item, index) => a.indexOf(item) === index);

//Solution 3
