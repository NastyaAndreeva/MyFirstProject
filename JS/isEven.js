function isEven(N) {
    switch(N) {
        case 0:
            return 'true';
        case 1:
            return 'false';
        default:
            return isEven(N - 2);
    }    
};

// При значении N == -1 мы попадаем в бесконечный цикл, 
// пока не достигнем максимального отрицательного значения 
// и даже тогда ни одно из условий не будет выполняться 

let result = isEven(75);
console.log(result);
    