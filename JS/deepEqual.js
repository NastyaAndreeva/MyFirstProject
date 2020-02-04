let deepEqual = function(obj1, obj2) {
    if (obj1 === obj2){
        return true;
    }
    if (typeof(obj1) == typeof(obj2) && typeof(obj1) == 'object') {
        if (typeof(obj1) == 'null' || typeof(obj2) == 'null'){
            return false;
        }
        obj1.map((element) => {
            for (let key in obj2) {
                if (key == element) {
                    return true;
                }
                else
                    return false;
            }
        })
        // for (let key in obj2) {
        //     if (!(key in obj1) || !deepEqualPerfect(obj1[key], obj2[key])) {
        //         return false;
        //     }
        // }
    }
    return 'blabla';
}
let a = {prop1: null};
let b = {prop1: false};
console.log(deepEqual(a,b));
// console.log(typeof a, typeof b);