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
    for (let i = 0; i < array.length; i++) {
      if (array[i][property] === value) {
        return i;
      }
    }
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

  const property = "prop_1";
  const value = "val_4";

  const index = getIndexByProperty(arrayObj, property, value);
  
  console.log(`index of an object for ${property}: '${value}' = ${index}`);