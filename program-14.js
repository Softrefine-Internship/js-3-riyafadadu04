// Write a JavaScript program to count frequency of character in string.

// Input: "hello"
// Output: { 'h': 1, 'e': 1, 'l': 2, 'o': 1 }

function frequencyCounter(str) {
    const frequencyMap = {};
    const newStr = str.replaceAll(" ", "").toLowerCase();

    for (const char of newStr) {
      if (frequencyMap[char]) {
        frequencyMap[char]++;
      } else {
        frequencyMap[char] = 1;
      }
    }

    return frequencyMap;
  }

  const string = "hello";
  console.log(frequencyCounter(string));