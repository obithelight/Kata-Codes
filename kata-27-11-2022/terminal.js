/*
Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

Example:
move(3, 6) should equal 15
*/

//Solution 1
function move (position, roll) {
  return position + (roll * 2)
}

//Solution 2
const move = (position, roll) => position + (roll * 2)