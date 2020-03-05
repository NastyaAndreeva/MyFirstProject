async function tests() {
    let questions = await fetch('https://votesystem.mobius.team/api/tests');
    let data = await questions.json();
    let array = [];
    for (i = 0; i < data.tests.length; i++) {
        for (k = 0; k < data.tests[i].conditions.length; k++) {
            if (data.tests[i].conditions[k].is_correct) {
                array.push(data.tests[i].text + ':' + '\n' + data.tests[i].conditions[k].text)
            }
        }
    }
    let article = document.querySelectorAll('.item');
    for (let k = 0; k < 20; k++) {
        article[k].innerText = array[k];
    }
    alert(data.message);
}

tests();

async function result() {
    let results = await fetch('https://votesystem.mobius.team/api/result/23');
    let data = await results.json();
    let myResult = document.querySelector('.results__percent');
    myResult.innerText = 'My result: ' + data.user.result;
    alert(data.message);
}
let token = function () {
    fetch('https://votesystem.mobius.team/api/result/23/token')
        .then((data) => {
            return data.json()
        })
        .catch(() => {
            alert('Wrong ID')
        })
        .then((myToken) => {
            return myToken.token
        })
        .then((newResult) => {
            let formData = new FormData();
            formData.append("homework_done", true);
            formData.append("token2", newResult);
            formData.append("token1", 'newResult');
            fetch('https://votesystem.mobius.team/api/homework/update', {
                method: 'POST',
                body: formData
            })
                .then((fetch) => {
                    return fetch.json()
                })
                .then((finish)=> {
                alert(finish.message)
            })
        })
}
