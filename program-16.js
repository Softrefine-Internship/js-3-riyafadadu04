// Write a JavaScript program to find intersection of two sets.

// Input: 
// let set1 = new Set([1, 2, 3, 4]);
// let set2 = new Set([3, 4, 5, 6]);

// Output: [3, 4]

function checkIntersection(set1, set2) {
    const result = [];

    for (const element of set1) {
      if (set2.has(element)) {
        result.push(element);
      }
    }

    return result;
  }
  
  let set1 = new Set([1, 2, 3, 4]);
  let set2 = new Set([3, 4, 5, 6]);
  
  console.log(checkIntersection(set1, set2));