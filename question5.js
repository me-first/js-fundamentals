const obj = { name: "JJ", job: "Programmer", age: 22 };
const renameKey = { name: "firstname", job: "Role" };

for (const key in renameKey) {
  if (obj[key]) {
    obj[renameKey[key]] = obj[key];
    delete obj[key];
  }
}
console.log(obj);
