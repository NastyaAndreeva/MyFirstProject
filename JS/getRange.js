let range = function (a, b, c = 1) {
  let array = [];
  if (c < 0) {
    if (a < b) {
      console.log('"a" должно быть больше чем "b", т.к. шаг отрицательный!');
    }
    for (let k = a; k >= b; k = k + c) {
      array.push(k);
    }
    return array;
  }
  if (a > b) {
    console.log('"a" должно быть меньше чем "b", т.к. шаг положительный!');
  }
  for (let i = a; i <= b; i = i + c) {
    array.push(i);
  }
  return array;
}

let arr = range(1, 10);
let arr2 = range(5, -2, -1);
let arr3 = range(-5, -2, -1);
let arr4 = range(50, 2, 1);

console.log(arr);
console.log(arr2);
console.log(arr3);
console.log(arr4);

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
}

sum(arr);
sum(arr2);
sum(arr3);
sum(arr4);
