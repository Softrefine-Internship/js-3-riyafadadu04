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
  return obj.filter((item) => {
    if (item.hasOwnProperty(property)) {
      const itemValue = item[property];
      if (typeof itemValue === "function" && typeof value === "function") {
        return itemValue.toString() === value.toString();
      }
      if (typeof value === "object" && value !== null) {
        return JSON.stringify(itemValue) === JSON.stringify(value);
      }
      return itemValue === value;
    }
    return false;
  });
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
console.log(filterObjt(arr, "department", "IT"));

const arrayObj = [
  { prop_1: "val_1", prop_2: "val_2", prop_3: [1, 2, 3] },
  { prop_1: "val_4", prop_2: "val_5", prop_3: { id: 1 } },
  {
    prop_1: "val_7",
    prop_2: "val_8",
    prop_3: () => "This is a function",
  },
  {
    prop_1: "val_7",
    prop_2: "val_3",
    prop_3: { id: 1 },
  },
  {
    prop_1: "val_7",
    prop_2: "val_3",
    prop_3: () => "This is a function",
  },
  { prop_1: "val_1", prop_2: "val_1", prop_3: [1, 2, 3] },
];

console.log(filterObjt(arrayObj, "prop_3", () => "This is a function"));
console.log(filterObjt(arrayObj, "prop_3", [1, 2, 3]));
console.log(filterObjt(arrayObj, "prop_3", { id: 1 }));
