// Write a JavaScript program to group elements by their properties.

// Input:
// arr = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Alice" },
//     { id: 3, name: "Bob" },
//     { id: 4, name: "Alice" },
// ]

// Output:
// { 'John' => [ 1 ], 'Alice' => [ 2, 4 ], 'Bob' => [ 3 ] }

function groupByProperty(arr, property) {
    const result = {};

    for (let i = 0; i < arr.length; i++) {
      const key = arr[i][property];
      if (result[key]) {
        result[key].push(arr[i].id);
      } else {
        result[key] = [arr[i].id];
      }
    }
    
    return result;
  }

  const arr = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" },
    { id: 4, name: "Alice" },
  ];

  console.log(groupByProperty(arr, "name"));