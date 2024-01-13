"use strict";
// FIRST TASK=///////////////////
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

// two task//////////////////////////////////////
let minIndex = 0;
let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
     minIndex = i;
    }
  }
console.log(`Мінімальне значення : ${min} та його індекс ${minIndex}`);

let maxIndex = 0;
let max = arr[0];
for(let i = 0 ; i < arr.length; i++){
  if(arr[i] > max){
    max = arr[i];
    maxIndex = i;
  }
}
console.log(`Максимальне значення: ${max} та його індекс ${maxIndex}`);
// TASK 4////////////////////////////////////////////////////
function negative(elem, index, arr){
  return !isNaN(elem) && elem < 0 ;
} 
 let negArr = arr.filter(negative);
 console.log(negArr);
//  ////////////////////////////////////////////////////

function double(elem,  arr){
  for (let i = 1; i < arr; i++){
    if(elem % 2 !== 0 && elem > 0){
      return elem;
    }
  }
};

let noDouble = arr.filter(double);
console.log(noDouble);
