function deepEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    if (typeof (obj1) == typeof (obj2) && typeof (obj1) == 'object') {
        if (obj1 == null || obj2 == null) {
            return false;
        }
        let equals = true;
        for (let property in obj1) {
            if (obj1.hasOwnProperty(property) && obj2.hasOwnProperty(property)) {
                if (!deepEqual(obj1[property], obj2[property])) {
                    equals = false;
                }
            }
            else {
                equals = false;
            }
        }
        return equals;
    }
    return obj1 === obj2;
}

let obj = {
    here: 'is',
    object: 2
};
let obj2 = {
    here: 'ola',
    object: 2
}
let obj3 = null;
let obj4 = 'str';
let obj5 = 4;
let obj6 = undefined;
console.log(deepEqual(obj2, obj));
console.log(deepEqual(obj, obj));
console.log(deepEqual({ here: 'is', object: 2 }, obj));
console.log(deepEqual(obj3, obj5));
console.log(deepEqual(obj4, obj6));