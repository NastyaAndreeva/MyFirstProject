let image = document.querySelector('.section__img');

image.addEventListener('mousedown', function(event) {
    let shiftX = event.clientX - image.getBoundingClientRect().left;
    let shiftY = event.clientY - image.getBoundingClientRect().top;

    image.style.position = 'absolute';
    image.style.zIndex = 1000;
    document.body.append(image);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        image.style.left = pageX - shiftX + 'px';
        image.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove (event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    image.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        image.onmouseup = null;
    }
});

image.ondragstart = function() {
    return false;
}