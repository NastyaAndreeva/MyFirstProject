let reverseArray = (array) => {
    let newArray = [];
    for (let i = array.length - 1; i >= 0 ; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

let intArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let strArray = ['A', 'B', 'C', 'D'];
let intResult = reverseArray(intArray);
let strResult = reverseArray(strArray);
console.log(intResult);
console.log(strResult);

let reverseArrayInPlace = (array) => {
    let N = array.length;
    for (let k = 0; k < N / 2; k++){
        tmp = array[k];
        array[k] = array[N - k - 1];
        array[N - k - 1] = tmp;
        }
    return array;
}

let newStrResult = reverseArrayInPlace(strArray);
let newIntResult = reverseArrayInPlace(intArray);
console.log(newIntResult);
console.log(newStrResult);

let myArray = ['Hello, ', 'my ', 'darlings!'];
reverseArrayInPlace(myArray);
console.log(myArray);
