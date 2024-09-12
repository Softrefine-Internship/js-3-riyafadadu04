// Write a JavaScript program to check if obj1 contains all the property values of obj2.

// Example 1:
// Input: obj1: { name: "John", age: 23; degree: "CS" }, obj2: {age: 23, degree: "CS"}
// Output: true

// Example 2:
// Input: obj1: { name: "John", degree: "CS" }, obj2: {name: "Max", age: 23, degree: "CS"}
// Output: false

function propertyCheck(obj1, obj2) {
  function deepEqual(val1, val2) {
    if (val1 === val2) return true;
    if (
      typeof val1 === "object" &&
      val1 !== null &&
      typeof val2 === "object" &&
      val2 !== null
    ) {
      if (Array.isArray(val1) !== Array.isArray(val2)) return false;
      if (Array.isArray(val1)) {
        if (val1.length !== val2.length) return false;
        for (let i = 0; i < val1.length; i++) {
          if (!deepEqual(val1[i], val2[i])) return false;
        }
        return true;
      } else {
        const keys1 = Object.keys(val1);
        const keys2 = Object.keys(val2);
        if (keys1.length !== keys2.length) return false;
        for (const key of keys1) {
          if (!keys2.includes(key) || !deepEqual(val1[key], val2[key]))
            return false;
        }
        return true;
      }
    }
    if (typeof val1 === "function" && typeof val2 === "function") {
      return val1.toString() === val2.toString();
    }
    return false;
  }
  for (const key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      if (!obj1.hasOwnProperty(key) || !deepEqual(obj1[key], obj2[key])) {
        return false;
      }
    }
  }
  return true;
}

const obj1 = { name: "John", age: 23, degree: "CS" };
const obj2 = { age: 23, degree: "CS" };
const obj3 = { name: "John", degree: "CS" };
const obj4 = { name: "Max", age: 23, degree: "CS" };
const obj5 = {
  name: "Alice",
  skills: ["Python", "JavaScript"],
  isActive: true,
};
const obj6 = { skills: ["Python", "JavaScript"], isActive: true };

console.log(propertyCheck(obj1, obj2));
console.log(propertyCheck(obj3, obj4));
console.log(propertyCheck(obj5, obj6));
