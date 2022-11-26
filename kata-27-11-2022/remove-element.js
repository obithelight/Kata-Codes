/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
*/

//Solution 1
function removeEveryOther(arr){
  let newArr = []
  for(let i = 0; i < arr.length; i+=2){
    newArr.push(arr[i])
  }
  return newArr
}

//Solution 2
const removeEveryOther = arr => arr.filter((element, index) => index % 2 == 0)
