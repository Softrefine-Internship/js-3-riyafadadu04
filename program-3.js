// Write a JavaScript program to flatten object into single depth object.

// Input: 
// obj = {
//     Company: "GeeksforGeeks",
//     Address: "Noida",
//     contact: +91-999999999,
//     mentor: {
//         HTML: "GFG",
//         CSS: "GFG",
//         JavaScript: "GFG"
//     }
// };

// Output: 
// obj = {
//     Company: 'GeeksforGeeks',
//     Address: 'Noida',
//     contact: -999999908,
//     'mentor.HTML': 'GFG',
//     'mentor.CSS': 'GFG',
//     'mentor.JavaScript': 'GFG'
// }

function flattenObject(obj) {
    const result = {};
    function recurse(obj, objKey) {
      for (const key in obj) {
        const newobjKey = objKey ? `${objKey}.${key}` : key; 
        if (typeof obj[key] === "object") {
          recurse(obj[key], newobjKey);
        } else {
          result[newobjKey] = obj[key];
        }
      }
    }
    recurse(obj, "");
    return result;
  }

  const inputObject = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: -999999908,
    mentor: {
      HTML: "GFG",
      CSS: "GFG",
      JavaScript: "GFG",
    },
  };

  console.log(flattenObject(inputObject));



