// Write a JavaScript program to get the index of an object by it's property.

// Input:
// arrayObj = [{
//     prop_1: 'val_1',
//     prop_2: 'val_2',
//     prop_3: 'val_3'
// }, {
//     prop_1: 'val_4',
//     prop_2: 'val_5',
//     prop_3: 'val_6'
// }];

// Output: 1 (index of an object for prop_1: 'val_4')

function getIndexByProperty(array, property, value) {
  return array.findIndex((item) => {
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

const arrayObj = [
  {
    prop_1: "val_1",
    prop_2: "val_2",
    prop_3: "val_3",
  },
  {
    prop_1: "val_4",
    prop_2: "val_5",
    prop_3: "val_6",
  },
];

const arrayObj2 = [
  {
    prop_1: [1, 2, 3],
    prop_2: "val_5",
    prop_3: "val_6",
    prop_4: { id: 1 },
  },
  {
    prop_1: "val_7",
    prop_2: "val_8",
    prop_3: "val_9",
    prop_5: () => "This is a Jimmy",
  },
];

const index = getIndexByProperty(arrayObj, "prop_1", "val_4");
const index2 = getIndexByProperty(arrayObj2, "prop_4", { id: 1 });
const index3 = getIndexByProperty(arrayObj2, "prop_1", [1, 2, 3]);
const index4 = getIndexByProperty(arrayObj2, "prop_5", () => "This is a Jimmy");

console.log(`index of given property and value = ${index}`);
console.log(`index of given property and value = ${index2}`);
console.log(`index of given property and value = ${index3}`);
console.log(`index of given property and value = ${index4}`);
