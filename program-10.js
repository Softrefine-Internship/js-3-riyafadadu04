// Write a JavaScript program to find the longest word within the string.

// Input: "This is a demo String find the largest word from it"
// Output: "largest"
function findLongestWord(str) {
    let longestWord = "";
    let currentWord = "";

    for (let i = 0; i < str.length; i++) {
      if (str[i] === " ") {
        if (currentWord.length > longestWord.length) {
          longestWord = currentWord;
        }
        currentWord = "";
      } else {
        currentWord += str[i];
      }
    }

    if (currentWord.length > longestWord.length) {
      longestWord = currentWord;
    }

    return longestWord;
  }

  const string = "This is a demo String find the largest word from it";

  console.log(findLongestWord(string));