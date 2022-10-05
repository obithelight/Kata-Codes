/*
This function should return an object, but it's not doing what's intended. What's wrong?
*/

//Solution 1
function mystery() {
  let results = {
    sanity: 'Hello'
  };
  return results;
}

//Solution 2
const mystery = () => ({sanity: 'Hello'});
