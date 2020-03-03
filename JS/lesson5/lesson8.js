async function getGithub() {
    let response = await fetch('http://api.github.com');
    let result = await response.json();
    let response2 = await fetch('https://votesystem.mobius.team/api/tests');
    let result2 = await response2.json();
    let promise = new Promise((resolve, reject) => {
        reject('hello');
    })
    try {
        let result = await promise;
        console.log(promise);
    }
    catch(e) {

    }
    // console.log(response);
    // console.log(result);
    console.log(response2);
    console.log(result2.message);

    // response.then(response => {
    //     // console.log(response);
    //     return response.json();
    // }).then(json => {
    //     console.log(json);
    // })
}

getGithub();