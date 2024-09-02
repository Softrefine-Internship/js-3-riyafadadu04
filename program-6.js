// Write a JavaScript program to modify an object’s property in an array of objects.

// Input:  
// arr = [
    // {
    //     employee_id: 1,
    //     employee_name: "Aman",
    // },
    // {
    //     employee_id: 2,
    //     employee_name: "Bhargava",
    // },
    // {
    //     employee_id: 3,
    //     employee_name: "Chaitanya",
    // },
//  ]

// Output: 
// [
//     { employee_id: 1, employee_name: 'Aman' },
//     { employee_id: 2, employee_name: 'Rahul' },
//     { employee_id: 3, employee_name: 'Chaitanya' }
// ] 

function countOccurrences(array, property, oldVal , newVal) {
    array.forEach((obj) => {
      if(obj[property] === oldVal){
        obj[property] = newVal;
      }
    });
    return array;
  }

  const arr = [
    {
      employee_id: 1,
      employee_name: "Aman",
    },
    {
      employee_id: 2,
      employee_name: "Bhargava",
    },
    {
      employee_id: 3,
      employee_name: "Chaitanya",
    },
  ];

  console.log(countOccurrences(arr, "employee_name"  , "Bhargava" , "Rahul"));
  // console.log(countOccurrences(arr, "employee_id"  , 1 , 5));