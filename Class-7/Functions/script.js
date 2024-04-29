
const a1 = 10;
const b1 = 20;

const res1 = a1 + b1;

console.log(res1);

// ..

// ... 

const a2 = 10;
const b2 = 40;

const res2 = a2 + b2;

console.log(res2);


// function definition
function addNum(x, y) { // x and y are two parameters
    if (typeof x != 'number' || typeof y != 'number') {
        throw new Error('parameters should only be numbers');
    }
    const res = x + y;
    console.log(`Sum of ${x} and ${y} is : ${res}`);
}

// // function call
// // addNum(50, 60); // 50 and 60 are the arguments to the function
// addNum(true, 10);
// // addNum(false, 40);

// console.log('adsahgdjkfkl');

// function square(num) {
//     return Math.pow(num, 2);
// }


// const res = square(8);

// console.log(res);

const sentence = "This is a sentence with some words";

function reverseWords(sentence) {
    const words = sentence.split(" ");
    const res = [];
    for (let word of words) {
        const reversedWord = word.split("").reverse().join("");
        res.push(reversedWord);
    }
    return res.join(" ");
}

// console.log(reverseWords(sentence));




const radii = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function calDiameter(radii) {
    const res = [];
    for (let radius of radii) {
        res.push(2 * radius);
    }
    return res;
}

function calArea(radii) {
    const res = [];
    for (let radius of radii) {
        res.push(Math.PI * radius *radius);
    }
    return res;
}

function calParameter(radii) {
    const res = [];
    for (let radius of radii) {
        res.push(2 * Math.PI * radius);
    }
    return res;
}

function area(r) {
    return Math.PI * r * r;
}

function parameter(r) {
    return 2* Math.PI * r;
}

function diamter(r) {
    return 2 * r;
}

function calculate(radii, logic) {
    const res = [];
    for (let radius of radii) {
        res.push(logic(radius));
    }
    return res;
}


function fun(x, y) {
    return z;
}

// if x,y,or z are also functions then fun is a Higher Order Function


console.log(radii);
// console.log(calDiameter(radii));
// console.log(calArea(radii));
// console.log(calParameter(radii));


console.log(calculate(radii, area));
console.log(calculate(radii, parameter));
console.log(calculate(radii, diamter));



