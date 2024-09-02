// Write a JavaScript program to check a given string is an anagram of another string.

// Example 1:
// Input: evil = vile
// Output: true

// Example 2:
// Input: a gentleman = elegant man
// Output: true

// Example 3:
// Input: eleven plus two = twelve plus one
// Output: true

function areAnagrams(str1, str2) {
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

const str1 = "eleven plus two";
const str2 = "twelve plus one";
const str3 = "evil";
const str4 = "vile";

console.log(areAnagrams(str1, str2));
console.log(areAnagrams(str3, str4));
