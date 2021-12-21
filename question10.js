const input1 = 0;
const input2 = 13;

const changeTime = function (time) {
  if (time === 0) console.log("12 AM");
  if (time > 0 && time < 12) console.log(`${time} AM`);
  if (time > 12 && time < 24) console.log(`${time - 12} PM`);
  if (time === 24) console.log(`12 PM`);
};
changeTime(input1);
changeTime(input2);
