// [{col1:a,col2:b},{col1:a,col2:b}];
// col1,col2\na,b\nc,d

const inputObj1 = [
  { col1: "a", col2: "b" },
  { col1: "c", col2: "d" },
];
let arrOfkeys1 = [];
let arrOfValues1 = [];
inputObj1.forEach((obj) => {
  arrOfkeys1.push(Object.keys(obj));
  arrOfValues1.push(Object.values(obj));
});
const arrOfkeys1Unique = [...new Set(...arrOfkeys1)]; // ['col1','col2']
console.log(arrOfkeys1Unique, arrOfValues1);

let str = arrOfkeys1Unique.join(",");
arrOfValues1.forEach((val, i, arr) => {
  str = str + arr.join("/n");
});
console.log(str);
