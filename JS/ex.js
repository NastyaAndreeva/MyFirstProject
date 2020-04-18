const f = function countBS (MyString, MyChar) {
    let counter = 0;
    function countChar () {
        for (let i = 0; i < MyString.length; i++) {
            if (MyString.charAt(i) == MyChar) {
                counter++;
            }
        }
        console.log (counter);
    }
    return countChar;
}
countBS("BBBoBobs", "o")();