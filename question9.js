const inputObj = { a: 1, b: "2", c: 3 };
const removekey = ["b"];

for (const key in inputObj) {
  if (removekey.includes(key)) {
    delete inputObj[key];
  }
}
console.log(inputObj);
