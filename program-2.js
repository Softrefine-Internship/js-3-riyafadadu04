// Write a JavaScript program to convert two-dimensional array in to an object.

// Input:  [
//     ["John", 12],
//     ["Jack", 13],
//     ["Matt", 14],
//     ["Maxx", 15]
// ]

// Output: {
//     "John": 12,
//     "Jack": 13,
//     "Matt": 14,
//     "Maxx": 15
// }

function arrayToObject(arr) {
    const result = {};
    for (const [key, value] of arr) {
      result[key] = value;
    }
    return result;
  }

  const array = [
    ["John", 12],
    ["Jack", 13],
    ["Matt", 14],
    ["Maxx", 15],
  ];

  console.log(arrayToObject(array));
