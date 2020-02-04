let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

let multiplyNumeric = function(obj){
    for (let code in obj) {
        if (typeof obj[code] == 'string') {
            obj[code] = 'Hello';
        }
        
    }
}

multiplyNumeric(menu);

console.log(menu);


  