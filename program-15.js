// Write a JavaScript program to check subset.

// Example 1:
// Input:
// let set1 = new Set([1, 2, 3, 4, 5]);
// let set2 = new Set([3, 4]);

// Output: false

// Example 2:
// Input:
// let set1 = new Set([3, 4]);
// let set2 = new Set([1, 2, 3, 4, 5]);

// Output: true

function checkSubset(set1, set2) {
  for (const element of set1) {
    if (!set2.has(element)) {
      return false;
    }
  }
  return true;
}

const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([3, 4]);

const set3 = new Set([3, 4]);
const set4 = new Set([1, 2, 3, 4, 5]);

console.log(checkSubset(set1, set2));
console.log(checkSubset(set3, set4));
