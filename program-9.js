// Write a JavaScript program to generate all combinations of a string.

// Input: Dog 
// Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]

function generateCombinations(str) {
    const result = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        result.push(str.toLowerCase().slice(i, j));
      }
    }
    return result;
  }

  const string = "Dog";

  console.log(generateCombinations(string));
