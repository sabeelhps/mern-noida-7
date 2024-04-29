

function fun() {
    console.log('Inside fun');
}

// function expression

// const sum = function add(x, y) {
//     return x + y;
// }

// const sum = function(x, y) {
//     return x + y;
// }

// Arrow function
// const sum = (x, y)=> {
//     return x + y;
// }

// Arrow function with implicit return
const sum = (x, y) => x + y;

console.log(sum(10, 20));