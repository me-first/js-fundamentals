// Question 1
const obj1 = { hair: "long", beard: true };
const obj2 = { hair: "long", beard: false };

function compare(obj1, obj2) {
  for (const key in obj1) {
    if (obj2[key] !== obj1[key]) return false;
  }
  return true;
}

const result = compare(obj1, obj2);
console.log(result);
