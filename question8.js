const input = [
  { name: "fred", age: 48 },
  { name: "barney", age: 36 },
  { name: "fred", age: 40 },
];

const shallowInput = [...input];

// input.sort((obj1, obj2) => {
//   return obj2.age - obj1.age;
// });
shallowInput
  .sort((a, b) => b.age - a.age)
  .sort((x, y) => {
    if (x.name < y.name) {
      return -1;
    }
    if (x.name > y.name) {
      return 1;
    }
    return 0;
  });

//console.log(input);
console.log(shallowInput);
