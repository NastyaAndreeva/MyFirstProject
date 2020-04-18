// Функция countBs до изменения (1 часть задания)

function countBs(a) { 
    var count = 0; 
    for (var i = 0; i < a.length; i++) { 
        if (a[i] === "b") { 
            ++count; 
        } 
    } 
    return count; 
}
let result = countBs("AbcdebB");
console.log(result);

// Функция countBs после изменения (2 часть задания)
const countBs2 = function() {
    let index = 0;
    return function() {
        return ++index;
    }
}
const counter = countBs2();

function countChar(a, b) { 
    var count = 0; 
    for (var i = 0; i < a.length;) { 
        i = counter();
        if (a.charAt(i) === b) { 
            ++count; 
        } 
    } 
    return count; 
}
let resultChar = countChar("AbcdebB", "b");
console.log(resultChar);