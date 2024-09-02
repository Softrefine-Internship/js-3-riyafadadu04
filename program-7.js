//  Write a JavaScript program to filter an array of objects based on a given property value

// Input:  
// arr = [
//     {
//         id: 1,
//         name: "John",
//         department: "HR",
//     },
//     {
//         id: 2,
//         name: "Alice",
//         department: "IT",
//     },
//     {
//         id: 3,
//         name: "Bob",
//         department: "Finance",
//     },
//     {
//         id: 4,
//         name: "Hank",
//         department: "IT",
//     },
// ]
// property = "department";
// value = "IT";

// Output: 
// [
//     { id: 2, name: 'Alice', department: 'IT' },
//     { id: 4, name: 'Hank', department: 'IT' }
// ]

function filterObjt(obj, property, value) {
    const result = [];
    for (let key in obj) {
      if (obj[key][property] === value) {
        result.push(obj[key]);
      }
    }
    return result;
  }
  const arr = [
    {
      id: 1,
      name: "John",
      department: "HR",
    },
    {
      id: 2,
      name: "Alice",
      department: "IT",
    },
    {
      id: 3,
      name: "Bob",
      department: "Finance",
    },
    {
      id: 4,
      name: "Hank",
      department: "IT",
    },
  ];
  const property = "department";
  const value = "IT";

  console.log(filterObjt(arr, property, value));