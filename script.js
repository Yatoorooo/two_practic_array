"use strict";

const arr = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

const redArr = arr.reduce(function (acc, val) {
  return val > 0 ? acc + val : acc;
}, 0);
console.log(redArr);
const arrPositiv = arr.reduce(function (acc, val) {
  return val > 0 ? acc + 1 : acc;
}, 0);
console.log(arrPositiv);
