// Write a JavaScript program to find the longest word within the string.

// Input: "This is a demo String find the largest word from it"
// Output: "largest"
function findLongestWord(str) {
  let longestWord = [];
  let currentWord = "";
  let maxLength = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " || i === str.length - 1) {
      const word = i === str.length - 1 ? currentWord + str[i] : currentWord;
      const wordLength = word.length;
      if (wordLength > maxLength) {
        longestWord = [word];
        maxLength = wordLength;
      } else if (wordLength === maxLength) {
        longestWord.push(word);
      }
      currentWord = "";
    } else {
      currentWord += str[i];
    }
  }

  return longestWord;
}

const string = "This is a demo String find the largest word from it";
const inputString =
        "This is a pinnnnn pinnnan demo String find the largest word from it.";

console.log(findLongestWord(string));
console.log(findLongestWord(inputString));
