/*
You are given an input (n) which represents the amount of lines you are given, your job is to figure out what is the maximum amount of perpendicular bisectors you can make using these lines.

Note: A perpendicular bisector is one that forms a 90 degree angle

n will always be greater than or equal to 0
*/

//Solution 1
function maxBisectors(n) {
  return Math.floor(n * n / 4);
}

//Solution 2
const maxBisectors = (n) => n ** 2 / 4 | 0;

