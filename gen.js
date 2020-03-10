function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) 
    yield i;
}
  
function* generateAlphaNum() {
    yield* generateSequence(48, 57);

    yield* generateSequence(65, 90);

    yield* generateSequence(97, 122);
}
  
let str = '';
  
for(let code of generateAlphaNum()) {
    str += String.fromCharCode(code);
}
  
function gen_password(len){
        let password = "";
        for (let i = 0; i < len; i++){
            password += str.charAt(Math.floor(Math.random() * str.length));     
        }
        return password;   
}

console.log(gen_password(10));
