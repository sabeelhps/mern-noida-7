const image = document.querySelector('img');

const IMAGE_URL_1 = "https://images.unsplash.com/photo-1715276611505-fbea90d3e9e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D";
const IMAGE_URL_2 = "https://images.unsplash.com/photo-1715273157640-b0c2a2bec178?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D";

let isTrue = true;

function toggleImage() {
    if (isTrue) {
        image.setAttribute('src', IMAGE_URL_1);
    } else {
        image.setAttribute('src', IMAGE_URL_2);
    }
    isTrue = !isTrue;
}

// setInterval(toggleImage, 1000);