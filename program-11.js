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
  str1 = str1.replace(/\s/g, "").toLowerCase();
  str2 = str2.replace(/\s/g, "").toLowerCase();

  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

const str1 = "eleven plus two";
const str2 = "twelve plus one";
const str3 = "evil";
const str4 = "vile";
const inp = "a gentlema n"; 
const inp2 = "elegant man";

console.log(areAnagrams(str1, str2));
console.log(areAnagrams(str3, str4));
console.log(areAnagrams(inp, inp2)); 
