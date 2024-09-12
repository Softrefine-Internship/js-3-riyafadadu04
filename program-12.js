// Write a JavaScript program to get the longest string in an array.

// Input:
// arr = [
// "JavaScript",
// "Python",
// "Java",
// "C++",
// "Ruby",
// "Swift",
// ]

// Output: "JavaScript"

function findLongestString(arr) {
  let longestLength = 0;
  let longestStrArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestLength) {
      longestStrArray = [arr[i]];
      longestLength = arr[i].length;
    } else if (arr[i].length === longestLength) {
      longestStrArray.push(arr[i]);
    }
  }
  return longestStrArray;
}

const arr = ["JavaScript", "Python", "Java", "C++", "Ruby", "Swift"];
const arr2 = ["bb", "Java", "C++", "Rust", "Ruby", "c"];
console.log(findLongestString(arr));
console.log(findLongestString(arr2));
