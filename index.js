function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    let num1 = array[i];
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        // Ensure num1 and num2 are different
        let num2 = array[j];
        let sum = num1 + num2;
        if (sum === target) {
          return true;
        }
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here:

  initialize a fn with two para.

  iterate over each item in the array 
  save the item value in a variable 1
  iterate starting from the next second item in the array 
  save the item value in avariable 2
  if ( var 1 === var 2)
  return true

  return fn
*/

/*
Write your algorithm here. Add written explanation of your solution here

fn has two parameters (array, integer)
fn should return [true] =====> 
if any two elemnts from the array are equal the integer.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 1, 12, 4, 1, 7], 5));

  console.log("");
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
