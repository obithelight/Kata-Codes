/*
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
*/

//Solution 1
function bonusTime(salary, bonus) {
  if(bonus) return `£${salary * 10}`
  return `£${salary}`
}

//Solution 2
function bonusTime(salary, bonus) {
  switch(true){
    case bonus:
      return `£${salary * 10}`
      break;
    default:
      return `£${salary}`
  }
}
