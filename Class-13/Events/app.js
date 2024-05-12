const btn = document.querySelector('button');
const heading = document.querySelector('h1');
const section = document.querySelector('section');
const inp = document.querySelector('input');
const form = document.querySelector('form');
const para = document.querySelector('p');

function getRandomRGBColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}

function changeBackGround() {
    heading.style.backgroundColor = getRandomRGBColor();
}

function changeFont() {
    heading.style.fontSize = `${Math.floor(Math.random() * 30 + 20)}px`;
}

// btn.onclick = changeBackGround;
// btn.onclick = changeFont;


// click
btn.addEventListener('click', changeBackGround);
btn.addEventListener('click', changeFont);


// mouse events

section.addEventListener('mouseenter', function () {
    section.style.backgroundColor = getRandomRGBColor();
});

section.addEventListener('mouseleave', function () {
    section.style.backgroundColor = getRandomRGBColor();
});


// Keyboard Events

inp.addEventListener('keyup', function (event) {
    if (event.which === 13) {
        console.log(inp.value)
    }
});

// Form Events

form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event.target);
    console.log('form submitted');
    console.log(form.elements[1].value);
    console.log(form.elements[2].value);
});

para.addEventListener('copy', function () {
    alert("Please don't copy paste!");
})