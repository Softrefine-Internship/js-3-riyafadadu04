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
    let longestString = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longestString.length) {
        longestString = arr[i];
      }
    }
    return longestString;
  }

  const arr = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "Swift",
  ];
  
  console.log(findLongestString(arr));
