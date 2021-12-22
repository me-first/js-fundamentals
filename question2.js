const stringInput = "col1,col2\na,b\nc,d";
const splitInput = stringInput.split("\n");
const [title, ...restValues] = splitInput;
// console.log(title, restValues);
const [col1, col2] = title.split(",");
const objArr = [];

restValues.forEach((values) => {
  const [val1, val2] = values.split(",");
  const obj = {};

  obj[col1] = val1;
  obj[col2] = val2;

  objArr.push(JSON.stringify(obj));
});

console.log(objArr);
