

const nums = [1, 2, 3, 4, 5, 6,7, 8, 9, 10];

// function square(num) {
//     return num ** 2;
// }

// const squareOfNums = nums.map(square);
// const squareOfNums = nums.map(function (r) {
//     return r ** 2;
// });

function isEven(num) {
    return num % 2 === 0;
}

const squareOfNums = nums.map((r) => r ** 2);

const evenNums = nums.filter(isEven);

console.log(squareOfNums);
console.log(evenNums);