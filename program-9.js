// Write a JavaScript program to generate all combinations of a string.

// Input: Dog
// Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]

function generateCombinations(str) {
  const result = [];
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    let currentCombination = "";
    for (let j = i; j < str.length; j++) {
      currentCombination += str[j];
      result.push(currentCombination);
    }
  }
  return result;
}

const string = "Dog";

console.log(generateCombinations(string));
