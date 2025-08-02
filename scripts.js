function changeColors(bgColor, contentColor) {
    changeBGcolor(bgColor);
    changeContentcolor(contentColor);
}

function changeBGcolor(color) {
    let body = document.querySelector('#body');
    body.className = color; 
}

function changeContentcolor(color) {
    let content = document.querySelector('#content');
    content.className = color; 
}

function changeCurrentImage(selectedImage) {
    let activeImage = document.querySelector('.active-image');
    activeImage.src = `./images/${selectedImage}.png`;
}