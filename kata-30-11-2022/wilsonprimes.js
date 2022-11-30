/*
Wilson primes satisfy the following condition. Let P represent a prime number.

Then,

((P-1)! + 1) / (P * P)
should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.
*/

//Solution 1
/*The only known Wilson primes are 5, 13, and 563*/

function amIWilson(p) {
  return p === 5 || p === 13 || p === 563
}

//Solution 2