let range = function (a, b, c = 1) {
  let array = [];
  if (c < 0){
    for (let k = a; k >= b; k = k + c) {
      array.push(k);
    }
  }
  for (let i = a; i <= b; i = i + c) {
    array.push(i);
  }
  return array;
}

let arr = range(1, 10);
let arr2 = range(5, -2, -1);
console.log(arr);
console.log(arr2);

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
}

sum(arr);
sum(arr2);
