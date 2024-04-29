
// let b = 400;

// {
//     var a = 100;
//     let b = 300;
//     console.log(a);
//     console.log(b);
// }

// console.log(a);
// console.log(b);

// =============================================Scope chain============

// console.log("START");

// console.log(a);

// fun();

// function fun() {
//     var b = 200;
//     console.log(b);
//     console.log('inside fun');


//     function innerFun() {
//         console.log("inner fun");
//     }

//     innerFun();
// }

// var a = 100;

// console.log("END");

// ==============================Question ========
// Predict the output

let fullName = 'Sarah';

function sayName() {
    console.log(fullName);
}

function fun() {
    let fullName = "ABC";
    sayName();
    console.log(fullName);
}

fun();
console.log(fullName);




