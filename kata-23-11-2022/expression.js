/*
Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
Example
With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:

1 * (2 + 3) = 5
1 * 2 * 3 = 6
1 + 2 * 3 = 7
(1 + 2) * 3 = 9
So the maximum value that you can obtain is 9.

Input >> Output Examples:
expressionsMatter(1,2,3)  ==>  return 9
Explanation:
After placing signs and brackets, the Maximum value obtained from the expression (1+2) * 3 = 9.

expressionsMatter(1,1,1)  ==>  return 3
Explanation:
After placing signs, the Maximum value obtained from the expression is 1 + 1 + 1 = 3.

expressionsMatter(9,1,1)  ==>  return 18
Explanation:
After placing signs and brackets, the Maximum value obtained from the expression is 9 * (1+1) = 18. 
*/

//Solution 1
function expressionMatter(a, b, c) {
  return Math.max((a*b*c), (a+b+c), (a+b)*c, a*(b+c))
}

//Solution 2
function expressionMatter(a, b, c) {
  let i = a * (b + c);
  let j = a * b * c;
  let k = a + b + c;
  let l = (a + b) * c;

  return Math.max(i, j, k, l);
}

//Solution 3
const expressionMatter = (a,b,c) => Math.max(a+b+c, a*b*c, a+b*c, (a+b)*c, a*b+c, a*(b+c))
