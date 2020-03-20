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

async function result() {
    let results = await fetch('https://votesystem.mobius.team/api/result/23');
    let data = await results.json();
    let myResult = document.querySelector('.results__percent');
    myResult.innerText = 'My result: ' + data.user.result;
    alert(data.message);
}

const homework = async() => {
    return fetch('https://votesystem.mobius.team/api/result/23/token')
    .then((data) => {
        return data.json();       
    })
    .catch(() => {
        try {
            throw new SyntaxError('Wrong ID');  
        }
        catch(e) {
            alert(e.message);
        }
    })
    .then(json => {
        let formData = new FormData();
        formData.set('token', json.token);
        formData.set('homework_done', true);

        return fetch('https://votesystem.mobius.team/api/homework/update', {method: 'POST', body: formData});
    })
    .then(res => {
        return res.json();
    })
    .then(finish => {
        try {
            if (finish.message != undefined){
                throw new Error(`Message: ${finish.message}`)
            }
            alert(finish);
        }
        catch(e){
            alert(e.message)
        }
    }) 
};

async function* myGenerator() {
    yield tests();
    yield result();
    yield homework();
}


let generator = myGenerator();

let one = generator.next();
let two = generator.next();
let three = generator.next();

let myFunction = () => {
    alert(one);
    alert(two);
    alert(three);
}

myFunction();