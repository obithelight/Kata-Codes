/*
Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3
*/

//Solution 1
function stray(numbers) {
 let strayChar = numbers[0]
 if(strayChar !== numbers[1] && strayChar !== numbers[2])
   return strayChar
  
  for(let i = 1; i < numbers.length; i++){
    if(strayChar !== numbers[i])
      return numbers[i]
  }
}

//Solution 2