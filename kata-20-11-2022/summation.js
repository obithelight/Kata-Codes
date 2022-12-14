/*
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2
*/

//Solution 1
function summation(num) {
  let sum = 0
  for(let i = 0; i <= num; i++){
    sum+=i
  }
  return sum
}

//Solution 2
const summation = n => n * (n + 1) / 2;

//Solution 3
const summation = num => (
  Array(num).fill(true)
    .reduce((sum, item, index) => sum + index + 1, 0)
);