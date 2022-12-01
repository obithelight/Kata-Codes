/*
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
*/

//Solution 1
const quarterOf = month => {
  switch(month){
    case 1: case 2: case 3: return 1 
      break;
    case 4: case 5: case 6: return 2 
      break;
    case 7: case 8: case 9: return 3 
      break;
    default: return 4
  }  
}

//Solution 2
const quarterOf = month => {
  return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4
}

//Solution 3
const quarterOf = (month) => {
  return Math.ceil(month / 3);
}
