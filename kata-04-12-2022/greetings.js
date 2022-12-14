/*
Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case  return
name equals owner 'Hello boss'
otherwise 'Hello guest'
*/

//Solution 1
function greet (name, owner) {
  switch(true){
    case name === owner:
      return "Hello boss"
      break;
    default:
      return "Hello guest"
  }
}

//Solution 2
function greet (name, owner) {
  if(name === owner)
    return "Hello boss"
    return "Hello guest"
}

//Solution 3
const greet = (name, owner) => name === owner ? 'Hello boss' :  'Hello guest';
