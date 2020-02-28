setTimeout(function(){
    document.body.className = 'appear';
    }, 0);
    
let section = document.querySelector('.main-section');
let hide = document.querySelector('.hide');

document.querySelector('.hide').onclick = function () {
    if (hide.innerHTML == 'Hide') {
        document.querySelector('.hide').innerHTML = 'Show';
        section.classList.add('main-article_hide');
        section.classList.remove('main-article_show');
    }
    else {
        document.querySelector('.hide').innerHTML = 'Hide';
        section.classList.add('main-article_show');
        section.classList.remove('main-article_hide');
        
    }
}

let line = document.querySelector('.slider__line');
let slides = document.querySelectorAll('.section__img');
let sliderWidth = document.querySelector('.slider').offsetWidth;
let arrowRight = document.querySelector('.arrow-right');
let widthArray = [0];
let lineWidth = 0;
let offset = 0;
let step = 0;
let reminder = 0;

for (let i = 0; i < slides.length; i++){
    widthArray.push(slides[i].offsetWidth);
    lineWidth += slides[i].offsetWidth;
}
line.style.width = lineWidth + 'px';

let rightFunction = function() {
    reminder = lineWidth - sliderWidth - (offset + widthArray[step]);
    if (reminder >= 0) {
        offset = offset + widthArray[step];
        line.style.left = -offset + 'px';
    }
    else {
        line.style.left = -(lineWidth - sliderWidth) + 'px';
        offset = 0;
        step = -1;
    }
    if (step + 1 == slides.length) {
        step = 0;
        offset = 0;
    }
    else {
        step++;
    }
}

rightFunction();
document.querySelector('.arrow-right').onclick = rightFunction;

const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        })
    })
}