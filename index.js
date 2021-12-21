"use strict";
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

//Question 2
// inputString = ​'col1,col2\na,b\nc,d'
// [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}]
// const inputString = "col1,col2\na,b\nc,d";

// const stringArr = inputString.split("\n");
// const newStringArr = stringArr.map((value) => value.split(","));

const inputString1 = [{ col1: "a", col2: "b" }];
// 'Col1,col2\na,b';

// const arrayInputString1 = inputString1
//   .map((obj) => Object.entries(obj))
//   .flat(2);
// const arrayOfKeys = [];
// const arrayOfValues = [];
// for (let i = 0; i < arrayInputString1.length; i++) {
//   if (i % 2 === 0) arrayOfKeys.push(arrayInputString1[i]);
//   else arrayOfValues.push(arrayInputString1[i]);
// }
// // console.log(arrayOfKeys);
// const uniqueArrOfKeysSet = new Set(arrayOfKeys);
// const uniqueArrOfKeysArrays = [...uniqueArrOfKeysSet];
// console.log(uniqueArrOfKeysArrays);
// console.log(arrayOfValues);
// const stringOfKeys = uniqueArrOfKeysArrays.join(",");
// const stringOfValues = arrayOfValues.join(',');

// const stringOfObj = stringOfKeys
