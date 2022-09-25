/*
Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

describe("Basic tests",() => {
  Test.assertEquals(nearestSq(1),1)
  Test.assertEquals(nearestSq(2),1)
  Test.assertEquals(nearestSq(10),9)
  Test.assertEquals(nearestSq(111),121)
  Test.assertEquals(nearestSq(9999),10000)
});
*/

//Solution 1
function nearestSq(n){
    return Math.pow(Math.round(Math.sqrt(n)), 2)
}

//Solution 2
function nearestSq(n){
    return Math.round(n ** 0.5) ** 2
}

//Solution 3