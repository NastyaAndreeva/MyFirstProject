const handler = () => {
    let section = document.querySelector('.hello');
    section.classList.remove('.hello');
    section.classList.add('.my-new-super-class');
    section.firstElementChild.remove();
}

let h1 = document.querySelector('h1');
h1.addEventListener('click', handler);